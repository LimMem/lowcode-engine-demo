import DataSource from './dataSource';

export const evalVariableExpression = (text: string, { context }: any) => {
  try {
    // eslint-disable-next-line no-new-func
    return Function(
      'context',
      `
        with(context) {
          return (function(){
            "use strict";
            return ${text.replace(/^\$/g, '').replace(/\$$/g, '')}
            })();
          }
        `,
    )({
      window,
      ...window,
      ...context,
    });
  } catch (error) {
    return undefined;
  }
};

class ReactiveEffect {
  nodeMap = new Map();

  data = new DataSource({
    onChange: (target: any, p: any, newValue: { name: any; }) => {

      const instance = this.nodeMap.get('Button_833972');
      instance.next = {
        ...instance.props,
        children: newValue.name
      }
      instance.updateComponent();
    },
  });

  constructor() {}

  /**
   * 绑定副作用
   */
  bindEffect(instance: any) {
    const { id } = instance;

    // 生成数据源关联关系

    // 保存数据源map
    this.nodeMap.set(id, instance);
  }

  initProps(instance: any) {
    instance.props = {
      ...instance.schema.props,
      style: {
        ...instance.schema.style,
        ...instance.schema.customStyle
      }
    };
    if (
      typeof instance.props.children === 'string' &&
      instance.props.children.indexOf('$') > -1
    ) {
      instance.props.children = evalVariableExpression(
        instance.schema.props.children,
        {
          context: {
            data: this.data.data,
          },
        },
      );
    }
  }
}

export default ReactiveEffect;

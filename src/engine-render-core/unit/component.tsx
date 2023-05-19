import React from 'react';
import assetHelper from '@/engine-assets';
import HOC from '@/engine-context/ComponentHoc';

type DSLType = Record<string, any>;


interface ComponentProps {
  forwardRef: (ref: any) => void;
  platform: string;
  schema: DSLType;
  ctx: any;
  children?: React.ReactNode[]
}

const createComponentInstance = (schema: DSLType, children?:  React.ReactNode[]) => {
  const instance = {
    id: schema.id,
    schema,
    Component: assetHelper.factory.getComponentByType(
      schema.compName || schema.type,
      schema.$$platform,
    ),
    compName: schema.compName || schema.type,
    ctx: schema.$$ctx,
    updateComponent: null,
    next: null,
    props: {},
    children,
    isContainer: schema.isContainer
  };

  return instance;
}

/**
 * setupComponent -> setupStatefulComponent -> finishComponentSetup -> applyOptions -> instance.data = reactive(data)
 *
 */

class Component extends React.Component<ComponentProps> {
  schema: { $$platform: string; $$ctx: any };
  instance: { id: any; schema: DSLType; Component: any; compName: any; ctx: any; updateComponent: null | Function; next: null; props: {}; children: React.ReactNode[] | undefined; isContainer: any; };
  constructor(props: ComponentProps) {
    super(props);
    this.schema = {
      ...props.schema,
      $$platform: props.platform,
      $$ctx: props.ctx,
    };
    this.instance = createComponentInstance(this.schema, props.children);
    this.setupComponent();
    this.props.forwardRef(this.instance);
  }

  /**
   * 更新组件
   */
  updateComponent = () => {
    const { next } = this.instance;
    if (next) {
      this.instance.props = next;
    }
    this.instance.next = null;
    this.forceUpdate();
  };

  /**
   * 设置组件
   */
  setupComponent = () => {
    // 绑定副作用
    this.instance.ctx.bindEffect(this.instance);
    this.instance.ctx.initProps(this.instance);
    this.instance.updateComponent = this.updateComponent;
  };

  /**
   * TODO: 预留组件上下文，提供静态方法
   */
  dangerouslySetContext = () => {

  }

  render(): React.ReactNode {
    const Component = HOC(this.instance.Component);
    const { children, isContainer, ctx } = this.instance;

    const props: Record<string, any> = { ...this.instance.props }
    if (isContainer) {
      props.children = children;
    }

    const e = ctx.runCmd({...this.instance});
    return <Component {...props} {...e} dangerouslySetContext={this.dangerouslySetContext} />;
  }
}

export default Component;

import React from 'react';
import assetHelper from '@/engine-assets';
import HOC from '@/engine-context/ComponentHoc';
// @ts-ignore
import _ from 'lodash';

type DSLType = Record<string, any>;


const freeze = (object: any) => {
  return Object.freeze({...object});
}

interface ComponentProps {
  forwardRef: (ref: any) => void;
  platform: string;
  schema: DSLType;
  ctx: any;
  children?: React.ReactNode[];
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
    preProps: null,
    props: {},
    children,
    isContainer: schema.isContainer
  };

  return instance;
}
class Component extends React.Component<ComponentProps> {
  schema: { $$platform: string; $$ctx: any };
  instance: { id: any; schema: DSLType; Component: any; compName: any; ctx: any; updateComponent: null | Function; preProps: any; props: {}; children: React.ReactNode[] | undefined; isContainer: any; };
  constructor(props: ComponentProps) {
    super(props);
    this.schema = {
      ...props.schema,
      $$platform: props.platform,
      $$ctx: props.ctx,
    };
    this.instance = createComponentInstance(this.schema, props.children);
    this.setupComponent();
  }

  /**
   * 更新组件
   */
  updateComponent = (next: {}) => {
    if (next) {
      // 记录上次的属性，可能没啥用
      this.instance.preProps = this.instance.props;
      this.instance.props = next;
    }

    // 这里做优化处理，数据深度比较不相等才强制刷新
    if (!_.isEqual(next, this.instance.preProps)) {
      this.forceUpdate();
    }
  };

  /**
   * 设置组件
   */
  setupComponent = () => {
    this.instance.updateComponent = this.updateComponent;
    this.instance.props = this.instance.ctx.initProps(freeze(this.instance));
    // 绑定副作用
    this.instance.ctx.bindEffect(freeze(this.instance));
  };

  /**
   * TODO: 预留组件上下文，提供静态方法
   */
  dangerouslySetContext = () => {

  }

  render(): React.ReactNode {
    const Component = HOC(this.instance.Component);
    const { children, isContainer, ctx } = this.instance;

    const props: Record<string, any> = {
      ...this.instance.props,
      ref: this.props.forwardRef,
    }
    if (isContainer) {
      props.children = children;
    }
    // 触发指令系统，生成事件
    const e = ctx.runCmd(freeze(this.instance), this.props.ctx.refs);
    return <Component {...props} {...e} dangerouslySetContext={this.dangerouslySetContext} />;
  }
}

export default Component;

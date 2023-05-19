import React from 'react';
import Component from './unit/component';

interface componentRef {
}

interface BaseRendererProps {
  platform: 'h5' | 'pc' | string;
  schema: Record<string, any>;
  ctx: any;
}

// 组件唯一id
type CompUniqueId = string;


/**
 * 基础渲染类，后续操作可以继承该类，提供扩展
 */
class BaseRenderer {
  /**
   * 存储组件
   */
  private componentRef: Map<CompUniqueId, componentRef> = new Map();

  private schema: Record<string, any> = {};

  constructor(readonly props: BaseRendererProps) {
    this.schema = props.schema;
    this.initBefore();
    this.init();
    this.initAfter();
  }
  // 渲染初始化前
  protected initBefore() {}

  // 渲染初始化后
  protected initAfter() {}

  // 数据初始化
  protected async init() {}

  // /**
  //  * 刷新指定组件
  //  * @param id
  //  */
  // public refresh = (compId: CompUniqueId | CompUniqueId[], context: any) => {
  //   const componentsId = Array.isArray(compId) ? compId : [compId];
  //   componentsId.forEach((id) => {
  //     const component = this.componentRef.get(id);
  //     component?.forceUpdate(context);
  //   });
  // };

  /**
   * 开始渲染逻辑
   * 可根据需要预处理组件属性
   */
  protected startBefore() {}

  /**
   * 自定义根节点
   * @param children
   * @returns
   */
  protected root(children: React.ReactNode) {
    return children;
  }

  /**
   * 配置上下文
   * @param children
   * @returns
   */
  protected context(children: React.ReactNode) {
    return children;
  }

  /**
   * 引擎启动渲染
   * 可根据需要预处理组件属性
   */
  protected engineRenderStart() {}

  /**
   * 引擎渲染结束
   * 这里基本是页面渲染完成逻辑
   */
  protected engineRenderEnd() {}

  /**
   * 组件即将渲染
   */
  protected componentWillRender(options: any) {}

  private getRef = (ref: any, id: string) => {
    this.componentRef.set(id, ref);
  };

  protected component() {
    return Component;
  }

  private renderComponents(schema: any[], item?: any, i?: number) {
    return schema.map((it) => {
      const { components, isContainer, id } = it;
      const props = {
        key: id,
        schema: it,
        forwardRef: (ref: any) => {
          this.getRef(ref, id);
        },
        platform: this.props.platform,
        ctx: {
          ...this.props.ctx,
          render: this
        },
      };
      return isContainer ? (
        <Component {...props}>
          {this.renderComponents(components, item, i)}
        </Component>
      ) : (
        <Component {...props} />
      );
    });
  }

  /**
   * 开始渲染
   */
  render() {
    this.engineRenderStart();
    const render = this.root(
      this.context(this.renderComponents(this.schema.components)),
    );
    this.engineRenderEnd();
    return render;
  }
}

export default BaseRenderer;

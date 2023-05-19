import React from 'react';
import Component from './unit/component';

export const RenderContext = React.createContext<any>(null as any);


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
  private componentRef: Record<CompUniqueId, componentRef> = {};

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
    this.componentRef[id] = ref;
  };

  protected component() {
    return Component;
  }

  /**
   * 组件预处理
   * @param schema
   * @returns
   */
  protected preprocessComponent(schema: any) {
    return schema;
  }

  private renderComponents(schema: any[], item?: any, i?: number) {
    return schema.map((it) => {
      const preId = it.id;
      const component = this.preprocessComponent(it) ?? it;
      const { components, isContainer, id } = component;
      if (preId !== id) {
        throw new Error(`组件id是只读属性，不能被修改`);
      }
      const props = {
        key: id,
        schema: it,
        forwardRef: (ref: any) => {
          // 组件调用触发
          this.getRef(ref, id);
        },
        platform: this.props.platform,
        ctx: {
          ...this.props.ctx,
          render: this,
          refs: this.componentRef
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
   * 消费，保证引擎渲染完成时机正确
   */
  private async consumeRender() {
    Promise.resolve().then(() =>  this.engineRenderEnd());
  }

  /**
   * 开始渲染
   */
  render() {
    this.engineRenderStart();
    const render = this.root(
      this.context(this.renderComponents(this.schema.components)),
    );
    this.consumeRender();
    return render;
  }
}

export default BaseRenderer;

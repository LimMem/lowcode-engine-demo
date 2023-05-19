import pageData from './pageData.json';
import { BaseRenderer } from '../engine-render-core'
import React from 'react';
import Meta from '../engine-meta'


class Render extends React.Component {
  engineRender: BaseRenderer;
  constructor(props: {} | Readonly<{}>) {
    super(props);

    const meta = new Meta();

    this.engineRender = new BaseRenderer({
      platform: 'h5',
      schema: pageData,
      ctx: {
        bindEffect: (instance: any) => {
          meta.bindEffect(instance);
        },
        initProps: (instance: any) => {
          return meta.initProps(instance);
        },
        runCmd: (instance: any, refs: any) => {
          // 指令处理
          if (instance.compName === 'Button') {
            return {
              onClick: () => {
                console.log(refs[instance.id].getProps());
                meta.data.updateComponent();
              }
            }
          }
        }
      }
    });
  }

  render(): React.ReactNode {
    return this.engineRender.render();
  }
}




export default Render;

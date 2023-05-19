import { wufengController, Component } from '@wufengteam/core'
import React from 'react';

class Factory {
  public registerComponents(component: React.ComponentClass, options: Component, platform: string) {
    wufengController.registerComponent(component, options, platform);
  }

  public getComponentConfigByType(type: string, platform: string) {
    return wufengController.getComponentConfigByType(type, platform);
  }

  public getComponentByType(type: string, platform: string) {
    return wufengController.getComponentByType(type, platform);
  }
}

export default Factory;

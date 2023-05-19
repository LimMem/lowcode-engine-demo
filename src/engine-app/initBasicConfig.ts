import { Component } from '@wufengteam/core';
import assetHelper from '../engine-assets';

export interface FactoryType {
  config: Component;
  component: React.ComponentClass;
}

export interface BasicConfigType {
  platform: 'h5' | 'pc';
  factory: FactoryType[];
}

/**
 * 一次性注册组件
 * @param factory
 * @param platform
 */
const registerComponents = (factory: FactoryType[] = [], platform: 'h5' | 'pc') => {
  factory.forEach(f => {
    assetHelper.factory.registerComponents(f.component, f.config, platform);
  });
}

/**
 * 初始化资产
 * @param options
 */
export const initBasicConfig = (options: BasicConfigType) => {
  const { factory = [], platform } = options;
  registerComponents(factory, platform);
};

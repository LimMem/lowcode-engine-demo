import type {
  NavBarListItem,
  NavBarProps,
  ResponseError,
  TabBarListItem,
  TabBarProps,
  TitleListItem,
} from 'alita';
import { initBasicConfig } from './engine-app'
import factory from './factory'

const { component, config } = factory;

initBasicConfig({
  platform: "h5",
  factory: Object.keys(component).map(type => ({
    // @ts-ignore
    component: component[type],
    // @ts-ignore
    config: config[type]
  }))
 });

export const request = {
  prefix: '/api',
  method: 'get',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(11111111);
    console.log(error);
  },
};

const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '首页',
  },
  {
    pagePath: '/list',
    title: '列表',
  },
];
const navList: NavBarListItem[] = [];
const navBar: NavBarProps = {
  navList,
  fixed: false,
  onLeftClick: () => {
    // router.goBack();
  },
};
const tabList: TabBarListItem[] = [
  // {
  //   pagePath: '/',
  //   text: '首页',
  //   title: '首页',
  //   iconSize: '',
  //   badge: '',
  // }
];

const tabBar: TabBarProps = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};

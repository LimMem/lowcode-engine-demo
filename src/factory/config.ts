import { Component } from '@wufengteam/core';

export const View: Component = {
  label: '布局容器',
  type: 'View',
  description: '',
  image: '',
  groupsName: '容器',
  compType: 0,
  compLib: '@/components',
  isContainer: true,
  components: [],
  platform: 'h5',
  props: {},
  todoProps: {
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    visible: {
      label: '状态',
      type: 'RadioButton',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          { title: '普通', value: 1 },
          { title: '隐藏', value: 2 },
        ],
        defaultValue: 1,
        style: {
          padding: '0 6px',
          fontSize: '12px',
        },
      },
    },
  },
  style: {
    display: 'flex',
    flexDirection: 'column',
    position: 'static',
    padding: '12px 0px 12px 0px',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: '0px 0px 0px 0px',
    border: '0px',
  },
  todoStyles: {
    backgroundType: {
      groupsName: '背景',
      label: '填充类型',
      type: 'BackgroundType',
      targetType: 'props',
      props: {},
      ignoreRule: ['backgroundColor'],
    },
    height: {
      label: '高度',
      groupsName: '布局',
      type: 'HeightInput',
      props: {
        option: [
          { label: 'px', value: 'px' },
          { label: '%', value: '%' },
          { label: 'auto', value: 'auto' },
          { label: 'fit-content', value: 'fit-content' },
          { label: 'vh', value: 'vh' },
        ],
      },
    },
  },
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [{ title: '事件对象', value: '$e$', name: 'e' }],
    },
  ],
  todoActionList: [],
  icon: 'View',
};

export const Button: Component = {
  label: '按钮',
  type: 'Button',
  description: '',
  image: '',
  groupsName: '基础',
  compType: 1,
  platform: 'h5',
  compLib: '@/components',
  props: {
    type: 'primary',
    size: 'large',
    name: '按钮',
    loading: false,
    // inline: false,
    mImagePostion: 'left',
    // classification: 'default',
    shape: 'default',
    // fill: 'solid',
    status: '1',
    btnIcon: false,
    children: '按钮',
  },
  transform: {
    // 需要翻译的字段名称
    value: 'children',
  } as any,
  todoProps: {
    name: {
      label: '组件名称',
      type: 'Input',
      groupsName: '基础',
      props: {},
    },
    children: {
      label: '按钮内容',
      type: 'Input',
      props: {},
      istodoBind: true,
      groupsName: '基础',
    },
    status: {
      label: '状态',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '普通',
            value: '1',
          },
          {
            title: '隐藏',
            value: '2',
          },
          {
            title: '禁用',
            value: '3',
          },
        ],
      },
    },
    type: {
      label: '按钮类型',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '主要按钮',
            value: 'primary',
          },
          {
            title: '次要按钮',
            value: 'default',
          },
          {
            title: '虚线按钮',
            value: 'dashed',
          },
          {
            title: '文字按钮',
            value: 'text',
          },
          {
            title: '链接按钮',
            value: 'link',
          },
          // {
          //   title: '幽灵',
          //   value: 'ghost',
          // },
          // { title: '成功', value: 'success' },
          // { title: '警告', value: 'warning' },
          // { title: '危险', value: 'danger' },
        ],
      },
    },

    shape: {
      label: '按钮形状',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '默认',
            value: 'default',
          },
          {
            title: '圆形',
            value: 'rounded',
          },
          {
            title: '方块',
            value: 'rectangular',
          },
        ],
      },
    },
    size: {
      label: '按钮尺寸',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '大',
            value: 'large',
          },
          {
            title: '中',
            value: 'middle',
          },
          {
            title: '小',
            value: 'small',
          },
          {
            title: '迷你',
            value: 'mini',
          },
        ],
      },
    },
    btnIcon: {
      label: '按钮图标',
      type: 'Select',
      groupsName: '基础',
      props: {
        options: [
          {
            title: '无',
            value: false,
          },
          {
            title: '图标库',
            value: true,
          },
        ],
        defaultValue: 'none',
      },
    },
    icontype: {
      label: '选择图标',
      type: 'ChooseIcon',
      groupsName: '基础',
      props: {
        dependProps: {
          btnIcon: true,
        },
      },
    },
    mImagePostion: {
      label: '图标位置',
      type: 'Select',
      groupsName: '基础',
      props: {
        options: [
          {
            title: '左',
            value: 'left',
          },
          {
            title: '右',
            value: 'right',
          },
        ],
        dependProps: {
          btnIcon: true,
        },
      },
    },
    // fill: {
    //   label: '填充类型',
    //   type: 'Select',
    //   groupsName: '基础',
    //   props: {
    //     options: [
    //       { title: '填充', value: 'solid' },
    //       {
    //         title: '镂空',
    //         value: 'outline',
    //       },
    //       {
    //         title: '无',
    //         value: 'none',
    //       },
    //     ],
    //   },
    // },
    danger: {
      label: '危险按钮',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: true,
    },
    loading: {
      label: '加载状态',
      type: 'Switch',
      groupsName: '基础',
      props: {},
      istodoBind: true,
    },
    loadingText: {
      label: '加载文字',
      type: 'Input',
      groupsName: '基础',
      props: {
        dependProps: {
          loading: true,
        },
      },
      istodoBind: true,
    },
    // disabled: {
    //   label: '是否禁用',
    //   type: 'Switch',
    //   groupsName: '基础',
    //   props: {},
    //   istodoBind: true,
    // },
    showPopover: {
      label: '文字提示',
      type: 'ShowPopover',
      groupsName: '基础',
      props: {},
      ignoreRule: ['popoverSetting'], // 内部直接设置props，配置白名单不生效
    },
  },

  style: {
    // borderRadius: '5px 5px 5px 5px', // 这样设置默认值，会影响选择按钮形状不生效,因为为先渲染自定义的圆角
    // borderSetting: 'border 1px solid #47e',
    // border: '1px solid #47e',
    textAlign: 'center',
    // backgroundColor: '#47e',
    color: '#fff',
    fontSize: 18,
    fontWeight: 400,
    height: '48px',
  },
  todoEvents: [
    {
      label: '点击事件',
      value: 'onClick',
      params: [
        {
          title: '事件对象',
          value: '$e$',
          name: 'e',
        },
      ],
    },
    {
      label: '气泡菜单点击回调',
      value: 'onAppPopoverClick',
      params: [
        {
          name: 'e',
          title: '事件对象',
          value: '$e$',
        },
      ],
    },
  ],
  todoActionList: [
    {
      key: 'sysSetVisible',
      label: '控制显隐',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
          props: {
            checkable: true,
          },
        },
        {
          key: 'compValueList',
          label: '是否显隐',
          type: 'SetBatchProps',
          props: {
            defaultValue: '',
            options: [
              {
                title: '显示',
                value: 'true',
              },
              {
                title: '隐藏',
                value: '',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
    },
    {
      key: 'sysSetDisable',
      label: '禁用状态',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
          props: {
            checkable: true,
          },
        },
        {
          key: 'compValueList',
          label: '是否禁用',
          type: 'SetBatchProps',
          props: {
            defaultValue: 'toggle',
            options: [
              {
                title: '启动',
                value: '',
              },
              {
                title: '禁用',
                value: 'true',
              },
              {
                title: '切换',
                value: 'toggle',
              },
            ],
          },
        },
      ],
    },
    {
      key: 'setLoading',
      label: '控制加载中',
      todoOptions: [
        {
          key: 'loading',
          label: '是否加载中',
          type: 'Select',
          props: {
            options: [
              {
                title: '是',
                value: true,
              },
              {
                title: '否',
                value: false,
              },
            ],
          },
        },
      ],
    },
    {
      key: 'value',
      label: '获取当前值',
      todoCallbacks: ['callback1'],
    },
    {
      key: 'sysSetValue',
      label: '设置内容',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
        },
        {
          key: 'valueList',
          label: '组件赋值',
          type: 'SetSysExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      initClose: true,
    },
    {
      key: 'setCompChildrenValue',
      label: '设置内容',
      todoOptions: [
        {
          key: 'value',
          label: '内容',
          type: 'SetExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      hidden: true, // 后续可删除
    },
  ] as any[],

  icon: 'Button',
};

export const Input: Component = {
  compLib: '@/components',
  compType: 2,
  isBusiObjContainer: false,
  isContainer: false,
  label: '输入框',
  props: {
    name: '输入框',
    placeholder: '请输入',
    // clear: true,  // 没有用到该属性
    textarea: false,
    type: 'text',
  },
  style: {
    width: '100%',
    backgroundColor: '#fff',
  },
  setEvents: [],
  type: 'Input',
  platform: 'h5',
  description: '',
  image: '',
  groupsName: '基础',
  todoActionList: [
    {
      key: 'value',
      label: '获取当前值',
      todoCallbacks: ['callback1'],
    },
    {
      key: 'clearMobileValue',
      label: '清空值',
    },
    {
      key: 'sysSetValue',
      label: '控件赋值',
      todoOptions: [
        {
          key: 'compid',
          label: '组件选择',
          type: 'CompTree',
          aliasKey: 'compId',
        },
        {
          key: 'valueList',
          label: '组件赋值',
          type: 'SetSysExpression',
        },
      ],
      todoCallbacks: ['callback1'],
      initClose: true,
    } as any,
  ],
  todoEvents: [
    {
      label: '值变化时回调',
      value: 'onChange',
      params: [
        {
          title: '输入框取值',
          value: '$value$',
          name: 'value',
        },
      ],
    },
    {
      label: '失去焦点',
      value: 'onBlur',
      params: [
        {
          title: '输入框取值',
          value: '$value$',
          name: 'value',
        },
      ],
    },
    {
      label: '按下回车',
      value: 'onKeyDown',
      params: [
        {
          title: '输入框取值',
          value: '$value$',
          name: 'value',
        },
      ],
    },
  ],
  todoProps: {
    value: {
      label: '内容',
      type: 'Input',
      groupsName: '数据绑定',
      istodoBind: true,
    },
    name: {
      label: '名称',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
      props: {
        required: false,
      },
    },
    status: {
      label: '状态',
      type: 'Select',
      groupsName: '基础',
      istodoBind: true,
      props: {
        options: [
          {
            title: '编辑',
            value: '1',
          },
          {
            title: '隐藏',
            value: '2',
          },
          {
            title: '禁用',
            value: '3',
          },
          {
            title: '只读',
            value: '4',
          },
        ],
      },
    },
    placeholder: {
      label: '水印',
      type: 'Input',
      groupsName: '基础',
      istodoBind: false,
    },
    textarea: {
      label: '多行输入',
      type: 'Switch',
      groupsName: '基础',
      istodoBind: false,
    },
    type: {
      label: '类型',
      type: 'Select',
      groupsName: '基础',
      istodoBind: false,
      props: {
        dependProps: {
          textarea: false,
        },
        options: [
          {
            title: '文本',
            value: 'text',
          },
          {
            title: '密码',
            value: 'password',
          },
          {
            title: '数字',
            value: 'number',
          },
        ],
      },
    },
    maxLength: {
      label: '最大长度',
      type: 'InputNumber',
      groupsName: '基础',
      istodoBind: false,
    },
    regexp: {
      label: '校验规则',
      type: 'SetRegexp',
      groupsName: '校验',
      istodoBind: false,
      props: {
        description: '如果添加校验规则，真机默认不拉起数字键盘。',
      },
    },
  },
  icon: 'Input',
};

export const Loop: Component = {
  compLib: '@/components',
  compType: 0,
  isBusiObjContainer: false,
  isContainer: true,
  label: '循环容器',
  props: {
    name: '循环容器',
    itemKey: 'item',
    indexKey: 'i',
    dataSource: [],
  },
  style: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0px 0px 0px 0px',
  },
  type: 'Loop',
  platform: 'h5',
  description: '',
  image: '',
  groupsName: '容器',
  todoActionList: [],
  todoEvents: [],
  todoProps: {
    itemKey: {
      label: '数据项编码',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        readOnly: true,
      },
    },
    indexKey: {
      label: '索引编码',
      type: 'Input',
      groupsName: '基础',
      istodoBind: true,
      props: {
        readOnly: true,
      },
    },
    dataSource: {
      label: '关联数据源',
      type: 'Input',
      groupsName: '其他',
      istodoBind: true,
      props: {},
    },
  },
  todoStyles: {
    backgroundType: {
      groupsName: '背景',
      label: '填充类型',
      type: 'BackgroundType',
      targetType: 'props',
      props: {},
      ignoreRule: ['backgroundColor'],
    },
  },
  icon: 'Loop',
};

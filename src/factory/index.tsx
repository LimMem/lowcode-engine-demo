import { ReactNode, MouseEvent, ClassAttributes, ButtonHTMLAttributes, CSSProperties, AriaAttributes, RefAttributes, useEffect, forwardRef, useImperativeHandle } from 'react';
import { JSX } from 'react/jsx-runtime';
import * as config from './config';

import { Button, ButtonRef, Input } from 'antd-mobile'

export default {
  component: {
    Button: forwardRef((props: any, ref) => {
      useImperativeHandle(ref, () => ({
        getProps() {
          return props
        }
      }))
      return <Button color={props.type} {...props}>{props.children || props.name}</Button>
    }),
    Input,
    View: (props: any) => {
      console.log("组件View");

      return <div {...props} />;
    },
    Loop: (props: any) => {
      return null;
    }
  },
  config
}

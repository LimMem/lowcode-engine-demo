import { ReactNode, MouseEvent, ClassAttributes, ButtonHTMLAttributes, CSSProperties, AriaAttributes, RefAttributes, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';
import * as config from './config';

import { Button, ButtonRef, Input } from 'antd-mobile'

export default {
  component: {
    Button: (props: JSX.IntrinsicAttributes & { color?: "primary" | "default" | "danger" | "success" | "warning" | undefined; fill?: "solid" | "none" | "outline" | undefined; size?: "small" | "large" | "middle" | "mini" | undefined; block?: boolean | undefined; loading?: boolean | "auto" | undefined; loadingText?: string | undefined; loadingIcon?: ReactNode; disabled?: boolean | undefined; onClick?: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => unknown) | undefined; type?: "button" | "reset" | "submit" | undefined; shape?: "default" | "rounded" | "rectangular" | undefined; children?: ReactNode; } & Pick<ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>, "onMouseDown" | "onMouseUp" | "onTouchEnd" | "onTouchStart"> & { className?: string | undefined; style?: (CSSProperties & Partial<Record<"--border-radius" | "--text-color" | "--background-color" | "--border-width" | "--border-style" | "--border-color", string>>) | undefined; tabIndex?: number | undefined; } & AriaAttributes & RefAttributes<ButtonRef>) => {
      console.log("组件Button");
      return <Button color={props.type} {...props}>{props.children || props.name}</Button>
    },
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

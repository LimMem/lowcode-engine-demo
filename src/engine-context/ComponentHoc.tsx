import React from 'react';

const ComponentHoc = (Component: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>) => React.forwardRef((props, ref) => {
  // 统一处理部分逻辑
  return <Component {...props} ref={ref} />
});

export default ComponentHoc;

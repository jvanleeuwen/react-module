import React from 'react';

type Props = {
  className?: string,
  children?: any
}

export default ({ children, className }: Props) => (
  <div className={className}>
    {children}
  </div>
);

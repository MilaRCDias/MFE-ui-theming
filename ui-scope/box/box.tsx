import React, { ReactNode } from 'react';

export type BoxProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Box({ children }: BoxProps) {
  return (
    <div>
      {children}
    </div>
  );
}

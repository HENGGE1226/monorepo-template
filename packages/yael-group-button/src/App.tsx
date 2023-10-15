import React, { FC } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { color, children, ...rest } = props
  return (
    <button style={{background: color}} className='base' {...rest}>
      {children}
    </button>
  )
}

export default Button;
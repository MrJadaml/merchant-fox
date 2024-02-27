import React from 'react';
import cn from 'classnames'
import css from './button.module.scss'

export enum styles {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DISABLED = 'disabled',
}

interface ButtonProps {
  className?: string
  disabled?: boolean
  style?: styles
  backgroundColor?: string
  large?: boolean
  label: string
  onClick?: () => void
  type?: "button" | "reset" | "submit" | undefined
}

export const Button = ({
  backgroundColor,
  className,
  disabled = false,
  style = styles.PRIMARY,
  label,
  large = false,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(css.button, {
        [css.primary]: style === 'primary',
        [css.secondary]: style === 'secondary',
        [css.tertiary]: style === 'tertiary',
        [css.disabled]: style === 'disabled',
        [css.large]: large, 
      })}
      disabled={style === 'disabled'}
      {...props}
    >
      {label}
    </button>
  )
}

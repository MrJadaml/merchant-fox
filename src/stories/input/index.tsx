import { InputHTMLAttributes, useRef } from 'react'
import styles from './input.module.scss'

type InputProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  onChange,
  label,
  name,
  ...rest
} : InputProps) => {
  const inputField = useRef(null)

  const handleLabelFocus = () => {
    inputField.current.focus()
  }

  return (
    <div className={styles.wrapper}>
      <label
        className={styles.label}
        htmlFor={name}
        onClick={handleLabelFocus}
      >
        <p>{label}</p>
      </label>

      <input
        className={styles.input}
        onChange={onChange}
        name={name}
        ref={inputField}
        {...rest}
      />
    </div>
  )
}


/** @jsx h */
import { ComponentChildren, h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { OnValueChange, Props } from '../../../types'
import { createClassName } from '../../../utilities/create-class-name'
import { MIXED_STRING } from '../../../utilities/mixed-values'
import styles from './textbox.css'
import { isKeyCodeCharacterGenerating } from './utilities/is-keycode-character-generating'

export type TextboxProps<N extends string> = {
  disabled?: boolean
  icon?: ComponentChildren
  name?: N
  noBorder?: boolean
  onInput?: OmitThisParameter<JSX.GenericEventHandler<HTMLInputElement>>
  onValueChange?: OnValueChange<string, N>
  placeholder?: string
  propagateEscapeKeyDown?: boolean
  type?: 'text' | 'password'
  value: string
}

export function Textbox<N extends string>({
  disabled = false,
  icon,
  name,
  noBorder = false,
  onInput = function () {},
  onValueChange = function () {},
  placeholder,
  propagateEscapeKeyDown = true,
  type = 'text',
  value,
  ...rest
}: Props<HTMLInputElement, TextboxProps<N>>): JSX.Element {
  const handleFocus = useCallback(function (
    event: JSX.TargetedFocusEvent<HTMLInputElement>
  ) {
    event.currentTarget.select()
  },
  [])

  const handleInput = useCallback(
    function (event: JSX.TargetedEvent<HTMLInputElement>) {
      onValueChange(event.currentTarget.value, name)
      onInput(event)
    },
    [name, onInput, onValueChange]
  )

  const handleKeyDown = useCallback(
    function (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
      if (event.key === 'Escape') {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation()
        }
        event.currentTarget.blur()
      }
      if (
        value !== MIXED_STRING ||
        isKeyCodeCharacterGenerating(event.keyCode) === true
      ) {
        return
      }
      event.preventDefault()
      event.currentTarget.select()
    },
    [propagateEscapeKeyDown, value]
  )

  const handleMouseUp = useCallback(
    function (event: JSX.TargetedMouseEvent<HTMLInputElement>) {
      if (value !== MIXED_STRING) {
        return
      }
      event.preventDefault()
    },
    [value]
  )

  return (
    <div
      class={createClassName([
        styles.textbox,
        noBorder === true ? styles.noBorder : null,
        typeof icon === 'undefined' ? null : styles.hasIcon
      ])}
    >
      <input
        {...rest}
        class={styles.input}
        disabled={disabled === true}
        name={name}
        onFocus={handleFocus}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onMouseUp={handleMouseUp}
        placeholder={placeholder}
        tabIndex={disabled === true ? -1 : 0}
        type={type}
        value={value === MIXED_STRING ? 'Mixed' : value}
      />
      {typeof icon === 'undefined' ? null : (
        <div class={styles.icon}>{icon}</div>
      )}
    </div>
  )
}

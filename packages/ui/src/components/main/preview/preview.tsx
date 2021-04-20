/** @jsx h */
import type { ComponentChildren, JSX } from 'preact'
import { h } from 'preact'

import type { Props } from '../../../types'
import style from './preview.css'

export interface PreviewProps {
  children: ComponentChildren
}

export function Preview({
  children,
  ...rest
}: Props<HTMLDivElement, PreviewProps>): JSX.Element {
  return (
    <div {...rest} class={style.preview}>
      {children}
    </div>
  )
}
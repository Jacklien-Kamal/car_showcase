'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

export default function CustomButton({title,containerStyles,btnType,handleClick}:CustomButtonProps) {
  return (
<button
disabled={false}
type={btnType||'button'}
className={`custom-btn ${containerStyles}`}
onClick={handleClick}
>
    <span className={'flex-1'}>
        {title}
    </span>
</button>  )
}

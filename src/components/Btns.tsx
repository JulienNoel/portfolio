import React from 'react'
import ShinyButton from './magicui/shiny-button'

export const Btns = ():JSX.Element => {
  return (
    <div className='flex gap-4 py-2'>
        <ShinyButton text="Contact Me"/>
        <ShinyButton text="My Work" />
    </div>
  )
}

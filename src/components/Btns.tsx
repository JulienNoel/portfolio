import React from 'react'
import ShinyButton from './magicui/shiny-button'

export const Btns = ():JSX.Element => {
  return (
    <div className='flex w-screen gap-x-4'>
        <ShinyButton text="Contact Me"/>
        <ShinyButton text="My Work" />
    </div>
  )
}

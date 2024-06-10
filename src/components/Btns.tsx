import React from 'react'
import ShinyButton from './magicui/shiny-button'

export const Btns = ():JSX.Element => {
  return (
    <div className='flex gap-4 py-2'>
        {/* <a href='#contactForm'><ShinyButton text="Contact Me"/></a> */}
        <a href='#projets'><ShinyButton text="My Work" /></a>
    </div>
  )
}

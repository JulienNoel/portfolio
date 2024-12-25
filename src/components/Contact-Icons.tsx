import React from 'react'
import { Icons } from './Technos'
import PulsatingButton from './ui/pulsating-button'


export const ContactIcons = (): JSX.Element => {
  return (
    <div className='flex flex-row gap-4 py-4'>
        <div className="h-[40px] w-[40px] border-none bg-transparent">
            <a href='https://www.linkedin.com/in/julien-noel-374761123/' target="_blank"><Icons.linkedin /></a>
        </div>
        <div className="h-[40px] w-[40px] border-none bg-transparent">
            <a href='https://github.com/JulienNoel' target="_blank"><Icons.github /></a>
        </div>
        <a href='/resume-julien-noel.pdf' target="_blank"><PulsatingButton>My Resume</PulsatingButton></a>
    </div>
  )
}

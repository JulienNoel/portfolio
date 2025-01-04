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
        <a href='/resume-julien-noel.pdf' target="_blank">
          <PulsatingButton duration='0' className='font-mono bg-teal-400/10 text-teal-400 hover:bg-teal-500/20 transition-colors'>My Resume</PulsatingButton>
        </a>
        <a href='mailto:juliennoel59@hotmail.com'>
          <PulsatingButton className='font-mono bg-teal-400/10 text-teal-400 hover:bg-teal-500/20 transition-colors' pulseColor='#4ee4e4'>Contact Me</PulsatingButton>
        </a>
    </div>
  )
}

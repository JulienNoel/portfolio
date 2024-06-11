import React from 'react'
import { Icons } from './Technos'


export const ContactIcons = (): JSX.Element => {
  return (
    <div className='flex flex-row gap-2 py-4'>
        <div className="h-[30px] w-[30px] border-none bg-transparent">
            <a href='https://www.linkedin.com/in/julien-noel-374761123/' target="_blank"><Icons.linkedin /></a>
        </div>
        <div className="h-[30px] w-[30px] border-none bg-transparent">
            <a href='https://github.com/JulienNoel' target="_blank"><Icons.github /></a>
        </div>
    </div>
  )
}

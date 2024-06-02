import React from 'react'
import { Icons } from './Technos'

export const ContactIcons = (): JSX.Element => {
  return (
    <div className='flex flex-row gap-1'>
        <div className="h-[30px] w-[30px] border-none bg-transparent">
            <a href='https://www.linkedin.com/in/julien-noel-374761123/'><Icons.linkedin /></a>
        </div>
        <div className="h-[30px] w-[30px] border-none bg-transparent">
            <a href='https://github.com/JulienNoel'><Icons.github /></a>
        </div>
    </div>
  )
}

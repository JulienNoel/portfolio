import React from 'react'
import TextReveal from './magicui/text-reveal'

const DESCRIPTION = 'My journey in mobile app development is driven by a deep curiosity and a commitment to continuous learning\n I love to code and build beautiful and performant mobile apps. '

export const Description = ():JSX.Element =>{
  return (
    <div>
        <TextReveal text={DESCRIPTION} />
    </div>  
)}

import React from 'react'
import TextReveal from './magicui/text-reveal'

const DESCRIPTION = 'My journey in web and mobile app development is driven by a deep curiosity and a commitment to continuous learning\n I love to code and build beautifuls and performants apps. '

export const Description = (): JSX.Element => {
  return (
    <div>
      <TextReveal className='font-mono uppercase' text={DESCRIPTION} />
    </div>
  )
}

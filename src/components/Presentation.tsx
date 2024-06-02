import WordRotate from "./magicui/word-rotate"
import Image from 'next/image'

const TITLE = 'Hi I\'m Julien Noel'
export const Presentation = ():JSX.Element => {
  return (
    <div className="w-screen">
        <h1>{TITLE} 🖐️</h1>
        <p>I am a frontend React Native Developer</p>
        <WordRotate
          className="text-xl font-bold text-black dark:text-white"
          words={["React-Native", "Typescript", "Redux", "React-native Reanimated", "Frontend", "Javascript"]}
          />
        <Image src='/julien-noel.jpg' 
              alt='julien Noel react native developer'
              width={250}
              height={250}
              loading='lazy'
              />
    </div>
  );
}

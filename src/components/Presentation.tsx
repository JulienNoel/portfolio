import { ContactIcons } from "./Contact-Icons";
import ShinyButton from "./magicui/shiny-button";
import WordRotate from "./magicui/word-rotate"
import Image from 'next/image'

const TITLE = 'Hi I\'m Julien Noel'
export const Presentation = ():JSX.Element => {
  return (
      <div className="flex flex-col md:justify-between md:fixed md:w-1/2 h-screen md:py-10">
        <h1 className="text-slate-200">{TITLE} 🖐️</h1>
        <p>I am a frontend React Native Developer,<br/>with a strong background in Javascript and Typescript</p>
        <WordRotate
          className="text-xl font-bold text-teal-400 dark:text-white"
          words={["React-Native", "Typescript", "Redux", "React-native Reanimated", "Frontend", "Javascript","React Navigation"]}
          />
        {/* <div className="flex flex-col justify-between"> */}
          <Image src='/julien-noel.jpg' 
                alt='julien Noel react native developer'
                width={250}
                height={300}
                loading='lazy'
                className="rounded-lg h-1/2 shadow-md shadow-teal-400 object-cover"                 
                />
          <ContactIcons />
          <a href='/resume-julien-noel.pdf' target="_blank"><ShinyButton text="My Resume"/></a>
        {/* </div> */}
      </div>      
  );
}

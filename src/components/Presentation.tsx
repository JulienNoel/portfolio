import { ContactIcons } from "./Contact-Icons";
import ShinyButton from "./magicui/shiny-button";
import WordRotate from "./magicui/word-rotate"
import Image from 'next/image'

const TITLE = 'Hi I\'m Julien Noel'
export const Presentation = (): JSX.Element => {
  return (
    <div className="flex flex-col md:justify-between md:fixed md:w-1/2 h-screen md:py-10">
      <h1 className="text-slate-200 text-3xl">{TITLE} 🖐️</h1>
      <p className="text-xl">I am a frontend React Native Developer,<br />with a strong background in Javascript and Typescript</p>
      <WordRotate
        className="text-xl font-bold text-teal-400 dark:text-white"
        words={["React-Native", "Typescript", "Redux", "React-native Reanimated", "Frontend", "Javascript", "React Navigation"]}
      />
      {/* <div className="flex flex-col justify-between"> */}
      <Image src='/julien-noel.jpg'
        alt='julien Noel react native developer'
        width={250}
        height={300}
        loading='lazy'
        className="rounded-lg h-1/2 object-cover shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
      />
      <ContactIcons />
      <a href='/resume-julien-noel.pdf' target="_blank"><ShinyButton text="My Resume" /></a>
      {/* </div> */}
    </div>
  );
}

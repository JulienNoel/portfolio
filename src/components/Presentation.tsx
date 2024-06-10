import { Btns } from "./Btns";
import { ContactIcons } from "./Contact-Icons";
import { Technos } from "./Technos";
import WordRotate from "./magicui/word-rotate"
import Image from 'next/image'

const TITLE = 'Hi I\'m Julien Noel'
export const Presentation = ():JSX.Element => {
  return (
      <div >
        <h1>{TITLE} 🖐️</h1>
        <p>I am a frontend React Native Developer,<br/>with a strong background in Javascript and Typescript</p>
        <WordRotate
          className="text-xl font-bold text-black dark:text-white"
          words={["React-Native", "Typescript", "Redux", "React-native Reanimated", "Frontend", "Javascript","React Navigation"]}
          />
          <div className="md:flex md:items-start md:justify-between md:gap-10 py-2">
            <div className="h-[400px] flex flex-col justify-between">
              <Image src='/julien-noel.jpg' 
                    alt='julien Noel react native developer'
                    width={250}
                    height={250}
                    loading='lazy'
                    className="rounded-lg" 
                    />
              <ContactIcons />
              <Btns />
            </div>
            <Technos />
          </div>      
      </div>          
  );
}

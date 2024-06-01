import WordRotate from "./magicui/word-rotate"


export const Presentation = ():JSX.Element => {
  return (
    <div>
        <h1>Hi I'm Julien Noel 🖐️</h1>
        <p>I am a frontend React Native Developer</p>
        <WordRotate
        className="h-32 text-xl font-bold text-black dark:text-white"
        words={["React-Native", "Typescript", "Redux", "React-native Reanimated", "Frontend", "Javascript"]}
        />
    </div>
  );
}

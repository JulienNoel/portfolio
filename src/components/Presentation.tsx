import { ContactIcons } from "./Contact-Icons";
import WordRotate from "./magicui/word-rotate"
import Image from 'next/image'
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const TITLE = 'Hi I\'m Julien Noel'
const skills = [
  "React-Native",
  "Typescript",
  "Redux",
  "React-native Reanimated",
  "Frontend",
  "Javascript",
  "React Navigation",
  "React",
  "Next JS",
  "Tailwind CSS",
  "Expo",
  "Kotlin"
];

export const Presentation = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-around md:fixed md:w-1/2 min-h-screen p-8 md:p-10 space-y-8 bg-gradient-to-b from-slate-900 to-slate-800">
    <div className="space-y-6">
      <h1 className="text-slate-200 text-4xl md:text-5xl font-bold tracking-tight">
        {TITLE} <span className="animate-wave inline-block">👋</span>
      </h1>
      
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <p className="text-slate-200 text-xl leading-relaxed">
            I am a frontend React Native Developer, 
            <br />
            with a strong background in Javascript and Typescript
          </p>
        </CardContent>
      </Card>
    </div>
    <div>
      <Image
        src="/julien-noel.jpg"
        alt="Julien Noel - React Native Developer"
        width={250}
        height={300}
        loading='lazy'
        className="w-64 h-80 rounded-xl object-cover shadow-2xl hover:shadow-teal-500/10 transition-all duration-300
          transform hover:-translate-y-1"
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge 
          key={skill} 
          variant="secondary"
          className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-colors px-3 py-1 text-sm"
        >
          {skill}
        </Badge>
      ))}
    </div>
    <ContactIcons />
  </div>
  );
}

import { ContactIcons } from "./Contact-Icons";
import Image from 'next/image'
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import HyperText from "./ui/hyper-text";
import { Banner } from "./Banner";

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
  "Kotlin",
  "Express JS"
];

export const Presentation = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-around md:fixed md:w-1/2 min-h-screen space-y-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="space-y-6 p-8">
        <div className="flex flex-row items-center gap-8">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/julien-noel.jpg" alt="julien Noel" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
          <h1 className="text-slate-200 text-4xl md:text-5xl font-mono tracking-tight">
            {TITLE} <span className="animate-wave inline-block">👋</span>
          </h1>
        </div>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-6">
            <HyperText className="text-slate-200 text-xl leading-relaxed" duration={400}>
              I am a frontend React Native Developer,
            </HyperText>
            <HyperText className="text-slate-200 text-xl leading-relaxed" duration={400}>
              with a strong background in Javascript and Typescript
            </HyperText>            
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-wrap gap-2 p-8">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-colors px-3 py-1 text-xl"
          >
            {skill}
          </Badge>
        ))}
      </div>
      <ContactIcons />
      <Banner />
    </div>
  )
}

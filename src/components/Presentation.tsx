import { ContactIcons } from "./Contact-Icons";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import HyperText from "./ui/hyper-text";
import { Banner } from "./Banner";
import { InfiniteScroll } from "./Infinite-scroll";

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
    <div className="pt-4 flex flex-col md:h-screen md:justify-between md:fixed md:w-1/2 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="flex flex-col px-8">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage src="/julien-noel.jpg" alt="julien Noel" className="object-cover" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
          <h1 className="text-slate-200 text-4xl md:text-5xl font-mono tracking-tight">
            {TITLE} <span className="animate-waving-hand inline-block origin-[70%_70%]">👋</span>
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
      <InfiniteScroll data={skills} />
      <ContactIcons />
      <Banner />
    </div>
  )
}

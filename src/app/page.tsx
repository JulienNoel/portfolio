import { Btns } from "@/components/Btns";
import { ContactIcons } from "@/components/Contact-Icons";
import { Presentation } from "@/components/Presentation";
import { Technos } from "@/components/Technos";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-8"> 
      <Presentation/>
      <Btns />
      <ContactIcons />
      <Technos />
    </div>
  );
}


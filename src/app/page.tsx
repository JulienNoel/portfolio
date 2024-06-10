import { Btns } from "@/components/Btns";
import { ContactIcons } from "@/components/Contact-Icons";
import { ContactForm } from "@/components/ContactForm";
import { Description } from "@/components/Description";
import { Presentation } from "@/components/Presentation";
import { Projets } from "@/components/Projets";
import { Technos } from "@/components/Technos";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-6"> 
      <Presentation/>
      <Description />
      <Projets />
      {/* <ContactForm /> */}
    </div>
  );
}


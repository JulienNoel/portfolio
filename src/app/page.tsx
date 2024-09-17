import { ContactForm } from "@/components/ContactForm";
import { Description } from "@/components/Description";
import { Presentation } from "@/components/Presentation";
import { Projets } from "@/components/Projets";


export default function Home() {
  return (
    <div className="flex flex-col px-6">
      <Presentation />
      <div className='md:w-1/2 md:self-end'>
        <Description />
        <Projets />
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}


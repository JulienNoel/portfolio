import { Btns } from "@/components/Btns";
import { Presentation } from "@/components/Presentation";
import { Technos } from "@/components/Technos";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
      <Presentation/>
      <Btns />
      <Technos />
    </main>
  );
}


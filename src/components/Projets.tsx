'use client'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import { Icons } from './Technos'
import Image from 'next/image'
import dynamic from "next/dynamic";
import Link from 'next/link'

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type TProps = {
  title: string;
  description: string;
  content: string;
  badges: string[]
  url?: string
  videourl?: string
  imageUri?: string
  index?: number
}

const cardsData: Array<TProps> = [
  {
    title: 'VoiceClone-ai',
    description: 'Website',
    content: 'Website / Saas created with Next JS for translating Videos with AI without loosing the tone of the voice',
    badges: ['React', 'Next JS', 'Vercel', 'javascript', 'Typescript', 'AI'],
    url: 'https://voiceclone-ai.com',
    videourl: 'https://youtu.be/ZzRUNBV0bhA'
  },
  {
    title: 'HerleaBtp',
    description: 'Website',
    content: 'Website created with React/Gatsby for a construction compagny to promote their showroom and their work',
    badges: ['React', 'javascript', 'Gatsby', 'Netlify', 'Contentful'],
    url: 'https://herlea-btp.fr',
    imageUri: '/herlea.png'
  },
  {
    title: 'AI Talk',
    description: 'Mobile App',
    content: 'Mobile App created with React Native. Chat Generation with ChatGPT and image Generation with Dall-E',
    badges: ['Typescript', 'React-native', 'Chat-Gpt', 'Dall-E'],
    videourl: 'https://vimeo.com/956529765'
  },
  {
    title: 'Flash Learn',
    description: 'Mobile App',
    content: 'Mobile App created with React Native. Learn the most common 100 words in a language',
    badges: ['React-native', 'javascript', 'Google API',],
    videourl: 'https://vimeo.com/747314777'
  },
]

export const Projets = (): JSX.Element => {
  return (
    <div id='projets' className='flex flex-col items-center'>
      <h2 className='text-slate-200 text-4xl md:text-5xl font-mono tracking-tight mb-12 uppercase'>My Projects
        <span className='animate-waiting-input'>_</span>
      </h2>
      {cardsData.map(({ title, description, content, badges, url, videourl, imageUri }, i) => {
        return <CardProjects
          key={i}
          title={title}
          description={description}
          content={content}
          badges={badges}
          url={url}
          videourl={videourl}
          imageUri={imageUri}
          index={i}
        />
      })}
    </div>
  )
}

const CardProjects = ({ title, description, content, badges, url, videourl, imageUri, index = 0 }: TProps): JSX.Element => {
  return (
    <div className='relative my-8 w-4/5 h-full overflow-hidden rounded-md'>
      <div className={`absolute card-wrapper w-[200%] h-[200%] top-[-50%] left-[-50%] animate-border-spin`}/>
      <div className='p-1'>
        <Card className='relative w-full h-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 '>
          <CardHeader>
            <Link href={url ?? '#'}>
              <CardTitle className='font-mono text-teal-400 text-2xl'>{title}</CardTitle>
              <CardDescription className='text-xl font-mono'>{description}</CardDescription>
            </Link>
            {url &&
              <Link href={url}><Icons.web/></Link>}
            {videourl &&
              <ReactPlayer url={videourl} width='100%' controls={true} alt={title} />}
            {imageUri &&
              <Image src={imageUri}
                alt={title}
                width={250}
                height={250}
                loading='lazy'
                className="rounded-lg w-full"
                unoptimized={true}
              />}
          </CardHeader>
          <CardContent>
            <p className='text-xl font-mono'>{content}</p>
          </CardContent>
          <CardFooter className='gap-1 flex-wrap'>
            {badges.map((it, i) => <Badge className='text-xl text-teal-400 bg-teal-400/10 border-teal-400/10 hover:bg-teal-500/20' variant="outline" key={i}>{it}</Badge>)}
          </CardFooter>
        </Card>  
      </div>
    </div>
  )
}

//shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import { Icons } from './Technos'
import Image from 'next/image'

type TProps = {
  title: string;
  description: string;
  content: string;
  badges: string[]
  url?: string
  videourl?: string
  imageUri?:string
}

const cardsData: Array<TProps> = [{
  title: 'AI Talk',
  description: 'Mobile App',
  content: 'Mobile App created with React Native. Chat Generation with ChatGPT and image Generation with Dall-E',
  badges: ['Typescript','React-native','Chat-Gpt', 'Dall-E'],
  videourl:'https://player.vimeo.com/video/956529765?h=810fa1044d'
},
{
  title: 'Flash Learn',
  description: 'Mobile App',
  content: 'Mobile App created with React Native. Learn the most common 100 words in a language',
  badges: ['React-native','javascript','Google API',],
  videourl: 'https://player.vimeo.com/video/747314777?h=215e1b918b'
},
{
  title: 'HerleaBtp',
  description: 'Website',
  content: 'Website created with React/Gatsby for a construction compagny to promote their showroom and their work',
  badges: ['React','javascript','Gatsby','Netlify','Contentful'],
  url: 'https://herlea-btp.fr',
  imageUri: '/herlea.png'
}]

export const Projets = ():JSX.Element => {
  return (
    <div id='projets' className='flex flex-col items-center'>
    {cardsData.map(({title,description,content,badges,url, videourl,imageUri},i) => {
    return <CardProjects 
                key={i}
                title={title} 
                description={description}
                content={content}
                badges={badges}
                url={url}
                videourl={videourl}
                imageUri={imageUri}
                />})}
    </div>
  )
}

const CardProjects = ({title,description,content,badges,url, videourl, imageUri}:TProps):JSX.Element => {
  return (
    <Card className='my-4 w-4/5'>
      <CardHeader>
        <CardTitle className='text-teal-400'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription> 
        {url && 
        <a href={url}><Icons.web /></a>}
        {videourl &&
        <iframe title="vimeo-player"
                src={videourl}
                width="150" 
                height="300"
                allowFullScreen
                ></iframe>}
        {imageUri &&
        <Image src={imageUri} 
                    alt='herlea btp'
                    width={250}
                    height={250}
                    loading='lazy'
                    className="rounded-lg w-full"
                    unoptimized={true} 
                    />}
      </CardHeader>
      <CardContent>        
          <p>{content}</p>
      </CardContent>
      <CardFooter className='gap-1 flex-wrap'>
        {badges.map((it,i) => <Badge className='text-teal-400 bg-teal-400/10 border-teal-400/10' variant="outline" key={i}>{it}</Badge>)}
      </CardFooter>
    </Card>
  )
}
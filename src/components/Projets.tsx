import React from 'react'
import { BorderBeam } from './magicui/border-beam'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import { Icons } from './Technos'

type TProps = {
  title: string;
  description: string;
  content: string;
  badges: string[]
  url?: string
  videourl?: string
}

const cardsData: Array<TProps> = [{
  title: 'HerleaBtp',
  description: 'Website',
  content: 'Website created with React/Gatsby for a construction compagny to promote their showroom and their work',
  badges: ['React','Gatsby','Netlify','Contentful'],
  url: 'https://herlea-btp.fr'
},{
  title: 'AI Talk',
  description: 'Mobile App',
  content: 'Mobile App created with React Native. Chat Generation with ChatGPT and image Generation with Dall-E',
  badges: ['React-native','Chat-Gpt', 'Dall-E']
},
{
  title: 'Flash Learn',
  description: 'Mobile App',
  content: 'Mobile App created with React Native. Learn the most common 100 words in a language',
  badges: ['React-native','Google API',],
  videourl: 'https://player.vimeo.com/video/747314777?h=215e1b918b'
}]

export const Projets = ():JSX.Element => {
  return (
    <div id='projets' className='flex flex-col items-center'>
    {cardsData.map(({title,description,content,badges,url, videourl},i) => {
    return <CardProjects 
                key={i}
                title={title} 
                description={description}
                content={content}
                badges={badges}
                url={url}
                videourl={videourl}
                />})}
    </div>
  )
}

const CardProjects = ({title,description,content,badges,url, videourl}:TProps):JSX.Element => {
  return (
    <Card className='my-4 w-4/5'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
      </CardHeader>
      <CardContent>        
          <p>{content}</p>
      </CardContent>
      <CardFooter className='gap-1'>
        {badges.map((it,i) => <Badge className='bg-jsYellow' variant="outline" key={i}>{it}</Badge>)}
      </CardFooter>
    </Card>
  )
}
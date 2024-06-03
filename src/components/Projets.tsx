import React from 'react'
import { BorderBeam } from './magicui/border-beam'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Badge } from './ui/badge'

type TProps = {
  title: string;
  description: string;
  content: string;
  badges: string[]
}

const cardsData: Array<TProps> = [{
  title: 'HerleaBtp',
  description: 'Website',
  content: 'Website created with React/Gatsby for a construction compagny to promote their showroom and their work',
  badges: ['React','Gatsby','Netlify','Contentful']
},{
  title: 'AI Talk',
  description: 'Mobile App',
  content: 'Mobile App created with React Native. Chat Generation with ChatGPT and image Generation with Dall-E',
  badges: ['React-native','Chat-Gpt', 'Dall-E']
}]

export const Projets = ():JSX.Element => {
  return (
    <>
    {cardsData.map(({title,description,content,badges},i) => <CardProjects 
                                                                key={i}
                                                                title={title} 
                                                                description={description}
                                                                content={content}
                                                                badges={badges}
                                                                />)}
    </>
  )
}

const CardProjects = ({title,description,content,badges}:TProps):JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>        
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
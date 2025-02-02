import React from 'react'
import { Badge } from './ui/badge'

type TProps = {
    data: string[]
}

export const InfiniteScroll = ({ data }: TProps): JSX.Element => {
    return (
        <div className="pt-4 flex overflow-hidden mask-gradient">
            <div className="whitespace-nowrap flex-row flex gap-2 animate-infinite-scroll">
                {[...data, ...data].map((it) => (
                    <div key={it} className="">
                        <Badge
                            key={it}
                            variant="secondary"
                            className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-colors px-3 text-xl"
                        >
                            {it}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    )
}


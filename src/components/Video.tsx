import React from "react"
import ReactPlayer from "react-player"

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=7L7MhxjI4PE"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  )
}

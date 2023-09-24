import { MessageCircle } from "lucide-react"
import { Header } from "../components/Header"
import { Video } from "../components/Video"
import { Module } from "../components/Module"

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex flex-col w-[1100px] gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button className="px-3 py-2 rounded-lg flex items-center gap-2 bg-violet-600 text-sm font-medium text-white hover:bg-violet-700">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative overflow-hidden flex rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-pink-700">
            <Module
              moduleIndex={0}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={1}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={2}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
            <Module
              moduleIndex={3}
              title="Desvendando o Redux"
              amountOfLessons={3}
            />
          </aside>
        </main>
      </div>
    </div>
  )
}

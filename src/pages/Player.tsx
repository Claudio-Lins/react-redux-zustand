import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex flex-col w-[1100px] gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">
              Módulo "Desvendando o Redux
            </span>
          </div>
          <button className="px-3 py-2 rounded-lg flex items-center gap-2 bg-violet-600 text-sm font-medium text-white hover:bg-violet-700">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative overflow-hidden flex rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=7L7MhxjI4PE"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>

          <aside className="w-80 border-l border-zinc-800 bg-zinc-900">
            <div className="">
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex w-10 h-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <ChevronDown className="w-5 h-5 text-zinc-400 ml-auto" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:34
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:34
                  </span>
                </button>

                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="w-4 h-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:34
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

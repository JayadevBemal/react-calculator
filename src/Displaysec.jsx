
export default function Display({equation,result}) {



  return (
     <div className="w-[355px] bg-black/40 rounded-2xl p-4 mb-6 border border-white/5 shadow-inner text-right min-h-[96px] flex flex-col justify-between overflow-hidden">
          <span className="w-full min-w-0  text-xs font-mono text-slate-400 tracking-wider h-5 block overflow-hidden text-ellipsis whitespace-nowrap">
            {equation}
          </span>
          <span className="w-full min-w-0  text-4xl font-mono font-bold tracking-tight text-white overflow-x-auto scrollbar-none">
            {result}
          </span>
        </div>
  )
}
import { cn } from "@/lib/utils"


export function Title({children, className} : {children : React.ReactNode, className?: string}) {
  return (
    <h1 className={cn("text-[10vw] md:text-[7vw] landscape:text-[5vw] md:landscape:text-[4vw] font-bold", className)}>{children}</h1>
  )
}

export function SubTitle({children, className} : {children : React.ReactNode, className?: string}) {
  return (
    <h3 className={cn("text-[7.8vw] md:text-[5vw] landscape:text-[3vw] md:landscape:text-[3vw] lg:landscape:text-[2.8vw]", className)}>{children}</h3>
  )
}

export function Description({children, className} : {children : React.ReactNode, className?: string}) {
  return (
    <p className={cn("text-[4vw] md:text-[2.8vw]  landscape:text-[2vw] md:landscape:text-[1.5vw]", className)}>{children}</p>
  )
}

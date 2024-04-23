import { cn } from "../../lib/utils"

type typographyProps = {className?: string; children: React.ReactNode}

export function H1({className, children}: typographyProps) {
  return (
    <h1 className={cn("scroll-m-20 text-2xl xs:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {children}
    </h1>
  )
}

export function H2({className, children}: typographyProps) {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  )
}

export function H3({className, children}: typographyProps) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

export function H4({className, children}: typographyProps) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

export function P({className, children}: typographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

export function Quote({className, children}: typographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  )
}

export function List({className, children}: typographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  )
}

export function Muted({className, children}: typographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  )
}

export function Lead({className, children}: typographyProps) {
  return (
    <p className={cn("text-xl text-muted-foreground text-pretty", className)}>
      {children}
    </p>
  )
}

export function Large({className, children}: typographyProps) {
  return <div className={cn("text-lg font-semibold", className)}>{children}</div>
}

export function Small({className, children}: typographyProps) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
  )
}
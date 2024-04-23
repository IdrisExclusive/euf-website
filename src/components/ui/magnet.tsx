import { useMotionValue, useSpring, motion, animate, useTransform } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { cn } from "../../lib/utils";
import { Button } from "./button";

interface magnetProps {
    className?: string; 
    children: React.ReactNode
}

export const Magnet = ({className, children}: magnetProps) => {   
        const ref = useRef<HTMLDivElement>(null)
        const smoothOptions = {stiffness: 150, damping: 15, mass: 0.1}
        const mouse = {
            x: useSpring(useMotionValue(0), ),
            y: useSpring(useMotionValue(0), )
        }

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return
            const {clientX, clientY} = e
            const { height, width, left, top } = ref.current!.getBoundingClientRect();
            mouse.x.set(clientX - left - width/2)
            mouse.y.set(clientY - top - height/2)
        }

        const handleMouseLeave = () => {
            mouse.x.set(0)
            mouse.y.set(0)
        }

        return <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{x: mouse.x, y: mouse.y}}
            className={cn("justify-center items-center w-fit h-fit bg-transparent overflow-visible focus:outline-none", className)}>
                {children}
            </motion.div>
    }

export const MagneticComponent = () => (
    <div className="flex flex-row gap-24 p-8 justify-between w-96 h-96 bg-background items-center">
        <Magnet className="flex justify-center items-center ">
            <Button variant={"outline"} className="w-20 h-8  rounded-full">Click Me!</Button>
        </Magnet>
        <Magnet className="flex justify-center items-center ">
            <Button variant={"outline"} className="w-20 h-8  rounded-full">Click Me!</Button>
        </Magnet>
        <Magnet className="flex justify-center items-center ">
            <Button variant={"outline"} className="w-20 h-8  rounded-full">Click Me!</Button>
        </Magnet>
        <Magnet className="flex justify-center items-center ">
            <Button variant={"outline"} className="w-20 h-8  rounded-full">Click Me!</Button>
        </Magnet>
    </div>
)

export const AnimatedButtonMask = () => {

    const point = {x: useMotionValue(0), y: useMotionValue(0)}

    const ref = useRef<HTMLDivElement>(null)
    
    const getBounds = (ref: React.RefObject<HTMLDivElement>) => {
        if(!ref.current) return {left: 0, top: 0, width: 0, height: 0}
        return ref.current.getBoundingClientRect()
    }

    const handleMouseEnter = ({clientX, clientY}: React.MouseEvent<HTMLDivElement>) => {
        const {left, top, width, height} = getBounds(ref)
        point.x.set(clientX - left - width/2)
        point.y.set(clientY - top - height/2)
        animate(point.x, 0, {duration: 0.3}  )
        animate(point.y, 0, {duration: 0.3} )
    }

    

    const opacity = useTransform(point.x, [100, 0, -100], [0, 1, 0])
    const scaleX = useSpring(useTransform(point.x, [160, 100, 30, 0, -30, -100, -160], [0, 0.1, 0.3, 1, 0.3, 0.1, 0]), {stiffness: 100, damping: 10, restDelta: 0.001})
    const scaleY = useSpring(useTransform(point.y, [160, 100, 30, 0, -30, -100, -160], [0, 0.1, 0.3, 1, 0.3, 0.1, 0]), {stiffness: 100, damping: 10, restDelta: 0.001})

    return <Magnet> 
            <button className="hover:-translate-y-1 w-32 h-16 rounded-full bg-primary flex justify-center items-center overflow-hidden">
                <motion.div 
                    ref={ref}
                    onMouseEnter={handleMouseEnter}
                    style={{x: point.x , y: point.y, scaleX, scaleY, opacity}}
                    className="z-10 bg-transparent relative inline-flex justify-center items-center w-32 h-16 rounded-full hover:border-4 hover:border-accent ">
                    
                </motion.div>
            </button>
            </Magnet>
}

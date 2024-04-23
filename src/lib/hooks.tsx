import { RefObject, useEffect } from "react"
import { useMotionValue, useTransform, useInView, animate } from "framer-motion"

export const useAnimatedNumber = (num: number, ref: RefObject<HTMLDivElement>, duration: number = 1.2, delay: number = 0) => {
    const animatedNum = useMotionValue(0)
    const roundAnimatedNum = useTransform(animatedNum, (num) => Math.round(num).toLocaleString("en-US"))
    const isInView = useInView(ref, {once: true})

    useEffect(
        () => {
            if(animatedNum.isAnimating()) return  
            if(isInView) {   
            const animation = animate(animatedNum, num, {duration: duration, delay: delay})
            //return animation.stop()
            }

        }, [isInView]
    )

    return roundAnimatedNum

}
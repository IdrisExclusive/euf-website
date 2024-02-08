"use client"

import React, {useRef} from 'react'
import { CustomValueType, MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './button'
import { twMerge } from 'tailwind-merge'
import path from 'path'

type yType = string | number | CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | undefined
type opacityType = CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | undefined
type pathLengthType = number | CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | undefined

const details: Array<String> = ['Lorem ipsum dolor sit amet', 
                                'consectetur adipiscing elit',
                                'sed do eiusmod tempor incididunt ut',
                                'labore et dolore magna aliqua' ]

const lastIndex = details.length - 1 
const firstIndex = 0                              

interface divProps extends React.HTMLAttributes<HTMLDivElement> {
    y?: yType
    opacity?: opacityType
}

export const Rectangle = React.forwardRef<HTMLDivElement, divProps>( 
    ({className, y, opacity, ...props}, ref) => (
        <motion.div 
            initial={{opacity: 0, y: '-100%' }}
            whileInView={{opacity: 1, y: '0'}}
            transition={{duration: 0.5}}
            style={{y: y, opacity: opacity}}
            className='w-[75vw] h-[35vh] rounded-lg ring-2 ring-offset-2 ring-accent bg-primary sm:w-[35vw] sm:h-[75vh]'>
        </motion.div>
    )
)

export const SecondaryRectangle = React.forwardRef<HTMLDivElement, divProps>( 
    ({className, y, opacity, ...props}, ref) => (
        <motion.div 
            style={{y: y, opacity: opacity}}
            className='w-[75vw] h-[35vh] mx-auto rounded-lg ring-2 ring-offset-2 ring-accent bg-secondary sm:w-[35vw] sm:h-[75vh]'>
        </motion.div>
    )
)

export const NameOfFoundation = React.forwardRef<HTMLDivElement, divProps>( 
    ({className, opacity, ...props}, ref) => (
        <motion.div className={twMerge(className, 'flex flex-col mx-auto justify-center gap-16 w-[80vw] h-[35vh] sm:w-[35vw] sm:h-[75vh] ')}
            initial={{opacity: 0,}}
            whileInView={{opacity: 1,}}
            transition={{duration: 1.5}}
            style={{opacity}} >
            <div className='flex flex-col gap-8'>
                <div className='tracking-wider text-4xl sm:text-4xl lg:text-6xl font-bold text-foreground'>
                    <div>Eagle <span className='text-accent'>Ummah</span></div> 
                    <div>Foundation</div>
                </div>
                <div className='whitespace-pre-wrap text-foreground font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div className='flex justify-between align-middle lg:mr-16'>
                <Button variant='outline' className='basis-2/6'>Sign Up</Button>
                <Button variant='cta' size='lg' className='basis-3/6'>Donate Now</Button>
            </div>
        </motion.div>
    )
)

interface benefitProps {
    children?: React.ReactNode,
    pathLength1?: pathLengthType,
    opacity2?: opacityType,
    pathLength3?: pathLengthType,
    y?: yType,
    opacity?: opacityType,
}

export const Benefit = (props: benefitProps) => (
    <div className='flex mx-auto items-center align-middle'>
        <svg width='5vw' height='10vh' viewBox='0 0 5vw 10vh'>
            <motion.line style={{pathLength: props.pathLength1}}  x1='50%' y1='0%' x2='50%' y2='50%' stroke='hsl(var(--accent))' strokeWidth='3' />
            <motion.circle style={{opacity: props.opacity2}} cx='50%' cy='50%' r='15%' stroke='hsl(var(--accent))' fill='hsl(var(--accent))' />
            <motion.line style={{pathLength: props.pathLength3}} x1='50%' y1='50%' x2='50%' y2='100%' stroke='hsl(var(--accent))' strokeWidth='3' />
        </svg>
        <motion.div style={{y: props.y, opacity: props.opacity}} className='text-foreground text-2xl'>
            {props.children}
        </motion.div>
    </div>
)

export const SecondBenefit = ({children}: {children: React.ReactNode}) => {
    const variant = {
        'initial': {
            opacity: 0,
            y: '50%'
        },
        'inView': {
            opacity: 1,
            y: '0%'
        }
    }
    const pathVariant = {
            'initial': {
                pathLength: 0,
            },
            'inView': {
                pathLength: 1,
            }
    }

    return <div className='flex mx-auto items-center align-middle'>
        <svg width='5vw' height='10vh' viewBox='0 0 5vw 10vh'>
            <motion.circle variants={variant} cx='50%' cy='50%' r='15%' stroke='hsl(var(--accent))' fill='hsl(var(--accent))' />
        </svg>
        <motion.div variants={variant} className='text-foreground text-2xl'>
            {children}
        </motion.div>
    </div>
}

interface benefitsProps {
    opacity?: opacityType,
    pathLength10?: pathLengthType,
    opacity20?: opacityType,
    pathLength30?: pathLengthType,
    y0?: yType,
    opacity0?: opacityType,
    pathLength11?: pathLengthType,
    opacity21?: opacityType,
    pathLength31?: pathLengthType,
    y1?: yType,
    opacity1?: opacityType,
    pathLength12?: pathLengthType,
    opacity22?: opacityType,
    pathLength32?: pathLengthType,
    y2?: yType,
    opacity2?: opacityType,
    pathLength13?: pathLengthType,
    opacity23?: opacityType,
    pathLength33?: pathLengthType,
    y3?: yType,
    opacity3?: opacityType,
}

export const Benefits = (props: benefitsProps) => (
    <motion.div style={{opacity: props.opacity}}>
        {details.map( (detail, index) =>
            <Benefit 
                pathLength1={index===0? props.pathLength10 : index===1? props.pathLength11 : index===2? props.pathLength12 : props.pathLength13}
                opacity2={index===0? props.opacity20 : index===1? props.opacity21 : index===2? props.opacity22 : props.opacity23}
                pathLength3={index===0? props.pathLength30 : index===1? props.pathLength31 : index===2? props.pathLength32 : props.pathLength33}
                y={index===0? props.y0 : index===1? props.y1 : index===2? props.y2 : props.y3}
                opacity={index===0? props.opacity0 : index===1? props.opacity1 : index===2? props.opacity2 : props.opacity3}>{detail}</Benefit>
        )}
    </motion.div>
)

export const SecondBenefits = () => {
    const variant = {
        'initial': {
            opacity: 0,
            transition: {staggerChildren: 0.3}
        },
        'inView': {
            opacity: 1,
            transition: {staggerChildren: 0.3}
        }
    }

   return <motion.div
        initial='initial'
        whileInView='inView'
        variants={variant} >
        {details.map( (detail, index) =>
            <SecondBenefit>{detail}</SecondBenefit>
        )}
    </motion.div>
}

export const Hero = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll()

    const benefitsOpacity = useTransform(scrollYProgress, [0.2, 0.55, 0.6], [1, 1, 0])

    const pathLength10 = useTransform(scrollYProgress, [0.2, 0.25], [0, 0])
    const opacity20 = useTransform(scrollYProgress, [0.2, 0.25], [0, 1])
    const pathLength30 = useTransform(scrollYProgress, [0.25, 0.3], [0, 1])

    const pathLength11 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1])
    const opacity21 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1])
    const pathLength31 = useTransform(scrollYProgress, [0.35, 0.4], [0, 1])

    const pathLength12 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1])
    const opacity22 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1])
    const pathLength32 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1])

    const pathLength13 = useTransform(scrollYProgress, [0.5, 0.52], [0, 1])
    const opacity23 = useTransform(scrollYProgress, [0.5, 0.52], [0, 1])
    const pathLength33 = useTransform(scrollYProgress, [0.52, 0.55], [0, 0])

    const y0 = useTransform(scrollYProgress, [0.2, 0.25], ['80%', '0%'])
    const y1 = useTransform(scrollYProgress, [0.3, 0.35], ['80%', '0%'])
    const y2 = useTransform(scrollYProgress, [0.4, 0.45], ['80%', '0%'])
    const y3 = useTransform(scrollYProgress, [0.5, 0.55], ['80%', '0%'])

    const opacity0 = useTransform(scrollYProgress, [0.2, 0.25], [0, 1])
    const opacity1 = useTransform(scrollYProgress, [0.3, 0.35], [0, 1])
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1])
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.55], [0, 1])

    const benefitsProps: benefitsProps = {
        opacity: benefitsOpacity,
        pathLength10: pathLength10,
        opacity20: opacity20,
        pathLength30: pathLength30,
        y0: y0,
        opacity0: opacity0,
        pathLength11: pathLength11,
        opacity21: opacity21,
        pathLength31: pathLength31,
        y1: y1,
        opacity1: opacity1,
        pathLength12: pathLength12,
        opacity22: opacity22,
        pathLength32: pathLength32,
        y2: y2,
        opacity2: opacity2,
        pathLength13: pathLength13,
        opacity23: opacity23,
        pathLength33: pathLength33,
        y3: y3,
        opacity3: opacity3,
    }

    const y = useTransform(scrollYProgress, [0, 0.1, 0.2], ['0%', '0%', '-100%'])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0])

    const secondaryY = useTransform(scrollYProgress, [0.2, 0.3, 0.55, 0.6], ['-100%', '0%', '0%', '100%'])
    const secondaryOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.55, 0.6], [0, 1, 1, 0])

    const secondaryY2 = useTransform(scrollYProgress, [0.6, 0.75, 0.95, 1], ['100%', '0%', '0%', '0%'])
    const secondaryOpacity2 = useTransform(scrollYProgress, [0.6, 0.75, 0.95, 1], [0, 1, 1, 1])

    return  <div ref={ref}>
                <div className='sticky top-24 flex flex-col-reverse mx-auto align-middle gap-8 sm:flex-row w-[80vw] h-[100vh]'>
                    <NameOfFoundation opacity={opacity} className='basis-1/2' />
                    <Rectangle y={y} opacity={opacity}  />
                </div>
                <div className='h-[100vh]'></div>
                <div className='sticky top-24 flex flex-col-reverse mx-auto align-middle gap-8 sm:flex-row w-[80vw] h-[100vh]'>
                    <SecondaryRectangle y={secondaryY} opacity={secondaryOpacity}  />
                    <Benefits {...benefitsProps} />
                </div>
                <div className='h-[100vh]'></div>
                <div className='sticky top-24 flex flex-col-reverse mx-auto align-middle gap-8 sm:flex-row w-[80vw] h-[100vh]'>
                    <SecondBenefits />
                    <SecondaryRectangle y={secondaryY2} opacity={secondaryOpacity2} />
                </div>
                <div className='h-[100vh]'></div>
            </div>
}

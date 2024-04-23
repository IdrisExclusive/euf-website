import { motion } from 'framer-motion'

type TextProps = {text: String; delayFactor?: number, delay?: number; className?: string}

export const AnimatedText = ({text, delayFactor = 1, delay = 0.15, className}: TextProps) => (
    text.split("").map(
            (char, i) => (
                <motion.span 
                    initial={{
                                opacity: 0,
                                x: -50
                            }}
                    animate={{  opacity: 1,
                                x: 0
                            }}
                    transition={{
                                    ease: "easeOut",
                                    duration: 0.1 * delayFactor,
                                    delay: delay + i * delayFactor,
                                }}
                    key={i}
                    className={className}>
                    {char}
                </motion.span>
            )
        )
    )
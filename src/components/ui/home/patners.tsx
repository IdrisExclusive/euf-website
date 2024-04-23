import Image from "next/image"
import { H2 } from "../typography"

export const Patners = () => (
    <div className="mx-auto flex flex-col justify-center items-center space-y-16">
        <H2 className="border-none">
            Our Patners
        </H2>
        <Image 
            src="/Almasaakin.webp"
            alt="Almasaakin logo"
            width={224}
            height={124}
        />
    </div>

)
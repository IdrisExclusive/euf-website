import Image from "next/image";
import { H2, H3, P } from "../typography";
import { Button } from "../button";

export const Volunteer = () => (
    <div className="flex flex-col justify-center items-center gap-16">
        <H2 className="border-none">Become a Volunteer</H2>
        <div className="flex flex-col lg:flex-row w-4/5 max-w-[1440px] h-fit bg-card/60 shadow-2xl rounded-2xl justify-start lg:justify-between">
            <Image
            src="/volunteer.png" 
            alt="volunteer"
            width={550}
            height={500}
            className="object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl lg:rounded-tl-2xl w-auto lg:w-1/2 h-[200px] md:h-[300px] lg:h-auto"/>
            <div className="flex flex-col justify-center items-center gap-16 p-8 md:p-12 lg:p-20">
                <div className="flex flex-col justify-center items-center gap-2 lg:gap-8">
                    <H3 className="text-center">
                    Discover the joy of giving back! 
                    </H3>
                    <P>
                    Volunteering with our charity isn't just about helping others—it's also about personal growth, building connections, and finding fulfillment in making a positive impact. Join us and experience the power of giving. 
                    </P>
                </div>
                <Button className="w-full h-12 text-lg">
                    Join Now
                </Button>
            </div>
        </div>
    </div>
)
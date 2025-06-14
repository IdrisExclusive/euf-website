import Image from "next/image";
import { H2, Large, P } from "../typography";
import { type valueType, valueData } from "@/lib/data/home-data";
import { cn } from "@/lib/utils";

export const Values = () => (
  <div className="space-y-16 mx-auto w-4/5 max-w-[1440]">
    <H2 className="border-none text-center">Our Core Values</H2>
    <div className="flex flex-col lg:flex-row gap-16 justify-center md:justify-evenly items-center">
      {valueData.map((value, i) => (
        <Value
          image={value.image}
          title={value.title}
          description={value.description}
          key={i}
        />
      ))}
    </div>
  </div>
);

interface ValueProps extends valueType {
  className?: string;
}

const Value = ({ image, title, description, className }: ValueProps) => (
  <div className={cn("space-y-4 md:space-y-8 mx-auto max-w-96", className)}>
    <Image src={image} alt="" width={64} height={64} className="mx-auto" />
    <div className="space-y-2 md:space-y-4 p-0">
      <Large className="text-center">{title}</Large>
      <P className="text-center">{description}</P>
    </div>
  </div>
);

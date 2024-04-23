import * as React from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import { Button } from "../button";

interface PathProps {
  variants: Variants;
  d?: string;
  transition?: Transition;
}

const Path: React.FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export type sizeType = "default" | "md" | "sm" | "xs" 

interface toggleFunction {
  toggle: () => void;
  size?: sizeType
}

export const MenuToggleBotton: React.FC<toggleFunction> = ({toggle, size="md"}) => (
  <Button className={`absolute md:hidden left-4 top-4 scale-100 inline z-50 px-4 py-2 rounded-full stroke-foreground hover:stroke-accent-foreground ${size==="xs"? "scale-50" : size==="sm"? "scale-75" : size==="md"? "scale-90" : "scale-100"}`} 
    variant="ghost" size="icon" onClick={toggle}>
    <svg className="absolute top-2 left-2" width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
    <span className="sr-only">Menu Toggle Button</span>
  </Button>
);

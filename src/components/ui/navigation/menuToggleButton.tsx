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
    //stroke="hsl(var(--primary-foreground))"
    strokeLinecap="round"
    {...props}
  />
);

interface toggleFunction {
  toggle: () => void;
}

export const MenuToggleBotton: React.FC<toggleFunction> = ({toggle}) => (
  <Button className="absolute top-2 left-2 z-10 rounded-full stroke-primary-foreground hover:stroke-accent-foreground" variant="ghost" size="icon" onClick={toggle}>
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
  </Button>
);

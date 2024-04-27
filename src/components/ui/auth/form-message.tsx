import { cn } from "@/lib/utils";
import { Dot, DotsThree } from "@phosphor-icons/react";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

interface MessageProps {
  type?: "error" | "success" | "info" | "progress";
  message: string;
  className?: string;
}

export const FormStatusMessage = ({ type = "info", message, className }: MessageProps) => {
  if (!message) return null;

  return (
    <div
      className={cn(
        "p-2 my-2 rounded-full flex items-center gap-x-2 text-sm w-fit",
        {
          "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200": type === "success",
          "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200": type === "info" || type === "progress",
          "text-rose-800 dark:text-rose-200 bg-rose-200 dark:bg-rose-800": type === "error",
        }, className
      )}>
      {type === "success" && (
        <CheckCircledIcon className="h-4 w-4" />
      )}
      {type === "error" && (
        <CrossCircledIcon className="h-4 w-4" />
      )} 
      {type === "info" && (
        <InfoCircledIcon className="h-4 w-4"  />
      )}
      <p className="text-sm m-0 px-2" data-test="message-output">
        {message}
      </p>
      {type === "progress" && (
        <DotsThree size={24} className="animate-ping mr-2"/>
        
      )}
    </div>
  );
};

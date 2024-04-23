import { emailState } from "@/lib/type";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export const FormServerMessage = ({submitted, message}: emailState) => {
  if (!message) return null;

  return (
    <div className={clsx("p-2 my-2 rounded-md flex items-center gap-x-2 text-sm w-4/5",
    {
        " bg-emerald-600 text-destructive-foreground": submitted,
        "text-destructive-foreground border-destructive bg-destructive ": !submitted
    })}>
      {submitted? <CheckCircledIcon className="h-4 w-4" /> : <CrossCircledIcon className="h-4 w-4" />}
      <p data-test="message-output">{message}</p>
    </div>
  );
};
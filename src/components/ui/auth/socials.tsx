import { cn } from "@/lib/utils";
import { Button } from "../button";
import Image from "next/image";
import { oAuthLogin } from "@/actions/login";

export const Socials = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex flex-row gap-8 justify-evenly items-center",
      className
    )}>
    <SocialButton logo="/socials/google.png" name="google" provider="google" />
    <div>
      <SocialButton logo="/socials/twitter.png" name="twitter" provider="twitter"
      />
    </div>
    <SocialButton logo="/socials/facebook.png" name="facebook" provider="facebook" />
  </div>
);

interface SocialButtonProps {
  logo: string;
  name: string;
  provider: string;
  className?: string;
}

const SocialButton = ({ logo, name, provider = "google", className }: SocialButtonProps) => {

    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get("callbackUrl");
    const oAuthLoginWithProvider = oAuthLogin.bind(null, provider)

  return (
    <form action={oAuthLoginWithProvider}>
      <Button
          variant={"outline"}
          type="submit"
          className={cn(
            "shadow-sm shadow-slate-400/50 justify-center items-center w-16 h-16 rounded-full border-none dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800",
            className
          )}>
          <Image src={logo} alt={name} width={32} height={32} />
        </Button>
    </form>
  );
};

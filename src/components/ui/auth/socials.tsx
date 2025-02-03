import { cn } from "@/lib/utils";
import { Button } from "../button";
import Image from "next/image";
import { oAuthLogin } from "@/actions/auth/login";
import { useSearchParams } from "next/navigation";

export const Socials = ({ callbackUrl, className }: { callbackUrl: string | null; className?: string }) => (
  <div
    className={cn(
      "flex flex-row gap-8 justify-evenly items-center",
      className
    )}>
    <SocialButton logo="/socials/google.png" name="google" provider="google" callbackUrl={callbackUrl} />
    <div>
      <SocialButton
        logo="/socials/twitter.png"
        name="twitter"
        provider="twitter"
        callbackUrl={callbackUrl}
      />
    </div>
    <SocialButton
      logo="/socials/facebook.png"
      name="facebook"
      provider="facebook"
      callbackUrl={callbackUrl}
    />
  </div>
);

interface SocialButtonProps {
  logo: string;
  name: string;
  provider: string;
  callbackUrl: string | null;
  className?: string;
}

const SocialButton = ({
  logo,
  name,
  provider = "google",
  callbackUrl,
  className,
}: SocialButtonProps) => {
  const searchParams = useSearchParams();
  const oAuthLoginWithProvider = oAuthLogin.bind(null, provider, callbackUrl);

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

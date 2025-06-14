"use client";

import Image from "next/image";
import { List, P } from "./typography";
import { cn } from "../../lib/utils";
import { FacebookLogo, WhatsappLogo, XLogo } from "@phosphor-icons/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";

import { Button } from "./button";
import {
  Form,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
  FormField,
  FormItem,
} from "./form";

import { emailSchema } from "@/db/schema";
import { saveEmail } from "../../actions/newsletter";
import { Input } from "./input";

import { useFormStatus } from "react-dom";
import {
  contactUsSection,
  exploreSection,
  getInvolvedSection,
  supportSection,
} from "@/lib/data/home-data";
import { FormStatusMessage } from "./auth/form-message";

export const Footer = () => (
  <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-1 mx-auto p-12 gap-4 w-4/5 max-w-[1440px] rounded-xl bg-zinc-200 dark:bg-zinc-900">
    <div className="flex flex-col col-start-1 row-start-1 col-span-1 row-span-1 md:row-span-1 md:col-span-2 space-y-8">
      <Logo />
      {/* <Socials /> */}
    </div>
    {/* <Section
      title="Explore"
      list={exploreSection}
      className="col-start-1 row-start-2 col-span-1 row-span-1 md:col-start-2 md:row-start-1 md:row-span-1 lg:col-start-3 lg:row-start-1"
    />
    <Section
      title="Get Involved"
      list={getInvolvedSection}
      className="col-start-1 row-start-3 col-span-1 row-span-1 md:col-start-3 md:row-start-1 md:row-span-1 lg:col-start-4 lg:row-start-1"
    />
    <Section
      title="Support"
      list={supportSection}
      className="col-start-1 row-start-4 col-span-1 row-span-1 md:col-start-2 md:row-start-2 md:row-span-1 lg:col-start-5 lg:row-start-1"
    />
    <Section
      title="Contact Us"
      list={contactUsSection}
      className="col-start-1 row-start-5 col-span-1 row-span-1 md:col-start-3 md:row-start-2 md:row-span-1 lg:col-start-6 lg:row-start-1"
    /> */}
    <NewsletterSignUp className="col-start-1 row-start-2 col-span-1 row-span-1 md:col-start-3 md:row-start-1 md:col-span-4 md:place-self-end" />
  </div>
);

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("", className)}>
    <Image
      src="/euf-logo.svg"
      alt="logo"
      width={128}
      height={80}
      className="w-32 h-20"
    />
    <P className="text-start">Eagle Ummah Foundation</P>
  </div>
);

const Socials = ({ className }: { className?: string }) => (
  <div className={cn("flex space-x-4", className)}>
    <a href="#">
      <FacebookLogo size={24} />
    </a>
    <a href="#">
      <XLogo size={24} />
    </a>
    <a href="#">
      <WhatsappLogo size={24} />
    </a>
  </div>
);

interface sectionProps {
  className?: string;
  title: string;
  list: string[];
}

const Section = ({ className, title, list }: sectionProps) => (
  <div
    className={cn(
      "flex flex-col space-y-4 text-center md:text-start w-full",
      className
    )}>
    <P className="text-sm leading-6">{title}</P>
    <List className="flex flex-col space-y-2 text-xs leading-5 list-none ml-0 break-words text-ellipsis">
      {list.map((item, i) => (
        <li key={i} className="">
          {item}
        </li>
      ))}
    </List>
  </div>
);

export const NewsletterSignUp = ({ className }: { className?: string }) => {
  const { pending } = useFormStatus();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof emailSchema>) => {
    await saveEmail(data).then((state) => {
      if (state && state.errors?.email) {
        form.setError("email", { message: state.errors.email.join() });
      } else if (state && !state.submitted) {
        form.setError("root", { message: state.message });
      }
    });
  };

  const error = form.formState.errors.root?.message;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("w-full", className)}>
        <FormComponent form={form} state={error} />
      </form>
    </Form>
  );
};

const FormComponent = ({
  form,
  state,
}: {
  form: UseFormReturn<z.infer<typeof emailSchema>>;
  state: string | undefined;
}) => {
  const { pending } = useFormStatus();

  return (
    <div className="w-full lg:w-2/3 space-y-6 mx-auto md:mx-0">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel data-testid="email-label" className="peer">
              Subscribe to our newsletter
            </FormLabel>
            <div className="flex flex-col items-start space-y-4 md:flex-row md:items-baseline md:space-x-4">
              <FormControl>
                <Input
                  placeholder="Email"
                  data-testid="email-input"
                  // type="email"
                  {...field}
                  disabled={pending}
                  className="peer-data-[state=false]:border-destructive peer-data-[state=false]:focus-visible:ring-destructive peer-data-[state=false]:focus-visible:ring-offset-1"
                />
              </FormControl>
              <Button
                type="submit"
                data-testid="subscribe-button"
                className="text-zinc-200"
                disabled={pending}>
                Subscribe
              </Button>
            </div>
            <FormDescription>Enter your email address</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormStatusMessage
        type={state ? "error" : "success"}
        message={state ?? ""}
      />
    </div>
  );
};

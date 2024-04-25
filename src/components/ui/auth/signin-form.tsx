"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../card";
import Image from "next/image";
import { H2, H4, Muted, P, Small } from "../typography";
import { Button } from "../button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { existingUserSchema } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect } from "react";
import { Socials } from "./socials";
import { toast } from "../use-toast";
import { credentialLogin } from "@/actions/login";
import { SpinnerGap } from "@phosphor-icons/react";

export const SignInForm = () => {
  const form = useForm<z.infer<typeof existingUserSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(existingUserSchema),
  });

  async function onSubmit(data: z.infer<typeof existingUserSchema>) {
    await credentialLogin(data).then((state) => {
      if (state.errors?.email) {
        form.setError("email", { message: state.errors.email.join() });
      } else if (state.errors?.password) {
        form.setError("password", { message: state.errors.password.join() });
      } else {
        form.setError("root", { message: state.message });
      }
    });
  }

  const error = form.formState.errors.root;
  const pending = form.formState.isSubmitting;

  useEffect(() => {
    error &&
      toast({
        variant: error.message?.includes("successful") ? "default" : "destructive",
        title: error.message,
      });
  }, [error]);

  return (
    <Card className="mx-auto my-auto p-2 space-y-2 w-96">
      <CardHeader className="flex flex-row gap-2 justify-start items-end">
        <Image
          src="/euf-logo.svg"
          alt="logo"
          width={64}
          height={64}
          className="-ml-2"
        />
        <P>Eagle Ummah Foundation</P>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="flex flex-col gap-6">
          <div className="space-y-0">
            <H4 className="border-none">Signin to your account</H4>
          </div>
          <Socials />
        </div>
        <div className="flex w-full h-20 items-center justify-between">
          <Separator className="h-[1px] w-1/4 bg-border" />
          <Small>or continue with</Small>
          <Separator className="h-[1px] w-1/4 bg-border" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:ml-0.5 after:text-destructive">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="firstlast@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-row justify-between items-center">
                    <span className="after:content-['*'] after:ml-0.5 after:text-destructive">Password</span>
                    <Link
                      href="#"
                      className="text-xs text-secondary hover:text-secondary/80 my-[1px]">
                      Forgot password?
                    </Link>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={pending}
              className="w-full flex justify-center items-center">
              {pending && <SpinnerGap size={20} className="mx-4 animate-spin"/>}
              {`${pending? "Signing In" : "Sign In"}`}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Muted>
          No account?{" "}
          <Link
            href="/sign-up"
            className="text-secondary font-semibold hover:text-secondary/80">
            Sign up
          </Link>
        </Muted>
      </CardFooter>
    </Card>
  );
};

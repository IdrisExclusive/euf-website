"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../card";
import Image from "next/image";
import { H4, Muted, P, Small } from "../typography";
import { Button } from "../button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { newUserFrontEndSchema } from "@/db/schema";
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
import { signUp } from "@/actions/sign-up";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Socials } from "./socials";
import { SpinnerGap } from "@phosphor-icons/react";
import { FormStatusMessage } from "./form-message";
import { useSearchParams } from "next/navigation";

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof newUserFrontEndSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(newUserFrontEndSchema),
  });

  const callbackUrl = useSearchParams().get("callbackUrl");

  async function onSubmit(data: z.infer<typeof newUserFrontEndSchema>) {
    await signUp(data, callbackUrl).then((state) => {
      if (state) {
        {
          if (state.errors?.name) {
            form.setError("name", { message: state.errors.name.join() });
          } else if (state.errors?.email) {
            form.setError("email", { message: state.errors.email.join() });
          } else if (state.errors?.password) {
            form.setError("password", {
              message: state.errors.password.join(),
            });
          } else if (state.errors?.confirmPassword) {
            form.setError("confirmPassword", {
              message: state.errors.confirmPassword.join(),
            });
          } else {
            form.setError("root", { message: state.message });
          }
        }
      }
    });
  }

  const status = form.formState.errors.root;
  const pending =
    form.formState.isSubmitting || form.formState.isSubmitSuccessful;

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
            <H4 className="border-none">Create your account</H4>
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
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:ml-0.5 after:text-destructive">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="FirstName LastName"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:ml-0.5 after:text-destructive">
                    Email
                  </FormLabel>
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
                  <FormLabel className="after:content-['*'] after:ml-0.5 after:text-destructive">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:content-['*'] after:ml-0.5 after:text-destructive">
                    Confirm Password
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
              {pending && (
                <SpinnerGap size={20} className="mx-4 animate-spin" />
              )}
              {`${pending ? "Signing Up" : "Sign Up"}`}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start">
        {!status?.message && (
          <Muted>
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-muted font-semibold hover:text-muted/80">
              Sign in
            </Link>
          </Muted>
        )}
        {status?.message && (
          <FormStatusMessage
            type={`${
              status.message?.includes("Success") ? "success" : "error"
            }`}
            message={status.message}
            className="self-center mt-0 justify-center items-center w-full"
          />
        )}
      </CardFooter>
    </Card>
  );
};

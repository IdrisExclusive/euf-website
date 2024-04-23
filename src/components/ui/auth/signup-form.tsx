"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../card";
import Image from "next/image";
import { H2, H4, Muted, P, Small } from "../typography";
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
import { useEffect } from "react";
import { Socials } from "./socials";
import { toast } from "../use-toast";

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

  function onSubmit(data: z.infer<typeof newUserFrontEndSchema>) {
    signUp(data).then((state) => {
      if (state.errors?.name) {
        form.setError("name", { message: state.errors.name.join() });
      } else if (state.errors?.email) {
        form.setError("email", { message: state.errors.email.join() });
      } else if (state.errors?.password) {
        form.setError("password", { message: state.errors.password.join() });
      } else if (state.errors?.confirmPassword) {
        form.setError("confirmPassword", {
          message: state.errors.confirmPassword.join(),
        });
      } else {
        form.setError("root", { message: state.message });
      }
    });
  }

  const error = form.formState.errors.root;

  useEffect(() => {
    error &&
      toast({
        variant: error.message?.includes("Success") ? "success" : "destructive",
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
                  <FormLabel>Name</FormLabel>
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
                  <FormLabel>Email</FormLabel>
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
                  <FormLabel>Password</FormLabel>
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
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Muted>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-secondary font-semibold hover:text-secondary">
            Sign in
          </Link>
        </Muted>
      </CardFooter>
    </Card>
  );
};

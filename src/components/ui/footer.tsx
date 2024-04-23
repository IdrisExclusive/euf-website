"use client"

import Image from "next/image";
import { List, P } from "./typography";
import { cn } from "@/lib/utils";
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
    FormItem} from "./form"

import { emailSchema } from "@/db/schema";
import { saveEmail } from "../../actions/newsletter"
import { Input } from "./input";

import { type emailState } from "@/lib/type";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { contactUsSection, exploreSection, getInvolvedSection, supportSection } from "@/lib/data/home-data";
import { FormServerMessage } from "./form/form-message";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useToast } from "@/components/ui/use-toast"

export const Footer = () => (
    <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2 mx-auto p-12 gap-4 w-4/5 max-w-[1440px] place-items-center md:place-items-start justify-evenly item-center rounded-xl bg-slate-200 dark:bg-slate-900">
        <div className="flex flex-col justify-center items-center col-start-1 row-start-1 col-span-1 row-span-1 md:row-span-5 lg:row-span-3 lg:col-span-2 space-y-8">
            <Logo />
            <Socials />
        </div>
        <Section title="Explore" list={exploreSection} className="col-start-1 row-start-2 col-span-1 row-span-1 md:col-start-2 md:row-start-1 md:row-span-1 lg:col-start-3 lg:row-start-1" />
        <Section title="Get Involved" list={getInvolvedSection} className="col-start-1 row-start-3 col-span-1 row-span-1 md:col-start-3 md:row-start-1 md:row-span-1 lg:col-start-4 lg:row-start-1" />
        <Section title="Support" list={supportSection} className="col-start-1 row-start-4 col-span-1 row-span-1 md:col-start-2 md:row-start-2 md:row-span-1 lg:col-start-5 lg:row-start-1" />
        <Section title="Contact Us" list={contactUsSection} className="col-start-1 row-start-5 col-span-1 row-span-1 md:col-start-3 md:row-start-2 md:row-span-1 lg:col-start-6 lg:row-start-1" />
        <NewsletterSignUp className="col-start-1 row-start-6 col-span-1 row-span-1 md:col-start-2 md:row-start-3 md:col-span-2 lg:col-start-3 lg:row-start-2 lg:col-span-4 md:place-self-end" />
    </div>
)

const Logo = ({className}: {className?: string;}) => (
    <div className={cn("mx-auto",className)}>
        <Image 
            src="/euf-logo.svg"
            alt="logo"
            width={128}
            height={80}
            className="w-32 h-20 mx-auto"
        /> 
        <P className="text-center">Eagle Ummah Foundation</P>   
    </div>
)

const Socials = ({className}: {className?: string}) => (
    <div className={cn("flex space-x-4", className)}>
        <a href="#"><FacebookLogo size={24} /></a>
        <a href="#"><XLogo size={24} /></a>
        <a href="#"><WhatsappLogo size={24} /></a>
    </div>
)

interface sectionProps {
    className?: string;
    title: string;
    list: string[];
}

const Section = ({className, title, list}: sectionProps) => (
    <div className={cn("flex flex-col space-y-4 text-center md:text-start w-full", className)}>
        <P className="text-sm leading-6">
            {title}
        </P>
        <List className="flex flex-col space-y-2 text-xs leading-5 list-none ml-0 break-words text-ellipsis">
            {list.map(
                (item, i) => 
                    <li key={i} className="" >
                        {item}
                    </li>
            )}
        </List>

    </div>
)

const NewsletterSignUp = ({className}: {className?: string}) => {

    const initialState: emailState = {}
    const [state, dispatch] = useFormState(saveEmail, initialState )
    const {pending} = useFormStatus()
     
    const form = useForm<z.infer<typeof emailSchema>>(
        {
            resolver: zodResolver(emailSchema),
            defaultValues: {
                email: undefined
            }
        }
    )

    return (
        <Form {...form} >
            <form action={dispatch} className={cn("w-full", className)}>
                <FormComponent form={form} state={state} />
            </form>
        </Form>
    )
}

const FormComponent = ({form, state}:{form: UseFormReturn<z.infer<typeof emailSchema>>; state: emailState}) => {
    const {pending} = useFormStatus()
    const [isChanging, setIsChanging] = useState(false)
    const {errors, message, submitted} = state
    const { toast } = useToast()

    const onchange = () => {
        if(errors) {
            form.trigger("email")
            setIsChanging(true)
        }
    }

    useEffect(() => {
        (!pending && message && !submitted) && toast({
                                            variant: !submitted? "destructive" : "success",
                                            title: message
                                        });
    }, [pending])

    return <div className="w-full lg:w-2/3 space-y-6 mx-auto md:mx-0">
                    {!submitted && <FormField
                            control={form.control}
                            name="email"
                            render={
                                ({field}) => (
                                    <FormItem>
                                        <FormLabel className={clsx("peer", {"text-destructive": errors && !isChanging && !pending})}>Subscribe to our newsletter</FormLabel>
                                        <div className="flex flex-col items-start space-y-4 md:flex-row md:items-baseline md:space-x-4">
                                            <FormControl onChange={onchange}>
                                                <Input 
                                                    placeholder="Email"
                                                    data-test="email-input"
                                                    type="email"
                                                    {...field}
                                                    disabled={pending}
                                                    className={clsx({"peer-data-[state=false]:border-destructive peer-data-[state=false]:focus-visible:ring-destructive focus-visible:ring-offset-1": errors && isChanging,
                                                                    "border-destructive focus-visible:ring-destructive focus-visible:ring-offset-1": errors && !isChanging && !pending})}    
                                                />
                                            </FormControl>
                                            <Button 
                                                type="submit" 
                                                data-test="subscribe-button"
                                                className="text-slate-200"
                                                onClick={() => setIsChanging(false)} disabled={pending}>
                                                    Subscribe
                                            </Button>
                                        </div>
                                        <FormDescription>Enter your email address</FormDescription>
                                        {(isChanging && !pending) && <FormMessage />}
                                    </FormItem>
                                )
                            }
                        />}
                        {submitted && <FormServerMessage {...state} /> }
                </div>
}
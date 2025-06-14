import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface VerifyEmailMessageProps {
  url: string;
  host: string;
}

export const VerifyEmailMessage = ({ url, host }: VerifyEmailMessageProps) => {
  return (
    <Html>
      <Head />
      <Preview>{host}</Preview>
      <Tailwind config={{ darkMode: "class" }}>
        <Body className="bg-transparent my-auto mx-auto font-sans px-2">
          <Container className="border bg-zinc-100 dark:bg-zinc-900 border-solid border-[#E1A789] rounded-xl my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/579/276/small/12-27.jpg"
                width="160"
                height="160"
                alt="EUF"
                className="my-0 mx-auto"
              />
            </Section>
            <Text className="text-zinc-800 dark:text-zinc-200 text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Join Our Charity</strong>
            </Text>
            <Text className="text-zinc-800 dark:text-zinc-200 text-[14px] leading-[24px]">
              We're thrilled to have you join Eagle Ummah Foundation.
            </Text>
            <Text className="text-zinc-800 dark:text-zinc-200 text-[14px] leading-[24px]">
              To complete your sign-up process, simply click the button below.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#383aa3] rounded-full text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={url}>
                Complete Sign-up
              </Button>
            </Section>
            <Text className="text-zinc-800 dark:text-zinc-200 text-[14px] leading-[24px]">
              Thank you for choosing to be a part of our community.
            </Text>
            <Hr className="border border-solid border-zinc-300 dark:border-zinc-600 my-[26px] mx-0 w-full" />
            <Text className="text-zinc-500 dark:text-zinc-700 text-[12px] leading-[24px]">
              If you were not expecting this email, you can ignore this it. If
              you are concerned about your account's safety, please contact{" "}
              <a href="mailto:info@euf.com">info@euf.com</a>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

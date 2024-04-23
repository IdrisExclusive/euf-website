import { Url } from "next/dist/shared/lib/router/router";

export type menuItemsType = { title: String; url: Url }[];

export const menuItems: menuItemsType = [
  { title: "About", url: "#" },
  { title: "Projects", url: "#" },
  { title: "Dashboard", url: "#" },
  { title: "FAQ", url: "#" },
];

export const exploreSection: string[] = ["About us", "Projects", "Dashboard"];

export const getInvolvedSection: string[] = ["Donate", "Become a volunteer"];

export const supportSection: string[] = ["FAQ", "Help"];

export const contactUsSection: string[] = [
  "+234 810 000 1234",
  "eagleummahfoundation@gmail.com",
];

export type PricingCardProps = {
  title: string;
  price?: number | "Custom";
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  isYearly?: boolean;
  isMonthly?: boolean;
};

export const monthlyPlans: PricingCardProps[] = [
  {
    title: "Basic",
    price: 10000,
    description: "Provides monthly support for our charitable acts",
    features: [
      "Feed 1 person for 10 days",
      "Supply 1-week provision to a family",
      "Support our annual borehole project",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
    isMonthly: true,
  },
  {
    title: "Do more",
    price: 30000,
    description: "Triple the effort! Leave a lasting impact",
    features: [
      "Feed 1 persons for 1 month",
      "Supply 1-month provision to a family",
      "Support our annual borehole project",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
    isMonthly: true,
    popular: true,
  },
  {
    title: "Flexible",
    price: "Custom",
    description: "Choose an amount that's right for you",
    features: [
      "Impact equivalent to the donation amount, with benefits adjusted accordingly",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
    isMonthly: false,
  },
];

export const yearlyPlans: PricingCardProps[] = [
  {
    title: "Basic",
    price: 120000,
    description: "Provides a year round support for our charitable acts",
    features: [
      "Feed 1 person for 10 days",
      "Supply 1-week provision to a family",
      "Support our annual borehole project",
    ],
    actionLabel: "Donate Now",
    isYearly: true,
  },
  {
    title: "Do more",
    price: 360000,
    description: "Triple the effort! Leave a lasting impact",
    features: [
      "Feed 1 persons for 1 month",
      "Supply 1-month provision to a family",
      "Support our annual borehole project",
    ],
    actionLabel: "Donate Now",
    isYearly: true,
    popular: true,
  },
  {
    title: "Flexible",
    price: "Custom",
    description: "Choose an amount that's right for you",
    features: [
      "Impact equivalent to the donation amount, with benefits adjusted accordingly",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
  },
];

export const onetimePlans: PricingCardProps[] = [
  {
    title: "Basic",
    price: 10000,
    description: "Provides a one-time support for our charitable acts",
    features: [
      "Feed 1 person for 10 days",
      "Supply 1-week provision to a family",
      "Support our annual borehole project",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
    isMonthly: false,
  },
  {
    title: "Do more",
    price: 30000,
    description: "Triple the effort! Leave a lasting impact",
    features: [
      "Feed 1 persons for 1 month",
      "Supply 1-month provision to a family",
      "Support our annual borehole project",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
    isMonthly: false,
    popular: true,
  },
  {
    title: "Flexible",
    price: "Custom",
    description: "Choose an amount that's right for you",
    features: [
      "Impact equivalent to the donation amount, with benefits adjusted accordingly",
    ],
    actionLabel: "Donate Now",
    isYearly: false,
    isMonthly: false,
  },
];

export type valueType = {
    image: string;
    title: string;
    description: string;
}

export const valueData: valueType[] = [
    {
        image: "/value/compassion.png",
        title: "Compassion",
        description: "Demonstrating empathy and care towards those in need, prioritizing their well-being and dignity"
    },
    {
        image: "/value/integrity.png",
        title: "Integrity",
        description: "Upholding honesty, transparency, and accountability in all aspects of operations, ensuring that resources are used efficiently"
    },
    {
        image: "/value/collaboration.png",
        title: "Collaboration",
        description: "Fostering partnerships and teamwork within the organization and with external stakeholders to maximize impact."
    }
]
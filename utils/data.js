import { accountsIcon } from "@/public/svgs/account-icon";
import { ArrowDouble } from "@/public/svgs/Arrow-double";
import { BankIcon } from "@/public/svgs/bank";
import { CardIcon } from "@/public/svgs/card-icon";
import { CreditCard } from "@/public/svgs/credit-card";
import { HomeIcon } from "@/public/svgs/home-icon";
import { notificationIcon } from "@/public/svgs/notification-icon";
import { SettingsIcon } from "@/public/svgs/setting-icon";
import { transactionIcon } from "@/public/svgs/transaction-icon";
import { UserIcon } from "@/public/svgs/user-icon";
import { User } from "@/public/svgs/Users";

export const Accounts= [
    {
        id: 1,
        feature: "Foreign Accounts",
        icon: BankIcon,
        href: "/features/convert",
        desc: "Free NAIRA, USD and EUR accounts for all your international transactions."
    },
    {
        id: 2,
        feature: "Virtual Cards",
        icon: CreditCard,
        href: "/features/virtual",
        desc: "Free NAIRA, USD and EUR accounts for all your international transactions."
    },
    {
        id: 3,
        feature: "Physical Card",
        icon: CreditCard,
        href: "/features",
        desc: "Free NAIRA, USD and EUR accounts for all your international transactions."
    },
    {
        id: 4,
        feature: "Best Exchange Rate",
        icon: ArrowDouble,
        href: "/features/transfer",
        desc: "Free NAIRA, USD and EUR accounts for all your international transactions."
    },
]

export const tablinks = [
    {
        id: 1,
        href: "/dashboard",
        title: "home",
        icon: HomeIcon
    },
    {
        id: 2,
        href: "/dashboard/accounts",
        title: "accounts",
        icon: accountsIcon
    },
    {
        id: 3,
        href: "/dashboard/transactions",
        title: "transactions",
        icon: transactionIcon
    },
    {
        id: 4,
        href: "/dashboard/cards",
        title: "cards",
        icon: CardIcon
    },
    {
        id: 5,
        href: "/dashboard/beneficiary",
        title: "beneficiary",
        icon: UserIcon
    },

    {
        id: 6,
        href: "/dashboard/notification",
        title: "notification",
        icon: notificationIcon
    },
    {
        id: 7,
        href: "/dashboard/settings",
        title: "setting",
        icon: SettingsIcon
    },

]
export const Faqs = [
    {
        id:1,
        question: "How to Set up a free account on Paidley with no hassle or Stress",
        answer: "Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders."
    },
      {
        id:2,
        question: "How to Set up a free account on Paidley with no hassle or Stress",
        answer: "Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders."
    },   {
        id:3,
        question: "How to Set up a free account on Paidley with no hassle or Stress",
        answer: "Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders."
    },   {
        id:4,
        question: "How to Set up a free account on Paidley with no hassle or Stress",
        answer: "Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders."
    },   {
        id:5,
        question: "How to Set up a free account on Paidley with no hassle or Stress",
        answer: "Paidley is a financial technology company that develops and operates payment services, including virtual debit cards, foreign currency bank accounts with best low cost exchange rates and money services all from a smartphone app. Make easy international payments, send money across borders."
    },
    

]

export const values =[
    {
        id:1,
        feature: "Team works drives result ",
        desc: "Our production is laid back on collaborative effort with different team across multiple departments to yield significant result",
        icon: User
    },
    {
        id:1,
        feature: "Team works drives result ",
        desc: "Our production is laid back on collaborative effort with different team across multiple departments to yield significant result",
        icon: User
    },{
        id:1,
        feature: "Team works drives result ",
        desc: "Our production is laid back on collaborative effort with different team across multiple departments to yield significant result",
        icon: User
    },
]


import { AppLinks } from "@/types/app-links2";


export const footerApplicationLinks: AppLinks[] = [
    {
        label: "ETE",
        baseUrl: "/page1",
        type: "internal",
    },

    {
        label: "AUTOMNE",
        baseUrl: "https://google.com",
        type: "external",
    },

    {
        label: "HIVER",
        baseUrl: "/#",
        type: "internal",
    },

    {
        label: "PRINTEMPS",
        baseUrl: "/page1",
        type: "internal",
    }
];

export const footerEquipementLinks: AppLinks[] = [
    {
        label: "Materiel ski",
        baseUrl: "/#",
        type: "internal"
    },

    {
        label: "Materiel velo",
        baseUrl: "/#",
        type: "internal"
    },

    {
        label: "Materiel randonne",
        baseUrl: "/#",
        type: "internal"
    },

    {
        label: "Materiel jet",
        baseUrl: "/#",
        type: "internal"
    }
];
export const footerHebergementLinks: AppLinks[] = [
    {
        label: "T1",
        baseUrl: "/#",
        type: "internal"
    },

    {
        label: "T2",
        baseUrl: "/#",
        type: "internal"
    },

    {
        label: "T3",
        baseUrl: "/#",
        type: "internal"
    },

    {
        label: "T4",
        baseUrl: "/#",
        type: "internal"
    }
];

export const footerLinks = [
    {
        label: "Saisons",
        links: footerApplicationLinks,
    },

    {
        label: "Equipement",
        links: footerEquipementLinks,
    },
    {
        label: "Hebergement",
        links: footerHebergementLinks,
    },
];
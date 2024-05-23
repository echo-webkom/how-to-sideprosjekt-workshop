// src/utils/linksData.ts
export interface Link {
    href: string;
    text: string;
    icon: string;
}

export const links: Link[] = [
    {
        href: 'https://github.com/Yeetomeister',
        text: 'Personal GitHub',
        icon: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png',
    },
    {
        href: 'https://app.hackthebox.com/profile/1650773',
        text: 'Hack The Box',
        icon: 'https://app.hackthebox.com/images/logos/htb_ic2.svg',
    },
    {
        href: 'https://tryhackme.com/p/Trym.Jakobsen',
        text: 'TryHackMe',
        icon: 'https://assets.tryhackme.com/img/favicon.png',
    },
    {
        href: 'https://www.linkedin.com/in/trym-jakobsen-248094252/',
        text: 'LinkedIn',
        icon: 'https://img.icons8.com/fluent/48/000000/linkedin.png',
    },
];

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "xnlogical";
export const SITE_DESCRIPTION = "Developer portfolio";

export interface NavLink {
    title: string;
    id?: string;
    url?: string;
    redirect?: string;
    tooltip?: string;
}

export const NAV_LINKS: NavLink[] = [
    {
        title: "home",
        id: "home",
        url: "/",
        tooltip: "Home",
    },
    {
        title: "gallery",
        id: "gallery",
        url: "/gallery",
        tooltip: "Gallery",
    },
    {
        title: "tos",
        id: "tos",
        url: "/tos",
        tooltip: "Terms of Service",
    },
    {
        title: "blog",
        id: "blog",
        url: "/blog",
        tooltip: "Posts and stuff",
    },
];

export type SocialPlatform = "github" | "roblox";

export interface SocialLink {
    platform: SocialPlatform;
    url: string;
    label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        platform: "github",
        url: "https://github.com/xnlogical/",
        label: "GitHub",
    },
    {
        platform: "roblox",
        url: "https://www.roblox.com/users/1073306311/profile",
        label: "Roblox",
    },
];


export interface FooterNavLinks {
    title: string,
    links: string[]
}
export interface FooterConfig {
    subtitle: string,
    navItems: FooterNavLinks[],
    socialLinks: string[],
    logo: string
}
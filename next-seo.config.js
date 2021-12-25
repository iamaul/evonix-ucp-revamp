/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "EvoniX",
  titleTemplate: "%s - User Control Panel",
  defaultTitle: "evonix-ucp",
  description: "EvoniX Roleplay User Control Panel",
  canonical: "https://evonix-ucp.iamaul.me",
  openGraph: {
    url: "https://evonix-ucp.iamaul.me",
    title: "evonix-ucp",
    description: "EvoniX Roleplay User Control Panel",
    images: [
      {
        url: "https://og-image.iamaul.me/**evonix-ucp**.iamaul.me.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fiamaul.me%2Favataaars.svg&widths=250",
        alt: "evonix-ucp.iamaul.me og-image",
      },
    ],
    site_name: "evonix-ucp",
  },
  twitter: {
    handle: "@iamaulanagung",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

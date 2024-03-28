import Image from "next/image";

export const PRICING_DATA = [
  {
    id: 1,
    planName: "Free Plan",
    planFeatures: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    planPrice: "Free",
  },
  {
    id: 2,
    planName: "Standard Plan",
    planFeatures: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
    planPrice: "$9",
  },
  {
    id: 3,
    planName: "Premium Plan",
    planFeatures: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
    planPrice: "$12",
  },
];

export const USER_PROFILES = [
  {
    imageUri: "/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    imageUri: "/Ellipse 175 (1).svg",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.6",
    review:
      "“I like it because I like to travel far and still can connect with high speed.”.",
  },
  {
    imageUri: "/Ellipse 175 (2).svg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "5.0",
    review:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  {
    imageUri: "/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    imageUri: "/Ellipse 175 (1).svg",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.6",
    review:
      "“I like it because I like to travel far and still can connect with high speed.”.",
  },
  {
    imageUri: "/Ellipse 175 (2).svg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "5.0",
    review:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  {
    imageUri: "/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
];

export const STATS = [
  {
    icon: <Image src="/Group 1216.svg" width={25} height={25} alt="" />,
    count: "90+",
    name: "Users",
  },
  {
    icon: <Image src="/gridicons_location.svg" width={25} height={25} alt="" />,
    count: "30+",
    name: "Locations",
  },
  {
    icon: <Image src="/bx_bxs-server.svg" width={25} height={25} alt="" />,
    count: "50+",
    name: "Servers",
  },
];

export const FEATURES = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

export const COLUMNS = [
  {
    title: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    title: "Engage",
    links: [
      "LaslesVPN ?",
      "FAQ",
      "Tutorials",
      "About Us",
      "Privacy Policy",
      "Terms of service",
    ],
  },
  {
    title: "Earn Money",
    links: ["Affiliate", "Become Partner"],
  },
];

export const NAV_LINKS = [
  "About",
  "Features",
  "Pricing",
  "Testimonials",
  "Help",
];

import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aniketk.me"),
  title: "Aniket Kumar | Web Designer & Digital Art Director",
  description: "Official portfolio of Aniket Kumar - Web Designer based in New York. I create modern, user-centered websites combining bold typography, minimal strategy, and high performance.",
  keywords: [
    "Aniket Kumar",
    "aniketk.me",
    "Web Designer New York",
    "UI/UX Designer",
    "Creative Director",
    "Freelance Web Designer",
    "Editorial Web Design",
    "Minimalist Portfolio"
  ],
  authors: [{ name: "Aniket Kumar" }],
  creator: "Aniket Kumar",
  openGraph: {
    title: "Aniket Kumar | Web Designer & Digital Art Director",
    description: "I design digital experiences that inspire and perform. Based in New York • Available for Freelance.",
    url: "https://aniketk.me",
    siteName: "Aniket Kumar Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Kumar | Web Designer",
    description: "Designing modern digital experiences that inspire and perform."
  },
  alternates: {
    canonical: "https://aniketk.me"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

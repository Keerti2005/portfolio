import { Inter } from "next/font/google";
import Footer from "./components/footer";
import ClientLayoutWrapper from "./components/helper/client-layout-wrapper"; // 👈 new component
import "./css/card.scss";
import "./css/globals.scss";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Keerti Madhuvantika",
  description:     "This is the portfolio of Keerti Madhuvantika. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",

  profile: "/mw.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        <Footer />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}

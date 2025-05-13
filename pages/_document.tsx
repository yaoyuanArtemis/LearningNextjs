import { Html, Head, Main, NextScript } from "next/document";
import Footer from "./components/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{display:"flex",flexDirection:"column",height:"100vh"}}>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}

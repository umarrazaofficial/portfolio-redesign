import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";
import localFont from "next/font/local";

export const fonfamily = localFont({
  src: [
    {
      path: "../../public/fonts/static/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../../public/fonts/static/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Outfit-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/static/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

const GlobalStyles = createGlobalStyle`
:root{
  --primary: #5454d4;
  --white: #fff;
  --white-70: rgba(255, 255, 255, 0.7);
  --black: #000;
}
  body{
    font-family: ${fonfamily.style.fontFamily};
  }
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

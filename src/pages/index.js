import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Umar Raza | Front-End Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Umar Raza, a Front-End Web Developer skilled in React.js, Next.js, and modern UI technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Umar Raza, Front-End Developer, React.js, Next.js, JavaScript, Web Development"
        />
        <meta name="author" content="Umar Raza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
    </>
  );
}

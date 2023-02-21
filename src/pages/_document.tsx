import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-display scroll-smooth dark:scrollbar-thumb-dark-hover scrollbar-thumb-light-hover scrollbar-track-light-secondary dark:scrollbar-track-dark-secondary scrollbar-thin">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

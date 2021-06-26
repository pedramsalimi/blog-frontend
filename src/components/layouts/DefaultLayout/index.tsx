import type { DefaultLayoutProps } from "@types";

import Head from "next/head";
import cn from "classnames";
import Header from "@modules/Header";
import Footer from "@modules/Footer";

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  bodyClassname = "",
  mainClassName = "",
}) => {
  const onClose = () => {};

  return (
    <div className={bodyClassname}>
      <div className={"main-wrap"}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <main id="main" className={cn("relative ", mainClassName)}>
          {children}
        </main>
        <Footer />
      </div>
      <div
        className="transition-all ease-linear duration-300 transform no-tap bg-opacity-50 bg-black z-backdrop w-full h-full fixed select-none opacity-0 left-0 top-0 invisible"
        onClick={onClose}
      />
    </div>
  );
};

export default DefaultLayout;

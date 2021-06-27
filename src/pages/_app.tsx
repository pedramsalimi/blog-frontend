import type { AppContext, AppInitialProps, AppProps } from "next/app";
import type { PageProps, PageWithLayout } from "@types";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { getCookie, setContext } from "@utils/Cookies";
import { COOKIE_LCOALE_KEY } from "@utils/constants";
import store from "@store";
import { getDefaultLayout } from "@layouts";
import { NextIntlProvider } from "next-intl";
import NProgress from "nprogress";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const { locale, events } = useRouter();

  useEffect(() => {
    const routerChangeStart = () => {
      NProgress.set(0.3);
      NProgress.start();
    };

    const routerChangeEnd = () => {
      NProgress.done(true);
    };
    const routerChangeError = () => {
      NProgress.done(true);
    };
    events.on("routeChangeStart", routerChangeStart);
    events.on("routeChangeComplete", routerChangeEnd);
    events.on("routeChangeError", routerChangeError);

    return () => {
      events.off("routeChangeStart", routerChangeStart);
      events.off("routeChangeComplete", routerChangeEnd);
      events.off("routeChangeError", routerChangeError);
    };
  }, [events]);

  useEffect(() => {
    getCookie().set(COOKIE_LCOALE_KEY, locale);
  }, [locale]);

  const getLayout =
    (Component as PageWithLayout<PageProps>).getLayout || getDefaultLayout;

  return (
    <NextIntlProvider
      // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
      }}
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      // timeZone="Austria/Vienna"
    >
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />, { user: false })}
      </Provider>
    </NextIntlProvider>
  );
}

// MyApp.getInitialProps = async (
//   appContext: AppContext
// ): Promise<AppInitialProps> => {
//   const appProps = await App.getInitialProps(appContext);
//   return { pageProps: {} };
// };

export default MyApp;

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'next-themes';
import client from '../apollo/client';
import AppProvider from '../context/AppContext';
import '../index.scss';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider defaultTheme='light'>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </ApolloProvider>

  )
}

export default MyApp

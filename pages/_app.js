import '../styles/globals.css';
import { ThemeProvider } from "next-themes";
import Layout from '../sections/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

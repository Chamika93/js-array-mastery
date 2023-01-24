import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children}) => {
    return (
        <>
          <Head>
            <title>JS Array Mastery</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="h-screen w-full flex flex-col font-poppins">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </>
    );
};

export default Layout;

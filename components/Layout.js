import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Header guitarra={guitarra} />
      {children}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;

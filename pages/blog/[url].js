import Image from "next/image";
import Layout from "../../components/Layout";
import { formatearFecha } from "../../helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  const { contenido, imagen, published_at, titulo } = entrada;

  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={`${API_URL}${imagen.url}`}
            alt={`imagen entrada ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;

  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  return {
    paths,
    fallback: false, //Si tienes muchas entradas true si no pon false
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;

  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada: entrada[0],
    },
  };
}

//- Este es un metodo mas dinamico y requiere mas de nuestro servidor, si no hay muchos cambios mejor el de arriba
// export async function getServerSideProps({ query: { id } }) {
//  const url = `${process.env.API_URL}/blogs/${id}`;

//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();

//   return {
//     props: {
//       entrada,
//     },
//   };
// }

export default EntradaBlog;

import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <div>
      <Layout pagina="Nosotros">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              layout="responsive"
              width={600}
              height={450}
              src="/img/nosotros.jpg"
              alt="Imagen sobre nosotros"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas quis pulvinar ex. Nullam non nibh non risus dignissim
                ullamcorper a at risus. Duis interdum mollis elit et dignissim.
                Morbi bibendum libero a sagittis dignissim. Nulla dictum erat
                vel augue accumsan efficitur non non turpis. Proin pharetra
                ligula at ex feugiat accumsan lacinia sit amet leo. Praesent
                auctor est vitae fringilla tempus. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia curae; Donec
                vitae hendrerit lectus. Duis arcu nulla, sollicitudin ut
                consectetur eu, accumsan blandit elit. Morbi eget hendrerit
                odio, nec semper augue. Duis rhoncus congue urna non tincidunt.
              </p>
              <p>
                Morbi quis turpis vitae erat facilisis aliquam a id augue.
                Maecenas pellentesque, elit at faucibus vestibulum, mauris nunc
                finibus nulla, consequat tempor purus arcu eu ligula.
                Suspendisse pellentesque lectus dapibus, vulputate mi eget,
                fermentum lorem. Phasellus ac accumsan elit, id tristique metus.
                Quisque vitae consectetur nisl. Vestibulum elementum blandit
                rhoncus. Phasellus feugiat, est non bibendum luctus, orci urna
                dapibus nibh, sollicitudin feugiat felis risus lobortis augue.
                Proin scelerisque, ante ac mattis feugiat, ex massa hendrerit
                lacus, eu dignissim magna justo non magna. Integer pretium orci
                aliquet auctor semper. Aenean faucibus felis massa, vel euismod
                tellus porta id.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Nosotros;

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import styles from "../styles/Home.module.css"; // Import your CSS file

const Home = () => {
  const images = [
    "https://sotipapier.com/medias/images/recyclage-papier.jpg",
    "https://tuniscope.com/uploads/images/content/tun-recycl-1-100619.png",
    "https://www.lejdd.fr/lmnr/rcrop/375,250,FFFFFF,forcey,center-middle/img/var/jdd/public/styles/paysage/public/media/image/2022/07/21/07/contre-la-pollution-plastique-l-industrie-doit-encore-accelerer.jpg?VersionId=I0q.NmFZbj4ScGCiWKG.ijnhvSwzrx7K"
  ];

  return (
    <div>
      <nav>
        {/* Navigation code */}
      </nav>

      <header className={`${styles.sectionContainer} ${styles.headerContainer}`}>
        {/* Header content remains unchanged */}
      </header>
      <hr />
      <Splide
        options={{
          type: 'fade',
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          rewind: true,
        }}
      >
        {images.map((url, index) => (
          <SplideSlide key={index}>
            <img src={url} alt={`slide ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
      <hr />
      <footer className={`${styles.sectionContainer} ${styles.footerContainer}`}>
        {/* Footer content remains unchanged */}
      </footer>
      <div className={styles.footerBar}>
        Copyright © 2024 GreenRecycle.
      </div>
    </div>
  );
};

export default Home;
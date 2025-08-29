import SpotifyPlaylistGrid from "./components/SpotifyPlaylistGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Events from "./components/Events";
import MainPage from "./components/MainPage";
import GallerySection from "./components/Gallery";
import Community from "./components/Community";

export default function HomePage() {
  return (
    <MainPage>
      <Header />

      <MainSection />

      <Events />

      <GallerySection />

      <Community />

      <SpotifyPlaylistGrid
        heading="Nossas playlists"
        subheading=""
        autoplay={true}
        left={{
          url: "https://open.spotify.com/embed/playlist/5NVFaRIQ6MzLpwYSA29ptm",
          title: "Sequência de rock doido na pressão 🔥",
        }}
        right={{
          url: "https://open.spotify.com/embed/playlist/32CyBiXFo5HxJ0IKkLxVpT",
          title: "Sequência de rock leve das românticas 😎",
        }}
      />

      <Footer />
    </MainPage>
  );
}

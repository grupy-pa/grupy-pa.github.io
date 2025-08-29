import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";
import GallerySection from "../components/Gallery";
import ComunidadeEDiretrizes from "../components/Community";
import SpotifyPlaylistGrid from "../components/SpotifyPlaylistGrid";

export default function Page() {
  return (
    <main>
      <Header />

      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">🔥 Rock Doido 🔥</h1>
        <p className="text-muted-foreground">
          Página exemplo com todos os componentes da comunidade.
        </p>
      </section>

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
    </main>
  );
}

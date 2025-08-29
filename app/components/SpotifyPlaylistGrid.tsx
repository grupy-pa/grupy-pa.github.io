// components/SpotifyPlaylistGrid.tsx
type PlaylistInput = { id?: string; url?: string; title?: string };

type SpotifyPlaylistGridProps = {
  left: PlaylistInput;
  right: PlaylistInput;
  heading?: string;
  subheading?: string;
  autoplay?: boolean;
};

const extractId = (p: PlaylistInput) => {
  if (p.id) return p.id;
  if (p.url) {
    const m = p.url.match(/playlist\/([a-zA-Z0-9]+)/);
    if (m?.[1]) return m[1];
  }
  return "";
};

export default function SpotifyPlaylistGrid({
  left,
  right,
  heading,
  subheading,
  autoplay = false,
}: SpotifyPlaylistGridProps) {
  const leftId = extractId(left);
  const rightId = extractId(right);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {(heading || subheading) && (
          <header className="text-center mb-8">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold ">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-muted-foreground mt-2">{subheading}</p>
            )}
          </header>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{ id: leftId, title: left.title }, { id: rightId, title: right.title }].map(
            (pl, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-card/70 backdrop-blur-md shadow-sm overflow-hidden"
              >
                {pl.title && (
                  <div className="px-4 py-3 border-b">
                    <h3 className="text-base font-semibold">{pl.title}</h3>
                  </div>
                )}

                <div className="p-3">
                  <iframe
                    title={pl.title ?? `Playlist Spotify ${i + 1}`}
                    className="w-full h-[360px] md:h-[420px] rounded-xl"
                    src={`https://open.spotify.com/embed/playlist/${pl.id}${
                      autoplay ? "" : ""
                    }`}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

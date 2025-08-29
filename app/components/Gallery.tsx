"use client";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";

type Kind = "dojos" | "meetup" | "remoto" | "live-coding" | "python-norte-2025";

type Photo = {
  id: string;
  src: string;
  alt: string;
  kind: Kind[];
  title?: string;
};

const PHOTOS: Photo[] = [
  {
    id: "p1",
    src: "/photos/dojo-1.jpg",
    alt: "Dojo colaborativo no CESUPA",
    kind: ["dojos", "live-coding"],
    title: "Dojo colaborativo",
  },
  {
    id: "p2",
    src: "/photos/meetup-1.jpg",
    alt: "Meetup lotado em Belém",
    kind: ["meetup"],
    title: "Meetup Python Pará",
  },
  {
    id: "p3",
    src: "/photos/remoto-1.jpg",
    alt: "Sessão remota no Discord",
    kind: ["remoto", "live-coding"],
    title: "Live coding remoto",
  },
  {
    id: "p4",
    src: "/photos/python-norte.jpg",
    alt: "Python Norte 2025 - auditório cheio",
    kind: ["python-norte-2025", "meetup"],
    title: "Python Norte 2025",
  },
];

const FILTERS: ({ key: "all" } | { key: Kind })[] = [
  { key: "all" },
  { key: "dojos" },
  { key: "meetup" },
  { key: "remoto" },
  { key: "live-coding" },
  { key: "python-norte-2025" },
];

export default function GallerySection() {
  const [active, setActive] = useState<(typeof FILTERS)[number]["key"]>("all");

  const items = useMemo(() => {
    if (active === "all") return PHOTOS;
    return PHOTOS.filter((p) => p.kind.includes(active));
  }, [active]);

  const countBy = useMemo(() => {
    const map: Record<string, number> = { all: PHOTOS.length };
    PHOTOS.forEach((p) => p.kind.forEach((k) => (map[k] = (map[k] ?? 0) + 1)));
    return map;
  }, []);

  const pillBase =
    "px-4 py-2 rounded-full text-sm transition inline-flex items-center gap-2";
  const pillActive = "bg-[#306998] text-white shadow-md";
  const pillInactive =
    "bg-background/70 border hover:bg-accent/40";

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 ">
            Cada encontro é uma aventura incrível! 🚀
          </h2>
          <p className="text-muted-foreground text-lg">
            Dojos cheios de risadas, meetups lotados de energia, lives animadas
            e muita gente aprendendo junto. Essa galeria é a prova de que a
            magia do Python transforma vidas e conecta corações no Pará (e
            além)! 💙💛🐍
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FILTERS.map(({ key }) => (
            <button
              key={key}
              className={`${pillBase} ${
                active === key ? pillActive : pillInactive
              }`}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
            >
              <span className="capitalize">
                {key === "all" ? "todos" : key.replace("-", " ")}
              </span>
              <Badge
                variant="secondary"
                className={`h-5 px-2 py-0 text-xs ${
                  active === key ? "bg-[#FFD43B] text-black" : ""
                }`}
              >
                {countBy[key] ?? 0}
              </Badge>
            </button>
          ))}
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((p) => (
            <figure
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-background/60 backdrop-blur-sm border"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="space-y-1">
                  {p.title && (
                    <h3 className="text-white font-medium drop-shadow-sm">
                      {p.title}
                    </h3>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {p.kind.map((k) => (
                      <span
                        key={k}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-white/80 text-black"
                      >
                        {k.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-[11px] bg-[#FFD43B] text-black">
                  Python Pará
                </span>
              </div>
            </figure>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center text-muted-foreground mt-10">
            Nenhuma foto para este filtro (ainda) 😉
          </div>
        )}
      </div>
    </section>
  );
}

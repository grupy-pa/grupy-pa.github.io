import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

type EventItem = {
  id: string;
  title: string;
  date?: string; // formato ISO (opcional se não confirmado)
  start?: string;
  end?: string;
  location: string;
  tag?: string;
  description?: string;
  confirmed?: boolean;
  cta?: { label: string; href: string };
};

const events: EventItem[] = [
  {
    id: "pydata-para-2025-09-06",
    title: "I Meetup PyData Pará",
    date: "2025-09-06",
    start: "09:00",
    end: "13:00",
    location: "CESUPA - Campus José Malcher",
    tag: "Inclusão",
    confirmed: true,
    description:
      "O PyData é uma comunidade focada em ciência de dados com ferramentas open source, principalmente Python. Evento gratuito, idealizado pela comunidade e apoiado pela NumFOCUS.",
    cta: {
      label: "Quero participar! 🙋‍♀️",
      href: "https://www.meetup.com/pydata-para/events/310374256/",
    },
  },
  {
    id: "cafe-python-2025-09-20",
    title: "Café com Python",
    location: "Online",
    tag: "Networking",
    confirmed: false,
    description:
      "Um encontro informal para conversar sobre Python, trocar experiências e fortalecer a comunidade em um ambiente descontraído.",
    cta: {
      label: "Confirmar presença ☕",
      href: "#",
    },
  },
  {
    id: "dojo-codigo-2025-10-04",
    title: "Dojo de Código",
    //date: "2025-10-04",
    start: "14:00",
    end: "18:00",
    location: "CESUPA - Campus Alcindo Cacela",
    tag: "Mão na massa",
    confirmed: true,
    description:
      "Um encontro prático de programação colaborativa. Todos são bem-vindos para aprender, praticar e compartilhar conhecimento.",
    cta: {
      label: "Inscrever-se 💻",
      href: "https://forms.gle/seu-link-aqui",
    },
  },
];

const fmtWeekday = (d: Date) =>
  d.toLocaleDateString("pt-BR", { weekday: "long" }).replace(/^\w/, (c) =>
    c.toUpperCase()
  );
const fmtDayMonth = (d: Date) =>
  d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });

export default function Events() {
  const sorted = [...events].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <section id="eventos" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl mb-3">
            Próximos Eventos
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto d-none">
            {
              // esperando um texto legal aqui
            }
          </p>
        </header>

        <ol className="relative border-s border-border/50">
          {sorted.map((ev, i) => {
            const d = ev.date ? new Date(ev.date + "T00:00:00") : null;
            const isPythonBlue = i % 2 === 0;
            const dateColors = isPythonBlue
              ? "bg-[#306998] text-white"
              : "bg-[#FFD43B] text-black";

            return (
              <li key={ev.id} className="ms-6 mb-10">
                <span
                  className={`absolute -start-3 mt-1 h-6 w-6 rounded-full ring-4 ring-background ${dateColors}`}
                  aria-hidden
                />
                <div className="flex items-center gap-3 mb-3">
                  {ev.confirmed && d && (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${dateColors}`}
                    >
                      {fmtWeekday(d)}, {fmtDayMonth(d)}
                    </span>
                  )}
                  {ev.tag && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {ev.tag}
                    </Badge>
                  )}
                </div>

                <Card className="rounded-xl">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{ev.title}</h3>

                    {ev.confirmed && d && (
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                        <div className="inline-flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {fmtDayMonth(d)} ({fmtWeekday(d)})
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {ev.start}
                            {ev.end ? ` às ${ev.end}` : ""}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{ev.location}</span>
                        </div>
                      </div>
                    )}

                    {ev.description && (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {ev.description}
                      </p>
                    )}

                    {ev.cta && (
                      <a
                        href={ev.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full border hover:bg-accent transition text-sm"
                      >
                        {ev.cta.label}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

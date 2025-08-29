import {
  Calendar,
  Users,
  Code,
  Coffee,
  ArrowRight,
  Github,
  Twitter,
  Mail,
  MapPin,
  ChartArea,
  Clock,
  Star,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function () {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto text-center max-w-5xl relative">
        <div className="flex justify-center mb-8">
          <img
            width={100}
            src="https://pa.python.org.br/python.png"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Python Pará</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
          Comunidade de usuários e desenvolvedores que utilizam Python no Pará 🏳️‍🌈
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
          Conecte-se
        </p>

        {/* Redes sociais com cores intercaladas Python */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://github.com/grupy-pa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#306998] text-white hover:opacity-90 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/+nNVbgsz6e1s0MjQx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#FFD43B] text-black hover:opacity-90 transition"
          >
            <Send className="w-6 h-6" /> {/* Telegram */}
          </a>
          <a
            href="https://chat.whatsapp.com/L53vGvj5cNICRsCd6bMQkv"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#306998] text-white hover:opacity-90 transition"
          >
            <MessageCircle className="w-6 h-6" /> {/* WhatsApp */}
          </a>
          <a
            href="https://www.instagram.com/grupypa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#FFD43B] text-black hover:opacity-90 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

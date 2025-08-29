"use client";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Eventos", href: "#eventos" },
    { label: "Recursos", href: "#recursos" },
    { label: "Comunidade", href: "#comunidade" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-card/70 backdrop-blur-md shadow-sm transition">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + título */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              width={50}
              src="https://pa.python.org.br/python.png"
              alt="Python Pará"
            />
            <span className="font-bold text-lg tracking-tight">
              Python Pará
            </span>
          </div>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}

          {/* CTA: Entrar no WhatsApp */}
          <a
            href="https://chat.whatsapp.com/L53vGvj5cNICRsCd6bMQkv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm hover:bg-accent transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="font-medium">Entrar no WhatsApp</span>
          </a>
        </nav>

        {/* Menu mobile */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="md:hidden border-t bg-card/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col items-center gap-4 py-6">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* CTA mobile */}
            <a
              href="https://chat.whatsapp.com/L53vGvj5cNICRsCd6bMQkv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 shadow-sm hover:bg-accent transition"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">Entrar no WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

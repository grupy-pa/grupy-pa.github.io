"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              className="drop-shadow-sm"
            >
              <defs>
                <linearGradient
                  id="blue-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#306998" />
                  <stop offset="100%" stopColor="#4B8BBE" />
                </linearGradient>
                <linearGradient
                  id="yellow-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FFD43B" />
                  <stop offset="100%" stopColor="#FFE873" />
                </linearGradient>
              </defs>
              <path
                d="M50,5 C65,5 75,15 75,30 L75,45 L55,45 L55,40 L70,40 L70,30 C70,20 60,10 50,10 L35,10 C30,10 25,15 25,20 L25,35 L30,35 L30,50 L25,50 C15,50 5,40 5,30 L5,20 C5,10 15,5 25,5 Z"
                fill="url(#blue-gradient)"
              />
              <path
                d="M50,95 C35,95 25,85 25,70 L25,55 L45,55 L45,60 L30,60 L30,70 C30,80 40,90 50,90 L65,90 C70,90 75,85 75,80 L75,65 L70,65 L70,50 L75,50 C85,50 95,60 95,70 L95,80 C95,90 85,95 75,95 Z"
                fill="url(#yellow-gradient)"
              />
              <circle cx="40" cy="25" r="3" fill="white" />
              <circle cx="60" cy="75" r="3" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground font-heading">
              Python Pará
            </h1>
            <p className="text-xs text-muted-foreground">
              Comunidade de usuários e desenvolvedores que utilizam Python no
              Pará 🏳️🌈
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dojos"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Dojos
          </Link>
          <Link
            href="/meetups"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Meetups
          </Link>
          <Link
            href="/#eventos"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Eventos
          </Link>
          <Button className="rounded-full px-6">Participar</Button>
        </nav>
      </div>
    </header>
  );
}
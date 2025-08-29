# Python Pará - Site da Comunidade

Site oficial da comunidade Python Pará, focado em inclusão e desenvolvimento tecnológico na região.

## 🚀 Deploy

Este site está configurado para deploy automático no GitHub Pages.

### Configuração do GitHub Pages

1. Vá para Settings > Pages no seu repositório
2. Selecione "GitHub Actions" como source
3. O deploy será automático a cada push na branch main

### Desenvolvimento Local

```bash
npm install
npm run dev
```

### Build para Produção

```bash
npm run build
```

O site será gerado na pasta `out/` pronto para deploy estático.

## 📁 Estrutura

- `/app` - Páginas Next.js
  - `/` - Página inicial
  - `/dojos` - Página dos dojos de programação
  - `/meetups` - Página dos meetups mensais
- `/components` - Componentes reutilizáveis
  - `navigation.tsx` - Componente de navegação
  - `footer.tsx` - Componente de rodapé
  - `/ui` - Componentes de interface
- `/public` - Arquivos estáticos
- `/.github/workflows` - Configuração do GitHub Actions

## 🎨 Tecnologias

- Next.js 14 com App Router
- Tailwind CSS v4
- TypeScript
- Shadcn/ui para componentes
- GitHub Pages para hosting

## 📄 Páginas

### Página Principal (`/`)
- Hero section com apresentação da comunidade
- Seção de próximos eventos
- Recursos disponíveis para a comunidade

### Dojos (`/dojos`)
- Informações sobre os dojos de programação
- Próximos dojos agendados
- Como participar dos dojos

### Meetups (`/meetups`)
- Próximos meetups mensais
- Informações para palestrantes
- Histórico de meetups anteriores

## 🔧 Componentes Reutilizáveis

- **Navigation**: Barra de navegação com links para todas as páginas
- **Footer**: Rodapé com links úteis e informações de contato
- **Cards**: Componentes para exibir eventos e informações
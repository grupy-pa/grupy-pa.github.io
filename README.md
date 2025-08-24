# Python Pará - Site da Comunidade

Site oficial da comunidade Python Pará, focado em inclusão e desenvolvimento tecnológico na região.

## 🚀 Deploy

Este site está configurado para deploy automático no GitHub Pages.

### Configuração do GitHub Pages

1. Vá para Settings > Pages no seu repositório
2. Selecione "GitHub Actions" como source
3. O deploy será automático a cada push na branch main

### Desenvolvimento Local

\`\`\`bash
npm install
npm run dev
\`\`\`

### Build para Produção

\`\`\`bash
npm run build
\`\`\`

O site será gerado na pasta `out/` pronto para deploy estático.

## 📁 Estrutura

- `/app` - Páginas e componentes Next.js
- `/public` - Arquivos estáticos
- `/.github/workflows` - Configuração do GitHub Actions

## 🎨 Tecnologias

- Next.js 14 com App Router
- Tailwind CSS v4
- TypeScript
- GitHub Pages para hosting

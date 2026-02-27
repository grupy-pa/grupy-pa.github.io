# Contribuindo para o GruPy PA

O site oficial do Grupo de Usuários Python do Pará (GruPy PA) é construído por e para a comunidade. Se você encontrou algum bug, deseja adicionar um novo artigo ao Blog, divulgar um Evento, ou propor um novo design, sua ajuda é **muito bem-vinda**! ❤️

O projeto é mantido utilizando **[Pelican](https://getpelican.com/)** (um gerador de sites estáticos escrito em Python) e hospedado via **GitHub Pages**.

---

## 🚀 Como Executar o Projeto Localmente

Para testar ou desenvolver o site no seu computador, você precisa ter o Python 3.8+ instalado.

### 1. Clonando o repositório
```bash
git clone https://github.com/grupy-pa/grupy-pa.github.io.git
cd grupy-pa.github.io
```

### 2. Ambientes Virtuais & Dependências
Recomendamos o uso de um ambiente virtual (venv) para evitar conflitos no seu sistema.
```bash
python3 -m venv .env
source .env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Rodando o servidor local do Pelican
O Pelican vem com comandos embutidos de auto-reload. Isso significa que ele vai automaticamente regenerar o HTML toda vez que você editar um arquivo ou artigo.
```bash
pelican --autoreload --listen
```

Abra o navegador em: [http://localhost:8000/](http://localhost:8000/)

---

## 📝 Como Adicionar um Novo Artigo no Blog

O Pelican lê páginas e posts na linguagem Markdown (`.md`).

1. Crie um novo arquivo markdown na pasta `content/blog/`:
   ```bash
   touch content/blog/meu-primeiro-post.md
   ```
2. Adicione os metadados (Frontmatter) exigidos pelo Pelican no início do arquivo:
   ```md
   Title: Como começar com Python
   Date: 2026-02-28 10:00
   Author: Seu Nome
   Category: Tutorial
   Tags: Python, Iniciante
   Slug: como-comecar-com-python
   Summary: Um pequeno resumo do que os leitores vão encontrar na postagem.

   Aqui entra o conteúdo do post em formato **Markdown**, onde você pode adicionar blocos de código livremente!
   ```

---

## 🎟️ Como Adicionar um Evento

Os eventos do GruPy PA são gerenciados através de arquivos YAML na pasta `extradata/events/`. Cada evento possui metadados estruturados que facilitam a organização e exibição no site.

### Passo a Passo:

1. **Copie o template de evento:**
   ```bash
   cp extradata/events/template.yaml extradata/events/meu-evento.yaml
   ```

2. **Preencha os campos do arquivo YAML:**
   ```yaml
   id: meetup-marco-2026
   title: "1º Meetup GruPy PA do Ano"
   start_date: "2026-03-15"
   end_date: "2026-03-15"
   start_time: "19:00"
   end_time: "21:00"
   duration_minutes: 120
   location: "Hangar Centro de Convenções, Belém - PA"
   description: "Venha participar do nosso primeiro meetup presencial do ano!"
   image_url: "images/meetup-marco.jpg"
   tags:
     - python
     - meetup
     - networking
   speakers:
     - name: "João Silva"
       bio: "Desenvolvedor Python há 5 anos"
       social_links:
         twitter: "joaosilva"
         github: "joaosilva"
   registration_url: "https://sympla.com.br/exemplo"
   status: "scheduled"  # scheduled, completed, cancelled
   links:
     - title: "Slides"
       url: ""
     - title: "Video"
       url: ""
   ```

### Campos Obrigatórios:
- **id**: Identificador único do evento (use formato kebab-case)
- **title**: Nome do evento
- **start_date** e **end_date**: Datas no formato YYYY-MM-DD
- **start_time** e **end_time**: Horários no formato HH:MM
- **location**: Local do evento (presencial ou "Online")
- **description**: Descrição breve do evento
- **status**: Estado do evento (scheduled, completed, cancelled)

### Campos Opcionais:
- **image_url**: Caminho para imagem do evento
- **tags**: Lista de tags relacionadas
- **speakers**: Lista de palestrantes com nome, bio e redes sociais
- **registration_url**: Link para inscrição
- **links**: Links relacionados (slides, vídeos, repositórios)

### Dicas:
- Use um **id** descritivo e único para cada evento
- Mantenha a **description** concisa e informativa
- Adicione **tags** relevantes para facilitar a busca
- Atualize o **status** após o evento (de "scheduled" para "completed")
- Adicione **links** de materiais após o evento acontecer

---

## 🛠️ Como Contribuir Código (HTML, CSS, Funcionalidades)

Toda a parte visual do site vive no diretório `themes/grupy-pa`.
- Extensões HTML estão em `themes/grupy-pa/templates/`.
- Regras de Estilização estão em `themes/grupy-pa/static/css/main.css`. (O tema utiliza Bootstrap 5 e Variáveis CSS para suporte Automático de **Dark Mode**).

### Passos da Contribuição:
1. Faça o Fork deste repositório para a sua conta.
2. Crie uma Branch nova baseada na branch `main`: `git checkout -b feature/minha-melhoria`
3. Trabalhe nas suas edições.
4. Faça commit de forma descritiva: `git commit -m "feat: Adicionado layout novo para seção de palestrantes"`
5. Faça push para a sua branch forkada orginal: `git push origin feature/minha-melhoria`
6. Abra um Pull Request e peça uma revisão para os mantenedores.

## ⚖️ Código de Conduta
O ambiente e código da comunidade GruPy PA preza por respeito mútuo. Siga as regras de conduta dispostas publicamente pela Python Software Foundation (PSF) para interações e Pull Requests sadios no repositório.

**Feliz Hacking! 💻🐍**

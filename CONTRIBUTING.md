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

A arquitetura do site separa formalmente eventos de postagens no sistema de templates do Pelican. Todo evento deve ficar na pasta `events`.

1. Crie o arquivo na pasta `content/events/`:
   ```bash
   touch content/events/meetup-marco.md
   ```
2. Preencha os metadados de página associando-os ao template correto:
   ```md
   Title: 1º Meetup GruPy PA do Ano
   Date: 2026-03-15
   Location: Hangar Centro de Convenções, Belém - PA
   Template: event
   Registration_Link: https://sympla.com.br/exemplo

   Venha participar do nosso primeiro meetup presencial...
   ```
*(Nota: O parâmetro `Template: event` força o Pelican a usar nosso layout bonito especifico para eventos!)*

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

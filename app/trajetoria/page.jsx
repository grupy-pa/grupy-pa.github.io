"use client";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const themePython = {
  bg: "#0f1222",
  card: "#141734",
  text: "#E6EAF2",
  subtext: "#AAB2C8",
  pythonBlue: "#306998",
  pythonYellow: "#FFD43B",
  accent: "#4B8BBE",
};

const Global = createGlobalStyle`
  :root { color-scheme: dark; }
  html, body { background: ${themePython.bg}; }
  /* tipografia fluida */
  h1,h2,h3 { line-height: 1.18; }
  * { box-sizing: border-box; }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
`;

const Container = styled.div`
  padding: clamp(16px, 2vw, 24px);
  max-width: 1200px;
  margin: 0 auto;
  color: ${(p) => p.theme.text};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Cascadia Mono",
    "Segoe UI Mono", "Roboto Mono", "Courier New", monospace;
`;

const Title = styled.h2`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 0 18px;
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: clamp(18px, 2.2vw, 24px);
  text-align: center;

  &::before,
  &::after {
    content: "";
    height: 2px;
    flex: 1;
    background: linear-gradient(90deg, transparent, ${(p) => p.theme.accent});
  }
  &::after {
    background: linear-gradient(90deg, ${(p) => p.theme.pythonYellow}, transparent);
  }

  /* evita poluição visual em telas muito estreitas */
  @media (max-width: 520px) {
    &::before, &::after { display: none; }
  }
`;

const Card = styled.div`
  background: ${(p) => p.theme.card};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  overflow: hidden;
`;

/* Cabeçalho tipo tabela em telas médias/grandes; some no mobile */
const TableHead = styled.div`
  background: linear-gradient(
    135deg,
    ${(p) => p.theme.pythonBlue} 0%,
    ${(p) => p.theme.accent} 50%,
    ${(p) => p.theme.pythonYellow} 100%
  );
  padding: 14px 16px;
  color: #0b0e1a;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: grid;
  grid-template-columns: 120px 140px 1fr 120px;
  gap: 12px;
  font-size: clamp(11px, 1.5vw, 12px);

  @media (max-width: 1000px) {
    grid-template-columns: 100px 120px 1fr 100px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

/* Linha responsiva: vira "card" empilhado no mobile */
const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 140px 1fr 120px;
  gap: 12px;
  padding: 14px 16px;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background:
    linear-gradient(90deg, rgba(75, 139, 190, 0.06) 0, transparent 35%),
    radial-gradient(1000px 40px at 0% 0%, rgba(255, 212, 59, 0.04), transparent);
  transition: transform 0.08s ease, background 0.2s ease;

  &:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
  &:hover { transform: translateY(-1px); }

  @media (max-width: 1000px) {
    grid-template-columns: 100px 120px 1fr 100px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    margin: 10px;
  }
`;

/* Exibe rótulos no mobile usando data-label */
const Cell = styled.div`
  color: ${(p) => p.theme.text};
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 6px;
    &::before {
      content: attr(data-label);
      font-size: 12px;
      color: ${(p) => p.theme.subtext};
      text-transform: uppercase;
      letter-spacing: 0.04em;
      font-weight: 700;
    }
  }
`;

const YearPill = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${(p) => p.theme.pythonBlue};
  color: #fff;
  font-weight: 700;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.25);
`;

const MonthTag = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 8px;
  background: ${(p) => p.theme.pythonYellow};
  color: #1a1a1a;
  font-weight: 800;
`;

const FotoSlot = styled.div`
  width: clamp(96px, 20vw, 150px);
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  overflow: hidden;
  border: 2px dashed ${(p) => p.theme.pythonYellow};
  background:
    linear-gradient(45deg, rgba(48, 105, 152, 0.15) 25%, transparent 25%) 0 0/12px 12px,
    linear-gradient(-45deg, rgba(255, 212, 59, 0.15) 25%, transparent 25%) 0 0/12px 12px,
    linear-gradient(45deg, transparent 75%, rgba(48, 105, 152, 0.15) 75%) 0 0/12px 12px,
    linear-gradient(-45deg, transparent 75%, rgba(255, 212, 59, 0.15) 75%) 0 0/12px 12px;
  display: grid;
  place-items: center;
  font-size: 11px;
  color: ${(p) => p.theme.subtext};
  position: relative;

  &::after {
    content: "🐍";
    position: absolute;
    bottom: 4px;
    font-size: 14px;
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 700px) {
    justify-self: start;
  }
`;

const Legend = styled.div`
  margin: 10px 2px 0;
  font-size: 12px;
  color: ${(p) => p.theme.subtext};
  display: flex;
  align-items: center;
  gap: 8px;

  code {
    background: rgba(75, 139, 190, 0.15);
    border: 1px solid rgba(75, 139, 190, 0.35);
    padding: 2px 6px;
    border-radius: 6px;
    color: ${(p) => p.theme.text};
  }
`;

const Trajetoria = () => {
  const dados = [
    { ano: 2025, mes: "11 de julho", descricao: "Início da comunidade.", foto: "/python.png" },
    { ano: 2025, mes: "11 de julho", descricao: "Live coding: Programe Assistes virtual de IA com Python e ChatGPT.", foto: "/livecoding.jpeg" },
    { ano: 2025, mes: "19 de julho", descricao: "I Coding Dojo Python: API Rest com Python.", foto: "/dojo.jpeg" },
    { ano: 2025, mes: "06 de Setembro", descricao: "I Meetup PyData Pará", foto: "/pydata.jpeg" },
    { ano: 2025, mes: "13 de Setembro", descricao: "Python Pará esteve no Xibé Sec 2025", foto: "/xibesec-2025.jpeg" },
  ];

  return (
    <ThemeProvider theme={themePython}>
      <main>
        <Header />
        <Container>
          <Title>Trajetória da Comunidade Python Pará!</Title>

          <Card>
            <TableHead>
              <div>Ano</div>
              <div>Mês</div>
              <div>Descrição</div>
              <div>Foto</div>
            </TableHead>

            {dados.map((item, i) => (
              <Row key={i}>
                <Cell data-label="Ano">
                  <YearPill>{item.ano}</YearPill>
                </Cell>

                <Cell data-label="Mês">
                  <MonthTag>{item.mes}</MonthTag>
                </Cell>

                <Cell data-label="Descrição">{item.descricao}</Cell>

                <Cell data-label="Foto">
                  {item.foto ? (
                    <FotoSlot>
                      <img
                        src={item.foto}
                        alt={`Foto do evento: ${item.descricao}`}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 700px) 40vw, 150px"
                      />
                    </FotoSlot>
                  ) : (
                    <FotoSlot>Foto</FotoSlot>
                  )}
                </Cell>
              </Row>
            ))}
          </Card>

          <Legend>
            <span>💡</span>
            <span>
              Em telas pequenas, a tabela vira lista; os rótulos <code>Ano</code>, <code>Mês</code>, etc. aparecem acima dos valores.
            </span>
          </Legend>
        </Container>
        <Footer />
      </main>
      <Global />
    </ThemeProvider>
  );
};

export default Trajetoria;

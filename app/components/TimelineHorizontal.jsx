"use client";

// src/TimelineHorizontal.jsx
import React from "react";
import styled, { css } from "styled-components";

/* ===================== estilos básicos ===================== */
const Wrap = styled.section`
  --rail: #7a7a7a;           /* cor do trilho */
  --rail-light: #bdbdbd;     /* brilho do trilho */
  --bubble-bg: #fff;         /* fundo do círculo */
  --card-text: #374151;

  color-scheme: light dark;

  @media (prefers-color-scheme: dark) {
    --bubble-bg: #0f1216;
    --card-text: #e5e7eb;
  }

  width: 100%;
  overflow-x: auto;
  padding: 1.5rem 0 0.5rem;
`;

const Row = styled.div`
  position: relative;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(230px, 1fr);
  gap: 2.75rem;
  padding: 2.25rem 2rem 1rem;
  min-width: 720px; /* comporta de 3 a 4 anos em telas pequenas */
`;

/* trilho ondulado ao fundo (SVG posicionado) */
const Rail = styled.svg`
  position: absolute;
  inset: 0 0 auto 0;
  width: 100%;
  height: 110px; /* ajusta a “altura da onda” */
  pointer-events: none;
`;

/* cada grupo de ano */
const YearCol = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-items: start;
  text-align: center;
`;

/* círculo do ano
   -> usa transient prop $borderColor para não vazar para o DOM */
const YearBubble = styled.div`
  place-self: center;
  width: 110px;
  height: 110px;
  border-radius: 999px;
  background: var(--bubble-bg);
  border: 8px solid ${({ $borderColor }) => $borderColor};
  display: grid;
  place-items: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, .12);

  h3 {
    margin: 0;
    font-size: 1.9rem;
    line-height: 1;
    font-weight: 800;
  }
`;

const Topic = styled.div`
  margin-top: .75rem;

  h4 {
    margin: .35rem 0 .15rem;
    font-size: .9rem;
    letter-spacing: .02em;
  }
  p {
    margin: 0;
    font-size: .9rem;
    color: #6b7280;
  }
`;

/* lista de meses */
const MonthList = styled.ul`
  margin: 0.75rem 0 0;
  padding: 0 .25rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .4rem .5rem;

  @media (max-width: 900px){
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Month = styled.li`
  font-size: .8rem;
  line-height: 1.1;
  padding: .35rem .5rem;
  border-radius: .5rem;
  border: 1px solid rgba(0,0,0,.08);
  background: color-mix(in oklab, currentColor 6%, var(--bubble-bg) 94%);
  color: var(--card-text);
  text-align: left;

  strong{
    font-weight: 700;
    margin-right: .25rem;
  }
`;

/* conector “gomo” entre bolhas, para reforçar a onda
   -> usa transient prop $side para não vazar para o DOM */
const Connector = styled.div`
  position: absolute;
  top: 48px; /* altura média do trilho */
  ${({ $side }) =>
    $side === "left"
      ? css`left: -1.4rem;`
      : css`right: -1.4rem;`}
  width: 2.8rem;
  height: 1.65rem;
  background:
    radial-gradient(120% 140% at 0% 100%, var(--rail-light) 20%, var(--rail) 55%, transparent 56%) left/50% 100% no-repeat,
    radial-gradient(120% 140% at 100% 100%, var(--rail-light) 20%, var(--rail) 55%, transparent 56%) right/50% 100% no-repeat;
  transform: translateY(-50%);
  opacity: .9;
`;

/* ===================== componentes ===================== */

function WavyRail({ steps }) {
  // gera um caminho ondulado baseado no número de anos (steps)
  const width = steps * 260;      // aprox da largura por coluna
  const height = 110;
  const mid = height * 0.5;
  const amp = 26;                 // amplitude da onda

  // path com curvas C entre cada “passo”
  let d = `M 40 ${mid}`;
  for (let i = 0; i < steps; i++) {
    const startX = 40 + i * 260;
    const endX = startX + 220;
    d += ` C ${startX + 55} ${mid - amp}, ${startX + 165} ${mid + amp}, ${endX} ${mid}`;
  }

  return (
    <Rail viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden>
      <path d={d} fill="none" stroke="var(--rail)" strokeWidth="14" strokeLinecap="round" opacity=".55"/>
      <path d={d} fill="none" stroke="var(--rail-light)" strokeWidth="6" strokeLinecap="round" opacity=".7"/>
    </Rail>
  );
}

/**
 * data: [
 *   { year: 2016, color: "#F59E0B", topicTitle?, topicText?, months: [{ name: "Jan", text? }, ...] }
 * ]
 */
export default function TimelineHorizontal({ data = [] }) {
  const steps = Math.max(data.length, 1);

  return (
    <Wrap>
      <Row>
        <WavyRail steps={steps} />

        {data.map((y, idx) => (
          <YearCol key={y.year}>
            {/* conectores para dar a “união” visual */}
            {idx > 0 && <Connector $side="left" />}
            {idx < data.length - 1 && <Connector $side="right" />}

            <YearBubble $borderColor={y.color}>
              <h3>{y.year}</h3>
            </YearBubble>

            {(y.topicTitle || y.topicText) && (
              <Topic>
                {y.topicTitle && <h4>{y.topicTitle}</h4>}
                {y.topicText && <p>{y.topicText}</p>}
              </Topic>
            )}

            {!!y.months?.length && (
              <MonthList>
                {y.months.map((m, i) => (
                  <Month key={i} title={m.text || ""}>
                    <strong>{m.name}</strong>
                    {m.text || ""}
                  </Month>
                ))}
              </MonthList>
            )}
          </YearCol>
        ))}
      </Row>
    </Wrap>
  );
}

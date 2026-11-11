const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const estrofas = [
  ["Si el cielo me diera a escoger", "una sola razón para amanecer,", "la escogería con tu nombre", "y con tu manera de hacerme volver."],
  ["Contigo aprendí que el tiempo", "no se mide en horas ni en días,", "sino en las veces que tu risa", "me devuelve la alegría."],
  ["Tus ojos son mi camino,", "tu voz, mi lugar de reposo;", "en tus brazos el mundo entero", "se vuelve sereno y hermoso."],
  ["No te prometo estrellas,", "que están muy lejos de aquí;", "te prometo mis mañanas,", "mis esfuerzos y mi sí."],
  ["Y si la vida nos pone", "mil caminos por andar,", "escogeré cada uno", "con tal de contigo caminar."],
];

const petalos = Array.from({ length: 16 }, (_, i) => ({
  l: `${(i * 37 + 8) % 100}%`,
  s: `${10 + ((i * 3) % 9)}px`,
  t: `${9 + ((i * 5) % 7)}s`,
  d: `-${(i * 13) % 10}s`,
}));

function Esquina({ pos }) {
  return (
    <svg className={`esq ${pos}`} viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="#b5656b" strokeWidth="1.8" strokeLinecap="round">
        <path d="M8 92C8 48 32 14 92 8" />
        <path d="M8 66C22 62 30 52 32 38" />
        <path d="M34 92C38 78 48 70 62 68" />
      </g>
      <g fill="#7f9c70">
        <ellipse cx="30" cy="30" rx="9" ry="4" transform="rotate(-45 30 30)" />
        <ellipse cx="52" cy="14" rx="8" ry="3.5" transform="rotate(-15 52 14)" />
        <ellipse cx="14" cy="52" rx="8" ry="3.5" transform="rotate(-75 14 52)" />
      </g>
      <circle cx="14" cy="14" r="7" fill="#c9566f" />
      <circle cx="14" cy="14" r="3" fill="#f3b5c2" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="petals" aria-hidden="true">
        {petalos.map((p, i) => (
          <span key={i} className="petal" style={{ "--l": p.l, "--s": p.s, "--t": p.t, "--dl": p.d }} />
        ))}
      </div>
      <main className="letter">
        <Esquina pos="tl" />
        <Esquina pos="tr" />
        <Esquina pos="bl" />
        <Esquina pos="br" />
        <div className="seal" aria-hidden="true">♥</div>

        <p className="kicker">Una carta de amor</p>
        <div className="photo">
          <div className="ring" />
          {/* Pon tu foto en public/genesis.jpg */}
          <img src={`${base}/genesis.jpg`} alt="Genesis María" />
        </div>
        <h1 className="to">Mi amada Genesis María</h1>
        <div className="orn" aria-hidden="true">❦ ❦ ❦</div>

        {estrofas.map((v, i) => (
          <p key={i} className="st" style={{ "--d": `${3.2 + i * 1.1}s` }}>
            {v.map((linea, j) => (
              <span key={j}>{linea}<br /></span>
            ))}
          </p>
        ))}

        <div className="sign">
          <span>Con todo mi amor,</span>
          <b>Jayro Adoni Mejía</b>
          <i className="heart" aria-hidden="true">♥</i>
        </div>
      </main>
    </>
  );
}
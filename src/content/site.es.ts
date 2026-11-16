/**
 * Spanish copy of the PHYSIX site (served under /es/).
 *
 * Only words live here. Links, figures and the pending placeholders come from site.ts, so they
 * are still changed in one place. Every export has the same shape as its English counterpart
 * (the `typeof en.x` annotations make an editor flag any difference).
 *
 * If you change a sentence in site.ts, change the matching sentence here.
 */
import * as en from './site';

export const meta: typeof en.meta = {
  name: 'PHYSIX',
  title: 'PHYSIX: dirige una base en Marte durante la tormenta de polvo real de 2018',
  description:
    'PHYSIX es un entrenador de misión en el navegador para estudiantes de 7 a 15 años. Dirige una base en Marte durante la tormenta de polvo real de 2018. Un instructor con IA propone; un simulador con valores publicados por la NASA decide.',
  lang: 'es',
  langName: 'Español',
  nonAffiliation: 'PHYSIX no está afiliado a la NASA ni cuenta con su aval.',
};

export const ui: typeof en.ui = {
  skip: 'Saltar al contenido',
  sections: 'Secciones',
  home: 'inicio',
  menu: 'Menú',
  site: 'Sitio',
  reference: 'Referencia',
  language: 'Idioma',
  playSoonShort: 'Jugar: pronto',
  videoTitle: 'Video de PHYSIX',
  quantity: 'Magnitud',
  value: 'Valor',
  source: 'Fuente',
  constant: 'Constante',
  unit: 'Unidad',
  note: 'Nota',
  why: 'Por qué',
  event: 'Evento',
  affects: 'Afecta a',
  effects: 'Efectos en el juego',
  job: 'Tarea',
  model: 'Modelo',
  can: 'Qué puede afectar',
  cannot: 'Qué no puede afectar',
  withoutAi: 'Sin IA',
  notFoundTitle: 'Perdidos en Marte',
  notFoundBody: 'Esta página no existe. La base queda por aquí.',
  tablesNote: 'Las tablas se copian tal cual del repositorio del juego, por eso sus notas están en inglés.',
  shotsLanguageNote: 'Las capturas muestran la interfaz en inglés. El juego está completo también en español.',
};

export const pages: typeof en.pages = {
  home: {
    nav: 'Inicio',
    title: meta.title,
    description: meta.description,
  },
  science: {
    nav: 'Ciencia e IA',
    title: 'Ciencia, IA y evidencia',
    description: 'La tormenta de polvo real de 2018 y los valores publicados por la NASA en el simulador, cómo se mantiene a raya a la IA y qué probamos: cifras, fuentes y límites.',
  },
  about: {
    nav: 'Nosotros',
    title: 'Nosotros',
    description: 'Las seis personas que construyeron PHYSIX para el NASA Space Apps Challenge 2026, las decisiones detrás del proyecto y cómo se usó la IA para construirlo.',
  },
  credits: {
    nav: 'Créditos',
    title: 'Créditos y referencias',
    description: 'Cada imagen, fuente tipográfica, biblioteca y fuente de datos usada en PHYSIX y en este sitio.',
  },
};

export const sciencePage: typeof en.sciencePage = {
  kicker: 'Ciencia e IA',
  title: 'Qué es real, qué decide la IA y qué probamos.',
  lede: 'Tres preguntas que vale la pena hacerle a cualquier juego educativo con IA. Estas son nuestras respuestas, con los números, sus fuentes y sus límites.',
  tocLabel: 'En esta página',
  toc: [
    { href: en.sciencePage.toc[0]!.href, label: 'La regla de la IA', text: 'La IA propone, el simulador decide.' },
    { href: en.sciencePage.toc[1]!.href, label: 'La ciencia', text: 'Una tormenta real y valores publicados.' },
    { href: en.sciencePage.toc[2]!.href, label: 'La evidencia', text: 'Qué probamos y en qué fallamos.' },
    { href: en.sciencePage.toc[3]!.href, label: 'Estado', text: 'Qué funciona hoy y qué sigue.' },
  ],
};

export const play: typeof en.play = {
  label: 'Jugar ahora',
  pendingLabel: 'Enlace para jugar: muy pronto',
  pendingNote: 'El juego aún no está publicado. Este botón se activa cuando exista el enlace público.',
  noteAi: 'Funciona en tu navegador. Sin cuenta.',
  noteRules: 'La demo alojada funciona con reglas incorporadas; el instructor con IA necesita una llave en el servidor.',
};

export const hero: typeof en.hero = {
  eyebrow: 'Un entrenador de misión para astronautas júnior',
  title: ['Dirige una base en Marte.', 'Cada decisión cuesta algo.'],
  body:
    'PHYSIX es un juego de navegador para estudiantes de 7 a 15 años. Diriges una base en Marte durante la tormenta de polvo real de 2018 y equilibras aire y agua, energía, protección contra la radiación y comida. Un instructor con IA plantea los problemas. Un simulador con valores publicados por la NASA decide qué pasa de verdad.',
  bodyShort:
    'Un juego de navegador para estudiantes de 7 a 15 años. Dirige una base en Marte durante la tormenta de polvo real de 2018. Un instructor con IA plantea los problemas; un simulador con valores publicados por la NASA decide qué pasa de verdad.',
  watchLabel: 'Ver el recorrido de 3 minutos',
  watchPendingLabel: 'Ver cómo funciona',
  small: ['Solo navegador', 'Sin cuenta', 'English y español'],
  scrollCue: 'Baja para vivir la tormenta',
  imageAlt: 'La base de PHYSIX en Marte en un día despejado: un hábitat con cúpula, un invernadero, paneles solares, un rover y dos astronautas.',
};

export const storm: typeof en.storm = {
  kicker: 'La misión',
  title: 'Vive la tormenta, sol por sol.',
  run: 'Corrida del simulador: semilla 1, rango Aprendiz',
  hud: { sol: 'Sol', sky: 'Opacidad del cielo', solar: 'Solar hoy', battery: 'Batería', unit: 'kWh', demand: 'La base usa {demand} kWh por sol' },
  chart: {
    title: 'Energía, sol por sol',
    solar: 'Los paneles dieron',
    need: 'La base necesitaba',
    battery: 'Carga de la batería',
    timeline: 'Opacidad del cielo, soles 1 a 10',
  },
  states: { clear: 'Despejado', storm: 'Tormenta', brownout: 'Apagón parcial', solar: 'Evento solar' },
  steps: [
    {
      tag: 'Cielo despejado',
      title: 'Sol 1. Una mañana tranquila en Marte.',
      body: 'Los paneles solares dan {solar} kWh, más de los {demand} que usa la base. La batería está llena. La tripulación hace ciencia y apila tierra sobre el hábitat.',
      alt: 'La base en un día despejado, con la batería llena.',
    },
    {
      tag: 'Tormenta de polvo',
      title: 'Sol 2. Llega el polvo.',
      body: 'La opacidad del cielo salta de {prevTau} a {tau}. Los paneles dan {solar} kWh y la base sigue necesitando {demand}. La batería empieza a pagar la diferencia.',
      alt: 'La misma base bajo un cielo naranja y polvoriento cuando llega la tormenta.',
    },
    {
      tag: 'Tormenta de polvo',
      title: 'Sol 3. La tormenta se espesa.',
      body: 'Solo llegan {solar} kWh a los paneles. Ya se fue media batería y el pronóstico dice que empeora.',
      alt: 'La base con polvo más denso; la luz es más tenue y más roja.',
    },
    {
      tag: 'Tormenta + evento solar',
      title: 'Sol 4. Un evento solar golpea en plena tormenta.',
      body: 'La radiación sube mientras los paneles dan {solar} kWh. ¿Refugiar a la tripulación o seguir trabajando? A la batería le quedan {battery} kWh.',
      alt: 'La base en una tormenta oscura durante un evento de partículas solares; las luces de la base están más tenues.',
    },
    {
      tag: 'Apagón parcial',
      title: 'Sol 5. La batería está vacía.',
      body: 'Apagón parcial. La base pide {demand} kWh y solo hay {available}. Se cortan dos sistemas; el soporte vital, al final.',
      alt: 'La base en la tormenta oscura con casi todas las luces apagadas.',
    },
    {
      tag: 'Apagón parcial',
      title: 'Sol 6. Otro sol a oscuras.',
      body: 'El cielo baja a {tau}, pero los paneles dan {solar} kWh y la batería no tiene nada que aportar. El laboratorio se queda sin energía y se pierden {scienceLost} puntos de ciencia.',
      alt: 'La base con las luces bajas mientras la tormenta empieza a ceder.',
    },
    {
      tag: 'Tormenta de polvo',
      title: 'Sol 7. El polvo cede.',
      body: 'Los paneles llegan a {solar} kWh, todavía por debajo de los {demand} que necesita la base, y el laboratorio sigue apagado. El invernadero responde: una cosecha de {harvest} kg de comida fresca.',
      alt: 'La base bajo una bruma más ligera; el invernadero acaba de cosecharse.',
    },
    {
      tag: 'Cielo despejado',
      title: 'Sol 8. El cielo se despeja.',
      body: 'Los paneles vuelven a dar {solar} kWh, más de lo que necesita la base, y la batería empieza a recuperarse: {battery} kWh al terminar el sol.',
      alt: 'La base otra vez bajo un cielo despejado, con un montículo de regolito apilado contra el hábitat.',
    },
    {
      tag: 'Cielo despejado',
      title: 'Sol 9. A ponerse al día.',
      body: 'Con toda la energía, el laboratorio trabaja muchas horas y la ciencia llega a {science} puntos; la misión necesita {scienceTarget}. La tripulación trabaja sin descanso y la moral baja.',
      alt: 'La base en un día despejado con las luces otra vez encendidas.',
    },
    {
      tag: 'Misión cumplida',
      title: 'Sol 10. Misión cumplida.',
      body: 'La tripulación está sana y la ciencia está completa. La dosis de radiación quedó en {dose} de un presupuesto de {doseBudget} mSv, y quedan {battery} kWh para la siguiente tripulación. Esta tripulación lo logró. ¿Lo lograría la tuya?',
      alt: 'La base en el último sol de la misión, bajo un cielo despejado.',
    },
  ],
};

export const move: typeof en.move = {
  kicker: 'Tu turno',
  title: 'Cada decisión ayuda a un sistema y le cuesta a otro.',
  body: 'Esa tormenta es la misión. Cada sol recibes un informe, haces un plan y ves qué le hace a la base. Cuatro sistemas compiten por la misma energía y las mismas horas de tripulación.',
  systems: [
    {
      id: 'life',
      name: 'Aire y agua',
      body: 'El soporte vital recicla el agua y mantiene el aire respirable. Es lo último que la base corta en un apagón, y funciona con energía.',
    },
    {
      id: 'power',
      name: 'Energía',
      body: 'Paneles solares y una batería. El polvo en el cielo recorta los paneles, y todo lo demás funciona con lo que queda.',
    },
    {
      id: 'rad',
      name: 'Radiación',
      body: 'Apila regolito sobre el hábitat o manda a la tripulación al refugio. Las dos cosas le quitan horas a la ciencia.',
    },
    {
      id: 'food',
      name: 'Comida',
      body: 'El invernadero da comida fresca con luz, agua y cuidados. Baja sus lámparas para ahorrar energía y el cultivo lo paga.',
    },
  ],
  more: 'Mira cómo transcurre un sol',
};

export const proof: typeof en.proof = {
  kicker: '¿Se puede confiar?',
  title: 'Números reales, una IA revisada, pruebas que puedes leer.',
  stats: [
    { value: en.proof.stats[0]!.value, label: 'constantes del simulador con cita y URL' },
    { value: en.proof.stats[1]!.value, label: 'acciones entre las que la IA puede elegir, y nada más' },
    { value: en.proof.stats[2]!.value, label: 'pruebas automáticas pasan' },
  ],
  link: 'Mira la ciencia, la regla de la IA y la evidencia',
};

export const watch: typeof en.watch = {
  kicker: 'Míralo',
  title: 'Todo el juego en tres minutos.',
  body: 'Un sol completo en el rango Aprendiz, el mismo momento en Especialista, un plan escrito con las palabras del jugador, una petición imposible rechazada y el evento real detrás de la misión.',
  playVideo: 'Reproducir el video',
  pendingTitle: 'Video extendido: enlace pendiente',
  pendingBody: 'El video del recorrido está en edición. Se verá aquí.',
  short: 'Ver la demo de 30 segundos',
  embedNote: 'El video se carga desde su servidor solo cuando pulsas reproducir.',
};

export const problem: typeof en.problem = {
  kicker: 'El problema',
  title: 'Los estudiantes ven cómo termina una misión, no cómo se decidió.',
  body: [
    'Las lecciones sobre el espacio suelen simplificar demasiado las disyuntivas de una misión real, o enterrarlas en complejidad.',
    'PHYSIX las vuelve tangibles. Cada decisión ayuda a un sistema y le cuesta a otro, y lo ves ocurrir en la base: las luces bajan cuando falta energía, el cielo cambia con el polvo, el montículo de protección crece.',
  ],
  context: 'Hecho para el NASA Space Apps Challenge 2026, reto "Build a Junior Astronaut Mission Trainer".',
  shotAlt: 'El juego mientras corre un sol: un arco dibujado sobre la base 3D une el laboratorio con una etiqueta que dice "Science: more", junto a los cuatro indicadores de sistema y la lista de causas.',
  shotCaption: 'Un sol de tormenta en marcha dentro del juego. Cada causa se dibuja sobre la base y se explica con palabras simples. Los indicadores de la izquierda son los cuatro sistemas.',
};

export const how: typeof en.how = {
  kicker: 'Cómo funciona',
  title: 'Un sol, cinco pasos.',
  intro: 'Un sol es un día en Marte: 24,6 horas. Una misión dura diez soles, y cada uno sigue el mismo ciclo.',
  steps: [
    { name: 'Informe', body: 'Qué viene, con el pronóstico de los próximos tres soles.', shot: 'step-briefing', alt: 'Panel de informe: hay una tormenta de polvo activa, con pronóstico de tres soles y mensajes cortos de Houston.ai y Apollo.' },
    { name: 'Plan', body: 'Elige tarjetas, usa los controles o dilo con tus palabras.', shot: 'step-plan', alt: 'Panel de plan: tres tarjetas de opción; cada una indica qué ayuda y qué cuesta.' },
    { name: 'Predicción', body: 'Adivina qué le hará tu plan a la base.', shot: 'step-predict', alt: 'Panel de predicción que pregunta si la base quedará más o menos protegida de la radiación.' },
    { name: 'Ejecución', body: 'Mira la cadena de causas sobre la base, una causa a la vez.', shot: 'step-run', alt: 'El sol en marcha: una lista de causas que se revelan paso a paso.' },
    { name: 'Revisión', body: 'Compara tu predicción con lo que pasó. O rebobina y prueba otro plan.', shot: 'step-review', alt: 'Panel de resultados que compara la predicción del jugador con lo que ocurrió de verdad.' },
  ],
  note: 'Houston.ai, el instructor con IA, decide qué problemas llegan y cuánta ayuda recibes. Apollo habla desde el lado de la tripulación. Puedes rebobinar a cualquier sol anterior y probar otro plan.',
  sol0: 'Quien juega por primera vez empieza con el Sol 0, un sol de práctica guiado: un elemento resaltado a la vez, incluida una petición imposible que el juego rechaza. El Sol 0 tiene texto fijo y no usa IA.',
};

export const ranks: typeof en.ranks = {
  kicker: 'De 7 a 15 años, y más allá',
  title: 'Cuatro rangos. La misma misión. Distinta profundidad.',
  intro: 'La tormenta y el simulador son los mismos en todos los rangos. Lo que cambia es cuánto de la base tienes en las manos.',
  items: [
    {
      name: 'Aprendiz',
      body: 'Una decisión por sol entre tres tarjetas ya hechas; cada una muestra qué ayuda y qué cuesta. Palabras simples, sin unidades.',
      shot: 'rank-trainee',
      alt: 'Panel de plan de Aprendiz: tres tarjetas, cada una con lo que ayuda y lo que cuesta.',
    },
    {
      name: 'Cadete',
      body: 'Combina hasta dos de cinco opciones, o dilo con tus palabras.',
      shot: 'rank-cadet',
      alt: 'Panel de plan de Cadete: una lista más larga de tarjetas, de las que se pueden elegir una o dos.',
    },
    {
      name: 'Especialista',
      body: 'Controles completos: niveles de energía, horas de tripulación, acciones únicas, términos técnicos.',
      shot: 'rank-specialist',
      alt: 'Panel de plan de Especialista: presupuestos de horas, energía y dosis, niveles de energía por sistema y controles de horas de tripulación.',
    },
    {
      name: 'Comandante',
      body: 'El panel completo de control de misión, con el equilibrio más difícil.',
      shot: 'rank-commander',
      alt: 'Panel de plan de Comandante: los mismos controles completos con un presupuesto de energía más ajustado.',
    },
  ],
  chartTitle: 'Más difícil conforme subes',
  chartNote:
    'Porcentaje de misiones ganadas por jugadores programados en cada rango: 50 partidas simuladas del juego actual de cuatro rangos, solo con reglas, sin modelo de IA. Los programas no son estudiantes.',
};

export const ai: typeof en.ai = {
  kicker: 'La regla detrás del proyecto',
  title: 'La IA propone. El simulador decide.',
  body: [
    'Houston.ai, nuestro instructor con IA, elige qué problemas llegan y cuánta ayuda recibes. También lee los planes que escribes con tus palabras.',
    'Pero nunca escribe un número del juego. Un motor de simulación determinista, construido con valores publicados por la NASA, calcula cada resultado. Pide "oxígeno infinito" y esa acción no existe: la petición se rechaza y el juego te dice por qué.',
  ],
  pipeline: [
    { label: 'Tus palabras', sub: '"Build a regolith berm around the habitat"' },
    { label: 'Instructor con IA', sub: 'lee el plan' },
    { label: 'Lista cerrada', sub: '10 acciones, nada más' },
    { label: 'Simulador', sub: 'revisa los límites y calcula el resultado' },
    { label: 'La base', sub: 'lo que pasa de verdad' },
  ],
  pipelineReject: { label: '"Give us infinite oxygen"', sub: 'Esa acción no existe. Se rechaza, con la razón.' },
  pipelineAria:
    'Diagrama: las palabras del jugador van al instructor con IA, que solo puede elegir de una lista cerrada de diez acciones. El simulador revisa los límites y calcula el resultado. Una petición imposible no tiene acción y se rechaza.',
  points: [
    { title: 'Una lista cerrada de diez acciones.', body: 'La IA solo puede elegir entre ellas. Ninguna fija un recurso directamente.' },
    { title: '¿Sin IA? Todo el juego sigue funcionando.', body: 'Sin llave, sin red o con una respuesta lenta, las reglas incorporadas hacen cada tarea de la IA con el mismo contrato.' },
    { title: 'Cada respuesta de la IA se revisa.', body: 'Cada una se valida contra un esquema y contra los límites del simulador antes de aplicarse. Un reintento, y después se encargan las reglas.' },
  ],
  shots: {
    accepted: { shot: 'text-accepted', alt: 'Un plan escrito en texto libre, entendido y convertido en acciones de la base con su costo.', caption: 'Un plan con las palabras del jugador se convierte en acciones de la lista cerrada.' },
    refused: { shot: 'text-refused', alt: 'La petición "Give us infinite oxygen" rechazada con una explicación.', caption: '"Danos oxígeno infinito": no es posible, y el juego dice por qué.' },
  },
  shotsNote: 'Estas dos pantallas se capturaron con la IA apagada: las reglas incorporadas leyeron el texto. Con el instructor con IA encendido se aplican las mismas comprobaciones.',
  notice: 'El juego usa un instructor con IA. Cada uso se declara en la página de uso de IA.',
  declarationLink: 'Leer la declaración completa de IA',
  evidenceLink: 'Mira cómo se probó la IA',
};

const tableWhat = [
  'Oxígeno que usa una persona',
  'Dióxido de carbono que exhala una persona',
  'Agua para beber que necesita una persona',
  'Radiación en la superficie de Marte',
  'Agua reciclada en la estación espacial',
  'Opacidad del cielo para que los paneles recarguen',
  'Duración de un sol',
];
/** Units and connectors of the science table, English to Spanish; the numbers stay untouched. */
const valueEs = (v: string) =>
  v
    .replace('per day', 'al día')
    .replace('hours', 'horas')
    .replace('below', 'menos de')
    .replace(' to ', ' a ')
    .replace(/(\d)\.(\d)/g, '$1,$2');

export const science: typeof en.science = {
  kicker: 'La ciencia',
  title: 'Basado en una tormenta real.',
  body: [
    'En 2018 una tormenta global de polvo cubrió Marte. Sobre el rover Opportunity, la opacidad del cielo subió de un valor normal de 0,5 a un estimado de 10,8 el 10 de junio de 2018. Ese día el rover dejó de responder.',
    'La misión recrea esa crisis y termina revelando el evento real, con sus fuentes.',
  ],
  honesty: 'En el juego el cielo llega a unos 4 o 5; la tormenta real fue más fuerte.',
  real: [
    { value: valueEs(en.science.real[0]!.value), label: 'opacidad normal del cielo en el sitio de Opportunity' },
    { value: valueEs(en.science.real[1]!.value), label: 'opacidad estimada el 10 de junio de 2018' },
    { value: en.science.real[2]!.value, label: 'energía diaria de Opportunity, antes y durante la tormenta' },
  ],
  realNote: 'Valores reales de 2018. Opacidad: NASA Jet Propulsion Laboratory. Energía: The Planetary Society (no es una fuente de la NASA).',
  image: {
    ...en.science.image,
    alt: 'Las últimas imágenes que tomó el rover Opportunity, el 10 de junio de 2018: un cuadro parcial del cielo, oscuro y con ruido.',
    caption: 'Las últimas imágenes que tomó Opportunity, cuando la tormenta de 2018 oscureció el cielo. PIA22930.',
    credit: 'Imagen: NASA/JPL-Caltech/Cornell/ASU',
  },
  tableTitle: 'Valores publicados dentro del simulador',
  table: en.science.table.map((row, i) => ({ ...row, what: tableWhat[i] ?? row.what, value: valueEs(row.value) })),
  count: 'El juego lleva {total} constantes: {sourced} son valores medidos o derivados con cita y URL, y {gameDesign} están marcadas como diseño de juego, elegidas para que una misión de diez soles sea jugable.',
  caveat: 'Los valores citados los buscó un agente de IA en las páginas citadas. Una persona todavía no ha revisado cada uno.',
  dataPending: 'El juego usa valores publicados por la NASA incorporados en su código. No consume datos de la NASA en vivo. Conectar datos reales de clima espacial de NASA DONKI es nuestro siguiente paso.',
  dataDonki: 'El juego usa valores publicados por la NASA incorporados en su código, y eventos de clima espacial de NASA DONKI.',
  sourcesLink: 'Todas las constantes y fuentes',
};

export const evidence: typeof en.evidence = {
  kicker: 'Evidencia',
  title: 'Probamos la IA, no solo el juego.',
  intro: 'Jugadores simulados corrieron misiones completas contra el juego. Cada cifra dice qué versión mide.',
  groups: [
    {
      id: 'current',
      label: 'El juego hoy',
      scope: 'Cuatro rangos. Solo reglas, sin modelo de IA.',
      stats: [
        { value: '{tests}', label: 'pruebas automáticas pasan', note: '{files} archivos de prueba, más revisión de tipos y compilación de producción. Al {asOf}.' },
        { value: '0', label: 'límites del motor rotos', note: 'en {states} estados de juego revisados a lo largo de {games} partidas simuladas.' },
        { value: '{optionsValid} / {optionsTotal}', label: 'opciones de plan sugeridas válidas', note: 'cada tarjeta de opción que ofreció el juego pasó las comprobaciones del simulador.' },
      ],
    },
    {
      id: 'previous',
      label: 'Con el modelo de IA real',
      scope: 'Medido en la versión anterior de tres rangos, antes de añadir el rango Aprendiz. Aún no se repite para el juego de cuatro rangos.',
      stats: [
        { value: '{directorValidFirstTry} / {directorDecisions}', label: 'decisiones del director con IA válidas al primer intento', note: 'la otra pasó tras un solo reintento. {games} partidas simuladas.' },
        { value: '{interpreterPct} %', label: 'planes en texto libre bien leídos', note: '{interpreterRight} de {interpreterTexts} textos etiquetados, con {actionsOutsideList} acciones fuera de la lista cerrada.' },
        { value: '0', label: 'límites del motor rotos', note: 'en {states} estados de juego con la IA dirigiendo.' },
      ],
    },
  ],
  missesTitle: 'Dónde no alcanzamos nuestras propias metas',
  misses: [
    'Variedad: el director con IA produjo {varietyAi} secuencias de eventos distintas en {games} partidas; el director por reglas, {varietyRules}. La meta es que ninguna se repita.',
    'Equilibrio: las tasas de victoria de los programas novato y experto quedaron a {winSpreadPoints} puntos con el director con IA; nuestra meta era {winSpreadTarget}.',
    'Sin la IA, el lector de planes por reglas acierta el {rulesInterpreterPct} % de los textos etiquetados; nuestra meta es {rulesInterpreterTarget} %.',
  ],
  limitsTitle: 'Límites de esta evidencia',
  limits: [
    'Aún no se ha probado con estudiantes. Los jugadores de estas evaluaciones son programas.',
    'El uso en teléfono se revisó solo en una pantalla emulada, no en un dispositivo real.',
    'No se ha hecho una auditoría de accesibilidad.',
  ],
  evalsLink: 'Informe completo de evaluación',
};

export const about: typeof en.about = {
  kicker: 'Nosotros',
  title: 'Seis personas, un fin de semana, una tormenta.',
  builtAt: 'PHYSIX es nuestra propuesta para el NASA Space Apps Challenge 2026, hecha en {event} para el reto "Build a Junior Astronaut Mission Trainer".',
  builtAtPending: 'PHYSIX es nuestra propuesta para el NASA Space Apps Challenge 2026, para el reto "Build a Junior Astronaut Mission Trainer". Evento local: pendiente.',
  storyKicker: 'El proyecto',
  storyTitle: 'Cuatro decisiones que dieron forma al juego.',
  story: [
    {
      title: 'Enseñar los dilemas',
      body: 'El reto pedía un entrenador de misión para estudiantes jóvenes. Queríamos que sintieran la parte que las clases suelen saltarse: en una misión, cada decisión ayuda a un sistema y le cuesta a otro.',
    },
    {
      title: 'Usar una tormenta que ocurrió',
      body: 'Construimos la misión sobre la tormenta global de polvo de 2018 en Marte, así que la crisis es real. Cada valor que pudimos respaldar lleva su cita y un enlace.',
    },
    {
      title: 'Que la IA proponga y nunca decida',
      body: 'Un instructor con IA elige los problemas de cada misión y lee planes escritos con palabras sencillas. Nunca escribe un número del juego: un simulador revisa cada propuesta y calcula cada resultado.',
    },
    {
      title: 'Empezar simple y decir lo que falta',
      body: 'Después de que uno de nosotros probó el juego, agregamos un primer rango más fácil y un sol de práctica guiada. El juego aún no se ha probado con estudiantes, y lo decimos donde importa.',
    },
  ],
  teamKicker: 'El equipo',
  teamTitle: 'Quiénes somos.',
  memberPending: { name: 'Nombre pendiente', role: 'Rol pendiente', built: 'Qué construyó: pendiente' },
  photoPending: 'Foto pendiente',
  workKicker: 'Cómo trabajamos',
  work: 'Construimos el juego y este sitio con asistentes de programación con IA bajo nuestra dirección. Cada uso de IA, dentro del juego y al construirlo, está declarado.',
  aiLink: 'Leer la declaración completa de IA',
  creditsLink: 'Créditos y referencias',
  sourcesLink: 'Fuentes y evaluación',
};

export const roadmap: typeof en.roadmap = {
  kicker: 'Estado honesto',
  title: 'Qué funciona hoy y qué sigue.',
  worksTitle: 'Funciona hoy',
  works: [
    'Una misión completa en Marte de diez soles',
    'Cuatro rangos, de Aprendiz a Comandante',
    'El Sol 0, un sol de práctica guiado',
    'Planes en texto libre, validados por el simulador',
    'El director con IA, con respaldo por reglas',
    'Rebobinar a cualquier sol anterior',
    'Revelación del evento real al final de la misión, con fuentes',
    'Jugar sin conexión, con las reglas incorporadas',
    'Inglés y español',
  ],
  nextTitle: 'Sigue',
  next: [
    'Datos reales de clima espacial de NASA DONKI para dirigir los eventos de radiación',
    'Pruebas en aula con estudiantes',
    'Repetir la evaluación de la IA con el juego de cuatro rangos',
    'Seis consolas en teléfonos con información parcial y una pantalla compartida',
    'Tripulantes con IA',
    'Una sala de Control de Misión con retardo de comunicación',
    'La misión a la Luna, que por ahora está archivada',
  ],
  donkiWorks: 'Eventos de radiación dirigidos por datos de clima espacial de NASA DONKI',
  note: 'Aún sin construir: las consolas en teléfonos, los tripulantes con IA y la sala de Control de Misión. El retardo de comunicación existe hoy solo como "pregunta a la Tierra; la respuesta llega un sol después". Todavía no se ha probado instalar el juego como aplicación en un dispositivo.',
};

export const closing: typeof en.closing = {
  title: 'Viene la tormenta. Dirige la base.',
  body: 'Diez soles. Cuatro sistemas. Una tripulación que depende de tu plan.',
};

const creditsEs = [
  {
    title: 'Imagen',
    items: [
      'Las últimas imágenes de Opportunity, PIA22930. NASA/JPL-Caltech/Cornell/ASU. Dominio público.',
      'Todas las demás imágenes son capturas del juego y renders de su base 3D, que es geometría procedural escrita en código. Sin imágenes generadas con IA.',
    ],
  },
  {
    title: 'Tipografías',
    items: [
      'Saira Condensed, de Omnibus-Type. SIL Open Font License 1.1.',
      'IBM Plex Sans e IBM Plex Mono, de IBM. SIL Open Font License 1.1.',
      'Archivos de fuente empaquetados por Fontsource y servidos desde este sitio.',
    ],
  },
  {
    title: 'Software en el juego',
    items: [
      'React, Three.js, React Three Fiber, drei, Zustand, Zod, Hono, Vite, Vitest. Licencias de código abierto.',
      'Modelos de IA en ejecución: Claude Haiku 5.5 y Claude Sonnet 5.5 (Anthropic).',
    ],
  },
  {
    title: 'Software en este sitio',
    items: ['Astro. Licencia MIT.', 'Sin analítica, sin cookies, sin scripts de terceros.'],
  },
  {
    title: 'Fuentes de datos',
    items: [
      'NASA Baseline Values and Assumptions Document (BVAD), NASA/TP-2015-218570/REV1.',
      'Radiación en superficie medida por Curiosity RAD (Hassler et al., Science, 2014), publicada por el Southwest Research Institute.',
      'NASA Jet Propulsion Laboratory sobre la tormenta de polvo de 2018 y Opportunity.',
      'NASA sobre el hito de recuperación de agua en la estación espacial (2023).',
      'The Planetary Society sobre la energía de Opportunity en 2018 (no es una fuente de la NASA).',
    ],
  },
];

export const credits: typeof en.credits = {
  kicker: 'Créditos y referencias',
  title: 'Todo lo que usamos.',
  // Same links as the English list; only the words are translated.
  groups: en.credits.groups.map((g, i) => ({
    title: creditsEs[i]?.title ?? g.title,
    items: g.items.map((it, j) => ({ ...it, text: creditsEs[i]?.items[j] ?? it.text })),
  })),
  musicNote: 'Este sitio no reproduce música ni audio propios.',
};

export const footer: typeof en.footer = {
  aiTitle: 'Uso de IA',
  ai: 'Dentro del juego corre un instructor con IA, siempre revisado por el simulador. El juego, sus documentos y este sitio web se construyeron con asistentes de programación con IA bajo la dirección del equipo. Sin imágenes generadas con IA.',
  aiLink: 'Leer la declaración completa de uso de IA',
  privacyTitle: 'Privacidad',
  privacy: 'Este sitio no tiene cuentas, rastreadores ni cookies. El juego guarda solo los ajustes y un perfil de habilidades en tu navegador.',
  licenseTitle: 'Licencia',
  licensePending: 'por decidir por el equipo.',
  contactTitle: 'Contacto',
  contactPending: 'Correo de contacto pendiente.',
  repoLabel: 'Código fuente',
  repoPending: 'Enlace al código fuente pendiente.',
  made: 'Hecho para el NASA Space Apps Challenge 2026.',
  tagline: 'Un entrenador de misión para astronautas júnior. Dirige una base en Marte durante la tormenta de polvo real de 2018.',
};

export const aiUse: typeof en.aiUse = {
  title: 'Uso de IA en PHYSIX',
  intro: 'El reto pide a cada equipo declarar su uso de IA. Esta página enumera cada uso: dentro del juego, al construir el juego y al construir este sitio web.',
  runtimeTitle: 'Dentro del juego',
  runtimeBody: [
    'Todo uso en ejecución sigue una regla: el modelo de lenguaje propone, el motor de simulación decide. Un motor determinista calcula cada recurso, cada daño y cada dosis de radiación. Las salidas del modelo son decisiones estructuradas que el motor valida contra límites físicos antes de que pase nada.',
    'Sin ningún modelo (sin llave, sin red, con un tiempo agotado o un error), versiones por reglas de las mismas tareas responden con el mismo contrato, y el juego se puede jugar completo. La pantalla de inicio avisa que un instructor con IA dirige la misión, y cada mensaje lleva una etiqueta que dice si vino de la IA o de las reglas incorporadas.',
    'La llave de la API vive solo en el proceso del servidor y nunca se envía al navegador. No hay cuentas ni datos personales: los mensajes al modelo reciben el estado del juego y, cuando la tripulación escribe o dicta un plan, ese texto.',
  ],
  jobsTitle: 'Las cinco tareas de la IA',
  jobs: [
    {
      name: 'Director, "Houston.ai"',
      model: 'Claude Haiku 5.5',
      can: 'Qué evento del catálogo de la misión lanzar, si alguno; su severidad, aviso y duración dentro de los rangos permitidos; cuánta ayuda recibe el jugador; una razón corta en pantalla.',
      cannot: 'Ningún número del estado del juego; eventos fuera del catálogo; los rangos ni los límites de presupuesto y separación. La tormenta siempre ocurre dentro de su ventana.',
      fallback: 'Un director por reglas con el mismo comportamiento pedagógico.',
    },
    {
      name: 'Intérprete de planes',
      model: 'Claude Haiku 5.5',
      can: 'A qué acciones de la lista cerrada de diez corresponde un plan en texto libre.',
      cannot: 'Nada fuera de la lista: ninguna acción fija un recurso. El motor valida, recorta o rechaza cada acción. El texto del jugador se trata como dato no confiable.',
      fallback: 'Un buscador bilingüe de palabras clave para intenciones comunes; si no, "usa los controles".',
    },
    {
      name: 'Narrador',
      model: 'Claude Haiku 5.5',
      can: 'La redacción de líneas cortas al inicio y al final de cada sol.',
      cannot: 'Los números: son marcadores que rellena el motor. Las líneas con dígitos escritos por el modelo se rechazan. La longitud de lectura se limita por rango.',
      fallback: 'Plantillas elegidas según la situación.',
    },
    {
      name: 'Perfilador de habilidades',
      model: 'Claude Sonnet 5.5',
      can: 'Evidencia para tres habilidades blandas: comunicación, liderazgo y cuidado del equipo.',
      cannot: 'Las tres habilidades numéricas, que siempre calculan las reglas con números del motor; ningún estado del juego. La evidencia describe una decisión, nunca a la persona.',
      fallback: 'Equivalentes por reglas.',
    },
    {
      name: 'Tutor del cierre',
      model: 'Claude Sonnet 5.5',
      can: 'El epílogo, los momentos clave, las preguntas guiadas y el siguiente entrenamiento sugerido.',
      cannot: 'Los números (solo marcadores) ni las fuentes: los identificadores de cita deben existir en el paquete de datos.',
      fallback: 'Un informe fijo a partir del registro, el resultado y las citas de la misión.',
    },
  ],
  jobsNote: 'El Sol 0, el sol de práctica guiado, no usa IA: es texto fijo. Las opciones de plan que se ofrecen en Aprendiz y Cadete las construye el motor, no un modelo.',
  buildTitle: 'Al construir el juego',
  buildBody: [
    'Todo el código, las pruebas, la documentación y los textos del juego (español e inglés) del repositorio del juego se escribieron con Claude Code (Anthropic) bajo dirección humana. Un modelo orquestador, Claude Fable 5.2, planificó los hitos, escribió los contratos, dio instrucciones a subagentes (Claude Opus y Claude Sonnet) y revisó y verificó su trabajo.',
    'El nivel de entrada (el rango Aprendiz, el Sol 0, el lenguaje simple) salió de una prueba de juego de un integrante del equipo, no de estudiantes.',
    'Las constantes científicas las buscó y citó un agente de IA con búsqueda web. No se escribieron de memoria, pero ninguna persona las ha revisado todavía una por una.',
  ],
  siteTitle: 'Al construir este sitio web',
  siteBody: [
    'Este sitio web se diseñó, escribió y construyó con Claude Code (Claude Fable 5.2) bajo la dirección del equipo, a partir del repositorio del juego y de las indicaciones del equipo. Sus cifras salen de los documentos del juego.',
  ],
  imagesTitle: 'Imágenes, audio y video',
  imagesBody: [
    'No se usan imágenes generadas con IA, ni en el juego ni en este sitio. La base 3D es geometría procedural escrita en código. Las imágenes de este sitio son capturas del juego en marcha y renders de su escena 3D. La única foto es una imagen de la NASA de dominio público (PIA22930, crédito NASA/JPL-Caltech/Cornell/ASU).',
    'El juego no tiene audio. Este sitio no reproduce audio propio.',
  ],
  reviewTitle: 'Revisión humana todavía necesaria',
  review: [
    'Las ecuaciones del motor de simulación, incluido el ajuste de luz solar contra opacidad y el modelo de radiación y protección.',
    'Cada constante y su fuente, abierta contra la página citada.',
    'Las instrucciones de las cinco tareas de la IA.',
    'Todo lo que lee un estudiante, en español e inglés. Los pequeños errores de idioma en la salida del modelo no se revisan automáticamente.',
    'La evaluación de 50 partidas con el modelo de IA para el juego de cuatro rangos.',
  ],
  back: 'Volver a PHYSIX',
};

export const sourcesPage: typeof en.sourcesPage = {
  title: 'Fuentes y evaluación',
  intro: 'Cada constante del simulador, de dónde sale y cómo se evaluó el juego. Las tablas se copian de la lista de fuentes que genera el repositorio del juego.',
  kinds: [
    { name: 'Medidas', body: 'Una medición publicada.' },
    { name: 'Derivadas', body: 'Calculadas a partir de mediciones, o un valor de política de la agencia.' },
    { name: 'Diseño de juego', body: 'Elegidas para que una misión de diez soles sea jugable. Nunca se presentan como mediciones.' },
  ],
  caveat: 'Los valores citados los buscó un agente de IA en las páginas citadas. Una persona todavía no ha revisado cada uno. Dos fuentes no son de la NASA: The Planetary Society (la energía de Opportunity) y el dosímetro del módulo Chang\'e-4 (dosis lunar, usada solo por la misión a la Luna, que está archivada).',
  measuredTitle: 'Constantes medidas',
  derivedTitle: 'Constantes derivadas',
  designTitle: 'Constantes de diseño de juego',
  designIntro: 'El tamaño de la batería, las cargas, el ciclo de cultivo comprimido, el presupuesto de dosis de la misión, los multiplicadores por rango y las probabilidades de falla son decisiones, no mediciones.',
  designToggle: 'Mostrar todas las constantes de diseño de juego',
  eventsRealTitle: 'Eventos que ocurrieron de verdad',
  eventsTrainingTitle: 'Eventos de entrenamiento (diseño de juego)',
  eventsTrainingIntro: 'Las fallas de equipo, las fugas, la plaga y el corte de comunicaciones son escenarios de entrenamiento, marcados como diseño de juego y no como eventos reales.',
  citationsTitle: 'Citas',
  evalTitle: 'Evaluación',
  evalIntro: 'Jugadores programados (novato, medio y experto) juegan misiones completas contra el juego y su capa de IA. Existen dos corridas, y miden versiones distintas.',
  evalRuns: [
    {
      title: 'Juego actual, cuatro rangos, solo reglas',
      scope: '{games} partidas simuladas con cada tarea de la IA respondida por las reglas incorporadas. Sin modelo de IA.',
      rows: [
        ['Límites del motor rotos', '0 de {states} estados'],
        ['Opciones de plan sugeridas válidas', '{optionsValid} de {optionsTotal}'],
        ['Misiones ganadas en Aprendiz / Cadete / Especialista / Comandante', '{winRates}'],
      ],
    },
    {
      title: 'Versión anterior, tres rangos, con el modelo de IA',
      scope: '{games} partidas simuladas el 14 de noviembre de 2026, antes de añadir el rango Aprendiz. Claude Haiku 5.5 para el director, el narrador y el lector de planes; Claude Sonnet 5.5 para el perfilador y el tutor en 8 de las partidas. Aún no se repite para el juego de cuatro rangos.',
      rows: [
        ['Decisiones del director válidas al primer intento', '{directorValidFirstTry} de {directorDecisions} (la otra tras un reintento)'],
        ['Decisiones del director aceptadas por el motor', '{directorAccepted} de {directorDecisions}'],
        ['Límites del motor rotos', '0 de {states} estados'],
        ['Líneas de narración fieles a los números del motor', '{narrationLines} de {narrationLines}'],
        ['Planes en texto libre bien leídos', '{interpreterPct} % ({interpreterRight} de {interpreterTexts} textos etiquetados)'],
        ['Acciones del intérprete fuera de la lista cerrada', '{actionsOutsideList} de {actionsEmitted}'],
        ['Secuencias de eventos distintas en {games} partidas', '{varietyAi} con el director con IA, {varietyRules} con el director por reglas (meta: sin repeticiones)'],
        ['Diferencia de victorias entre programas novato y experto', '{winSpreadPoints} puntos (nuestra meta: {winSpreadTarget})'],
        ['Lector de planes por reglas, sin la IA', '{rulesInterpreterPct} % (nuestra meta: {rulesInterpreterTarget} %)'],
        ['Costo estimado de IA por sesión completa', '{costPerSessionUsd} USD a precios de lista'],
      ],
    },
  ],
  evalLimits: [
    'Los jugadores simulados son programas, no niños. Las tasas de victoria describen al juego contra estos programas, no contra estudiantes reales.',
    'Los planes en texto libre salen de una lista fija de textos etiquetados, así que la precisión del intérprete es una tasa de aciertos sobre esa lista.',
    'Los números varían entre corridas con el modelo de IA, porque el modelo no es determinista.',
    'Pruebas automáticas: {tests} pasan en {files} archivos, más revisión de tipos y compilación de producción, al {asOf}.',
  ],
  evalLimitsTitle: 'Límites',
  back: 'Volver a PHYSIX',
};

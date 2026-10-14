// Datos ilustrativos del perfil epidemiológico. Misma naturaleza de dato
// "semilla" que el dashboard hermano de este proyecto (no proviene de una
// fuente oficial), organizados aquí para alimentar una plantilla de tipo
// "perfil de ciudad" en vez de un panel de pestañas.

export const profileMeta = {
  breadcrumb: ['Inicio', 'Explorar', 'Perfiles epidemiológicos', 'Colombia'],
  title: 'Colombia',
  subtitle: 'Perfil país — Programa Ampliado de Inmunizaciones (PAI)',
  quickFacts: [
    { icon: 'map', label: 'País', value: 'Colombia' },
    { icon: 'users', label: 'Población objetivo total', value: '≈ 12.4 millones' },
    { icon: 'flag', label: 'Territorios monitoreados', value: '8' },
    { icon: 'calendar', label: 'Corte de los datos', value: 'Agosto de 2026' },
  ],
}

export const team = {
  eyebrow: 'Equipo',
  title: 'Quiénes hacen el Observatorio',
  members: [
    { name: 'Luis Jorge Hernández', role: 'Director', image: 'DrLuisJorge.jpeg', focus: '50% 20%', zoom: 1.5, bio: 'Biografía pendiente.' },
    { name: 'Daniela Rodríguez', role: 'Cargo 1', image: 'DanielaRodriguez.jpeg', focus: '50% 45%', zoom: 1, bio: 'Biografía pendiente.' },
    { name: 'Laura Baracaldo', role: 'Cargo 2', image: 'LauraBaracaldo.jpeg', focus: '50% 40%', zoom: 1, bio: 'Biografía pendiente.' },
    { name: 'Mauricio', role: 'Cargo 3', image: 'Mauricio.jpeg', focus: '50% 12%', zoom: 1.8, bio: 'Biografía pendiente.' },
    { name: 'Valentina', role: 'Cargo 4', image: 'valentina.jpeg', focus: '50% 30%', zoom: 1, bio: 'Biografía pendiente.' },
    { name: 'Rodrigo', role: 'Cargo 5', image: 'rodrigo.png', focus: '50% 30%', zoom: 1, bio: 'Biografía pendiente.' },
  ],
}

export const biologicos = [
  { id: 'influenza', label: 'Influenza', color: 'var(--teal)' },
  { id: 'fiebreAmarilla', label: 'Fiebre amarilla', color: 'var(--amber-data)' },
  { id: 'vph', label: 'VPH', color: 'var(--status-red)' },
  { id: 'tripleViral', label: 'Triple viral', color: 'var(--violet-data)' },
]

export const defaultBiologicoId = biologicos[0].id

export const coverageByTerritory = {
  influenza: [
    { territorio: 'Bogotá', cobertura: 96 },
    { territorio: 'Antioquia', cobertura: 91 },
    { territorio: 'Valle del Cauca', cobertura: 87 },
    { territorio: 'Atlántico', cobertura: 82 },
    { territorio: 'Santander', cobertura: 79 },
    { territorio: 'Nariño', cobertura: 74 },
    { territorio: 'Chocó', cobertura: 61 },
    { territorio: 'La Guajira', cobertura: 58 },
  ],
  fiebreAmarilla: [
    { territorio: 'Bogotá', cobertura: 88 },
    { territorio: 'Antioquia', cobertura: 84 },
    { territorio: 'Valle del Cauca', cobertura: 90 },
    { territorio: 'Atlántico', cobertura: 71 },
    { territorio: 'Santander', cobertura: 93 },
    { territorio: 'Nariño', cobertura: 96 },
    { territorio: 'Chocó', cobertura: 68 },
    { territorio: 'La Guajira', cobertura: 52 },
  ],
  vph: [
    { territorio: 'Bogotá', cobertura: 72 },
    { territorio: 'Antioquia', cobertura: 65 },
    { territorio: 'Valle del Cauca', cobertura: 58 },
    { territorio: 'Atlántico', cobertura: 55 },
    { territorio: 'Santander', cobertura: 61 },
    { territorio: 'Nariño', cobertura: 49 },
    { territorio: 'Chocó', cobertura: 38 },
    { territorio: 'La Guajira', cobertura: 33 },
  ],
  tripleViral: [
    { territorio: 'Bogotá', cobertura: 97 },
    { territorio: 'Antioquia', cobertura: 94 },
    { territorio: 'Valle del Cauca', cobertura: 92 },
    { territorio: 'Atlántico', cobertura: 89 },
    { territorio: 'Santander', cobertura: 90 },
    { territorio: 'Nariño', cobertura: 85 },
    { territorio: 'Chocó', cobertura: 73 },
    { territorio: 'La Guajira', cobertura: 66 },
  ],
}

export const goalByBiologico = {
  influenza: { avance: 78, poblacionObjetivo: '5+ millones', corte: 'corte a agosto de 2026' },
  fiebreAmarilla: { avance: 65, poblacionObjetivo: 'zonas de riesgo endémico', corte: 'corte a agosto de 2026' },
  vph: { avance: 55, poblacionObjetivo: 'niñas y niños 9–17 años', corte: 'corte a agosto de 2026' },
  tripleViral: { avance: 90, poblacionObjetivo: 'primera infancia', corte: 'corte a agosto de 2026' },
}

export const borderCoverage = {
  influenza: [
    { municipio: 'Maicao', frontera: 63, nacional: 84 },
    { municipio: 'Cúcuta', frontera: 71, nacional: 84 },
    { municipio: 'Ipiales', frontera: 68, nacional: 84 },
    { municipio: 'Leticia', frontera: 55, nacional: 84 },
    { municipio: 'Arauca', frontera: 66, nacional: 84 },
  ],
  fiebreAmarilla: [
    { municipio: 'Maicao', frontera: 70, nacional: 80 },
    { municipio: 'Cúcuta', frontera: 66, nacional: 80 },
    { municipio: 'Ipiales', frontera: 74, nacional: 80 },
    { municipio: 'Leticia', frontera: 61, nacional: 80 },
    { municipio: 'Arauca', frontera: 69, nacional: 80 },
  ],
  vph: [
    { municipio: 'Maicao', frontera: 41, nacional: 60 },
    { municipio: 'Cúcuta', frontera: 48, nacional: 60 },
    { municipio: 'Ipiales', frontera: 44, nacional: 60 },
    { municipio: 'Leticia', frontera: 33, nacional: 60 },
    { municipio: 'Arauca', frontera: 39, nacional: 60 },
  ],
  tripleViral: [
    { municipio: 'Maicao', frontera: 80, nacional: 92 },
    { municipio: 'Cúcuta', frontera: 84, nacional: 92 },
    { municipio: 'Ipiales', frontera: 79, nacional: 92 },
    { municipio: 'Leticia', frontera: 71, nacional: 92 },
    { municipio: 'Arauca', frontera: 82, nacional: 92 },
  ],
}

export const complianceSemaphore = [
  { categoria: 'Esquema completo primera infancia', estado: 'green', valor: 96, biologicoId: 'tripleViral' },
  { categoria: 'Influenza población objetivo', estado: 'amber', valor: 78, biologicoId: 'influenza' },
  { categoria: 'Fiebre amarilla zonas de riesgo', estado: 'amber', valor: 72, biologicoId: 'fiebreAmarilla' },
  { categoria: 'VPH esquema completo', estado: 'red', valor: 55, biologicoId: 'vph' },
  { categoria: 'Refuerzos zona de frontera', estado: 'red', valor: 61, biologicoId: 'influenza' },
  { categoria: 'Triple viral segundo refuerzo', estado: 'green', valor: 91, biologicoId: 'tripleViral' },
]

export const yearEndProjection = [
  { mes: 'Ene', influenza: 12, fiebreAmarilla: 8, vph: 5, tripleViral: 22 },
  { mes: 'Feb', influenza: 22, fiebreAmarilla: 15, vph: 11, tripleViral: 31 },
  { mes: 'Mar', influenza: 34, fiebreAmarilla: 24, vph: 18, tripleViral: 40 },
  { mes: 'Abr', influenza: 45, fiebreAmarilla: 33, vph: 26, tripleViral: 48 },
  { mes: 'May', influenza: 55, fiebreAmarilla: 42, vph: 34, tripleViral: 56 },
  { mes: 'Jun', influenza: 63, fiebreAmarilla: 50, vph: 41, tripleViral: 64 },
  { mes: 'Jul', influenza: 71, fiebreAmarilla: 58, vph: 48, tripleViral: 71 },
  { mes: 'Ago', influenza: 78, fiebreAmarilla: 65, vph: 55, tripleViral: 78 },
  { mes: 'Sep', influenza: 85, fiebreAmarilla: 72, vph: 62, tripleViral: 84 },
  { mes: 'Oct', influenza: 90, fiebreAmarilla: 79, vph: 69, tripleViral: 89 },
  { mes: 'Nov', influenza: 95, fiebreAmarilla: 86, vph: 77, tripleViral: 94 },
  { mes: 'Dic', influenza: 99, fiebreAmarilla: 92, vph: 84, tripleViral: 98 },
]

export const respiratoryVirusCirculation = [
  { semana: 'S1', influenza: 8, vsr: 5, covid: 4 },
  { semana: 'S3', influenza: 11, vsr: 7, covid: 5 },
  { semana: 'S5', influenza: 15, vsr: 10, covid: 6 },
  { semana: 'S7', influenza: 21, vsr: 16, covid: 7 },
  { semana: 'S9', influenza: 28, vsr: 22, covid: 8 },
  { semana: 'S11', influenza: 24, vsr: 19, covid: 9 },
  { semana: 'S13', influenza: 18, vsr: 14, covid: 7 },
  { semana: 'S15', influenza: 13, vsr: 9, covid: 6 },
]

export const immunopreventableEvents = [
  { evento: 'Tos ferina', casos: 142, tendencia: 'up' },
  { evento: 'Sarampión', casos: 3, tendencia: 'stable' },
  { evento: 'Parotiditis', casos: 58, tendencia: 'down' },
  { evento: 'Varicela', casos: 410, tendencia: 'up' },
  { evento: 'Hepatitis B aguda', casos: 21, tendencia: 'stable' },
  { evento: 'Meningitis Hib', casos: 6, tendencia: 'down' },
]

// --- Utilidades derivadas --------------------------------------------------

const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
const findBiologico = (id) => biologicos.find((b) => b.id === id) ?? biologicos[0]
// Las siglas (p. ej. "VPH") no deben minusculizarse dentro de una oración.
export const lowerLabel = (label) => (label === label.toUpperCase() ? label : label.toLowerCase())

export function coverageStatus(value) {
  if (value >= 95) return 'green'
  if (value >= 80) return 'amber'
  return 'red'
}

/** Construye las 12 tarjetas de categoría del perfil para un biológico. */
export function buildCategories(biologicoId) {
  const bio = findBiologico(biologicoId)
  const rows = coverageByTerritory[bio.id]
  const goal = goalByBiologico[bio.id]
  const border = borderCoverage[bio.id]

  const best = rows.reduce((a, b) => (b.cobertura > a.cobertura ? b : a))
  const worst = rows.reduce((a, b) => (b.cobertura < a.cobertura ? b : a))
  const coberturaNacional = Math.round(avg(rows.map((r) => r.cobertura)))
  const coberturaFrontera = Math.round(avg(border.map((r) => r.frontera)))
  const metaNacional = border[0].nacional

  const ownAlerts = complianceSemaphore.filter((c) => c.biologicoId === bio.id)
  const greenShare = ownAlerts.length
    ? Math.round((ownAlerts.filter((c) => c.estado === 'green').length / ownAlerts.length) * 100)
    : null
  const redCount = ownAlerts.filter((c) => c.estado === 'red').length

  const projection = yearEndProjection[yearEndProjection.length - 1][bio.id]

  const peakEvent = immunopreventableEvents.reduce((a, b) => (b.casos > a.casos ? b : a))
  const peakWeekTotal = respiratoryVirusCirculation.reduce(
    (max, w) => Math.max(max, w.influenza + w.vsr + w.covid),
    0,
  )

  return [
    {
      id: 'cobertura-nacional',
      icon: 'shield',
      title: 'Cobertura nacional',
      description: `Cobertura promedio de ${lowerLabel(bio.label)} entre los territorios monitoreados.`,
      value: `${coberturaNacional}%`,
      corte: '2026',
      status: coverageStatus(coberturaNacional),
    },
    {
      id: 'territorio-lider',
      icon: 'mapPin',
      title: 'Territorio líder',
      description: 'Territorio con la cobertura más alta reportada.',
      value: `${best.territorio} — ${best.cobertura}%`,
      corte: '2026',
      status: coverageStatus(best.cobertura),
    },
    {
      id: 'territorio-rezago',
      icon: 'alertTriangle',
      title: 'Mayor rezago',
      description: 'Territorio con la cobertura más baja reportada.',
      value: `${worst.territorio} — ${worst.cobertura}%`,
      corte: '2026',
      status: coverageStatus(worst.cobertura),
    },
    {
      id: 'cobertura-frontera',
      icon: 'flag',
      title: 'Cobertura en frontera',
      description: 'Promedio de cobertura en municipios de frontera monitoreados.',
      value: `${coberturaFrontera}%`,
      corte: '2026',
      status: coverageStatus(coberturaFrontera),
    },
    {
      id: 'meta-nacional',
      icon: 'target',
      title: 'Meta nacional definida',
      description: 'Meta oficial de cobertura establecida para este biológico.',
      value: `${metaNacional}%`,
      corte: '2026',
      status: null,
    },
    {
      id: 'avance-meta',
      icon: 'trendingUp',
      title: 'Avance de la meta',
      description: 'Porcentaje de avance acumulado frente a la meta anual.',
      value: `${goal.avance}%`,
      corte: goal.corte.replace('corte a ', ''),
      status: coverageStatus(goal.avance),
    },
    {
      id: 'poblacion-objetivo',
      icon: 'users',
      title: 'Población objetivo',
      description: 'Grupo poblacional priorizado para este esquema.',
      value: goal.poblacionObjetivo,
      corte: null,
      status: null,
    },
    {
      id: 'proyeccion-diciembre',
      icon: 'chart',
      title: 'Proyección a diciembre',
      description: 'Cobertura proyectada de cierre de año según la tendencia actual.',
      value: `${projection}%`,
      corte: 'proyección 2026',
      status: coverageStatus(projection),
    },
    {
      id: 'semaforizacion',
      icon: 'activity',
      title: 'Semaforización propia',
      description: 'Porcentaje de indicadores en verde asociados a este biológico.',
      value: greenShare === null ? 'No disponible' : `${greenShare}%`,
      corte: greenShare === null ? null : '2026',
      status: greenShare === null ? null : coverageStatus(greenShare),
    },
    {
      id: 'alertas-activas',
      icon: 'bell',
      title: 'Alertas activas',
      description: 'Indicadores propios en estado rojo dentro del semáforo.',
      value: `${redCount}`,
      corte: '2026',
      status: redCount > 0 ? 'red' : 'green',
    },
    {
      id: 'vigilancia-respiratoria',
      icon: 'pulse',
      title: 'Vigilancia respiratoria',
      description: 'Pico semanal combinado de influenza, VSR y COVID-19 (no filtra por biológico).',
      value: `${peakWeekTotal} casos/semana`,
      corte: '2026',
      status: null,
    },
    {
      id: 'eventos-inmunoprevenibles',
      icon: 'layers',
      title: 'Evento con mayor incidencia',
      description: 'Evento inmunoprevenible con más casos acumulados (no filtra por biológico).',
      value: `${peakEvent.evento} — ${peakEvent.casos}`,
      corte: '2026',
      status: peakEvent.tendencia === 'up' ? 'red' : peakEvent.tendencia === 'down' ? 'green' : 'amber',
    },
  ]
}

/** Construye las métricas de barra de rango de la sección comparativa. */
export function buildComparisonMetrics(biologicoId) {
  const bio = findBiologico(biologicoId)
  const rows = coverageByTerritory[bio.id]
  const border = borderCoverage[bio.id]
  const goal = goalByBiologico[bio.id]

  const territoryValues = rows.map((r) => r.cobertura)
  const borderValues = border.map((r) => r.frontera)

  return [
    {
      id: 'territorio',
      title: 'Cobertura por territorio (2026)',
      min: Math.min(...territoryValues),
      max: Math.max(...territoryValues),
      value: rows.find((r) => r.territorio === 'Bogotá')?.cobertura ?? territoryValues[0],
      valueLabel: 'Bogotá',
      median: Math.round(avg(territoryValues)),
      medianLabel: 'Promedio de territorios',
      unit: '%',
      detail: rows,
      detailCols: ['territorio', 'cobertura'],
    },
    {
      id: 'frontera',
      title: 'Cobertura en frontera',
      min: Math.min(...borderValues),
      max: Math.max(...borderValues),
      value: Math.round(avg(borderValues)),
      valueLabel: 'Promedio en frontera',
      median: border[0].nacional,
      medianLabel: 'Meta nacional',
      unit: '%',
      detail: border,
      detailCols: ['municipio', 'frontera', 'nacional'],
    },
    {
      id: 'meta',
      title: 'Avance de la meta (2026)',
      min: 0,
      max: 100,
      value: goal.avance,
      valueLabel: bio.label,
      median: 100,
      medianLabel: 'Meta',
      unit: '%',
      detail: [{ biologico: bio.label, avance: goal.avance, meta: 100 }],
      detailCols: ['biologico', 'avance', 'meta'],
    },
  ]
}

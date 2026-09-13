// Set mínimo de íconos de línea, trazo 1.6, sin relleno — coherente con la
// estética plana del sistema (sin sombras, sin gradientes decorativos).
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const icons = {
  map: (p) => (
    <svg {...base} {...p}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  users: (p) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 20c.6-3.4 3.2-5.4 6.5-5.4s5.9 2 6.5 5.4" />
      <circle cx="17" cy="8.5" r="2.4" />
      <path d="M16 14.8c2.6.4 4.4 2.2 4.9 5.2" />
    </svg>
  ),
  flag: (p) => (
    <svg {...base} {...p}>
      <path d="M5 3v18" />
      <path d="M5 4h11l-2.5 3.5L16 11H5" />
    </svg>
  ),
  calendar: (p) => (
    <svg {...base} {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="0" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  ),
  shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3.5 19.5 6.5V12c0 5-3.5 7.7-7.5 8.5-4-.8-7.5-3.5-7.5-8.5V6.5Z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  ),
  mapPin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  alertTriangle: (p) => (
    <svg {...base} {...p}>
      <path d="M12 4 21.5 20h-19L12 4Z" />
      <path d="M12 10.5v4M12 17.3v.1" />
    </svg>
  ),
  target: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  trendingUp: (p) => (
    <svg {...base} {...p}>
      <path d="M3 17 10 10l4 4 7-8" />
      <path d="M15 5.5h6V11" />
    </svg>
  ),
  chart: (p) => (
    <svg {...base} {...p}>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2.5 20h19" />
    </svg>
  ),
  activity: (p) => (
    <svg {...base} {...p}>
      <path d="M2.5 12h4l2.2-6.5L13 18l2.3-6h6.2" />
    </svg>
  ),
  bell: (p) => (
    <svg {...base} {...p}>
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6.3H4c.5-.8 2-2.3 2-6.3Z" />
      <path d="M10 19.5a2.2 2.2 0 0 0 4 0" />
    </svg>
  ),
  pulse: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h2l1.4-3 2 6L14.6 12H16" />
    </svg>
  ),
  layers: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3.5 21 8.5 12 13.5 3 8.5 12 3.5Z" />
      <path d="M3 13l9 5 9-5M3 17.5l9 5 9-5" />
    </svg>
  ),
  chevron: (p) => (
    <svg {...base} width={16} height={16} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  plus: (p) => (
    <svg {...base} width={18} height={18} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  external: (p) => (
    <svg {...base} width={14} height={14} {...p}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
}

export default function Icon({ name, ...rest }) {
  const render = icons[name]
  if (!render) return null
  return render(rest)
}

export function Elevation() {
  const roof = [
    [118, 250], [168, 188], [214, 236], [262, 176], [470, 176], [520, 236], [548, 214], [548, 250],
  ];
  const eaveDots = Array.from({ length: 28 }, (_, index) => 132 + index * 14.6);
  const rakeLeft = Array.from({ length: 7 }, (_, index) => index);
  const treeDots = [
    [78, 430], [92, 430], [64, 452], [78, 452], [92, 452], [106, 452],
    [54, 476], [70, 476], [86, 476], [102, 476], [118, 476],
    [48, 500], [64, 500], [80, 500], [96, 500], [112, 500], [126, 500],
  ];

  return (
    <svg viewBox="0 0 640 760" className="h-full w-full" role="img" aria-label="Warm lights traced along a New England roof, entry, and tree">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="640" height="760" fill="#10241c" />
      <rect y="640" width="640" height="120" fill="#1c3b30" />
      <path d="M150 250 L150 560 L500 560 L500 250" fill="#23493b" stroke="#e7d3a4" strokeOpacity="0.35" />
      <path d={roof.map((point, index) => `${index === 0 ? "M" : "L"}${point[0]} ${point[1]}`).join(" ") + " Z"} fill="#1b3a2e" stroke="#e7d3a4" strokeOpacity="0.55" />
      <rect x="214" y="250" width="34" height="70" fill="#10241c" />
      <rect x="286" y="360" width="78" height="96" fill="#c4a15a" opacity="0.85" />
      <rect x="392" y="368" width="62" height="78" fill="#e7d3a4" opacity="0.28" />
      <rect x="392" y="368" width="62" height="78" fill="none" stroke="#e7d3a4" strokeWidth="2" />
      <rect x="306" y="470" width="40" height="90" fill="#0c1c16" />
      <circle cx="338" cy="518" r="2" fill="#e7d3a4" />
      {eaveDots.map((x) => (
        <circle key={x} cx={x} cy="252" r="3.2" fill="#f8e7c4" filter="url(#glow)" />
      ))}
      {rakeLeft.map((step) => (
        <circle key={step} cx={168 + step * 13.5} cy={188 + step * 9} r="2.7" fill="#f3e2bc" />
      ))}
      {treeDots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" fill="#f3e2bc" />
      ))}
      <rect x="74" y="508" width="8" height="82" fill="#245041" />
      <path d="M250 640 C 300 600, 340 600, 390 640" fill="none" stroke="#c4a15a" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

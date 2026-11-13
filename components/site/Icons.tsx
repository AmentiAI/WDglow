type IconProps = { className?: string };

function Svg({ className = "h-6 w-6", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </Svg>
);

export const BuildingIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20V5.5L12 3v17" />
    <path d="M12 8.5 20 11v9" />
    <path d="M2.5 20h19" />
    <path d="M7 8h2M7 11.5h2M7 15h2M15 13.5h2M15 16.5h2" />
  </Svg>
);

export const BulbIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3Z" />
  </Svg>
);

export const CalendarIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
  </Svg>
);

export const CycleIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 0 1-13.7 5.7" />
    <path d="M4 12a8 8 0 0 1 13.7-5.7" />
    <path d="M18 2.5v4h-4M6 21.5v-4h4" />
  </Svg>
);

export const TagIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1.5 1.5 0 0 1 0 2.1l-6.6 6.6a1.5 1.5 0 0 1-2.1 0Z" />
    <circle cx="8" cy="8" r="1.4" />
  </Svg>
);

export const StarIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
  </Svg>
);

export const UsersIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20c.4-3.4 2.9-5.5 6-5.5s5.6 2.1 6 5.5" />
    <path d="M15.5 4.9a3.2 3.2 0 0 1 0 6.2M17.5 14.8c2 .7 3.2 2.5 3.5 5.2" />
  </Svg>
);

export const DiamondIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.5 4h11l3.5 5-9 11L3 9Z" />
    <path d="M3 9h18M9.5 4 8 9l4 11 4-11-1.5-5" />
  </Svg>
);

export const ShieldIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const PlayIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l6-3.5Z" fill="currentColor" stroke="none" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
  </Svg>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 5 7 7-7 7" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 9 7 7 7-7" />
  </Svg>
);

export const MapPinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5 1.5 1.5 0 0 1 5 3.5Z" />
  </Svg>
);

export function FacebookIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </Svg>
  );
}

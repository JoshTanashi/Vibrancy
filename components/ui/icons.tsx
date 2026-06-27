import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 19l1.5-4.5A8 8 0 1 1 9.5 18L5 19Z" />
      <path d="M9 9c0 3 2 5 5 5" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.5" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5M8 8.5v.01M12 16v-3.2c0-1.5 1-2.3 2.2-2.3 1.2 0 1.8.8 1.8 2.3V16" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

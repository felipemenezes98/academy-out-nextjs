import type { SVGProps } from "react";

export type IconName =
  | "shield"
  | "arrow"
  | "calendar"
  | "clock"
  | "radio"
  | "database"
  | "check"
  | "alert"
  | "users"
  | "meal"
  | "history"
  | "menu"
  | "close"
  | "code"
  | "mobile"
  | "server";

const paths: Record<IconName, React.ReactNode> = {
  shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7 3.6-3.9"/></>,
  arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  radio: <><path d="M5 8a10 10 0 0 0 0 8M19 8a10 10 0 0 1 0 8"/><path d="M8 10a5 5 0 0 0 0 4M16 10a5 5 0 0 1 0 4"/><circle cx="12" cy="12" r="1"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  alert: <><path d="M12 4 3.5 19h17L12 4Z"/><path d="M12 9v4M12 16h.01"/></>,
  users: <><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  meal: <><path d="M4 3v8M7 3v8M4 7h3M5.5 11v10M14 3v18M14 3c3 1 4 3 4 6 0 2-1.5 3.5-4 4"/></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></>,
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></>,
};

export function Icon({ name, className = "h-5 w-5", ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}

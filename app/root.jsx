import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import { NavBar, Footer } from "~/components";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Home | bluepoint2",
  viewport: "width=device-width,initial-scale=1",
});

const FOOTER_LINKS = [
  { displayName: "Home", url: "/" },
  { displayName: "What Is NAVI?", url: "/why-navi" },
  { displayName: "NAVI Services", url: "/navi-services" },
  { displayName: "Benefits", url: "/benefits" },
  { displayName: "Careers", url: "/careers" },
  { displayName: "Contact Us", url: "/contact-us" },
];

export default function App() {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <div className="bg-[url('/images/bg-for-opacity.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
          <Outlet />
        </div>
        <Footer links={FOOTER_LINKS} pathname={location.pathname} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

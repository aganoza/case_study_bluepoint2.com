import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "Home | bluepoint2",
  viewport: "width=device-width,initial-scale=1",
});

function NavBar() {
  return (
    <div
      style={{ outline: "1px solid red" }}
      className="flex w-full justify-center"
    >
      <Link to="/">
        <img
          width="210"
          height="41"
          alt="Logo"
          src="/images/bluepoint2-Logo-Solid-DrkBlue.webp"
        />
      </Link>
      <ul className="sm:flex gap-4 hidden">
        <Link to="/">Home</Link>
        <Link to="/">What is NAVI</Link>
        <Link to="/">NAVI Services</Link>
        <Link to="/">Benefits</Link>
        <Link to="/">Careers</Link>
        <Link to="/contact-us">Contact Us</Link>
      </ul>
    </div>
  );
}

export default function App() {
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

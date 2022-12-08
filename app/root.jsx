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
      // style={{ outline: "1px solid red" }}
      // fixed
      className="bg-white flex w-full justify-center items-center h-20 sm:h-28 shadow-lg shadow-black-500/50 border-b-2"
    >
      <Link to="/" className="mr-0 md:mr-8">
        <img
          width="210"
          height="41"
          alt="Logo"
          src="/images/bluepoint2-Logo-Solid-DrkBlue.webp"
        />
      </Link>
      <ul
        // style={{ outline: "1px solid cyan" }}
        className="hidden md:grid md:grid-cols-5 lg:grid-cols-6 justify-center items-center whitespace-nowrap"
      >
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm border-[#b45ad3] border-r-[1px]">
          <Link to="/">Home</Link>
        </li>
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm border-[#b45ad3] border-r-[1px]">
          <Link to="/">What is NAVI</Link>
        </li>
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm border-[#b45ad3] border-r-[1px]">
          <Link to="/">NAVI Services</Link>
        </li>
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm border-[#b45ad3] border-r-[1px]">
          <Link to="/">Benefits</Link>
        </li>
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm border-[#b45ad3] border-r-[1px] hidden lg:block">
          <Link to="/">Careers</Link>
        </li>
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm hidden lg:block">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="w-full h-6 text-center align-middle text-[#b45ad3] px-4 text-sm block lg:hidden">
          More...
        </li>
      </ul>
    </div>
  );
}

function LinkItem({
  displayName = "Home",
  url = "/",
  pathname = "/",
  border = true,
}) {
  return (
    <li
      className={`w-full h-6 text-center align-middle ${
        pathname === url ? "text-[#1CA17E]" : "text-[#b45ad3]"
      } px-4 text-sm 
      ${border ? "border-[#b45ad3] border-r-[1px]" : ""}`}
    >
      <Link to={url}>{displayName}</Link>
    </li>
  );
}

const FOOTER_LINKS = [
  { displayName: "Home", url: "/" },
  { displayName: "What Is NAVI?", url: "/why-navi" },
  { displayName: "NAVI Services", url: "/navi-services" },
  { displayName: "Benefits", url: "/benefits" },
  { displayName: "Careers", url: "/careers" },
  { displayName: "Contact Us", url: "/contact-us" },
];

function Footer({
  links = [{ displayName: "Home", url: "/" }],
  pathname = "/",
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-[#242323] text-center h-16 md:h-36 mt-4">
      <ul className="hidden md:grid grid-cols-6 justify-center items-center whitespace-nowrap">
        {links.map((item, index) => {
          return (
            <LinkItem
              key={item.displayName}
              displayName={item.displayName}
              url={item.url}
              pathname={pathname}
              border={links.length !== index + 1}
            />
          );
        })}
      </ul>
      <p className="font-copy2 text-xs text-[#a0a09f]">
        {`© ${new Date().getFullYear()}`}
      </p>
    </div>
  );
}

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

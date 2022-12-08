import * as React from "react";

export const meta = () => ({
  title: "Contact Us | bluepoint2",
});

// 1. Mapa de Google maps,
// 2. Permita a través de un buscador escribir una dirección y al seleccionarla esta debe indicarse correctamente en el mapa.
// 3. Un cuadro en la parte inferior indicando en texto que dirección se acaba de seleccionar.

export default function ContactUs() {
  return (
    <div className="grid grid-cols-1 gap-4 h-full w-full justify-center items-center">
      <div className="flex flex-col py-4 gap-4 justify-center items-center bg-[#1CA17E]/80 text-center">
        <h1 className="font-copyLight text-3xl text-white font-bold">
          Every care center needs NAVI
        </h1>
        <img
          width="320"
          height="80"
          className="w-full bg-cover md:max-w-2xl"
          alt="Key Logo"
          src="/images/hero-contact-us.webp"
        />
        <h2 className="font-display text-4xl text-white">Contact Us</h2>
        <h3 className="font-copyExtraLight text-2xl text-white font-bold">
          We would love to hear from you!
        </h3>
      </div>

      <div
        // style={{ outline: "1px solid red" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center text-center bg-white/75"
      >
        <div className="h-32 md:h-52 flex flex-col bg-[#2B388C] justify-around items-center">
          <div className="flex justify-center items-center md:items-end h-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14"
              fill="#fff"
              aria-hidden="true"
              data-bbox="1.438 1 81.176 51.036"
              viewBox="1.438 1 81.176 51.036"
            >
              <path d="M82.4 1.9c-.2-.6-.8-.9-1.4-.9L2.9 3.6c-.7 0-1.2.4-1.4 1.1-.2.6.1 1.2.7 1.6l18.6 11.2-8 13.2c-.3.5-.3 1.1 0 1.6s.7.7 1.4.7l13.8-.9 4.4 18.8c.1.5.5 1 1.1 1.1.5.1 1.1 0 1.5-.4l47.3-48c.4-.6.4-1.1.1-1.7zM8.1 6.4l63.6-2.1-47.6 11.9c-.1-.2-.3-.3-.5-.5L8.1 6.4zm8.8 23.4 7.3-12c.1-.2.2-.4.2-.6L77 4.2 30.1 29.4c-.3-.2-.6-.4-1-.4H29l-12.1.8zm17.7 17.7-4-17.3L75.4 6.1 34.6 47.5z" />
            </svg>
          </div>
          <a
            className="text-white font-copyExtraLight font-bold"
            href="mailto:liderman.duin@bluepoint2.com?subject=I would like more information about NAVI."
            target="_self"
          >
            info@bluepoint2.com
          </a>
        </div>
        <div className="h-32 md:h-52 flex flex-col bg-[#2B388C] justify-around items-center">
          <div className="flex justify-center items-center md:items-end h-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 ml-4"
              fill="#fff"
              aria-hidden="true"
              data-bbox="51 2.96 141 193.94"
              viewBox="51 2.96 141 193.94"
            >
              <path d="M136.1 58.9c.8 0 1.4.7 1.4 1.4V184c0 .8-.7 1.4-1.4 1.4H63.9c-.8 0-1.4-.7-1.4-1.4V60.4c0-.8.7-1.4 1.4-1.4h72.2m0-11.6H63.9c-7.1 0-12.9 5.8-12.9 12.9V184c0 7.1 5.8 12.9 12.9 12.9h72.2c7.1 0 12.9-5.8 12.9-12.9V60.4c0-7.2-5.8-13-12.9-13zM164.8 54.3c-2.9 0-5.4-2.2-5.7-5.2-.6-6.7-5.7-12.6-12.3-14.3-3.1-.8-4.9-4-4.1-7s4-4.9 7-4.1c11.2 2.9 19.7 13 20.8 24.3.3 3.2-2 6-5.2 6.3h-.5zM186.2 53.1c-3.2 0-5.7-2.6-5.8-5.7 0-15.4-11.5-29.6-26.7-33-3.1-.7-5.1-3.8-4.4-6.9s3.8-5.1 6.9-4.4C176.6 7.6 192 26.6 192 47.3c0 3.2-2.6 5.8-5.8 5.8.1 0 0 0 0 0z" />
              <path d="M109.7 165c0 5.357-4.343 9.7-9.7 9.7-5.357 0-9.7-4.343-9.7-9.7 0-5.357 4.343-9.7 9.7-9.7 5.357 0 9.7 4.343 9.7 9.7z" />
            </svg>
          </div>
          <p className="text-white font-copyExtraLight font-bold">
            913.735.6202
          </p>
        </div>
        <div className="h-32 md:h-52 flex flex-col bg-[#2B388C] justify-around items-center">
          <div className="flex justify-center items-center md:items-end h-24">
            <img
              width="57"
              height="57"
              alt="Linkedin Logo"
              src="/images/linkedin-logo.gif"
            />
          </div>
          <a
            href="https://www.linkedin.com/company/35463718/admin/"
            target="_blank"
            className="text-white font-copyExtraLight font-bold"
            rel="noreferrer"
          >
            Visit us on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <pre>{error.stack}</pre>
    </div>
  );
}

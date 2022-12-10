import { Form } from "@remix-run/react";

import { Slider } from "~/components/Slider";
import styles from "~/components/Slider.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const SLIDES = [
  {
    img: "images/hero-90-percent.webp",
    title: "Lagoon Nebula (Visible-light View)",
    content: (
      <p>
        At the center of the photo, a monster young star 200,000 times brighter
        than our Sun is blasting powerful ultraviolet radiation and
        hurricane-like stellar winds, carving out a fantasy landscape of ridges,
        cavities, and mountains of gas and dust.
      </p>
    ),
  },
  {
    img: "images/hero-90-percent.webp",
    title: "Bubble Nebula (NGC 7635)",
    content: (
      <p>
        For the 26th birthday of NASA's Hubble Space Telescope, astronomers are
        highlighting a Hubble image of an enormous bubble being blown into space
        by a super-hot, massive star. The Hubble image of the Bubble Nebula, or
        NGC 7635, was chosen to mark the 26th anniversary of the launch of
        Hubble into Earth orbit by the STS-31 space shuttle crew on April 24,
        1990.
      </p>
    ),
  },
  {
    img: "images/hero-90-percent.webp",
    title: "Eagle Nebula",
    content: (
      <p>
        The Eagle Nebula pillars are bathed in the blistering ultraviolet light
        from a grouping of young, massive stars located off the top of the
        image. Streamers of gas can be seen bleeding off the pillars as the
        intense radiation heats and evaporates it into space. Denser regions of
        the pillars are shadowing material beneath them from the powerful
        radiation. Stars are being born deep inside the pillars, which are made
        of cold hydrogen gas laced with dust. The pillars are part of a small
        region of the Eagle Nebula, a vast star-forming region 6,500 light-years
        from Earth.
      </p>
    ),
  },
];

export default function Home() {
  return (
    <div>
      <Form method="post">
        <section className="relative bg-secondary/90">
          <div className=" max-w-7xl mx-auto p-8 h-[30rem]">
            <Slider slides={SLIDES} />
          </div>
        </section>

        <section className="bg-[url('/images/hero-1.webp')] bg-no-repeat bg-center bg-cover min-h-[33rem]">
          <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl text-primary font-display w-80 leading-[3rem] mb-6">
              We’re the company that's changing the way you navigate your
              healthcare.
            </h1>
            <h2 className="text-2xl text-secondary font-copyExtraLight font-bold leading-8 w-28 sm:w-72">
              Innovative solutions that create a comfortable, intuitive patient
              experience.
            </h2>
          </div>
        </section>

        <section className="bg-primary/80 h-[34rem]">
          <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center h-full">
            <img
              width="74"
              height="74"
              className="mb-2"
              alt="Key Logo"
              src="/images/key.png"
            />
            <h1 className="text-4xl text-white font-display leading-[3rem] mb-6">
              Communication is the key.
            </h1>
            <h2 className="text-2xl text-white font-copyExtraLight text-center font-bold leading-8 w-full sm:w-3/4">
              We believe that better communication leads to better outcomes in
              healthcare. Our passion and mission are to create better
              communication between patients and care providers – it’s that
              simple.
            </h2>
          </div>
        </section>

        <section className="bg-[url('/images/hero-2.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="max-w-5xl mx-auto p-8 flex flex-col gap-4">
            <h1 className="text-4xl text-primary font-display leading-[3rem]">
              Introducing NAVI•Services
            </h1>
            <h2 className="text-2xl text-secondary font-copy2 leading-8 w-2/3 md:w-1/2">
              Fast and accurate insurance information collected from your
              patients
            </h2>
            <p className="text-lg text-primary font-copyLight w-2/3 md:w-1/2">
              NAVI•Services provides accurate insurance collection from your
              patients{" "}
              <b className="font-display font-normal">
                before their appointment.
              </b>{" "}
              We then use our proprietary NAVI•pal software to deliver it to
              your staff securely through HIPAA and HITECH compliant web
              services.
            </p>
            <ul className="list-disc text-lg text-primary font-copyLight px-5 w-2/3 md:w-1/2">
              <li>
                Text-based, pre-appointment insurance collection allows your
                office to see more patients.
              </li>
              <li>
                Patients click the link in your text message, snap a photo of
                their insurance card and that's all they need to do.
              </li>
              <li>
                Their card image will then be sent to you through HIPAA and
                HITECH compliant web services. It’s that easy!
              </li>
            </ul>
            <a
              href="https://www.bluepoint2.com/navi-demo-video"
              rel="noreferrer"
            >
              <button
                type="button"
                className="bg-primary hover:bg-secondary text-white max-h-full inline font-normal min-w-14 m-0 px-7 py-2 rounded-3xl"
              >
                Video Demo
              </button>
            </a>
          </div>
        </section>

        <section className="bg-primary/80 h-[34rem]">
          <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center h-full">
            <img
              width="74"
              height="74"
              className="mb-2"
              alt="Key Logo"
              src="/images/bubble-chat.png"
            />
            <h1 className="text-4xl text-white font-display leading-[3rem] mb-6">
              Better communication starts with NAVI
            </h1>
            <h2 className="text-2xl text-white font-copyExtraLight text-center font-bold leading-8 w-full sm:w-3/4">
              NAVI allows patients to navigate their healthcare appointments and
              communicate with their care providers from any mobile device.
            </h2>
          </div>
        </section>

        <section className="bg-white/90 h-[34rem]">
          <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 mb-4"
              fill="#2B388C"
              aria-hidden="true"
              data-bbox="0 19.7 200 161.209"
              viewBox="0 19.7 200 161.209"
              style={{ transform: "rotate(180deg)" }}
            >
              <path d="M78.2 19.8 85.7 33c.8 1.4 1.7 2.9 2.7 4.5-3.9 2.3-7.7 4.7-11.5 6.9-12.7 7.3-24.2 16.2-33.4 27.8-8.9 11.2-13 24.1-14.3 38.5 4.4 0 8.6-.4 12.8.1 6.8.7 13.9 1.1 20.3 3.3 13.1 4.4 19.5 14.3 20.7 27.9.6 7.4-.5 14.4-4.2 20.9-7.8 13.6-20.5 19.7-37.3 17.5-21.8-2.6-33.5-13.5-38.7-36.3-1.2-5.3-1.9-10.7-2.8-16v-15.4c.2-.6.5-1.2.6-1.9 1-10 4-19.3 8.8-28.1 11.1-20.4 27-36.3 46.3-48.9 7.2-4.7 14.5-9.4 21.8-14.1.2.1.4.1.7.1zM189.4 19.8c3.5 5.8 6.9 11.6 10.6 17.8-1.7 1-3.4 2.1-5.1 3-13.4 7.8-26.3 16.1-36.8 27.9-10.7 12-15.9 26-17.4 42.3 1.4 0 2.8-.1 4.2 0 8.3.6 16.8.2 24.8 2.1 18.9 4.4 26.1 18.9 24.8 36.6-1.3 16.9-15.3 30.5-31.9 31.3-12.2.6-23.9-1.1-33.5-9.5-8.7-7.6-12.6-17.9-15.1-28.8-7.2-32.2 2.1-59.7 23.9-83.6 11-12 23.8-21.8 37.6-30.3 4.5-2.8 8.8-5.8 13.3-8.8h.6z" />
            </svg>
            <h1 className="text-center text-2xl text-primary font-copyExtraLight leading-10 mb-6 max-w-md">
              Navigating your healthcare should be as easy as one tap or swipe
              on your mobile device.
            </h1>
            <p className="font-sigature text-5xl text-primary">Liderman Duin</p>
            <p className="font-copyExtraLight text-lg text-primary">
              Founder of bluepoint2
            </p>
          </div>
        </section>

        <section className="bg-primary text-white text-center text-4xl font-display py-8">
          Healthcare communication for a mobile world
        </section>

        <section className="bg-primary/90">
          <div className="max-w-4xl mx-auto p-8">
            <div className="grid grid-cols-2 grid-rows-[repeat(2,_auto)] md:grid-cols-3 gap-8">
              <h1 className="col-span-2 md:col-span-3 font-display text-4xl text-white leading-[3rem] max-w-2xl">
                Healthcare providers are increasingly adopting mobile messaging.
              </h1>
              <img
                className="justify-self-end self-start -mt-4"
                src="images/hero-90-percent.webp"
                alt="90 percent"
              />
              <p className="font-copyExtraLight text-2xl text-white">
                Increased online patient involvement can result in a 90%
                satisfaction rate for both patients and physicians.
              </p>
              <p className="col-span-2 md:col-span-1 md:row-start-2 md:row-end-3 font-copy2 text-xl text-white">
                More people than ever prefer communicating through mobile
                messaging, especially when it comes to healthcare information.
                Care providers can use texting to communicate with patients in a
                more personal way through all the key touchpoints of the patient
                journey.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-info/90">
          <div className="max-w-5xl mx-auto p-8">
            <div className="grid grid-cols-2 items-center gap-4">
              <h1 className="col-span-2 font-display text-3xl text-primary leading-[2.5rem] max-w-2xl">
                One example of the economic impact of inefficient communications
                in Healthcare.
              </h1>

              <p className="font-copyLight text-xl text-primary">
                Admitting one patient takes about 51 minutes, of which an
                average of 33 minutes or{" "}
                <span className="font-display">65% is lost</span> due to
                inefficient communications.
              </p>

              <div className="flex place-items-center w-[13.5rem] h-[13.5rem] md:w-[26rem] md:h-[26rem] p-4 md:p-20 rounded-full border-8 border-white bg-primary ">
                <p className="text-white text-sm md:text-2xl text-center">
                  <span className="font-display">Communication</span>
                  <br />
                  <span className="font-copyExtraLight">
                    is the one key element that has a part to play in every area
                    of the patient experience.
                  </span>
                </p>
              </div>

              <img
                src="images/hero-admission-time-graphic.png"
                alt="Admission time graphic"
              />

              <p className="font-copyLight text-xl text-primary">
                This translates into an annual loss of about{" "}
                <span className="font-display">$728,000</span> per U.S.
                hospital.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/90">
          <div className="max-w-5xl mx-auto p-8">
            <div className="flex gap-8 flex-col place-items-center md:flex-row">
              <div className="w-full h-44 md:h-96">
                <iframe
                  className="w-full h-full"
                  src="https://player.vimeo.com/video/386648582?h=28677dd262&title=0&byline=0&portrait=0"
                  width="426"
                  height="240"
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                  title="NAVI Introduction and Overview"
                />
              </div>

              <div className="flex flex-col justify-center items-center md:items-start max-w-xs w-full">
                <h1 className="font-copyExtraLight font-bold text-3xl text-white mb-4">
                  Watch this short video to learn how NAVI can help your
                  organization.
                </h1>
                <a href="https://www.bluepoint2.com/demo" rel="noreferrer">
                  <button
                    type="button"
                    className="bg-secondary hover:bg-secondary-dark text-white max-h-full inline font-normal min-w-14 m-0 px-7 py-2 rounded-3xl border-2"
                  >
                    Request a live demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col py-8 gap-4 justify-center items-center bg-info/50 text-center text-primary">
          <h2 className="font-display text-4xl">Contact Us</h2>
          <h3 className="font-copyExtraLight text-2xl font-bold">
            We would love to hear from you!
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 justify-center items-center text-center bg-white/75 w-full lg:w-[56rem]">
            <div className="h-32 md:h-52 flex flex-col bg-primary justify-around items-center">
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
            <div className="h-32 md:h-52 flex flex-col bg-primary justify-around items-center">
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
            <div className="h-32 md:h-52 flex flex-col bg-primary justify-around items-center">
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

          <h3 className="font-copyExtraLight text-2xl font-bold">
            5440 W. 110th St, Suite 300 Overland Park, KS 66211
          </h3>
        </div>
      </Form>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <div>
      <pre>{error.stack}</pre>
    </div>
  );
}

import { Form } from "@remix-run/react";

export default function Home() {
  return (
    <div>
      <Form method="post">
        <section className="bg-[url('/images/hero-1.webp')] bg-no-repeat bg-center bg-cover min-h-[33rem]">
          <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl text-[#2B388C] font-display w-80 leading-[3rem] mb-6">
              We’re the company that's changing the way you navigate your
              healthcare.
            </h1>
            <h2 className="text-2xl text-[#1CA17E] font-copyExtraLight font-bold leading-8 w-28 sm:w-72">
              Innovative solutions that create a comfortable, intuitive patient
              experience.
            </h2>
          </div>
        </section>

        <section className="bg-blue-900/80 h-[34rem]">
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
            <h1 className="text-4xl text-[#2B388C] font-display leading-[3rem]">
              Introducing NAVI•Services
            </h1>
            <h2 className="text-2xl text-[#1CA17E] font-copy2 leading-8 w-2/3 md:w-1/2">
              Fast and accurate insurance information collected from your
              patients
            </h2>
            <p className="text-lg text-[#2B388C] font-copyLight w-2/3 md:w-1/2">
              NAVI•Services provides accurate insurance collection from your
              patients{" "}
              <b className="font-display font-normal">
                before their appointment.
              </b>{" "}
              We then use our proprietary NAVI•pal software to deliver it to
              your staff securely through HIPAA and HITECH compliant web
              services.
            </p>
            <ul className="list-disc text-lg text-[#2B388C] font-copyLight px-5 w-2/3 md:w-1/2">
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
                className="bg-[#2B388C] hover:bg-[#1CA17E] text-white max-h-full inline font-normal min-w-14 m-0 px-7 py-2 rounded-3xl"
              >
                Video Demo
              </button>
            </a>
          </div>
        </section>

        <section className="bg-blue-900/80 h-[34rem]">
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
            <h1 className="text-center text-2xl text-[#2B388C] font-copyExtraLight leading-10 mb-6 max-w-md">
              Navigating your healthcare should be as easy as one tap or swipe
              on your mobile device.
            </h1>
            <p className="font-sigature text-5xl text-[#2B388C]">
              Liderman Duin
            </p>
            <p className="font-copyExtraLight text-lg text-[#2B388C]">
              Founder of bluepoint2
            </p>
          </div>
        </section>

        <section className="bg-[#2B388C] text-white text-center text-4xl font-display py-8">
          Healthcare communication for a mobile world
        </section>
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

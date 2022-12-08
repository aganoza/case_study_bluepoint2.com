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

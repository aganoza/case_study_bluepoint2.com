import * as React from "react";
import { Form, Link } from "@remix-run/react";

export default function ContactUs() {
  return (
    <div>
      <Form method="post">
        {/* <section className="bg-[url('/images/hero.jpg')] bg-cover"> */}
        <section className="bg-[url('/images/hero-1.webp')] bg-no-repeat bg-center h-[33rem]">
          <div className="max-w-5xl mx-auto px-8">
            {/* w-48 sm:w-80 */}
            <h1 className="text-4xl text-[#2B388C] font-display w-80 leading-[3rem] mb-6">
              We’re the company that's changing the way you navigate your
              healthcare.
            </h1>
            <h2 className="text-2xl text-[#1CA17E] font-copy font-bold leading-8 w-28 sm:w-72">
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
            <h2 className="text-2xl text-white font-copy font-bold leading-8 w-full sm:w-3/4">
              We believe that better communication leads to better outcomes in
              healthcare. Our passion and mission are to create better
              communication between patients and care providers – it’s that
              simple.
            </h2>
          </div>
        </section>
        <section className="bg-[url('/images/hero-2.jpg')] bg-no-repeat bg-center h-[42rem]">
          <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-4xl text-[#2B388C] font-display leading-[3rem]">
              Introducing NAVI•Services
            </h1>
            <h2 className="text-2xl text-[#1CA17E] font-copy2 leading-8 w-80">
              Fast and accurate insurance information collected from your
              patients
            </h2>
            <p className="text-lg text-[#2B388C] font-copyLight w-96">
              NAVI•Services provides accurate insurance collection from your
              patients before their appointment. We then use our proprietary
              NAVI•pal software to deliver it to your staff securely through
              HIPAA and HITECH compliant web services.
            </p>
            <ul className="list-disc text-lg text-[#2B388C] font-copyLight px-5 mb-6 w-96">
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
            <Link to="/navi-demo-video">
              <button type="button">Video Demo</button>
            </Link>
          </div>
        </section>
        {/* <button type="submit">submit</button> */}
      </Form>
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

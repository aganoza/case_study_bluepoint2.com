import * as React from "react";
import { Form } from "@remix-run/react";

export const meta = () => ({
  title: "Contact Us | bluepoint2",
});

export default function ContactUs() {
  return (
    <div>
      <Form method="post" noValidate>
        <button type="submit">submit</button>
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

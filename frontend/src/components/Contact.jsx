import { useState } from "react";
import { projectTypes } from "../data/site.js";
import { submitInquiry } from "../lib/api.js";

const initial = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email.";
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.message.trim() || values.message.trim().length < 12) {
    errors.message = "Please share a bit more about the project.";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    setServerMessage("");
    try {
      await submitInquiry(values);
      setStatus("success");
      setValues(initial);
    } catch (error) {
      setStatus("error");
      setServerMessage(error.message);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm tracking-[0.2em] text-[#6ea8ff]">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">Tell us what you want to build</h2>
          <p className="mt-4 text-[#9aa8c7] leading-7">
            We typically reply within one business day with questions, a suggested approach, and next steps.
          </p>
        </div>
        <form className="card rounded-3xl p-6 md:p-8" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-[#c5d0ea]">
              Name
              <input className="field mt-2" name="name" value={values.name} onChange={update} autoComplete="name" />
              {errors.name && <span className="mt-1 block text-xs text-rose-300">{errors.name}</span>}
            </label>
            <label className="text-sm text-[#c5d0ea]">
              Email
              <input className="field mt-2" name="email" type="email" value={values.email} onChange={update} autoComplete="email" />
              {errors.email && <span className="mt-1 block text-xs text-rose-300">{errors.email}</span>}
            </label>
            <label className="text-sm text-[#c5d0ea]">
              Company
              <input className="field mt-2" name="company" value={values.company} onChange={update} autoComplete="organization" />
            </label>
            <label className="text-sm text-[#c5d0ea]">
              Project type
              <select className="field mt-2" name="projectType" value={values.projectType} onChange={update}>
                <option value="">Select...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && <span className="mt-1 block text-xs text-rose-300">{errors.projectType}</span>}
            </label>
          </div>
          <label className="mt-4 block text-sm text-[#c5d0ea]">
            <span className="flex items-center justify-between gap-3">
              <span>Message</span>
              <span className="text-xs text-[#7d8bab]">{values.message.trim().length}/12 minimum characters</span>
            </span>
            <textarea
              className="field mt-2 min-h-32"
              name="message"
              value={values.message}
              onChange={update}
              minLength={12}
              maxLength={4000}
              required
              aria-describedby="message-help"
            />
            <span id="message-help" className="mt-1 block text-xs text-[#7d8bab]">
              Please describe your project in at least 12 characters.
            </span>
            {errors.message && <span className="mt-1 block text-xs text-rose-300">{errors.message}</span>}
          </label>
          <button className="btn-primary mt-6" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit inquiry"}
          </button>
          {status === "success" && (
            <p className="mt-4 text-sm text-emerald-300" role="status">
              Inquiry received. We'll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-rose-300" role="alert">
              {serverMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

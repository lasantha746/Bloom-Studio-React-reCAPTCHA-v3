import React, { useState } from 'react';
import {GoogleReCaptchaProvider, useGoogleReCaptcha} from 'react-google-recaptcha-v3';

const services = [
  'Brand Identity',
  'Web Design',
  'App Design',
  'Growth Strategy',
  'Other',
];

export default function Contact() {

  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error('reCAPTCHA not yet available');
      return;
    }

    const token = await executeRecaptcha('contact_form_submit');
    console.log('reCAPTCHA token:', token);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <main className="contact-page">
      <div className="contact-page__bg">
        <div className="cp-blob cp-blob--1" />
        <div className="cp-blob cp-blob--2" />
      </div>

      <div className="contact-page__inner">
        <div className="contact-info">
          <span className="eyebrow">Get in touch</span>
          <h1>
            Let's build<br />
            <em>something great.</em>
          </h1>
          <p className="contact-info__sub">
            We'd love to learn about your project. Tell us a bit about what you're
            working on and we'll get back to you within one business day.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail__icon">
                <img src="https://api.iconify.design/fluent-emoji:envelope.svg" alt="" width="22" height="22" />
              </span>
              <div>
                <strong>Email us</strong>
                <a href="mailto:hello@bloomstudio.co">hello@bloomstudio.co</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon">
                <img src="https://api.iconify.design/fluent-emoji:telephone-receiver.svg" alt="" width="22" height="22" />
              </span>
              <div>
                <strong>Call us</strong>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon">
                <img src="https://api.iconify.design/fluent-emoji:round-pushpin.svg" alt="" width="22" height="22" />
              </span>
              <div>
                <strong>Our studio</strong>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-pill">
              <img src="https://api.iconify.design/skill-icons:twitter.svg" alt="Twitter" width="18" height="18" />
              Twitter
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-pill">
              <img src="https://api.iconify.design/skill-icons:dribbble.svg" alt="Dribbble" width="18" height="18" />
              Dribbble
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">
              <img src="https://api.iconify.design/skill-icons:linkedin.svg" alt="LinkedIn" width="18" height="18" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <img src="https://api.iconify.design/fluent-emoji:seedling.svg" alt="Success" width="56" height="56" />
              <h2>Message sent!</h2>
              <p>
                Thank you, <strong>{form.name}</strong>. We've received your message and
                will be in touch within one business day.
              </p>
              <button
                className="btn btn--outline"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' }); }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Tell us about your project</h2>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Your name <span>*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address <span>*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="company">Company / Project name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="service">Service you need <span>*</span></label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="budget">Approximate budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select range</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">Tell us more <span>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project, goals, timeline, or anything helpful..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className={`form-submit ${loading ? 'form-submit--loading' : ''}`} disabled={loading}>
                {loading ? (
                  <span className="spinner" />
                ) : (
                  <>
                    <span>Send message</span>
                    <img src="https://api.iconify.design/fluent:send-20-filled.svg?color=%23ffffff" alt="" width="18" height="18" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
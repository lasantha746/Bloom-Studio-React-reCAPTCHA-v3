import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'https://api.iconify.design/fluent-emoji:artist-palette.svg',
    title: 'Brand Identity',
    desc: 'We build brands that feel alive — from strategy and naming to visual systems that resonate deeply.',
  },
  {
    icon: 'https://api.iconify.design/fluent-emoji:globe-showing-asia-australia.svg',
    title: 'Web Design',
    desc: 'Beautiful, fast, and accessible websites that turn visitors into loyal customers.',
  },
  {
    icon: 'https://api.iconify.design/fluent-emoji:mobile-phone.svg',
    title: 'App Design',
    desc: 'Intuitive product interfaces crafted with purpose — every screen, every interaction.',
  },
  {
    icon: 'https://api.iconify.design/fluent-emoji:bar-chart.svg',
    title: 'Growth Strategy',
    desc: 'Data-driven strategies that align your digital presence with real business outcomes.',
  },
];

const projects = [
  {
    tag: 'Branding',
    title: 'Verdant Skincare',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
  },
  {
    tag: 'Web Design',
    title: 'Helio Architecture',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
  },
  {
    tag: 'App Design',
    title: 'Habit — Wellness App',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
];

const stats = [
  { value: '150+', label: 'Projects shipped' },
  { value: '8 yrs', label: 'In the craft' },
  { value: '98%', label: 'Client retention' },
  { value: '4 countries', label: 'Global reach' },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
        </div>
        <div className="hero__content">
          <span className="hero__eyebrow">Creative Digital Studio</span>
          <h1 className="hero__heading">
            We design things<br />
            <em>worth noticing.</em>
          </h1>
          <p className="hero__sub">
            Bloom is a boutique studio crafting brands, websites, and products
            for founders who care deeply about how their work shows up in the world.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Start a project</Link>
            <a href="#work" className="btn btn--ghost">See our work ↓</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=700&q=80"
              alt="Creative workspace"
            />
            <div className="hero__badge">
              {/* <img src="https://api.iconify.design/fluent-emoji:star.svg" alt="" width="18" /> */}
              <span>Trusted by 50+ brands</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="services" id="services">
        <div className="section-header">
          <span className="eyebrow">What we do</span>
          <h2>Services built for<br /><em>real results.</em></h2>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <img src={s.icon} alt={s.title} width="40" height="40" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-header">
          <span className="eyebrow">Selected work</span>
          <h2>Projects we're<br /><em>proud of.</em></h2>
        </div>
        <div className="work__grid">
          {projects.map((p) => (
            <div key={p.title} className="work-card">
              <div className="work-card__img">
                <img src={p.img} alt={p.title} />
                <span className="work-card__tag">{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Ready to build something<br /><em>beautiful together?</em></h2>
          <p>We'd love to hear about your project. Let's make something worth noticing.</p>
          <Link to="/contact" className="btn btn--primary btn--large">Get in touch →</Link>
        </div>
      </section>
    </main>
  );
}
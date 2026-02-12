"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    title: "Intelligent Pipelines",
    description:
      "Build automation flows that adapt. Machine learning observes patterns and optimizes execution paths automatically.",
  },
  {
    number: "02",
    title: "Real-time Sync",
    description:
      "Data propagates instantly across connected systems. No polling, no delays. Changes reflect in milliseconds.",
  },
  {
    number: "03",
    title: "Native Integrations",
    description:
      "Connect to 200+ services out of the box. REST, GraphQL, webhooks — whatever your stack needs.",
  },
  {
    number: "04",
    title: "Execution Logs",
    description:
      "Full visibility into every automation run. Debug issues with complete execution traces and variable states.",
  },
  {
    number: "05",
    title: "Team Permissions",
    description:
      "Granular access control for workflows and data. Define who can view, edit, or execute any automation.",
  },
  {
    number: "06",
    title: "API First",
    description:
      "Everything accessible via REST API. Build custom interfaces, trigger automations programmatically, extend freely.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$0",
    period: "Free forever",
    features: [
      "1,000 executions/month",
      "5 active workflows",
      "Community support",
      "Basic integrations",
    ],
    featured: false,
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    features: [
      "50,000 executions/month",
      "Unlimited workflows",
      "Priority support",
      "All integrations",
      "Team collaboration",
      "Custom webhooks",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited executions",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    featured: false,
  },
];

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              Lumina
            </a>
            <div className="nav-links">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <a href="#" className="nav-link">
                Docs
              </a>
            </div>
            <button className="nav-cta">Start Building</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-label">Workflow Intelligence</div>
              <h1 ref={addRevealRef} className="hero-title reveal">
                Build systems
                <br />
                that <em>think</em>
              </h1>
              <p ref={addRevealRef} className="hero-description reveal">
                Lumina transforms repetitive tasks into intelligent automation.
                Connect your tools, define your logic, and let the system handle
                the rest with precision.
              </p>
              <div
                ref={addRevealRef}
                className="hero-actions reveal"
              >
                <button className="btn-primary">Start Free</button>
                <button className="btn-secondary">View Documentation</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-diagram">
                <div className="diagram-ring" />
                <div className="diagram-ring" />
                <div className="diagram-ring" />
                <div className="diagram-center">
                  <span>CORE</span>
                </div>
                <div
                  className="diagram-node"
                  style={{ top: "5%", left: "50%", transform: "translateX(-50%)" }}
                />
                <div
                  className="diagram-node"
                  style={{ top: "50%", right: "5%", transform: "translateY(-50%)" }}
                />
                <div
                  className="diagram-node"
                  style={{ bottom: "15%", left: "15%" }}
                />
                <div
                  className="diagram-node"
                  style={{ bottom: "25%", right: "20%" }}
                />
              </div>
            </div>
          </div>

          <div ref={addRevealRef} className="stats-bar reveal">
            <div className="stat">
              <div className="stat-value">2M+</div>
              <div className="stat-label">Automations Run</div>
            </div>
            <div className="stat">
              <div className="stat-value">99.99%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-value">&lt;50ms</div>
              <div className="stat-label">Avg Latency</div>
            </div>
            <div className="stat">
              <div className="stat-value">4,200+</div>
              <div className="stat-label">Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div ref={addRevealRef} className="section-header reveal">
            <div>
              <div className="section-label">Capabilities</div>
              <h2 className="section-title">
                Precision tools for
                <br />
                serious work
              </h2>
            </div>
            <p className="section-description">
              Every feature designed for reliability and scale. No gimmicks, no
              bloat — just the tools you need to build robust automation.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                ref={addRevealRef}
                className="feature-card reveal"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="feature-number">{feature.number}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <div ref={addRevealRef} className="section-header reveal">
            <div>
              <div className="section-label">Pricing</div>
              <h2 className="section-title">
                Transparent pricing,
                <br />
                no surprises
              </h2>
            </div>
            <p className="section-description">
              Start free, scale as you grow. All plans include core features
              with no hidden fees or usage traps.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <div
                key={plan.name}
                ref={addRevealRef}
                className={`pricing-card reveal ${plan.featured ? "featured" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">{plan.price}</div>
                <div className="pricing-period">{plan.period}</div>
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className="pricing-cta">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 ref={addRevealRef} className="cta-title reveal">
            Ready to build?
          </h2>
          <p ref={addRevealRef} className="cta-description reveal">
            Join thousands of teams shipping faster with intelligent automation.
          </p>
          <form
            ref={addRevealRef}
            className="cta-form reveal"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="cta-input"
              placeholder="Enter your work email"
            />
            <button type="submit" className="btn-primary">
              Start Free
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">Lumina</div>
            <div className="footer-links">
              <a href="#" className="footer-link">
                Documentation
              </a>
              <a href="#" className="footer-link">
                Changelog
              </a>
              <a href="#" className="footer-link">
                Status
              </a>
              <a href="#" className="footer-link">
                GitHub
              </a>
            </div>
            <div className="footer-copy">&copy; 2024 Lumina</div>
          </div>
        </div>
      </footer>
    </>
  );
}

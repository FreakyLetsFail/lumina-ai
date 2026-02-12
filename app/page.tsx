"use client";

import { useEffect, useRef } from "react";

// Icon components
const WorkflowIcon = () => (
  <svg className="w-8 h-8 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const TeamIcon = () => (
  <svg className="w-8 h-8 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IntegrationIcon = () => (
  <svg className="w-8 h-8 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-8 h-8 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-8 h-8 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ApiIcon = () => (
  <svg className="w-8 h-8 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Features data
const features = [
  {
    icon: <WorkflowIcon />,
    title: "AI Workflows",
    description: "Build intelligent automation pipelines that learn and adapt to your unique business processes."
  },
  {
    icon: <TeamIcon />,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time editing, comments, and shared workspaces."
  },
  {
    icon: <IntegrationIcon />,
    title: "Smart Integrations",
    description: "Connect with 200+ tools and services. Our AI suggests the best integrations for your workflow."
  },
  {
    icon: <AnalyticsIcon />,
    title: "Real-time Analytics",
    description: "Track performance with live dashboards and AI-powered insights that drive decisions."
  },
  {
    icon: <AutomationIcon />,
    title: "Automation Rules",
    description: "Set up triggers and actions with natural language. No coding required."
  },
  {
    icon: <ApiIcon />,
    title: "API Access",
    description: "Full REST API with webhooks, SDKs, and comprehensive documentation for developers."
  }
];

// Pricing data
const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for individuals getting started",
    features: [
      "Up to 100 automations/month",
      "5 AI workflow templates",
      "Basic analytics",
      "Email support",
      "1 user seat"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing teams and businesses",
    features: [
      "Unlimited automations",
      "50+ AI workflow templates",
      "Advanced analytics & reports",
      "Priority support",
      "Up to 10 user seats",
      "Custom integrations",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited user seats",
      "Dedicated account manager",
      "Custom AI model training",
      "SLA guarantee",
      "On-premise deployment",
      "24/7 phone support"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

// Footer links
const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" }
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Community", href: "#" },
    { name: "Support", href: "#" }
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" }
  ]
};

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      {/* Navigation */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-text">Lumina</span>
            </a>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-text-muted hover:text-text transition-colors">Features</a>
              <a href="#pricing" className="text-text-muted hover:text-text transition-colors">Pricing</a>
              <a href="#" className="text-text-muted hover:text-text transition-colors">About</a>
            </div>

            {/* CTA Button */}
            <button className="btn-primary px-6 py-2.5 rounded-full text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <div ref={addToRefs} className="fade-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent-violet/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
              <span className="text-sm text-text-muted">Now with GPT-4 Integration</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="gradient-text">Automate Your Workflow</span>
              <br />
              <span className="accent-gradient-text">with AI</span>
            </h1>

            <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12">
              Transform the way you work with intelligent automation. Lumina AI learns your processes,
              eliminates repetitive tasks, and unlocks insights you never knew existed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg pulse-glow">
                Start Free Trial
              </button>
              <button className="btn-secondary px-8 py-4 rounded-full text-text font-semibold text-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-12 mt-20 pt-12 border-t border-surface-light">
              <div>
                <div className="text-4xl font-bold text-text">10K+</div>
                <div className="text-text-muted">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-text">5M+</div>
                <div className="text-text-muted">Automations Run</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-text">99.9%</div>
                <div className="text-text-muted">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addToRefs} className="fade-in-section text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Powerful Features for</span>
              <br />
              <span className="accent-gradient-text">Modern Teams</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Everything you need to automate, collaborate, and scale your operations with AI-powered intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="fade-in-section glass-card rounded-2xl p-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addToRefs} className="fade-in-section text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Simple, Transparent</span>
              <br />
              <span className="accent-gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                ref={addToRefs}
                className={`fade-in-section glass-card rounded-2xl p-8 relative ${
                  plan.popular ? "pricing-popular" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-text mb-2">{plan.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-text">{plan.price}</span>
                    <span className="text-text-muted">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "btn-secondary text-text"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={addToRefs} className="fade-in-section cta-gradient glass-card rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Transform</span>
              <br />
              <span className="accent-gradient-text">Your Workflow?</span>
            </h2>
            <p className="text-xl text-text-muted max-w-xl mx-auto mb-10">
              Join thousands of teams already using Lumina AI to automate their work and boost productivity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-dark w-full px-6 py-4 rounded-full text-text placeholder:text-text-muted"
              />
              <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold whitespace-nowrap">
                Get Started
              </button>
            </div>

            <p className="text-sm text-text-muted mt-4">
              Free 14-day trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-blue flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="text-2xl font-bold text-text">Lumina</span>
              </a>
              <p className="text-text-muted text-sm">
                AI-powered automation for modern teams.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-text mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-text-muted hover:text-text transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-text mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-text-muted hover:text-text transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-semibold text-text mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-text-muted hover:text-text transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-text mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-text-muted hover:text-text transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-surface-light">
            <p className="text-text-muted text-sm">
              2024 Lumina AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-light transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-light transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-light transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

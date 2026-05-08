export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan websites for{' '}
          <span className="text-[#58a6ff]">GDPR cookie</span>{' '}compliance issues
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Crawl any website to detect undeclared cookies and compliance violations.
          Get a full report with actionable fixes — in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Scanning — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for first scan. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Cookie Detection','Consent Banner Audit','Third-Party Tracker Map','Fix Recommendations','PDF Reports','Scheduled Rescans'].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-sm text-[#6e7681] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited website scans',
              'Full cookie inventory report',
              'Consent banner compliance check',
              'Third-party tracker detection',
              'Actionable fix recommendations',
              'Scheduled automatic rescans',
              'PDF & CSV export',
              'Email alerts on new violations'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What does the scanner actually check?</h3>
            <p className="text-sm text-[#8b949e]">It crawls your website using a real browser, intercepts all cookies set before and after consent, maps third-party trackers, and compares them against your declared cookie policy to surface violations.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do I need technical knowledge to use it?</h3>
            <p className="text-sm text-[#8b949e]">No. Just enter your website URL and we handle the rest. Reports are written in plain language with step-by-step fix instructions anyone can follow.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How often should I rescan my site?</h3>
            <p className="text-sm text-[#8b949e]">Whenever you add new plugins, update your CMS, or change ad networks. Our scheduled rescan feature can do this automatically and alert you when new violations appear.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} GDPR Cookie Scanner. All rights reserved.
      </footer>
    </main>
  )
}

const lastUpdated = 'October 7, 2026'

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    body: [
      'Power Customer Portal (“the App”) is a customer-facing mobile application for SES Smart ElectriCare. It lets customers view live electricity usage, bills, payments, notifications, and account information.',
      'This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using the App, you agree to this policy.',
    ],
  },
  {
    id: 'data-we-collect',
    title: '2. Information We Collect',
    body: [
      'Account credentials: Watch ID (meter/device identifier) and phone number used to sign in.',
      'Account profile: customer name and related account details returned by our servers after authentication.',
      'Usage and billing data: live electricity readings (voltage, current, power, energy), bill history, payment history, and account balance.',
      'Device/session data: authentication tokens and preferences stored on your device (for example, “remember me” settings) so you can stay signed in securely.',
      'App communications: in-app notifications related to bills, payments, usage alerts, and unpaid balance reminders.',
    ],
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Information',
    body: [
      'To authenticate you and show your customer account dashboard.',
      'To display live usage, estimated charges, bills, payments, and due balances.',
      'To send in-app reminders and alerts about usage or unpaid amounts.',
      'To improve reliability, security, and customer support for the App.',
      'We do not sell your personal information.',
    ],
  },
  {
    id: 'sharing',
    title: '4. Sharing of Information',
    body: [
      'Your information is processed by SES Smart ElectriCare systems that power the App and related billing services.',
      'We may share information with service providers who host or operate our infrastructure, solely to run the App.',
      'We may disclose information if required by law, regulation, or valid legal process.',
    ],
  },
  {
    id: 'storage',
    title: '5. Storage & Security',
    body: [
      'Account and billing data are stored on our servers. Login tokens and selected preferences may be stored locally on your device.',
      'We use reasonable technical and organizational measures to protect information. No method of transmission or storage is 100% secure.',
      'You are responsible for keeping your Watch ID and phone credentials confidential.',
    ],
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    body: [
      'We retain account, billing, and usage information for as long as needed to provide the service, meet legal/accounting requirements, and resolve disputes.',
      'You can sign out of the App at any time. Clearing the App data/cache on your device removes locally stored session preferences.',
    ],
  },
  {
    id: 'children',
    title: '7. Children’s Privacy',
    body: [
      'The App is intended for utility customers and account holders. It is not directed to children under 13. We do not knowingly collect personal information from children under 13.',
    ],
  },
  {
    id: 'rights',
    title: '8. Your Choices & Rights',
    body: [
      'You may request access to, correction of, or deletion of personal account information by contacting us using the details below.',
      'You may stop using the App and uninstall it at any time.',
      'Depending on your location, you may have additional privacy rights under applicable law.',
    ],
  },
  {
    id: 'changes',
    title: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do.',
      'Continued use of the App after an update means you accept the revised policy.',
    ],
  },
  {
    id: 'contact',
    title: '10. Contact Us',
    body: [
      'If you have questions about this Privacy Policy or your data, contact SES Smart ElectriCare / Power Customer Portal support:',
      'Email: abaalcoding@gmail.com',
    ],
  },
]

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-snow">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_-10%,rgba(245,158,11,0.28),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_0%,rgba(56,189,248,0.22),transparent_50%),linear-gradient(180deg,#0b1220_0%,#101827_45%,#0b1220_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(248,250,252,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.35)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-amber/50 bg-panel shadow-[0_0_24px_rgba(245,158,11,0.25)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-sky" fill="currentColor" aria-hidden>
              <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
            </svg>
          </span>
          <span className="font-sans text-sm font-semibold tracking-wide text-snow/90">
            Power Customer Portal
          </span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-mist">
          <a href="#privacy" className="transition hover:text-amber">
            Privacy
          </a>
          <a href="#contact" className="transition hover:text-amber">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex min-h-[78vh] max-w-5xl flex-col justify-center px-6 pb-16 pt-8 md:min-h-[84vh] md:pb-24">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-amber">
            SES Smart ElectriCare
          </p>
          <h1 className="max-w-3xl font-sans text-5xl font-extrabold leading-[1.05] tracking-tight text-snow md:text-7xl">
            Power Customer Portal
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-mist md:text-xl">
            Your official Google Play privacy policy and product landing page for the customer
            electricity portal.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#privacy"
              className="inline-flex items-center justify-center rounded-xl bg-amber px-6 py-3 font-sans text-sm font-bold text-ink transition hover:bg-amber-deep"
            >
              Read privacy policy
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-sans text-sm font-semibold text-snow transition hover:border-sky/40 hover:bg-white/10"
            >
              Contact support
            </a>
          </div>
        </section>

        <section className="border-t border-white/10 bg-panel/40 px-6 py-16 backdrop-blur-sm">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
            {[
              {
                title: 'Live usage',
                text: 'See voltage, current, power, and kWh from your connected meter.',
              },
              {
                title: 'Bills & payments',
                text: 'Track account history, total due, and payment confirmations in one place.',
              },
              {
                title: 'Smart alerts',
                text: 'Get notified about higher usage and unpaid bill reminders.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="font-sans text-lg font-bold text-snow">{item.title}</h2>
                <p className="mt-2 font-sans text-sm leading-relaxed text-mist">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-sky">
            Legal
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight md:text-4xl">
            Privacy Policy
          </h2>
          <p className="mt-3 font-sans text-sm text-mist">Last updated: {lastUpdated}</p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id === 'contact' ? 'contact' : undefined}
                className="scroll-mt-24"
              >
                <h3 className="font-sans text-xl font-bold text-snow">{section.title}</h3>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-sans text-[15px] leading-relaxed text-mist"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SES Smart ElectriCare · Power Customer Portal</p>
          <p>Google Play privacy & product page</p>
        </div>
      </footer>
    </div>
  )
}

export default App

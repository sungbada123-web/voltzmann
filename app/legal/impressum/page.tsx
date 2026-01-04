export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl font-medium text-[#003568] mb-8 text-center">Impressum</h1>

                <div className="prose prose-lg max-w-none">
                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Angaben gemäß § 5 TMG</h2>
                        <p className="text-[#707070] font-light leading-relaxed mb-2">
                            <strong className="text-[#555555]">VÖLTZMANN Medical Technology UG (haftungsbeschränkt)</strong><br />
                            Musterstraße 123<br />
                            10115 Berlin<br />
                            Deutschland
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Vertreten durch</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Geschäftsführer: Dr. Max Mustermann
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Kontakt</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Telefon: +49 (0) 30 1234567<br />
                            E-Mail: kontakt@voeltzmann-medical.com<br />
                            Website: www.voeltzmann-medical.com
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Registereintrag</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Eintragung im Handelsregister<br />
                            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
                            Registernummer: HRB 123456 B
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Umsatzsteuer-ID</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            DE123456789
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Dr. Max Mustermann<br />
                            Musterstraße 123<br />
                            10115 Berlin
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">EU-Streitschlichtung</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                            <a href="https://ec.europa.eu/consumers/odr" className="text-[#003568] hover:text-[#179A97]" target="_blank" rel="noopener noreferrer">
                                https://ec.europa.eu/consumers/odr
                            </a><br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
                        <p className="text-[#707070] font-light leading-relaxed">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

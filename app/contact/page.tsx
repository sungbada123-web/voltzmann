'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white py-10">
            <div className="max-w-[1640px] mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-5xl font-medium text-[#003568] mb-6">
                        Kontakt
                    </h1>
                    <p className="text-xl text-[#707070] font-light leading-relaxed">
                        Haben Sie Fragen zu unseren Produkten oder möchten Sie mehr über VÖLTZMANN Medical erfahren?
                        Wir freuen uns auf Ihre Nachricht.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <div className="bg-[#F9FBFD] border border-[#C3C3C3] p-10">
                        <h2 className="text-2xl font-medium text-[#555555] mb-6">
                            Nachricht senden
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#555555] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all"
                                    placeholder="Ihr Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#555555] mb-2">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all"
                                    placeholder="ihre.email@beispiel.de"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[#555555] mb-2">
                                    Betreff
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all"
                                    placeholder="Worum geht es?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#555555] mb-2">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-[#003568] transition-all resize-none"
                                    placeholder="Ihre Nachricht..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-[#003568] text-white hover:bg-[#179A97] transition-colors font-medium"
                            >
                                Nachricht senden
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-medium text-[#555555] mb-6">
                                Kontaktinformationen
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#003568] flex items-center justify-center flex-shrink-0 text-white">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#555555] mb-1">Adresse</h3>
                                        <p className="text-[#707070] font-light">
                                            VÖLTZMANN Medical Technology UG<br />
                                            Musterstraße 123<br />
                                            10115 Berlin<br />
                                            Deutschland
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#179A97] flex items-center justify-center flex-shrink-0 text-white">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#555555] mb-1">Telefon</h3>
                                        <p className="text-[#707070] font-light">
                                            +49 (0) 30 1234567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#003568] flex items-center justify-center flex-shrink-0 text-white">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#555555] mb-1">E-Mail</h3>
                                        <p className="text-[#707070] font-light">
                                            contact@voeltzmann-medical.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F9FBFD] border border-[#C3C3C3] p-8">
                            <h3 className="text-lg font-medium text-[#555555] mb-4">
                                Geschäftszeiten
                            </h3>
                            <div className="space-y-2 text-[#707070] font-light">
                                <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                                <p>Samstag - Sonntag: Geschlossen</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#003568] to-[#179A97] text-white p-8">
                            <h3 className="text-lg font-medium mb-2">
                                Für medizinische Anfragen
                            </h3>
                            <p className="font-light mb-4">
                                Bei medizinischen Fragen zu unseren Produkten kontaktieren Sie bitte:
                            </p>
                            <p className="font-light">
                                medical@voeltzmann-medical.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

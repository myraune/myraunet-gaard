"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Award, BedDouble } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `Forespørsel: ${formData.eventType} - ${formData.eventDate}`;
      const body = `
Hei,

Jeg vil gjerne sende en forespørsel angående arrangement på Myraunet Gård.

KONTAKTINFORMASJON:
Navn: ${formData.firstName} ${formData.lastName}
E-post: ${formData.email}
Telefon: ${formData.phone}

ARRANGEMENTDETALJER:
Type arrangement: ${formData.eventType}
Ønsket dato: ${formData.eventDate}
Antall gjester: ${formData.guestCount}

MELDING:
${formData.message}

Med vennlig hilsen,
${formData.firstName} ${formData.lastName}
      `;

      const mailtoLink = `mailto:gustav@myraune.no?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      toast({
        title: "Forespørsel sendt!",
        description: "Din e-postklient vil åpne seg for å sende forespørselen.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        message: "",
      });
    } catch {
      toast({
        title: "Feil",
        description: "Noe gikk galt. Prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-6 md:mb-8 tracking-wide">
            Kontakt oss
          </h2>
          <div className="w-16 h-px bg-emerald-400 mx-auto mb-8 md:mb-12"></div>
          <p className="text-base md:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed px-4">
            La oss hjelpe deg med å skape minnerike øyeblikk på Myraunet Gård
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <Card className="shadow-2xl border-0 bg-white overflow-hidden">
              <CardHeader className="p-6 md:p-10 lg:p-12 pb-6 md:pb-8 bg-gradient-to-r from-emerald-50 to-white">
                <CardTitle className="text-2xl md:text-3xl font-light text-stone-800 tracking-wide">
                  Send en forespørsel
                </CardTitle>
                <p className="text-sm md:text-base text-stone-600 font-light mt-2">
                  Vi svarer vanligvis innen 24 timer
                </p>
              </CardHeader>
              <CardContent className="p-6 md:p-10 lg:p-12 pt-6 md:pt-8">
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2 md:space-y-3">
                      <Label className="text-xs md:text-sm font-medium text-stone-700 tracking-wide">
                        Fornavn *
                      </Label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="h-11 md:h-12 border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-stone-700 tracking-wide">
                        Etternavn *
                      </Label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="h-12 border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-stone-700 tracking-wide">E-post *</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-stone-700 tracking-wide">Telefon</Label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-stone-700 tracking-wide">
                        Type arrangement *
                      </Label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 border border-stone-200 rounded-md focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 bg-white font-light"
                        required
                      >
                        <option value="">Velg type arrangement</option>
                        <option value="Bryllup">Bryllup</option>
                        <option value="Konfirmasjon">Konfirmasjon</option>
                        <option value="Bursdag">Bursdag</option>
                        <option value="Firmaarrangement">Firmaarrangement</option>
                        <option value="Familiesammenkomst">Familiesammenkomst</option>
                        <option value="Kurs/konferanse">Kurs/konferanse</option>
                        <option value="Annet">Annet</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-medium text-stone-700 tracking-wide">Ønsket dato</Label>
                      <Input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="h-12 border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-stone-700 tracking-wide">Antall gjester</Label>
                    <Input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="Ca. antall personer"
                      className="h-12 border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-stone-700 tracking-wide">Melding *</Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-stone-200 focus:border-emerald-400 focus:ring-emerald-400/20 resize-none"
                      placeholder="Fortell oss mer om ditt arrangement, spesielle ønsker eller spørsmål..."
                      required
                    />
                  </div>

                  <div className="pt-6 space-y-4">
                    <p className="text-sm text-stone-600 font-light italic text-center">
                      Bestillingen er ikke bindende før du har mottatt bekreftelse fra oss.
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 text-sm tracking-wider font-medium transition-all duration-300"
                    >
                      {isSubmitting ? "SENDER FORESPØRSEL..." : "SEND FORESPØRSEL"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-stone-800 mb-6 md:mb-8 tracking-wide">
                Kontaktinformasjon
              </h3>

              <div className="space-y-4 md:space-y-6">
                <Card className="p-4 md:p-6 shadow-lg border-0 bg-white">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-1 md:mb-2 tracking-wide text-sm md:text-base">
                        Adresse
                      </h4>
                      <p className="text-stone-600 font-light text-sm md:text-base">
                        7633 Frosta
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2 tracking-wide">Telefon</h4>
                      <p className="text-stone-600 font-light">
                        <a href="tel:+4795284333" className="hover:text-emerald-700 transition-colors">
                          +47 952 84 333
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2 tracking-wide">E-post</h4>
                      <p className="text-stone-600 font-light">
                        <a href="mailto:gustav@myraune.no" className="hover:text-emerald-700 transition-colors">
                          gustav@myraune.no
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2 tracking-wide">Olavsrosa</h4>
                      <p className="text-stone-600 font-light text-sm md:text-base">
                        Myraunet Gård er tildelt Olavsrosa, et kvalitetsmerke for norsk kulturarv.{" "}
                        <a
                          href="https://www.olavsrosa.no/objektinfo.aspx?id=3272851"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                        >
                          Se sertifikat
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FacebookIcon className="h-5 w-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2 tracking-wide">Facebook</h4>
                      <p className="text-stone-600 font-light text-sm md:text-base">
                        <a
                          href="https://www.facebook.com/121429851204034"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                        >
                          Følg oss på Facebook
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-stone-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <BedDouble className="h-5 w-5 text-stone-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2 tracking-wide">Overnatting</h4>
                      <p className="text-stone-700 font-light text-sm md:text-base">
                        Overnatting er dessverre ikke mulig på Myraunet Gård for øyeblikket
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-emerald-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-emerald-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-stone-800 mb-2 tracking-wide">Åpningstider</h4>
                      <p className="text-stone-700 font-light text-sm">
                        Besøk etter avtale<br />
                        Ring for visning
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

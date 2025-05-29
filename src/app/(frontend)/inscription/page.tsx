import React from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaFileAlt,
  FaCalendarAlt,
  FaUserTie,
  FaClipboardList,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaChild,
  FaUser,
  FaHome,
} from "react-icons/fa";

const admissionProcess = [
  {
    step: "01",
    title: "Pré-inscription en ligne",
    description:
      "Remplissez le formulaire de pré-inscription avec les informations de base.",
    icon: <FaClipboardList className="w-6 h-6" />,
    duration: "10 minutes",
  },
  {
    step: "02",
    title: "Constitution du dossier",
    description:
      "Rassemblez tous les documents requis selon le niveau d'admission.",
    icon: <FaFileAlt className="w-6 h-6" />,
    duration: "2-3 jours",
  },
  {
    step: "03",
    title: "Entretien famille",
    description:
      "Rencontrez notre équipe pédagogique pour un entretien personnalisé.",
    icon: <FaUserTie className="w-6 h-6" />,
    duration: "30 minutes",
  },
  {
    step: "04",
    title: "Test d'évaluation",
    description:
      "Évaluation adaptée à l'âge pour déterminer le niveau approprié.",
    icon: <FaGraduationCap className="w-6 h-6" />,
    duration: "1 heure",
  },
  {
    step: "05",
    title: "Décision d'admission",
    description:
      "Notification de la décision sous 48h maximum après l'évaluation.",
    icon: <FaCheckCircle className="w-6 h-6" />,
    duration: "48 heures",
  },
  {
    step: "06",
    title: "Inscription définitive",
    description:
      "Finalisation de l'inscription avec paiement des frais de scolarité.",
    icon: <FaMoneyBillWave className="w-6 h-6" />,
    duration: "1 jour",
  },
];

const documentsRequired = {
  preschool: [
    "Acte de naissance de l'enfant",
    "Certificat médical",
    "Carnet de vaccination à jour",
    "4 photos d'identité de l'enfant",
    "Photocopie CNI des parents",
    "Justificatif de domicile récent",
  ],
  primary: [
    "Acte de naissance de l'enfant",
    "Certificat médical",
    "Carnet de vaccination à jour",
    "Bulletin scolaire de l'année précédente",
    "Certificat de radiation (si transfert)",
    "4 photos d'identité de l'enfant",
    "Photocopie CNI des parents",
    "Justificatif de domicile récent",
  ],
  middle: [
    "Acte de naissance de l'enfant",
    "Certificat médical",
    "Bulletins scolaires des 2 dernières années",
    "Certificat de radiation (si transfert)",
    "Diplôme du CFEE (pour la 6ème)",
    "4 photos d'identité de l'enfant",
    "Photocopie CNI des parents",
    "Justificatif de domicile récent",
  ],
};

const tuitionFees = [
  {
    level: "Préscolaire",
    enrollment: "50 000 FCFA",
    monthly: "45 000 FCFA",
    annual: "450 000 FCFA",
    includes: ["Repas", "Activités", "Matériel pédagogique"],
  },
  {
    level: "Primaire",
    enrollment: "75 000 FCFA",
    monthly: "55 000 FCFA",
    annual: "550 000 FCFA",
    includes: [
      "Manuels scolaires",
      "Sorties éducatives",
      "Activités extra-scolaires",
    ],
  },
  {
    level: "Collège",
    enrollment: "100 000 FCFA",
    monthly: "65 000 FCFA",
    annual: "650 000 FCFA",
    includes: ["Manuels scolaires", "Laboratoires", "Préparation BFEM"],
  },
];

const importantDates = [
  {
    period: "Janvier - Mars",
    event: "Inscriptions nouvelles admissions",
    description: "Période principale d'inscription pour l'année suivante",
  },
  {
    period: "Avril - Mai",
    event: "Tests d'évaluation",
    description: "Évaluations pour déterminer les niveaux d'admission",
  },
  {
    period: "Juin",
    event: "Résultats d'admission",
    description: "Communication des décisions d'admission",
  },
  {
    period: "Juillet - Août",
    event: "Inscriptions définitives",
    description: "Finalisation des dossiers et paiements",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-accent"></div>
                <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                  Admissions
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">Inscriptions</span>
                  <span className="block text-primary">2024-2025</span>
                </h1>

                <div className="max-w-xl">
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Rejoignez notre communauté éducative d&apos;excellence.
                    Découvrez notre processus d&apos;admission transparent et
                    accompagnement personnalisé pour chaque famille.
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>Inscriptions ouvertes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="w-4 h-4" />
                      <span>Processus 6 étapes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Admission sur mesure
                    </h3>
                    <p className="text-gray-700">
                      Chaque candidature est étudiée individuellement pour
                      assurer l&apos;épanouissement optimal de votre enfant dans
                      notre environnement éducatif.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/images/admissions/admissions-hero.jpg"
                    alt="Admissions Les Hirondelles"
                    width={1000}
                    height={1000}
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent"></div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">
                Processus d&apos;Admission
              </h2>
              <p className="section-description-creative">
                Six étapes simples pour rejoindre notre famille éducative
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionProcess.map((step, index) => (
              <div
                key={index}
                className="card p-8 transition-all duration-300 hover:transform hover:-translate-y-1 relative"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100">
                  {step.step}
                </div>
                <div className="text-primary mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4 color-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-accent font-medium">
                  <FaClock className="w-4 h-4" />
                  <span>{step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">Documents Requis</h2>
              <p className="section-description-creative">
                Liste des pièces à fournir selon le niveau d&apos;admission
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 color-black text-center">
                Préscolaire
              </h3>
              <div className="space-y-4">
                {documentsRequired.preschool.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 color-black text-center">
                Primaire
              </h3>
              <div className="space-y-4">
                {documentsRequired.primary.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 color-black text-center">
                Collège
              </h3>
              <div className="space-y-4">
                {documentsRequired.middle.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-primary flex items-center gap-2 mx-auto">
              <FaDownload className="w-4 h-4" />
              Télécharger la liste complète
            </button>
          </div>
        </div>
      </section>

      {/* Tuition Fees */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">Frais de Scolarité</h2>
              <p className="section-description-creative">
                Tarification transparente pour une éducation d&apos;excellence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tuitionFees.map((fee, index) => (
              <div key={index} className="card p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 color-black">
                  {fee.level}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="border-b border-gray-200 pb-2">
                    <span className="text-sm text-gray-500">
                      Frais d&apos;inscription
                    </span>
                    <div className="text-xl font-bold text-primary">
                      {fee.enrollment}
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <span className="text-sm text-gray-500">Mensualité</span>
                    <div className="text-xl font-bold text-primary">
                      {fee.monthly}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Total annuel</span>
                    <div className="text-2xl font-bold text-accent">
                      {fee.annual}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Inclus :</h4>
                  <div className="space-y-2">
                    {fee.includes.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600 justify-center"
                      >
                        <FaCheckCircle className="w-4 h-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              * Possibilité de paiement échelonné. Contactez-nous pour plus
              d&apos;informations.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">
                Calendrier des Inscriptions
              </h2>
              <p className="section-description-creative">
                Dates importantes à retenir pour l&apos;année scolaire 2024-2025
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((date, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-lg font-bold text-primary mb-2">
                  {date.period}
                </div>
                <h3 className="font-semibold mb-3 color-black">{date.event}</h3>
                <p className="text-sm text-gray-600">{date.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Registration Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">
                Pré-inscription en Ligne
              </h2>
              <p className="section-description-creative">
                Commencez votre demande d&apos;admission dès maintenant
              </p>
            </div>
          </div>

          <div className="card p-8">
            <form className="space-y-6">
              {/* Parent Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4 color-black">
                  Informations des parents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom du parent/tuteur *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Nom complet"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse
                    </label>
                    <div className="relative">
                      <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Votre adresse"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4 color-black">
                  Informations de l&apos;élève
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom de l&apos;enfant *
                    </label>
                    <div className="relative">
                      <FaChild className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Nom complet de l'enfant"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date de naissance *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="date"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Niveau souhaité *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Choisissez un niveau</option>
                      <option value="petite-section">
                        Petite Section (3-4 ans)
                      </option>
                      <option value="moyenne-section">
                        Moyenne Section (4-5 ans)
                      </option>
                      <option value="grande-section">
                        Grande Section (5-6 ans)
                      </option>
                      <option value="cp">CP (6-7 ans)</option>
                      <option value="ce1">CE1 (7-8 ans)</option>
                      <option value="ce2">CE2 (8-9 ans)</option>
                      <option value="cm1">CM1 (9-10 ans)</option>
                      <option value="cm2">CM2 (10-11 ans)</option>
                      <option value="6eme">6ème (11-12 ans)</option>
                      <option value="5eme">5ème (12-13 ans)</option>
                      <option value="4eme">4ème (13-14 ans)</option>
                      <option value="3eme">3ème (14-15 ans)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      École actuelle
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Nom de l'école actuelle"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Informations complémentaires
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Toute information que vous jugez utile pour l'admission de votre enfant..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  J&apos;accepte les{" "}
                  <a href="#" className="text-primary hover:underline">
                    conditions générales
                  </a>{" "}
                  et autorise le traitement de mes données personnelles.
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary flex items-center justify-center gap-2"
              >
                <FaClipboardList className="w-4 h-4" />
                Soumettre la pré-inscription
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des Questions sur les Admissions ?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Notre équipe d&apos;admission est là pour vous accompagner à
              chaque étape. N&apos;hésitez pas à nous contacter pour plus
              d&apos;informations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="btn btn-accent flex items-center gap-2"
              >
                <FaPhone className="w-4 h-4" />
                Nous Contacter
              </a>
              <a
                href="mailto:inscription@leshirondelles.sn"
                className="flex items-center gap-2 font-family-poppins font-medium text-[0.875rem] px-[2rem] py-[1rem] tracking-[0.025em] text-white border-1 border-white hover:underline transition-all duration-300 translate-y-0 hover:translate-y-[-1px]"
              >
                <FaEnvelope className="w-4 h-4" />
                Email Inscription
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

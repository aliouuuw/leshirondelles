// src/app/(frontend)/admin/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HeroContent {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryButton: { text: string; url: string };
  secondaryButton: { text: string; url: string };
}

interface StatItem {
  number: string;
  suffix?: string;
  label: string;
}

interface MissionContent {
  title: string;
  description: string;
  content: string;
}

interface SchoolLevel {
  id?: number;
  name: string;
  age_range: string;
  description: string;
  curriculum_overview?: string;
  image_url?: string;
  display_order: number;
  active: boolean;
}

interface NewsItem {
  id?: number;
  title: string;
  date: string;
  description: string;
  type: string;
  image_url?: string; // For featured news
  link?: string;
}

interface Testimonial {
  id?: number;
  quote: string;
  author: string;
  role: string;
  image_url: string;
}

interface CtaCard {
  id?: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface CtaContent {
  title: string;
  description: string;
  cards: CtaCard[];
}

// Default/fallback values
const defaultHero: HeroContent = {
  badge: "Excellence depuis 20+ ans",
  title: "Former les leaders",
  subtitle: "de demain",
  description:
    "Excellence académique et valeurs humaines du préscolaire au collège.",
  primaryButton: { text: "Nos programmes", url: "/programs" },
  secondaryButton: { text: "Planifier une visite", url: "/contact" },
};

const defaultMission: MissionContent = {
  title: "Notre Mission",
  description: "Former les citoyens de demain avec excellence et bienveillance",
  content: "Notre mission est de fournir une éducation de qualité...",
};

const defaultNews: NewsItem[] = [
  {
    title: "Journée Portes Ouvertes",
    date: "15 Mars 2024",
    description:
      "Venez découvrir notre établissement et rencontrer nos équipes",
    type: "Événement",
    image_url: "/images/news-featured.jpg",
    link: "/news/portes-ouvertes",
  },
  {
    title: "Concours de Sciences",
    date: "22 Mars 2024",
    description: "Nos élèves de collège participent au concours national",
    type: "Actualité",
  },
  {
    title: "Spectacle de fin d'année",
    date: "10 Juin 2024",
    description: "Représentation théâtrale et musicale de nos élèves",
    type: "Événement",
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Les Hirondelles a donné à ma fille la confiance et les compétences nécessaires pour réussir. L'équipe pédagogique est exceptionnelle.",
    author: "Mme Fatou Diop",
    role: "Parent d'élève",
    image_url: "/images/parent1.png",
  },
  {
    quote:
      "Une école qui allie excellence académique et valeurs humaines. Mon fils s'épanouit chaque jour.",
    author: "M. Amadou Sall",
    role: "Parent d'élève",
    image_url: "/images/parent2.png",
  },
];

const defaultCta: CtaContent = {
  title: "Prêt à rejoindre notre communauté ?",
  description:
    "Découvrez comment Les Hirondelles peut accompagner votre enfant vers l'excellence et la réussite.",
  cards: [
    {
      icon: "📅",
      title: "Planifier une visite",
      description: "Découvrez nos installations",
      link: "/visit",
    },
    {
      icon: "📋",
      title: "Dossier d'inscription",
      description: "Téléchargez notre brochure",
      link: "/brochure",
    },
    {
      icon: "💬",
      title: "Nous contacter",
      description: "Posez vos questions",
      link: "/contact",
    },
  ],
};

export default function AdminPage() {
  const [hero, setHero] = useState<HeroContent>(defaultHero);
  const [stats, setStats] = useState<StatItem[]>([
    { number: "500", suffix: "+", label: "Élèves" },
    { number: "98", suffix: "%", label: "Réussite" },
    { number: "20", suffix: "+", label: "Années" },
  ]);
  const [mission, setMission] = useState<MissionContent>(defaultMission);
  const [levels, setLevels] = useState<SchoolLevel[]>([]);
  const [news, setNews] = useState<NewsItem[]>(defaultNews);
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(defaultTestimonials);
  const [cta, setCta] = useState<CtaContent>(defaultCta);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState("");

  useEffect(() => {
    loadAllContent();
  }, []);

  const loadAllContent = async () => {
    try {
      const [
        heroRes,
        statsRes,
        missionRes,
        levelsRes,
        newsRes,
        testimonialsRes,
        ctaRes,
      ] = await Promise.all([
        fetch("/api/admin/hero"),
        fetch("/api/admin/stats"),
        fetch("/api/admin/mission"),
        fetch("/api/admin/levels"),
        fetch("/api/admin/news"),
        fetch("/api/admin/testimonials"),
        fetch("/api/admin/cta"),
      ]);

      const heroData = await heroRes.json();
      const statsData = await statsRes.json();
      const missionData = await missionRes.json();
      const levelsData = await levelsRes.json();
      const newsData = await newsRes.json();
      const testimonialsData = await testimonialsRes.json();
      const ctaData = await ctaRes.json();

      if (heroData && heroData.title) {
        setHero(heroData);
      }
      if (Array.isArray(statsData) && statsData.length > 0) {
        setStats(statsData);
      }
      if (missionData && missionData.title) {
        setMission(missionData);
      }
      if (Array.isArray(levelsData)) {
        setLevels(levelsData);
      }
      if (Array.isArray(newsData) && newsData.length > 0) {
        setNews(newsData);
      }
      if (Array.isArray(testimonialsData) && testimonialsData.length > 0) {
        setTestimonials(testimonialsData);
      }
      if (ctaData && ctaData.title && Array.isArray(ctaData.cards)) {
        setCta(ctaData);
      }
    } catch (error) {
      console.error("Failed to load content:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveHero = async () => {
    setSaving("hero");
    try {
      const response = await fetch("/api/admin/hero", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hero),
      });

      if (response.ok) {
        alert("Hero content saved successfully!");
      } else {
        alert("Failed to save hero content");
      }
    } catch (error) {
      alert("Error saving hero content");
    } finally {
      setSaving("");
    }
  };

  const saveStats = async () => {
    setSaving("stats");
    try {
      const response = await fetch("/api/admin/stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stats),
      });

      if (response.ok) {
        alert("Statistics saved successfully!");
      } else {
        alert("Failed to save statistics");
      }
    } catch (error) {
      alert("Error saving statistics");
    } finally {
      setSaving("");
    }
  };

  const saveMission = async () => {
    setSaving("mission");
    try {
      const response = await fetch("/api/admin/mission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mission),
      });

      if (response.ok) {
        alert("Mission content saved successfully!");
      } else {
        alert("Failed to save mission content");
      }
    } catch (error) {
      alert("Error saving mission content");
    } finally {
      setSaving("");
    }
  };

  const saveLevels = async () => {
    setSaving("levels");
    try {
      const response = await fetch("/api/admin/levels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(levels),
      });

      if (response.ok) {
        alert("School levels saved successfully!");
      } else {
        alert("Failed to save school levels");
      }
    } catch (error) {
      alert("Error saving school levels");
    } finally {
      setSaving("");
    }
  };

  const saveNews = async () => {
    setSaving("news");
    try {
      const response = await fetch("/api/admin/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(news),
      });
      if (response.ok) {
        alert("News content saved successfully!");
      } else {
        alert("Failed to save news content");
      }
    } catch (error) {
      alert("Error saving news content");
    } finally {
      setSaving("");
    }
  };

  const saveTestimonials = async () => {
    setSaving("testimonials");
    try {
      const response = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonials),
      });
      if (response.ok) {
        alert("Testimonials saved successfully!");
      } else {
        alert("Failed to save testimonials");
      }
    } catch (error) {
      alert("Error saving testimonials");
    } finally {
      setSaving("");
    }
  };

  const saveCta = async () => {
    setSaving("cta");
    try {
      const response = await fetch("/api/admin/cta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cta),
      });
      if (response.ok) {
        alert("CTA content saved successfully!");
      } else {
        alert("Failed to save CTA content");
      }
    } catch (error) {
      alert("Error saving CTA content");
    } finally {
      setSaving("");
    }
  };

  // Helper functions for updating nested objects safely
  const updateHero = (field: keyof HeroContent, value: string) => {
    setHero((prev) => ({ ...prev, [field]: value }));
  };

  const updateHeroButton = (
    buttonType: "primaryButton" | "secondaryButton",
    field: "text" | "url",
    value: string
  ) => {
    setHero((prev) => ({
      ...prev,
      [buttonType]: {
        ...prev[buttonType],
        [field]: value,
      },
    }));
  };

  const updateMission = (field: keyof MissionContent, value: string) => {
    setMission((prev) => ({ ...prev, [field]: value }));
  };

  const addStat = () => {
    setStats((prev) => [...prev, { number: "", suffix: "", label: "" }]);
  };

  const removeStat = (index: number) => {
    setStats((prev) => prev.filter((_, i) => i !== index));
  };

  const updateStat = (index: number, field: keyof StatItem, value: string) => {
    setStats((prev) => {
      const newStats = [...prev];
      newStats[index] = { ...newStats[index], [field]: value };
      return newStats;
    });
  };

  const updateLevel = (index: number, field: keyof SchoolLevel, value: any) => {
    setLevels((prev) => {
      const newLevels = [...prev];
      newLevels[index] = { ...newLevels[index], [field]: value };
      return newLevels;
    });
  };

  const addNewsItem = () => {
    setNews((prev) => [
      ...prev,
      { title: "", date: "", description: "", type: "" },
    ]);
  };

  const removeNewsItem = (index: number) => {
    setNews((prev) => prev.filter((_, i) => i !== index));
  };

  const updateNewsItem = (
    index: number,
    field: keyof NewsItem,
    value: string
  ) => {
    setNews((prev) => {
      const newNews = [...prev];
      newNews[index] = { ...newNews[index], [field]: value };
      return newNews;
    });
  };

  const addTestimonial = () => {
    setTestimonials((prev) => [
      ...prev,
      { quote: "", author: "", role: "", image_url: "" },
    ]);
  };

  const removeTestimonial = (index: number) => {
    setTestimonials((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTestimonial = (
    index: number,
    field: keyof Testimonial,
    value: string
  ) => {
    setTestimonials((prev) => {
      const newTestimonials = [...prev];
      newTestimonials[index] = { ...newTestimonials[index], [field]: value };
      return newTestimonials;
    });
  };

  const updateCta = (field: keyof CtaContent, value: string | CtaCard[]) => {
    setCta((prev) => ({ ...prev, [field]: value }));
  };

  const addCtaCard = () => {
    setCta((prev) => ({
      ...prev,
      cards: [
        ...prev.cards,
        { icon: "", title: "", description: "", link: "" },
      ],
    }));
  };

  const removeCtaCard = (index: number) => {
    setCta((prev) => ({
      ...prev,
      cards: prev.cards.filter((_, i) => i !== index),
    }));
  };

  const updateCtaCard = (
    index: number,
    field: keyof CtaCard,
    value: string
  ) => {
    setCta((prev) => {
      const newCards = [...prev.cards];
      newCards[index] = { ...newCards[index], [field]: value };
      return { ...prev, cards: newCards };
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Content Management Panel
          </h1>

          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hero">Hero Section</TabsTrigger>
              <TabsTrigger value="stats">Statistics</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="levels">School Levels</TabsTrigger>
              <TabsTrigger value="news">News & Events</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="cta">Call to Action</TabsTrigger>
            </TabsList>

            {/* Hero Section Tab */}
            <TabsContent value="hero" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Hero Section Content
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={hero.badge || ""}
                      onChange={(e) => updateHero("badge", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Excellence depuis 20+ ans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Main Title
                    </label>
                    <input
                      type="text"
                      value={hero.title}
                      onChange={(e) => updateHero("title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Former les leaders"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      value={hero.subtitle || ""}
                      onChange={(e) => updateHero("subtitle", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., de demain"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={hero.description}
                      onChange={(e) =>
                        updateHero("description", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Brief description of your school"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Primary Button Text
                      </label>
                      <input
                        type="text"
                        value={hero.primaryButton.text}
                        onChange={(e) =>
                          updateHeroButton(
                            "primaryButton",
                            "text",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Primary Button URL
                      </label>
                      <input
                        type="text"
                        value={hero.primaryButton.url}
                        onChange={(e) =>
                          updateHeroButton(
                            "primaryButton",
                            "url",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Secondary Button Text
                      </label>
                      <input
                        type="text"
                        value={hero.secondaryButton.text}
                        onChange={(e) =>
                          updateHeroButton(
                            "secondaryButton",
                            "text",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Secondary Button URL
                      </label>
                      <input
                        type="text"
                        value={hero.secondaryButton.url}
                        onChange={(e) =>
                          updateHeroButton(
                            "secondaryButton",
                            "url",
                            e.target.value
                          )
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={saveHero}
                  disabled={saving === "hero"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "hero" ? "Saving..." : "Save Hero Content"}
                </button>
              </div>
            </TabsContent>

            {/* Statistics Tab */}
            <TabsContent value="stats" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Statistics</h2>
                  <button
                    onClick={addStat}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Add Statistic
                  </button>
                </div>

                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-end bg-white p-4 rounded-lg"
                    >
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">
                          Number
                        </label>
                        <input
                          type="text"
                          value={stat.number}
                          onChange={(e) =>
                            updateStat(index, "number", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="e.g., 500"
                        />
                      </div>
                      <div className="w-20">
                        <label className="block text-sm font-medium mb-2">
                          Suffix
                        </label>
                        <input
                          type="text"
                          value={stat.suffix || ""}
                          onChange={(e) =>
                            updateStat(index, "suffix", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="+, %"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">
                          Label
                        </label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) =>
                            updateStat(index, "label", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="e.g., Élèves"
                        />
                      </div>
                      <button
                        onClick={() => removeStat(index)}
                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={saveStats}
                  disabled={saving === "stats"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "stats" ? "Saving..." : "Save Statistics"}
                </button>
              </div>
            </TabsContent>

            {/* Mission Tab */}
            <TabsContent value="mission" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Mission Section</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mission Title
                    </label>
                    <input
                      type="text"
                      value={mission.title}
                      onChange={(e) => updateMission("title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Notre Mission"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mission Description
                    </label>
                    <input
                      type="text"
                      value={mission.description}
                      onChange={(e) =>
                        updateMission("description", e.target.value)
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Brief mission description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mission Content
                    </label>
                    <textarea
                      value={mission.content}
                      onChange={(e) => updateMission("content", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={6}
                      placeholder="Full mission statement..."
                    />
                  </div>
                </div>

                <button
                  onClick={saveMission}
                  disabled={saving === "mission"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "mission" ? "Saving..." : "Save Mission Content"}
                </button>
              </div>
            </TabsContent>

            {/* School Levels Tab */}
            <TabsContent value="levels" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">School Levels</h2>

                <div className="space-y-6">
                  {levels.map((level, index) => (
                    <div
                      key={level.id || index}
                      className="bg-white p-6 rounded-lg border"
                    >
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Level Name
                          </label>
                          <input
                            type="text"
                            value={level.name}
                            onChange={(e) =>
                              updateLevel(index, "name", e.target.value)
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Préscolaire"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Age Range
                          </label>
                          <input
                            type="text"
                            value={level.age_range}
                            onChange={(e) =>
                              updateLevel(index, "age_range", e.target.value)
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., 3-5 ans"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Description
                        </label>
                        <textarea
                          value={level.description}
                          onChange={(e) =>
                            updateLevel(index, "description", e.target.value)
                          }
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          rows={3}
                          placeholder="Description of this level..."
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Image URL
                          </label>
                          <input
                            type="text"
                            value={level.image_url || ""}
                            onChange={(e) =>
                              updateLevel(index, "image_url", e.target.value)
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="/images/programs/..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Display Order
                          </label>
                          <input
                            type="number"
                            value={level.display_order}
                            onChange={(e) =>
                              updateLevel(
                                index,
                                "display_order",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="flex items-center">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={level.active}
                              onChange={(e) =>
                                updateLevel(index, "active", e.target.checked)
                              }
                              className="mr-2"
                            />
                            Active
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={saveLevels}
                  disabled={saving === "levels"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "levels" ? "Saving..." : "Save School Levels"}
                </button>
              </div>
            </TabsContent>

            {/* News & Events Tab */}
            <TabsContent value="news" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">News & Events</h2>
                  <button
                    onClick={addNewsItem}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Add News Item
                  </button>
                </div>

                <div className="space-y-4">
                  {news.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="bg-white p-4 rounded-lg border"
                    >
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) =>
                              updateNewsItem(index, "title", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="News/Event Title"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Date
                          </label>
                          <input
                            type="text"
                            value={item.date}
                            onChange={(e) =>
                              updateNewsItem(index, "date", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="e.g., 15 Mars 2024"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Description
                        </label>
                        <textarea
                          value={item.description}
                          onChange={(e) =>
                            updateNewsItem(index, "description", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          rows={2}
                          placeholder="Brief description of the news/event"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Type
                          </label>
                          <input
                            type="text"
                            value={item.type}
                            onChange={(e) =>
                              updateNewsItem(index, "type", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="e.g., Événement, Actualité"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Image URL (for featured)
                          </label>
                          <input
                            type="text"
                            value={item.image_url || ""}
                            onChange={(e) =>
                              updateNewsItem(index, "image_url", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="/images/news/..."
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium mb-2">
                          Link
                        </label>
                        <input
                          type="text"
                          value={item.link || ""}
                          onChange={(e) =>
                            updateNewsItem(index, "link", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="/news/detail-page"
                        />
                      </div>
                      <button
                        onClick={() => removeNewsItem(index)}
                        className="mt-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={saveNews}
                  disabled={saving === "news"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "news" ? "Saving..." : "Save News & Events"}
                </button>
              </div>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Testimonials</h2>
                  <button
                    onClick={addTestimonial}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Add Testimonial
                  </button>
                </div>

                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id || index}
                      className="bg-white p-4 rounded-lg border"
                    >
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Quote
                        </label>
                        <textarea
                          value={testimonial.quote}
                          onChange={(e) =>
                            updateTestimonial(index, "quote", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          rows={3}
                          placeholder="Testimonial quote"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Author
                          </label>
                          <input
                            type="text"
                            value={testimonial.author}
                            onChange={(e) =>
                              updateTestimonial(index, "author", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Author's Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Role
                          </label>
                          <input
                            type="text"
                            value={testimonial.role}
                            onChange={(e) =>
                              updateTestimonial(index, "role", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="e.g., Parent d'élève"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Image URL
                        </label>
                        <input
                          type="text"
                          value={testimonial.image_url}
                          onChange={(e) =>
                            updateTestimonial(
                              index,
                              "image_url",
                              e.target.value
                            )
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="/images/parent1.png"
                        />
                      </div>
                      <button
                        onClick={() => removeTestimonial(index)}
                        className="mt-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={saveTestimonials}
                  disabled={saving === "testimonials"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "testimonials"
                    ? "Saving..."
                    : "Save Testimonials"}
                </button>
              </div>
            </TabsContent>

            {/* Call to Action Tab */}
            <TabsContent value="cta" className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                  Call to Action Section
                </h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Main Title
                    </label>
                    <input
                      type="text"
                      value={cta.title}
                      onChange={(e) => updateCta("title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Prêt à rejoindre notre communauté ?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      value={cta.description}
                      onChange={(e) => updateCta("description", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={2}
                      placeholder="Brief description for CTA"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">CTA Cards</h3>
                  <button
                    onClick={addCtaCard}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Add Card
                  </button>
                </div>

                <div className="space-y-4">
                  {cta.cards.map((card, index) => (
                    <div
                      key={card.id || index}
                      className="bg-white p-4 rounded-lg border"
                    >
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Icon (Emoji or URL)
                          </label>
                          <input
                            type="text"
                            value={card.icon}
                            onChange={(e) =>
                              updateCtaCard(index, "icon", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="e.g., 📅 or /icons/calendar.svg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Card Title
                          </label>
                          <input
                            type="text"
                            value={card.title}
                            onChange={(e) =>
                              updateCtaCard(index, "title", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="e.g., Planifier une visite"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Card Description
                        </label>
                        <textarea
                          value={card.description}
                          onChange={(e) =>
                            updateCtaCard(index, "description", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          rows={2}
                          placeholder="Description for this card"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Card Link
                        </label>
                        <input
                          type="text"
                          value={card.link}
                          onChange={(e) =>
                            updateCtaCard(index, "link", e.target.value)
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="/visit"
                        />
                      </div>
                      <button
                        onClick={() => removeCtaCard(index)}
                        className="mt-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                      >
                        Remove Card
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={saveCta}
                  disabled={saving === "cta"}
                  className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  {saving === "cta" ? "Saving..." : "Save Call to Action"}
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

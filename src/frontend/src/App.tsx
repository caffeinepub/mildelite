import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  ChevronRight,
  Droplets,
  Leaf,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Mildelite Connect", href: "#connect" },
  { label: "Farmer Impact", href: "#farmers" },
  { label: "Contact", href: "#contact" },
];

const COMPANY_LINKS = [
  { label: "About Mildelite", href: "#story" },
  { label: "Mildelite Connect", href: "#connect" },
  { label: "Franchise Opportunities", href: "#contact" },
  { label: "Quality Standards", href: "#products" },
  { label: "Farmer Impact", href: "#farmers" },
];

const VALUE_BADGES = [
  { icon: Droplets, label: "Pure & Fresh" },
  { icon: Leaf, label: "100% Natural" },
  { icon: Users, label: "Farmer First" },
  { icon: Award, label: "Quality Tested" },
];

const STATS = [
  { value: "10,000+", label: "Collection Centers" },
  { value: "1,50,000+", label: "Farmer Partners" },
  { value: "25+", label: "Districts Covered" },
  { value: "5 Lakh+", label: "Litres Daily" },
];

const PRODUCTS = [
  {
    name: "Standard Milk",
    detail: "3.0% Fat",
    desc: "Wholesome everyday milk, fresh from Maharashtra's farms, ensuring complete nutrition for your family.",
  },
  {
    name: "Toned Milk",
    detail: "3.0% Fat / 8.5% SNF",
    desc: "Perfectly balanced toned milk—lower fat content, full flavour, ideal for health-conscious households.",
  },
  {
    name: "Full Cream Milk",
    detail: "6.0% Fat",
    desc: "Rich, creamy full cream milk for indulgent recipes, desserts, and those who love pure dairy goodness.",
  },
  {
    name: "Fresh Curd / Dahi",
    detail: "Set Daily",
    desc: "Thick, probiotic-rich curd set fresh every day—smooth texture, authentic taste, Maharashtra style.",
  },
];

const FRANCHISE_BENEFITS = [
  "Proven franchise model with structured support",
  "Training & operational guidance from day one",
  "Marketing & branding assistance included",
  "Fair price guarantee for milk suppliers",
  "Technology-enabled collection management",
];

const FARMER_BENEFITS = [
  "Fair pricing with transparent payment cycles",
  "Reduction of middlemen — more income per liter",
  "Free veterinary support and cattle care training",
  "Access to quality cattle feed at subsidized rates",
  "Digital records and direct bank transfers",
];

function CheckIcon() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 4L3.5 6.5L9 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location) {
      toast.error("Please fill in all required fields.");
      return;
    }
    submitInquiry(form, {
      onSuccess: () => {
        toast.success("Enquiry submitted! We will contact you shortly.");
        setForm({ name: "", phone: "", location: "", message: "" });
      },
      onError: () => {
        toast.error("Failed to submit. Please try again.");
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#F3EFE2] font-sans">
      <Toaster richColors position="top-right" />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-[#F3EFE2]/95 backdrop-blur border-b border-[#264A35]/10 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a
            href="#home"
            data-ocid="nav.link"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/assets/generated/mildelite-logo-transparent.dim_400x200.png"
              alt="Mildelite"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-[#264A35] hover:text-[#C9862B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className="hidden md:inline-flex items-center gap-1 bg-[#C9862B] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#A86E1E] transition-colors shadow-sm"
          >
            Enquire Now
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-[#264A35]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden bg-[#F3EFE2] border-t border-[#264A35]/10 px-4 pb-4"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="block py-2 text-sm font-medium text-[#264A35] hover:text-[#C9862B]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                data-ocid="nav.primary_button"
                className="mt-2 block text-center bg-[#C9862B] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#A86E1E] transition-colors"
              >
                Enquire Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="px-4 sm:px-6 py-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden min-h-[480px] flex items-center shadow-hero"
          >
            <img
              src="/assets/generated/hero-banner.dim_1200x600.jpg"
              alt="Maharashtra farms"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E2B22]/85 via-[#1E2B22]/50 to-transparent" />

            <div className="relative z-10 px-8 sm:px-12 py-12 max-w-xl">
              <span className="inline-block text-[#C9862B] text-sm font-semibold tracking-wider uppercase mb-3">
                Fresh from Maharashtra's Heart
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                Pure Milk.
                <br />
                Happy Farmers.
                <br />
                <span className="text-[#C9862B]">Thriving</span> Communities.
              </h1>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#products"
                  data-ocid="hero.primary_button"
                  className="bg-[#C9862B] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#A86E1E] transition-colors shadow"
                >
                  Explore Our Range
                </a>
                <a
                  href="#contact"
                  data-ocid="hero.secondary_button"
                  className="border-2 border-white text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  Become a Partner
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C9862B] text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#264A35] mt-2 mb-5">
                Connecting Farms to Families
              </h2>
              <p className="text-[#6E7C70] text-base leading-relaxed mb-4">
                Mildelite was born out of a simple vision: to bring the purest,
                freshest milk from Maharashtra's heartland directly to your home
                — without compromise. We saw how fragmented the milk collection
                industry was, how farmers were underpaid, and how families
                received adulterated milk.
              </p>
              <p className="text-[#6E7C70] text-base leading-relaxed mb-8">
                By organizing over 10,000 Milk Collection Centers under the{" "}
                <strong className="text-[#264A35]">Mildelite Connect</strong>{" "}
                franchise, we are bridging the gap — empowering farmers,
                ensuring quality, and delivering trust to every cup.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {VALUE_BADGES.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-[#264A35]/20 bg-white hover:border-[#264A35]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#264A35]/10 flex items-center justify-center">
                      <badge.icon size={18} className="text-[#264A35]" />
                    </div>
                    <span className="text-xs font-semibold text-[#264A35] text-center">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#264A35] rounded-2xl p-10 flex flex-col justify-center shadow-card"
            >
              <blockquote className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
                "Rooted in Tradition.
                <br />
                <span className="text-[#C9862B]">Driven by Quality.</span>"
              </blockquote>
              <p className="mt-6 text-white/70 text-sm leading-relaxed">
                For generations, Maharashtra's farmers have nurtured the land
                and its cattle with unmatched dedication. Mildelite honours that
                heritage while building systems for the modern world —
                transparent, fair, and future-ready.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-1 bg-[#C9862B] rounded-full" />
                <span className="text-white/60 text-sm font-medium">
                  Since 2019 — Maharashtra, India
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mildelite Connect Section */}
        <section id="connect" className="bg-white px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#C9862B] text-sm font-semibold tracking-wider uppercase">
                Our Network
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#264A35] mt-2">
                Mildelite Connect
              </h2>
              <p className="text-[#6E7C70] mt-3 max-w-xl mx-auto text-sm">
                Spanning 25+ districts of Maharashtra, our network of collection
                centers is the backbone of India's most organized milk franchise
                system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src="/assets/generated/maharashtra-map.dim_500x500.png"
                  alt="Maharashtra network map"
                  className="w-full max-w-xs rounded-2xl shadow-card object-contain"
                />
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-[#F3EFE2] rounded-xl px-6 py-4 border border-[#264A35]/10 flex items-center gap-4"
                    data-ocid={`connect.item.${i + 1}`}
                  >
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-[#264A35] font-sans">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#6E7C70] font-medium mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-[#C9862B]" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/assets/generated/milk-collection.dim_700x500.jpg"
                  alt="Milk collection center"
                  className="w-full rounded-2xl shadow-card object-cover h-64 md:h-80"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Farmer Impact Section */}
        <section id="farmers" className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C9862B] text-sm font-semibold tracking-wider uppercase">
                Farmer Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#264A35] mt-2 mb-5">
                Empowering Our Farmers
              </h2>
              <p className="text-[#6E7C70] text-base leading-relaxed mb-4">
                At the heart of Mildelite is the farmer. We believe that when
                farmers thrive, communities flourish. By eliminating
                exploitative middlemen and implementing fair price guarantees,
                we've transformed livelihoods across rural Maharashtra.
              </p>
              <ul className="space-y-3 mb-8">
                {FARMER_BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#1E2B22]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#264A35] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <img
                src="/assets/generated/farmer-portrait.dim_600x700.jpg"
                alt="Mildelite farmer partner"
                className="w-full rounded-2xl shadow-hero object-cover h-96 md:h-[480px]"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-[#264A35]/90 backdrop-blur rounded-xl px-5 py-4">
                <p className="font-serif text-white text-base italic">
                  "Mildelite changed everything for me. I earn 30% more and get
                  paid on time — every time."
                </p>
                <p className="text-[#C9862B] text-xs font-semibold mt-2">
                  — Ramesh Patil, Farmer Partner, Pune District
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-white px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#C9862B] text-sm font-semibold tracking-wider uppercase">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#264A35] mt-2">
                Our Products
              </h2>
              <p className="text-[#6E7C70] mt-3 text-sm max-w-lg mx-auto">
                Every product is tested, certified, and delivered fresh —
                straight from Maharashtra's farms to your doorstep.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden mb-10 shadow-card"
            >
              <img
                src="/assets/generated/products-lineup.dim_900x400.jpg"
                alt="Mildelite product lineup"
                className="w-full h-48 sm:h-64 object-cover"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  data-ocid={`products.item.${i + 1}`}
                  className="bg-[#F3EFE2] rounded-2xl p-5 border border-[#264A35]/10 hover:shadow-card transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#264A35] flex items-center justify-center mb-3">
                    <Droplets size={18} className="text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#264A35]">
                    {product.name}
                  </h3>
                  <span className="inline-block text-xs font-semibold text-[#C9862B] bg-[#C9862B]/10 rounded-full px-2 py-0.5 mt-1 mb-2">
                    {product.detail}
                  </span>
                  <p className="text-[#6E7C70] text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Franchise / Contact Section */}
        <section id="contact" className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#C9862B] text-sm font-semibold tracking-wider uppercase">
              Be Part of the Change
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#264A35] mt-2">
              Join the Movement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-xl font-bold text-[#264A35] mb-5">
                Get in Touch
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#264A35]/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#264A35]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E7C70]">Phone</div>
                    <a
                      href="tel:+917276523914"
                      className="text-sm font-medium text-[#1E2B22] hover:text-[#C9862B]"
                      data-ocid="contact.link"
                    >
                      +91 72765 23914
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#264A35]/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#264A35]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E7C70]">Email</div>
                    <a
                      href="mailto:connect@mildelite.in"
                      className="text-sm font-medium text-[#1E2B22] hover:text-[#C9862B]"
                      data-ocid="contact.link"
                    >
                      connect@mildelite.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#264A35]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-[#264A35]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6E7C70]">Address</div>
                    <p className="text-sm font-medium text-[#1E2B22]">
                      Mildelite Dairy Pvt Ltd,
                      <br />
                      Gat 340, Ranjangaon M,
                      <br />
                      Parner, Ahilyanagar - 413703
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#264A35] mb-4">
                Why Join Mildelite Connect?
              </h3>
              <ul className="space-y-3">
                {FRANCHISE_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-[#1E2B22]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C9862B] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: franchise form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl shadow-card overflow-hidden border border-[#264A35]/10"
              data-ocid="contact.card"
            >
              <div className="bg-[#C9862B] px-6 py-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Become a Mildelite Partner
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Fill in your details and we'll reach out within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                <div>
                  <label
                    className="text-xs font-semibold text-[#264A35] uppercase tracking-wide"
                    htmlFor="name"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    data-ocid="contact.input"
                    placeholder="e.g. Suresh Patil"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="mt-1 border-[#264A35]/20 focus-visible:ring-[#264A35]"
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-xs font-semibold text-[#264A35] uppercase tracking-wide"
                    htmlFor="phone"
                  >
                    Mobile Number *
                  </label>
                  <Input
                    id="phone"
                    data-ocid="contact.input"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="mt-1 border-[#264A35]/20 focus-visible:ring-[#264A35]"
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-xs font-semibold text-[#264A35] uppercase tracking-wide"
                    htmlFor="location"
                  >
                    Location / City *
                  </label>
                  <Input
                    id="location"
                    data-ocid="contact.input"
                    placeholder="e.g. Nashik, Maharashtra"
                    value={form.location}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, location: e.target.value }))
                    }
                    className="mt-1 border-[#264A35]/20 focus-visible:ring-[#264A35]"
                    required
                  />
                </div>
                <div>
                  <label
                    className="text-xs font-semibold text-[#264A35] uppercase tracking-wide"
                    htmlFor="message"
                  >
                    Message / Interest
                  </label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    placeholder="Tell us about your interest in the Mildelite Connect franchise..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="mt-1 border-[#264A35]/20 focus-visible:ring-[#264A35] min-h-[80px]"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending}
                  className="w-full bg-[#264A35] hover:bg-[#1F3F2E] text-white font-semibold rounded-xl py-2.5"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#264A35] text-white pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <img
                src="/assets/generated/mildelite-logo-transparent.dim_400x200.png"
                alt="Mildelite"
                className="h-12 w-auto object-contain brightness-200"
              />
              <p className="text-white/70 text-sm mt-3 max-w-xs leading-relaxed">
                Bringing pure, fresh milk from Maharashtra's farms to your
                family — through technology, trust, and 10,000+ collection
                centers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#C9862B] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#C9862B] mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/50 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Mildelite. All rights reserved. Made
              with ❤️ in Maharashtra.
            </p>
            <p className="text-white/40 text-xs">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="underline hover:text-white/70 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

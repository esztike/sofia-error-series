import { motion } from "framer-motion";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import WalkthroughPanel from "../components/WalkthroughPanel";
import {
  pageHeader,
  section1,
  section2,
  section3,
  walkthroughMeta,
  unseenUserSection,
  designersSection,
} from "../content/episode-01.mdx";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Episode01() {
  return (
    <div className="inner-page">
      <Nav />
      <PageHero src={null} alt="" />

      {/* ── Page header ── */}
      <motion.section
        className="page-header"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="prose-column">
          <motion.p className="hero-eyebrow" variants={itemVariants}>
            {pageHeader.eyebrow}
          </motion.p>
          <motion.div className="hero-error-class" variants={itemVariants}>
            <span className="eyebrow">Error class</span>
            <span
              className="dp-error-ref"
              style={{
                backgroundColor: `var(--color-error-${pageHeader.errorClassNumber}-bg)`,
                color: `var(--color-error-${pageHeader.errorClassNumber}-text)`,
              }}
            >
              {pageHeader.errorClassNumber} · {pageHeader.errorClassTitle}
            </span>
          </motion.div>
          <motion.h1 className="page-title" variants={itemVariants}>
            {pageHeader.title}
          </motion.h1>
          <motion.p className="page-subtitle" variants={itemVariants}>
            {pageHeader.subtitle}
          </motion.p>
          <motion.p className="page-description" variants={itemVariants}>
            {pageHeader.intro}
          </motion.p>
          <motion.div className="page-tags" variants={itemVariants}>
            {pageHeader.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── This is not a button problem ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{section1.heading}</h2>
          {section1.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── Transition / episode context ── */}
      <section className="prose-section">
        <div className="prose-column">
          {section2.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── Sofia & Maya setup ── */}
      <section className="prose-section">
        <div className="prose-column">
          {section3.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── Walkthrough ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{walkthroughMeta.heading}</h2>
          <p className="eyebrow">{walkthroughMeta.subtitle}</p>
        </div>
        <WalkthroughPanel />
      </section>

      {/* ── The unseen user ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{unseenUserSection.heading}</h2>
          {unseenUserSection.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ── What this means for designers ── */}
      <section className="prose-section">
        <div className="prose-column">
          <h2 className="section-heading">{designersSection.heading}</h2>
          {designersSection.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

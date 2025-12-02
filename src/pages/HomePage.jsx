import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.4 }
});

const HomePage = () => {
  const [mode, setMode] = useState("urban");

  const isMining = mode === "mining";

  const modeLabel = isMining ? "Mining" : "Urban Mining";
  const modeColor = isMining ? "#ff9f0a" : "#00c853";

  const metrics = isMining
    ? {
        co2: "2.5× vs recycling",
        water: "2.0× vs recycling",
        yield: "▼ Low vs e-waste",
        profit: "↓ Lower margins",
        co2Chip: "High emissions from ore extraction",
        waterChip: "More water + land disturbance",
        yieldChip: "Ore has less gold per tonne",
        profitChip: "More cost, less recovered value"
      }
    : {
        co2: "1.0× (baseline)",
        water: "1.0× (baseline)",
        yield: "▲ High from e-waste",
        profit: "↑ Better margins",
        co2Chip: "Cleaner than mining per gram of metal",
        waterChip: "Hydrometallurgy & bioleaching optimise water use",
        yieldChip: "PCBs richer in gold & copper",
        profitChip: "Less input, more value recovered"
      };

  return (
    <div className="page">
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <motion.div {...fadeUp(0.05)}>
              <div className="hero-tag">
                🔄 Interactive Exhibit Prototype
                <span style={{ opacity: 0.7 }}>• E-waste to resource</span>
              </div>
              <h1 className="hero-title">
                Experience the <span className="hero-gradient-text">Future of Recycling</span>
              </h1>
              <p className="hero-subtitle">
                A digital exhibit that reveals the hidden metals and hazards inside everyday electronics and lets you
                compare traditional mining with smart urban mining.
              </p>

              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() =>
                    document.getElementById("ar-exhibit")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore AR Table Exhibit →
                </button>
                <button
                  className="btn-secondary"
                  onClick={() =>
                    document.getElementById("urban-mining")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Play Urban Mining Game ⚡
                </button>
              </div>

              <div className="hero-meta">
                <span>
                  <strong>Innovation:</strong> AR + hybrid game design
                </span>
                <span>
                  <strong>India-focused:</strong> CPCB, E-Parisara, EPR rules
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="hero-orbit"></div>
              <div className="hero-phone">
                <div className="hero-phone-inner">
                  <div className="chip">Au + Cu</div>
                  <div className="chip-label">Inside your phone</div>

                  <div className="hero-tag-chips">
                    <div className="chip-small">Gold ↑ value</div>
                    <div className="chip-small">Lead ☣ hazard</div>
                    <div className="chip-small">Urban mining ✅</div>
                  </div>

                  <div className="hero-phone-bottom-metrics">
                    <div>
                      <div className="hero-stat-badge">+95% metal yield</div>
                      <div
                        style={{
                          marginTop: "0.25rem",
                          fontSize: "0.64rem",
                          color: "var(--text-muted)"
                        }}
                      >
                        From e-waste PCBs vs typical ore
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>CO₂ saved</div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>−72%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INDIA E-WASTE */}
        <section id="india">
          <div className="container">
            <motion.div className="section-header" {...fadeUp(0.05)}>
              <div className="section-kicker">Context • India</div>
              <div className="section-title">Why India’s E-Waste Needs Better Recycling</div>
              <div className="section-subtitle">
                India is one of the world’s largest e-waste generators. Our exhibit turns this challenge into an
                opportunity for learning, innovation and Make-in-India recycling.
              </div>
            </motion.div>

            <div className="cards-grid">
              <motion.div className="card" {...fadeUp(0.08)}>
                <div className="card-icon" style={{ background: "rgba(10,132,255,0.18)" }}>
                  📱
                </div>
                <div className="card-title">1.6+ million tonnes / year</div>
                <div className="card-body">
                  Rapid growth in discarded phones, laptops and appliances, with volumes forecast to keep rising.
                </div>
                <div className="card-pill">Rising volumes</div>
              </motion.div>

              <motion.div className="card" {...fadeUp(0.12)}>
                <div className="card-icon" style={{ background: "rgba(255,59,48,0.15)" }}>
                  ☣
                </div>
                <div className="card-title">Hidden toxic load</div>
                <div className="card-body">
                  Lead, mercury, chromium and brominated flame retardants leak into soil, water and air if mis-handled.
                </div>
                <div className="card-pill">Health & environment</div>
              </motion.div>

              <motion.div className="card" {...fadeUp(0.16)}>
                <div className="card-icon" style={{ background: "rgba(0,200,83,0.16)" }}>
                  💰
                </div>
                <div className="card-title">Urban mining value</div>
                <div className="card-body">
                  PCBs in e-waste contain more gold and copper per tonne than many natural ores — a huge resource.
                </div>
                <div className="card-pill">Resource opportunity</div>
              </motion.div>

              <motion.div className="card" {...fadeUp(0.2)}>
                <div className="card-icon" style={{ background: "rgba(255,214,10,0.15)" }}>
                  🇮🇳
                </div>
                <div className="card-title">Make-in-India recyclers</div>
                <div className="card-body">
                  Formal plants like E-Parisara show that clean, scientific recycling is possible and scalable in India.
                </div>
                <div className="card-pill">Policy & industry</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXHIBITS */}
        <section id="ar-exhibit">
          <div className="container">
            <motion.div className="section-header" {...fadeUp(0.05)}>
              <div className="section-kicker">Exhibit A</div>
              <div className="section-title">
                Anamorphic AR Table — “What’s Inside My Device?”
              </div>
              <div className="section-subtitle">
                A tabletop AR experience where visitors place real electronics and see metals, hazards and recycling
                steps come alive as holographic overlays.
              </div>
            </motion.div>

            <div className="exhibits-grid">
              <motion.div className="exhibit-card" {...fadeUp(0.08)}>
                <div className="exhibit-label">Interaction Flow</div>
                <div className="exhibit-title">From device to digital twin</div>
                <div className="exhibit-body">
                  Visitors place an old phone, charger or PCB on the AR table. The camera recognises the object and
                  projects an “opened up” view: metals glow in colour, hazard zones flash, and simple animations explain
                  dismantling, separation and metal recovery.
                </div>
                <ul
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    paddingLeft: "1.05rem",
                    marginTop: "0.3rem"
                  }}
                >
                  <li>Step 1 — Place the device on the table</li>
                  <li>Step 2 — Object recognition & projection align</li>
                  <li>Step 3 — Tap hotspots to see metals & hazards</li>
                  <li>Step 4 — Watch the recycling journey animation</li>
                </ul>
                <div className="exhibit-tags">
                  <span className="tag">Object recognition</span>
                  <span className="tag">AR overlays</span>
                  <span className="tag">Multilingual audio</span>
                </div>
              </motion.div>

              <motion.div className="exhibit-card" {...fadeUp(0.12)}>
                <div className="exhibit-label">Prototype Design</div>
                <div className="exhibit-title">Low-cost, lab-friendly build</div>
                <div className="exhibit-body">
                  The prototype can be built using a mini LED projector, a depth or RGB camera, Raspberry Pi / Jetson
                  Nano, and a matte white tabletop. 3D-printed PCB models and tactile icons support younger visitors and
                  visually impaired users.
                </div>
                <ul
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    paddingLeft: "1.05rem",
                    marginTop: "0.3rem"
                  }}
                >
                  <li>Hardware — projector, camera, Pi, table frame</li>
                  <li>Software — simple object classifier + AR layout</li>
                  <li>UX — basic/advanced views for kids vs experts</li>
                </ul>
                <Link className="exhibit-footer-link" to="/ar">
                  View AR mock screen →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* URBAN MINING GAME + DASHBOARD */}
        <section id="urban-mining">
          <div className="container">
            <motion.div className="section-header" {...fadeUp(0.05)}>
              <div className="section-kicker">Exhibit B</div>
              <div className="section-title">Urban Mining vs Mining — Resource Trade Game</div>
              <div className="section-subtitle">
                A hybrid physical–digital game where visitors run a factory and choose between primary mining or
                recycling e-waste to meet metal demand.
              </div>
            </motion.div>

            <div className="exhibits-grid">
              <motion.div className="exhibit-card" {...fadeUp(0.08)}>
                <div className="exhibit-label">Game Concept</div>
                <div className="exhibit-title">Choose your metal source</div>
                <div className="exhibit-body">
                  Players pick either traditional mining or urban mining from e-waste. The game displays the impact on
                  CO₂, water, energy, ecosystem damage and profit. Recycling pathways unlock a physical model with a toy
                  conveyor, magnets and metal tokens.
                </div>
                <ul
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    paddingLeft: "1.05rem",
                    marginTop: "0.3rem"
                  }}
                >
                  <li>Interactive choice: Mining vs Recycling</li>
                  <li>Visual feedback for energy, CO₂ and profit</li>
                  <li>Token rewards for smart, sustainable choices</li>
                </ul>
                <div className="exhibit-tags">
                  <span className="tag">Learning by playing</span>
                  <span className="tag">Decision-making</span>
                </div>
                <Link className="exhibit-footer-link" to="/game">
                  Open interactive game →
                </Link>
              </motion.div>

              <motion.div className="exhibit-card" id="dashboard" {...fadeUp(0.12)}>
                <div className="exhibit-label">Impact Dashboard</div>
                <div className="exhibit-title">Mining vs Recycling at a glance</div>
                <div className="exhibit-body">
                  The dashboard UI compares key indicators side-by-side so visitors can see, in one look, why urban
                  mining is more efficient and climate-friendly.
                </div>

                <div className="dash-panel">
                  <div className="toggle-row">
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      Mode selected:{" "}
                      <span
                        id="mode-label"
                        style={{ color: modeColor, fontWeight: 600 }}
                      >
                        {modeLabel}
                      </span>
                    </div>
                    <div className="mode-toggle">
                      <button
                        id="btn-mining"
                        className={isMining ? "active" : ""}
                        onClick={() => setMode("mining")}
                      >
                        Mining
                      </button>
                      <button
                        id="btn-urban"
                        className={!isMining ? "active" : ""}
                        onClick={() => setMode("urban")}
                      >
                        Urban Mining
                      </button>
                    </div>
                  </div>

                  <div className="dash-metrics">
                    <div className="metric-card">
                      <div className="metric-label">CO₂ emissions</div>
                      <div className="metric-value" id="metric-co2">
                        {metrics.co2}
                      </div>
                      <div className="metric-chip" id="metric-co2-chip">
                        {metrics.co2Chip}
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Water use</div>
                      <div className="metric-value" id="metric-water">
                        {metrics.water}
                      </div>
                      <div className="metric-chip" id="metric-water-chip">
                        {metrics.waterChip}
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Gold yield per tonne</div>
                      <div className="metric-value" id="metric-yield">
                        {metrics.yield}
                      </div>
                      <div className="metric-chip" id="metric-yield-chip">
                        {metrics.yieldChip}
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Profit potential</div>
                      <div className="metric-value" id="metric-profit">
                        {metrics.profit}
                      </div>
                      <div className="metric-chip" id="metric-profit-chip">
                        {metrics.profitChip}
                      </div>
                    </div>
                  </div>

                  <div className="legend">
                    *Values are illustrative to communicate concepts, not exact industry data.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;



import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const hotspotPositions = {
  phone: {
    gold: { left: "46%", top: "46%" },
    copper: { left: "60%", top: "36%" },
    lead: { left: "36%", top: "62%" },
    br: { left: "62%", top: "54%" }
  },
  laptop: {
    gold: { left: "44%", top: "42%" },
    copper: { left: "58%", top: "34%" },
    lead: { left: "34%", top: "64%" },
    br: { left: "66%", top: "58%" }
  },
  charger: {
    gold: { left: "50%", top: "48%" },
    copper: { left: "66%", top: "40%" },
    lead: { left: "30%", top: "60%" },
    br: { left: "68%", top: "66%" }
  },
  battery: {
    gold: { left: "48%", top: "44%" },
    copper: { left: "60%", top: "36%" },
    lead: { left: "36%", top: "58%" },
    br: { left: "64%", top: "68%" }
  },
  router: {
    gold: { left: "46%", top: "46%" },
    copper: { left: "62%", top: "44%" },
    lead: { left: "34%", top: "60%" },
    br: { left: "70%", top: "62%" }
  }
};

const prettyDeviceName = (device) => {
  switch (device) {
    case "phone":
      return "Mobile phone";
    case "laptop":
      return "Laptop motherboard";
    case "charger":
      return "Phone charger";
    case "battery":
      return "Li-ion battery";
    case "router":
      return "Wi-Fi router";
  }
};

const deviceSubtitle = (device) => {
  switch (device) {
    case "phone":
      return "On a phone PCB, the overlay picks out tiny gold pads, copper tracks and dense components so visitors see where value is hiding in a familiar object.";
    case "laptop":
      return "Laptop boards are larger and more crowded, making it easy to show how much copper, gold and other metals can be recovered from one discarded device.";
    case "charger":
      return "Chargers reveal coils, transformers and safety components, ideal for explaining copper recovery and why plastics and ferrites must be handled carefully.";
    case "battery":
      return "Battery mode focuses on lithium, cobalt and safety zones, reinforcing why cells must only be handled by authorised recyclers.";
    case "router":
      return "Routers combine casings, antennas and PCBs, helping visitors understand the challenge of separating many different materials cleanly.";
    default:
      return "";
  }
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.35 }
});

const ArScreenPage = () => {
  const [activeTab, setActiveTab] = useState("metals");
  const [device, setDevice] = useState("phone");
  const [phoneCount, setPhoneCount] = useState(10);

  const gold = (0.024 * phoneCount).toFixed(2);
  const copper = Math.round(17 * phoneCount);
  const co2 = (0.45 * phoneCount).toFixed(1);
  const ore = Math.round(12 * phoneCount);

  const pos = hotspotPositions[device];

  return (
    <div className="page">
      <Header />

      <main>
        <div className="container">
          <motion.div className="title-row" {...fadeUp(0.03)}>
            <div className="title-block">
              <div className="exhibit-kicker">Exhibit A • AR Table</div>
              <h1 className="page-title">“What's on My Table?” - AR Screen</h1>
              <p className="page-subtitle">
                This screen shows how visitors experience the AR table: a live view of the physical device on the left,
                and layered information panels on the right to reveal metals, hazards and recycling steps in a simple,
                bilingual interface.
              </p>
            </div>
            <div className="badge-row">
              <div className="badge">Innovation: AR + anamorphic projection</div>
              <div className="badge">Clarity: layered views (basic/advanced)</div>
              <div className="badge">Inclusivity: tactile + audio guidance</div>
              <div className="badge">India focus: e-waste & EPR narrative</div>
            </div>
          </motion.div>

          <div className="ar-grid">
            {/* LEFT */}
            <motion.div
              className="ar-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="ar-label-row">
                <span>Live AR Table View</span>
                <span className="status-pill">● Device detected: {prettyDeviceName(device)}</span>
              </div>
              <div className="camera-frame">
                <div className="camera-grid-overlay" />
                <div className="ar-table">
                  <div className="ar-table-top-glow" />

                  {/* Device images */}
                  <div
                    className={`device-image device-phone ${
                      device === "phone" ? "active" : ""
                    }`}
                    data-device="phone"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                      <rect
                        x="2"
                        y="2"
                        width="156"
                        height="76"
                        rx="14"
                        fill="#071428"
                        stroke="#4FD1FF"
                        strokeOpacity="0.25"
                        strokeWidth="2"
                      />
                      <rect x="12" y="10" width="132" height="56" rx="8" fill="#04111a" />
                      <rect x="24" y="16" width="92" height="20" rx="4" fill="#0a84ff" opacity="0.12" />
                      <circle cx="80" cy="50" r="6" fill="#ffd60a" />
                    </svg>
                  </div>

                  <div
                    className={`device-image device-laptop ${
                      device === "laptop" ? "active" : ""
                    }`}
                    data-device="laptop"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                      <rect
                        x="6"
                        y="8"
                        width="148"
                        height="62"
                        rx="8"
                        fill="#071428"
                        stroke="#4FD1FF"
                        strokeOpacity="0.18"
                        strokeWidth="2"
                      />
                      <rect x="12" y="14" width="136" height="34" rx="4" fill="#04111a" />
                      <rect x="18" y="20" width="108" height="6" rx="2" fill="#0a84ff" opacity="0.12" />
                      <rect x="10" y="56" width="140" height="8" rx="3" fill="#0b1420" />
                      <rect x="34" y="62" width="92" height="6" rx="3" fill="#223049" />
                    </svg>
                  </div>

                  <div
                    className={`device-image device-charger ${
                      device === "charger" ? "active" : ""
                    }`}
                    data-device="charger"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                      <rect
                        x="36"
                        y="18"
                        width="88"
                        height="44"
                        rx="8"
                        fill="#081226"
                        stroke="#4FD1FF"
                        strokeOpacity="0.15"
                        strokeWidth="2"
                      />
                      <rect x="52" y="28" width="56" height="8" rx="3" fill="#ffd60a" />
                      <rect x="54" y="40" width="16" height="10" rx="2" fill="#0a84ff" opacity="0.12" />
                      <rect x="90" y="40" width="16" height="10" rx="2" fill="#0a84ff" opacity="0.12" />
                    </svg>
                  </div>

                  <div
                    className={`device-image device-battery ${
                      device === "battery" ? "active" : ""
                    }`}
                    data-device="battery"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                      <rect
                        x="20"
                        y="24"
                        width="100"
                        height="32"
                        rx="6"
                        fill="#061623"
                        stroke="#4FD1FF"
                        strokeOpacity="0.12"
                        strokeWidth="2"
                      />
                      <rect x="124" y="30" width="10" height="20" rx="2" fill="#223049" />
                      <rect x="30" y="30" width="72" height="20" rx="4" fill="#ffd60a" opacity="0.45" />
                      <polygon points="70,26 82,26 76,16" fill="#0a84ff" opacity="0.14" />
                    </svg>
                  </div>

                  <div
                    className={`device-image device-router ${
                      device === "router" ? "active" : ""
                    }`}
                    data-device="router"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                      <rect
                        x="22"
                        y="34"
                        width="116"
                        height="28"
                        rx="8"
                        fill="#061426"
                        stroke="#4FD1FF"
                        strokeOpacity="0.12"
                        strokeWidth="2"
                      />
                      <circle cx="44" cy="48" r="4" fill="#ffd60a" />
                      <circle cx="66" cy="48" r="4" fill="#ffd60a" />
                      <circle cx="88" cy="48" r="4" fill="#ffd60a" />
                      <rect x="128" y="24" width="4" height="18" rx="2" fill="#0a84ff" opacity="0.2" />
                    </svg>
                  </div>

                  <div className="device-outline">
                    <div className="device-outline-inner" />
                  </div>

                  {/* Hotspots */}
                  <div
                    id="hot-gold"
                    className="hotspot"
                    style={{ left: pos.gold.left, top: pos.gold.top }}
                  >
                    <div
                      className="hotspot-label"
                      id="lab-gold"
                      style={{ top: "-22px", left: "16px" }}
                    >
                      Gold (Au)
                    </div>
                  </div>
                  <div
                    id="hot-copper"
                    className="hotspot"
                    style={{ left: pos.copper.left, top: pos.copper.top }}
                  >
                    <div
                      className="hotspot-label"
                      id="lab-copper"
                      style={{ top: "-22px", left: "16px" }}
                    >
                      Copper (Cu)
                    </div>
                  </div>

                  <div
                    id="hot-lead"
                    className="hotspot hazard"
                    style={{ left: pos.lead.left, top: pos.lead.top }}
                  >
                    <div
                      className="hotspot-label"
                      id="lab-lead"
                      style={{ top: "18px", left: "16px" }}
                    >
                      Lead (Pb)
                    </div>
                  </div>
                  <div
                    id="hot-br"
                    className="hotspot hazard"
                    style={{ left: pos.br.left, top: pos.br.top }}
                  >
                    <div
                      className="hotspot-label"
                      id="lab-br"
                      style={{ top: "18px", left: "-72px" }}
                    >
                      Brominated FR
                    </div>
                  </div>
                </div>
              </div>
              <div className="ar-instruction">
                Tip: In the full exhibit, visitors can move their device slightly and the hologram will stay aligned,
                making the internal structure feel anchored to the physical object.
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="ar-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* Device carousel moved to top for visibility */}
              <div className="carousel carousel-top">
                <div className="carousel-label">Choose a device to explore:</div>
                <div className="carousel-row">
                  <motion.div
                    className={`device-pill ${device === "phone" ? "active" : ""}`}
                    data-device="phone"
                    onClick={() => setDevice("phone")}
                    whileTap={{ scale: 0.95 }}
                  >
                    Smartphone
                  </motion.div>
                  <motion.div
                    className={`device-pill ${device === "laptop" ? "active" : ""}`}
                    data-device="laptop"
                    onClick={() => setDevice("laptop")}
                    whileTap={{ scale: 0.95 }}
                  >
                    Laptop motherboard
                  </motion.div>
                  <motion.div
                    className={`device-pill ${device === "charger" ? "active" : ""}`}
                    data-device="charger"
                    onClick={() => setDevice("charger")}
                    whileTap={{ scale: 0.95 }}
                  >
                    Phone charger
                  </motion.div>
                  <motion.div
                    className={`device-pill ${device === "battery" ? "active" : ""}`}
                    data-device="battery"
                    onClick={() => setDevice("battery")}
                    whileTap={{ scale: 0.95 }}
                  >
                    Li‑ion battery
                  </motion.div>
                  <motion.div
                    className={`device-pill ${device === "router" ? "active" : ""}`}
                    data-device="router"
                    onClick={() => setDevice("router")}
                    whileTap={{ scale: 0.95 }}
                  >
                    Wi‑Fi router
                  </motion.div>
                </div>
              </div>

              <div className="tab-row">
                <button
                  className={`tab-button ${activeTab === "metals" ? "active" : ""}`}
                  data-tab="metals"
                  onClick={() => setActiveTab("metals")}
                >
                  Metals View
                </button>
                <button
                  className={`tab-button ${activeTab === "hazards" ? "active" : ""}`}
                  data-tab="hazards"
                  onClick={() => setActiveTab("hazards")}
                >
                  Hazards View
                </button>
                <button
                  className={`tab-button ${activeTab === "steps" ? "active" : ""}`}
                  data-tab="steps"
                  onClick={() => setActiveTab("steps")}
                >
                  Recycling Steps
                </button>
                <button
                  className={`tab-button ${activeTab === "value" ? "active" : ""}`}
                  data-tab="value"
                  onClick={() => setActiveTab("value")}
                >
                  Value Calculator
                </button>
              </div>

              {/* Panels */}
              {activeTab === "metals" && (
                <motion.div
                  className="panel-body"
                  id="panel-metals"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key="panel-metals"
                >
                  <div className="panel-title">Metals inside your device</div>
                  <div className="panel-subtitle">{deviceSubtitle(device)}</div>
                  <div className="chip-row">
                    <span className="chip-small">Gold (Au) · edge contacts & high‑value pads</span>
                    <span className="chip-small">Copper (Cu) · tracks, vias & coils</span>
                    <span className="chip-small">Silver (Ag) · switching & contact points</span>
                    <span className="chip-small">Palladium (Pd) · capacitor coatings</span>
                  </div>
                  <ul className="list" style={{ marginTop: "0.4rem" }}>
                    <li>Tap a glowing dot on the device to see the metal name, its job in the circuit and how it can be recovered.</li>
                    <li>Colour overlay: gold = gold pads, orange = copper paths, blue = silver contacts, violet = palladium parts.</li>
                    <li>Labels are kept short, with English text and supporting Hindi / Gujarati terms to keep the exhibit inclusive.</li>
                  </ul>
                </motion.div>
              )}

              {activeTab === "hazards" && (
                <motion.div
                  className="panel-body"
                  id="panel-hazards"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key="panel-hazards"
                >
                  <div className="panel-title">Hazard view</div>
                  <div className="panel-subtitle">
                    Hazard mode mutes the metal highlights and lets toxic zones glow red, so visitors immediately see what is dangerous if devices are burned, broken or dumped.
                  </div>
                  <ul className="list" style={{ marginTop: "0.3rem" }}>
                    <li>
                      <strong>Lead (Pb):</strong> linked to nerve and brain damage when it escapes into dust and soil.
                    </li>
                    <li>
                      <strong>Mercury (Hg):</strong> travels through water and builds up in fish and the wider food chain.
                    </li>
                    <li>
                      <strong>Brominated flame retardants:</strong> form highly toxic dioxins when wires or boards are burned in open air.
                    </li>
                  </ul>
                  <div className="chip-row">
                    <div
                      className="chip-small hazard-chip"
                    >
                      Audio cue · Avoid burning or breaking e‑waste in open air
                    </div>
                    <div
                      className="chip-small hazard-chip"
                    >
                      Action tip · Hand devices to an authorised recycler, not informal scrap burning
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "steps" && (
                <motion.div
                  className="panel-body"
                  id="panel-steps"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key="panel-steps"
                >
                  <div className="panel-title">Recycling steps (simplified)</div>
                  <div className="panel-subtitle">
                    A simple timeline shows how a device travels through safe recycling, with each step linked to an animation on the table.
                  </div>
                  <ol className="list" style={{ marginTop: "0.3rem" }}>
                    <li>
                      <strong>Check & reuse:</strong> if the device still works, reuse or donation is shown as the first and best option.
                    </li>
                    <li>
                      <strong>Manual dismantling:</strong> workers remove the battery, screen, PCB, cables and plastics by hand.
                    </li>
                    <li>
                      <strong>Pre‑processing:</strong> shredding, magnetic and density separation concentrate the metal‑rich fractions.
                    </li>
                    <li>
                      <strong>Metallurgy:</strong> hydrometallurgy or bio‑leaching extract gold, copper and silver from the concentrate.
                    </li>
                    <li>
                      <strong>Refined metals:</strong> clean metals go back into new electronics — closing the loop instead of feeding landfills.
                    </li>
                  </ol>
                  <div className="chip-row">
                    <div className="chip-small mode-chip">Visitor view · Simple icons and short explainer clips</div>
                    <div className="chip-small mode-chip">Expert view · Extra process notes and indicative data</div>
                  </div>
                </motion.div>
              )}

              {activeTab === "value" && (
                <motion.div
                  className="panel-body"
                  id="panel-value"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key="panel-value"
                >
                  <div className="panel-title">Value calculator</div>
                  <div className="panel-subtitle">
                    Visitors can slide the number of devices they recycle and instantly see gold recovered, CO₂ saved and
                    mining avoided. This connects personal action to large-scale impact. Current values are illustrative and not real data.
                  </div>

                  <div className="slider-row">
                    <div>
                      Number of phones recycled: <strong>{phoneCount}</strong>
                    </div>
                    <input
                      type="range"
                      id="phone-slider"
                      min={1}
                      max={100}
                      value={phoneCount}
                      onChange={(e) => setPhoneCount(parseInt(e.target.value, 10))}
                    />
                  </div>

                  <div className="value-row">
                    <div className="value-card">
                      <div className="value-label">Estimated gold recovered</div>
                      <div className="value-number">
                        {gold} g
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        From connectors & contacts
                      </div>
                    </div>
                    <div className="value-card">
                      <div className="value-label">Copper & other metals</div>
                      <div className="value-number">
                        {copper} g (Cu + others)
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        Combined from PCBs & coils
                      </div>
                    </div>
                  </div>

                  <div className="value-row">
                    <div className="value-card">
                      <div className="value-label">CO₂ saved vs mining</div>
                      <div className="value-number">
                        {co2} kg CO₂
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        Avoided emissions (illustrative)
                      </div>
                    </div>
                    <div className="value-card">
                      <div className="value-label">Ore mining avoided</div>
                      <div className="value-number">
                        {ore} kg ore
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        No blasting or hauling needed
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArScreenPage;



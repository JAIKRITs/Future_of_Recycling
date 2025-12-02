import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.35 }
});

// Simple illustrative factors – not real-world data
const FACTORS = {
  mining: {
    co2PerTonne: 2.5,
    waterPerTonne: 2.0,
    energyPerTonne: 2.2,
    yieldScore: 0.6,
    profitScore: 0.7
  },
  urban: {
    co2PerTonne: 1.0,
    waterPerTonne: 1.0,
    energyPerTonne: 0.9,
    yieldScore: 1.4,
    profitScore: 1.3
  }
};

const UrbanMiningGamePage = () => {
  const [demand, setDemand] = useState(50); // in "units" of metal demand
  const [urbanShare, setUrbanShare] = useState(60); // % covered by recycling

  const miningShare = 100 - urbanShare;

  const miningTonnage = (demand * miningShare) / 100;
  const urbanTonnage = (demand * urbanShare) / 100;

  const miningCO2 = miningTonnage * FACTORS.mining.co2PerTonne;
  const urbanCO2 = urbanTonnage * FACTORS.urban.co2PerTonne;

  const miningWater = miningTonnage * FACTORS.mining.waterPerTonne;
  const urbanWater = urbanTonnage * FACTORS.urban.waterPerTonne;

  const miningEnergy = miningTonnage * FACTORS.mining.energyPerTonne;
  const urbanEnergy = urbanTonnage * FACTORS.urban.energyPerTonne;

  const miningProfit = miningTonnage * FACTORS.mining.profitScore;
  const urbanProfit = urbanTonnage * FACTORS.urban.profitScore;

  const totalYieldScore =
    miningTonnage * FACTORS.mining.yieldScore + urbanTonnage * FACTORS.urban.yieldScore;

  const co2Saved = Math.max(0, miningTonnage * FACTORS.mining.co2PerTonne - (miningCO2 + urbanCO2));

  return (
    <div className="page">
      <Header />

      <main>
        <div className="container">
          <motion.div className="title-row" {...fadeUp(0.02)}>
            <div className="title-block">
              <div className="exhibit-kicker">Exhibit B • Interactive Game</div>
              <h1 className="page-title">“Urban Mining vs Mining” — Resource Trade Simulator</h1>
              <p className="page-subtitle">
                Run a virtual metal factory and decide how much demand to meet with primary mining
                or with recycling e-waste. Watch CO₂, water use, ore moved and profit respond in
                real time as you slide between the two futures.
              </p>
            </div>
            <div className="badge-row">
              <div className="badge">Concept: policy + technology + behaviour</div>
              <div className="badge">Metrics: CO₂, water, energy, yield, profit</div>
              <div className="badge">India focus: urban mines from phones & PCs</div>
            </div>
          </motion.div>

          <div className="game-grid">
            {/* LEFT: Scenario cards */}
            <motion.div
              className="game-column"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="game-label">Your choices this round</div>

              <div className="game-scenario-row">
                <div className="game-scenario-card mining">
                  <div className="game-scenario-tag">Option 1</div>
                  <div className="game-scenario-title">Primary mining</div>
                  <div className="game-scenario-body">
                    Heavy trucks, blasting and deep pits move rock to reach small amounts of metal.
                    Emissions and water use scale with every extra tonne you choose here.
                  </div>
                  <div className="game-scenario-metric">
                    <span>Tonnage from mining</span>
                    <strong>{miningTonnage.toFixed(1)} units</strong>
                  </div>
                </div>

                <div className="game-scenario-card urban">
                  <div className="game-scenario-tag">Option 2</div>
                  <div className="game-scenario-title">Urban mining</div>
                  <div className="game-scenario-body">
                    Concentrated metals from phones and PCBs go through dismantling, shredding and
                    clean recovery steps. More value per tonne, with far lower environmental cost.
                  </div>
                  <div className="game-scenario-metric">
                    <span>Tonnage from recycling</span>
                    <strong>{urbanTonnage.toFixed(1)} units</strong>
                  </div>
                </div>
              </div>

              <div className="legend" style={{ marginTop: "0.6rem" }}>
                *Numbers are illustrative to communicate trends, not real industrial data.
              </div>
            </motion.div>

            {/* RIGHT: Controls + metrics */}
            <motion.div
              className="game-column"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="dash-panel">
                <div className="game-control-group">
                  <div className="game-label">1. Set factory metal demand</div>
                  <div className="slider-row">
                    <div>
                      Annual metal demand: <strong>{demand}</strong> units
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      value={demand}
                      onChange={(e) => setDemand(parseInt(e.target.value, 10))}
                    />
                  </div>
                </div>

                <div className="game-control-group">
                  <div className="game-label">2. Choose your mix</div>
                  <div className="game-toggle-row">
                    <span>Mining share</span>
                    <strong>{miningShare}%</strong>
                  </div>
                  <div className="slider-row">
                    <div>
                      Urban mining share: <strong>{urbanShare}%</strong>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={urbanShare}
                      onChange={(e) => setUrbanShare(parseInt(e.target.value, 10))}
                    />
                  </div>
                  <div className="game-mix-bars">
                    <div className="game-mix-bar mining" style={{ width: `${miningShare}%` }}>
                      Mining {miningShare}%
                    </div>
                    <div className="game-mix-bar urban" style={{ width: `${urbanShare}%` }}>
                      Urban mining {urbanShare}%
                    </div>
                  </div>
                </div>

                <div className="game-label" style={{ marginTop: "0.6rem" }}>
                  3. Results — per year impact
                </div>

                <div className="dash-metrics game-metrics">
                  <div className="metric-card">
                    <div className="metric-label">Total CO₂ emissions</div>
                    <div className="metric-value">
                      {(miningCO2 + urbanCO2).toFixed(1)} t CO₂
                    </div>
                    <div className="metric-chip">
                      CO₂ saved vs all-mining: {co2Saved.toFixed(1)} t (illustrative)
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Water use (relative)</div>
                    <div className="metric-value">
                      {(miningWater + urbanWater).toFixed(1)}×
                    </div>
                    <div className="metric-chip">Lower share of mining → lower water stress</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Energy demand (relative)</div>
                    <div className="metric-value">
                      {(miningEnergy + urbanEnergy).toFixed(1)}×
                    </div>
                    <div className="metric-chip">High mining share drives up energy use</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Metal yield score</div>
                    <div className="metric-value">{totalYieldScore.toFixed(1)} pts</div>
                    <div className="metric-chip">
                      More urban mining → richer feed from PCBs and devices
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-label">Profit index</div>
                    <div className="metric-value">
                      {(urbanProfit + miningProfit).toFixed(1)} pts
                    </div>
                    <div className="metric-chip">
                      Urban mining usually means higher margins per unit of metal
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UrbanMiningGamePage;



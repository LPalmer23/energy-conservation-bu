import './LearnMore.css';
import warrenImg from '../assets/warren1.jpg'; // Adjust path as needed
import boothImg from '../assets/booth1.jpg';   // Used in side section

export default function LearnMore() {
  return (
    <div className="learn-more-wrapper">
      <div className="hero-banner">
        <div className="hero-text">
          <h1>Understanding the Northeast Energy Grid</h1>
          <p>How we conserve power and reduce emissions—one peak hour at a time.</p>
        </div>
      </div>

      <div className="learn-more-container">
        <section>
          <h2>Where Does Our Energy Come From?</h2>
          <p>
            ISO New England (ISO-NE) delivers electricity to over 14 million people across six states. It draws from a mix of energy sources:
          </p>
          <ul>
            <li><strong>Natural Gas (53%)</strong>: Reliable and flexible, but a major contributor to CO₂ emissions.</li>
            <li><strong>Nuclear (27%)</strong>: Carbon-free and steady, a key part of the clean energy mix.</li>
            <li><strong>Renewables (11%)</strong>: Includes hydro, wind, and solar—clean and expanding, but dependent on weather and daylight.</li>
            <li><strong>Coal and Oil (&lt;1%)</strong>: Used only during peak events due to their high pollution and cost.</li>
          </ul>
          <p>
            While coal and oil make up less than 1% of the grid’s annual supply, their environmental impact is severe. Just one megawatt-hour (MWh) of coal-fired electricity emits over 2,200 lbs of CO₂. During peak demand, when hundreds of these units are activated, emissions can skyrocket into the <strong>thousands of tons</strong> within hours.
          </p>
        </section>

        <section>
          <h2>Why Peak Demand Matters</h2>
          <p>
            During extreme heat or cold, electricity usage spikes. When cleaner sources can’t meet the surge, ISO-NE turns to its dirtiest, most expensive plants to prevent outages.
          </p>
          <p>
            ISO-NE determines part of each user's annual rate based on their electricity usage during the <strong>single highest-demand hour</strong> of the year. Cutting consumption during those hours significantly reduces both costs and emissions.
          </p>
        </section>

        <section className="bu-section">
          <div className="bu-text">
            <h2>Boston University's Response</h2>
            <p>
              To support cleaner grid operations, BU has implemented an automated alert and reporting system. During forecasted peak events, building managers receive notifications prompting short-term energy conservation efforts.
            </p>
            <p>
              These alerts are paired with a simple reporting tool to track:
            </p>
            <ul>
              <li>What actions were taken to reduce usage</li>
              <li>Estimated energy conserved</li>
              <li>Environmental and financial outcomes</li>
            </ul>
            <p>
              This initiative helps diminish reliance on carbon-intensive backup sources and enables evidence-based conservation during grid stress events.
            </p>
          </div>
          <img src={boothImg} alt="BU Booth energy building" className="side-img" />
        </section>

        <section className="cta-section">
          <h2>Want to Get Involved?</h2>
          <p>
            When alerts go out, your actions make a difference. Shut off unnecessary lighting and electronics, shift energy-intensive activities to off-peak times, and help flatten the demand curve. Even small changes at the right time can add up to major environmental impact.
          </p>
        </section>
      </div>
    </div>
  );
}

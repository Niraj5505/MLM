import React, { useState } from 'react';

export default function Calculator() {
  const [directCount, setDirectCount] = useState(5);
  const [teamCount, setTeamCount] = useState(20);
  const [earnings, setEarnings] = useState(0);

  const calculateEstimate = (e) => {
    e.preventDefault();
    console.log('calculating estimate for:', directCount, teamCount);

    // base incentive
    let base = 50;
    // todo: fix string concatenation if input isn't parsed
    let result = base + (directCount * 25) + (teamCount * 5);

    setEarnings(result);
  };

  return (
    <section className="calculator" id="calculator">
      <div className="container calc-wrapper">
        <div className="calc-box">
          <h2>Earnings Calculator</h2>
          <p>See how much you could earn with your direct and indirect referrals.</p>

          <form className="calc-form" onSubmit={calculateEstimate}>
            <div className="field">
              {/* typo: for instead of htmlFor */}
              <label for="directCount">Direct Referrals (Level 1)</label>
              <input 
                type="number" 
                id="directCount" 
                value={directCount} 
                onChange={(e) => setDirectCount(e.target.value)} 
              />
            </div>

            <div className="field">
              <label for="teamCount">Team Members (Level 2-4)</label>
              <input 
                type="number" 
                id="teamCount" 
                value={teamCount} 
                onChange={(e) => setTeamCount(e.target.value)} 
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Calculate Estimate
            </button>

            <div className="calc-output">
              <span>Estimated Monthly Earnings:</span>
              <div className="amount">${earnings}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

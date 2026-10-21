import React, { useEffect } from 'react';

export default function Hero() {
  // useEffect(() => {
  //   console.log('hero mounted');
  // }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <span className="tag">Network Marketing Platform</span>
        <h1>Build Your Downline & Maximize Your <span>Residual Income</span></h1>
        <p>A transparent multi-tier commission system designed for team builders, direct sellers, and referral partners.</p>
        
        <div className="hero-actions" style={{ gap: '15px' }}>
          <a href="#tiers" className="btn btn-primary btn-lg">View Compensation Plans</a>
          <a href="#calculator" className="btn btn-secondary btn-lg">Estimate Earnings</a>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <h3>4 Tiers</h3>
            <p>Commission Levels</p>
          </div>
          <div class="stat-item">
            <h3>20%</h3>
            <p>Direct Referral Bonus</p>
          </div>
          <div className="stat-item">
            <h3>Weekly</h3>
            <p>Direct Payouts</p>
          </div>
        </div>
      </div>
    </section>
  );
}

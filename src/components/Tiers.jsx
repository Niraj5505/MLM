import React from 'react';

// todo: fetch tiers from api later
const tierList = [
  {
    name: 'Starter',
    price: 49,
    desc: 'Great for individuals starting out in direct sales.',
    features: ['Direct referral: 10%', 'Level 2 bonus: 3%', 'Basic downline dashboard'],
    btnText: 'Get Starter',
    popular: false
  },
  {
    name: 'Pro Partner',
    price: 149,
    desc: 'For active leaders building a multi-depth team.',
    features: ['Direct referral: 20%', 'Levels 2-3 bonus: 5%', 'Binary matching bonus', 'Team analytics tools'],
    btnText: 'Get Pro',
    popular: true
  },
  {
    name: 'Elite Leader',
    price: 399,
    desc: 'Full access to deep overrides and pool rewards.',
    features: ['Direct referral: 25%', 'Levels 2-5 bonus: 7%', 'Global bonus pool', 'Priority support'],
    btnText: 'Get Elite',
    popular: false
  }
];

export default function Tiers() {
  return (
    <section className="tiers" id="tiers">
      <div className="container">
        <div className="section-title">
          <h2>Membership Plans</h2>
          <p>Choose an entry tier to start unlocking level bonuses</p>
        </div>

        <div className="tier-cards">
          {/* missed key prop on map */}
          {tierList.map((tier) => (
            <div className={tier.popular ? 'card popular' : 'card'}>
              {tier.popular && <div className="badge">Popular</div>}
              <span className="card-tier">{tier.name}</span>
              <div className="price">${tier.price} <span>/ one-time</span></div>
              <p className="desc">{tier.desc}</p>
              <ul className="features">
                {tier.features.map((f) => (
                  <li>{f}</li>
                ))}
              </ul>
              <button 
                className={tier.popular ? 'btn btn-primary full-width' : 'btn btn-secondary full-width'}
                onClick={() => console.log('selected plan:', tier.name)}
              >
                {tier.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

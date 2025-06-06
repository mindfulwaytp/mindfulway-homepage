import React from 'react';
import './Providers.css';
import exampleImg from './assets/provider-example.avif'; // Example image, replace with actual image path

const Providers = () => {
  const therapists = [
    {
      name: 'Ryne Evans, LMFT',
      pronouns: 'he/they',
      specialties: ['ADHD', 'Autism', 'LGBTQ+', 'Polyamory', 'Teens'],
      image: exampleImg,
      bio: 'Ryne specializes in working with neurodivergent teens and adults, LGBTQ+ clients, and complex relationship dynamics.',
    },
    {
      name: 'Jordan Lee, LICSW',
      pronouns: 'they/them',
      specialties: ['Trauma', 'Gender Identity', 'EMDR'],
      image: exampleImg,
      bio: 'Jordan creates a trauma-informed space for healing, with a focus on identity, empowerment, and somatic awareness.',
    },
    // Add more provider objects here
  ];

  return (
    <div className="providers-page">
      <h1>Meet Our Providers</h1>
      <div className="provider-grid">
        {therapists.map((t, i) => (
          <div className="provider-card" key={i}>
            <img src={t.image} alt={`Therapist ${t.name}`} />
            <h2>{t.name}</h2>
            <p className="pronouns">{t.pronouns}</p>
            <div className="tags">
              {t.specialties.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            <p className="bio">{t.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;
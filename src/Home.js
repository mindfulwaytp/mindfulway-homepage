import React from 'react';
import './App.css';

function Home() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-text">
          <h1>Welcome to Mindful Way Therapy</h1>
          <p>Your Compassionate Space for Mental</p>
          <p>Health and Wellness.</p>
        </div>  

        <div className="intro-image">
          <img src={require('./assets/therapy-scene.avif')} alt="Therapy Scene" />
        </div>
      </section>

      <section className="about-split">
        <div className='about-image'>
          <img src={require('./assets/therapy-office.avif')} alt="About Us" />
        </div>
        <div className='about-content'>
          <h2>About Us</h2>
          <h3>Our Approach</h3>
          <p>
            We specialize in working with neurodivergent individuals, including those with autism, ADHD, and other neurodiverse conditions. Our therapists are trained to understand the unique challenges and strengths of neurodivergent clients.
          </p>
          <p>
            At Mindful Way Therapy, we're dedicated to providing compassionate and effective therapy services to individuals in the Seattle area and beyond...
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Personalized and affirming therapy tailored to your unique needs</li>
            <li>Experienced therapists who understand the challenges you're facing</li>
            <li>Safe and supportive environment where you can explore your thoughts and feelings</li>
            <li>Commitment to inclusivity and understanding of neurodiversity</li>
            <li>Flexible scheduling options to accommodate your lifestyle</li>
          </ul>

          <div className='button-row'>
            <a href="/providers" className="outline-button">
              <span className='icon'>👥</span>
              Our Providers
            </a>
            <a href="/rates" className="outline-button">
              <span className='icon'>💰</span>
              Rates & Insurance
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

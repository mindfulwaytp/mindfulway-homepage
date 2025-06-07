import React, { useState } from 'react';
import Select from 'react-select';
import './Providers.css';
import exampleImg from './assets/provider-example.avif'; // Replace with actual image paths

// Moved ABOVE the component
const allTherapists = [
  {
    name: 'Ryne Evans',
    license: 'LMFT',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Childhood Trauma', 'Depression', 'LGBTQ+ Identities', 'Polyamory', 'Relaionships', 'Sexuality', 'Trauma'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence', 'UHC-Medicaid', 'UHC-Commercial'],
    location: ['Telehealth', 'U-District'],
    services: ['Assessments Only'],
    gender: ['Male'],
    acceptingClients: true,
    image: exampleImg,
  },
{
    name: 'McCall Evans',
    license: 'LMHCA',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Parenting Support', 'PTSD', 'School Avoidance', 'Teens'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth', 'U-District'],
    services: ['Individual'],
    gender: ['Male'],
    acceptingClients: true,
    image: exampleImg,
  },
{
    name: 'Chandra Lindeman',
    license: 'LMHC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual'],
    gender: ['Female'],
    acceptingClients: false,
    image: exampleImg,
  },
{
    name: 'Cheryl Snider',
    license: 'LSWAIC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples'],
    gender: ['Female'],
    acceptingClients: true,
    image: exampleImg,
  },
{
    name: 'Paige Butkey',
    license: 'LMFTA',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples', 'Family'],
    gender: ['Female'],
    acceptingClients: true,
    image: exampleImg,
  },

];

// -------------------- DROPDOWN OPTIONS --------------------
const specialtyOptions = [...new Set(allTherapists.flatMap(t => t.specialties))].map(s => ({ label: s, value: s }));
const insuranceOptions = [...new Set(allTherapists.flatMap(t => t.insurance))].map(i => ({ label: i, value: i }));
const locationOptions = [...new Set(allTherapists.flatMap(t => t.location))].map(l => ({ label: l, value: l }));
const serviceOptions = [...new Set(allTherapists.flatMap(t => t.services))].map(s => ({ label: s, value: s }));
const genderOptions = [...new Set(allTherapists.map(t => t.gender))].map(g => ({ label: g, value: g }));

// -------------------- COMPONENT --------------------
const Providers = () => {
  const [query, setQuery] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [availability, setAvailability] = useState({ value: 'all', label: 'All' });


  const filteredTherapists = allTherapists.filter(t => {
    const matchesQuery =
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.bio.toLowerCase().includes(query.toLowerCase());

    const matchesSpecialties =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.every(sel => t.specialties.includes(sel.value));

    const matchesInsurance =
      !selectedInsurance || t.insurance.includes(selectedInsurance.value);

    const matchesLocation =
      selectedLocation.length === 0 ||
      selectedLocation.every(loc => t.location.includes(loc.value));

    const matchesServices =
      selectedServices.length === 0 ||
      selectedServices.every(serv => t.services.includes(serv.value));

    const matchesGender =
      !selectedGender || t.gender === selectedGender.value;
    
    const matchesAvailability =
      availability.value === 'all' ||
      (availability.value === 'true' && t.acceptingClients) ||
      (availability.value === 'false' && !t.acceptingClients);

    return matchesQuery && matchesSpecialties && matchesInsurance && matchesLocation && matchesServices && matchesGender && matchesAvailability;
  });

  return (
    <div className="providers-page">
      <h1>Meet Our Providers</h1>
      <h3>Use the search functions below to find a provider</h3>

      {/* Search Input */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filter Dropdowns */}
      <div className="filters-grid">
        <div>
          <label>Specialties</label>
          <Select
            isMulti
            options={specialtyOptions}
            value={selectedSpecialties}
            onChange={setSelectedSpecialties}
            className="filter-dropdown"
          />
        </div>
        <div>
          <label>Insurance</label>
          <Select
            options={insuranceOptions}
            value={selectedInsurance}
            onChange={setSelectedInsurance}
            isClearable
            className="filter-dropdown"
          />
        </div>
        <div>
          <label>Location</label>
          <Select
            isMulti
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
            className="filter-dropdown"
          />
        </div>
        <div>
          <label>Services</label>
          <Select
            isMulti
            options={serviceOptions}
            value={selectedServices}
            onChange={setSelectedServices}
            className="filter-dropdown"
          />
        </div>
        <div>
          <label>Gender</label>
          <Select
            options={genderOptions}
            value={selectedGender}
            onChange={setSelectedGender}
            isClearable
            className="filter-dropdown"
          />
        </div>
        <div>
        <label>Availability</label>
         <Select
          options={[
        { value: 'all', label: 'All' },
        { value: 'true', label: 'Accepting New Clients' },
        { value: 'false', label: 'Not Accepting New Clients' }
      ]}
        value={availability}
        onChange={setAvailability}
        className="filter-dropdown"
        isClearable={false}
  />
        </div>
      </div>

      {/* Provider Cards */}
      <div className="provider-grid">
        {filteredTherapists.map((t, i) => (
          <div className="provider-card" key={i}>
            <div className="card-left">
              <img src={t.image} alt={`Therapist ${t.name}`} className="provider-photo" />
            </div>

            <div className="card-right">
              <h2 className="provider-name">{t.name}</h2>
              <p className="pronouns">{t.pronouns}</p>
              <p className="provider-license">{t.license || 'LMFT'}</p>
              <p className="location">{t.location.join(', ')}</p>

              <p className="clients">
                <span className="icon" style={{ color: t.acceptingClients ? 'green' : 'crimson' }}>
                  {t.acceptingClients ? '✔' : '✖'}
                </span>{' '}
                {t.acceptingClients ? 'Accepting New Clients' : 'Not Accepting New Clients'}
              </p>

              <ul className="provider-specialties">
                {t.specialties.map((tag, j) => (
                  <li key={j}><span className="dot" /> {tag}</li>
                ))}
              </ul>

              <p className="insurance-label">
                <strong>Insurance:</strong> {t.insurance.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Providers;

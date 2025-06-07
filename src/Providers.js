import React, { useState } from 'react';
import Select from 'react-select';
import './Providers.css';
import exampleImg from './assets/provider-example.avif'; // Replace with actual image paths
import { FaCalendarCheck, FaCalendarTimes} from 'react-icons/fa';
import { TbReportSearch } from 'react-icons/tb';

// Moved ABOVE the component
const allTherapists = [
  {
    name: 'Ryne Evans',
    license: 'LMFT',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Childhood Trauma', 'Depression', 'LGBTQ+ Identities', 'Polyamory', 'Relaionships', 'Sexuality', 'Trauma'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Polyamory', 'Assessments'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence', 'UHC-Medicaid', 'UHC-Commercial'],
    location: ['Telehealth', 'U-District'],
    services: ['Assessments', 'Indvidual', 'Couples', 'Family'],
    gender: ['Male'],
    acceptingClients: 'assessments Only',
    image: exampleImg,
  },
{
    name: 'McCall Evans',
    license: 'LMHCA',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Parenting Support', 'PTSD', 'School Avoidance', 'Teens'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Teens'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth', 'U-District'],
    services: ['Individual'],
    gender: ['Male'],
    acceptingClients: 'yes',
    image: exampleImg,
  },
{
    name: 'Chandra Lindeman',
    license: 'LMHC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    topSpecialties:['ADHD', 'Chronic Illness', 'LGBTQ+ Identities', 'Parenting'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual'],
    gender: ['Female'],
    acceptingClients: 'no',
    image: exampleImg,
  },
{
    name: 'Cheryl Snider',
    license: 'LSWAIC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Polyamory', 'Couples'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples'],
    gender: ['Female'],
    acceptingClients: 'yes',
    image: exampleImg,
  },
{
    name: 'Paige Butkey',
    license: 'LMFTA',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety,', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships', 'Teens'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    topSpecialties:['ADHD', 'Autism', 'LGBTQ+ Identities', 'Couples'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples', 'Family'],
    gender: ['Female'],
    acceptingClients: 'yes',
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
                {t.acceptingClients?.toLowerCase() === 'yes' && (
                  <span className="icon available">
                  <FaCalendarCheck /> Accepting New Clients
                </span>
                )}
                {t.acceptingClients?.toLowerCase() === 'assessments only' && (
                  <span className="icon available">
                    <TbReportSearch /> Accepting for Assessments Only
                  </span>
                )}
                {t.acceptingClients?.toLowerCase() === 'no' && (
                  <span className="icon not-available">
                    <FaCalendarTimes /> Not Accepting New Clients
                  </span>
                )}

              </p>

              {Array.isArray(t.topSpecialties) && t.topSpecialties.length > 0 && (
              <ul className="provider-specialties">
                {t.topSpecialties.map((tag, j) => (
                  <li key={j}><span className="dot" /> {tag}</li>
                ))}
              </ul>
              )}
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

import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [doctorLoggedIn, setDoctorLoggedIn] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const [testResults, setTestResults] = useState({
    '0-3': { ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', DX_GROUP: '' },
    '3-5': { FIQ: '', VIQ: '', ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', DX_GROUP: '' },
    '6-12': { FIQ: '', VIQ: '', PIQ: '', ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', AQ_TOTAL: '', DX_GROUP: '' },
    '13+': { FIQ: '', VIQ: '', PIQ: '', ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', AQ_TOTAL: '', DX_GROUP: '' }
  });

  const About = () => (
    <div>
      <h2>About Us</h2>
      <p>This is an autism detection tool designed to help identify early signs of autism in children.</p>
    </div>
  );




const Services = () => {
  const [name, setName] = useState(''); // Define state for name
  const [age, setAge] = useState(''); // Define state for age
  const [gender, setGender] = useState('male'); // Default gender
  const [uniqueId, setUniqueId] = useState(''); // Define state for unique ID

  const handlePersonalDataSubmit = async (event) => {
    event.preventDefault();
    const generatedId = `ID-${Math.floor(Math.random() * 10000)}`;
    setUniqueId(generatedId);
  
    const response = await fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age, gender, unique_id: generatedId }), // Pass generatedId as unique_id
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log("Data saved successfully:", data);
    } else {
      console.error('Failed to register patient');
    }
  };

  return (
    <div>
      <h2>Services</h2>
      <form onSubmit={handlePersonalDataSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on change
          placeholder="Enter your name"
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)} // Update age state on change
          placeholder="Enter your age"
        />
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)} // Update gender state on change
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {uniqueId && <p>Your Unique Patient ID: {uniqueId}</p>}
    </div>
  );
};







  const Assessment = () => {
      const [selectedCategory, setSelectedCategory] = useState('0-3');
      const [testResults, setTestResults] = useState({
          '0-3': { ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', DX_GROUP: '' },
          '3-5': { FIQ: '', VIQ: '', ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', DX_GROUP: '' },
          '6-12': { FIQ: '', VIQ: '', PIQ: '', ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', AQ_TOTAL: '', DX_GROUP: '' },
          '13+': { FIQ: '', VIQ: '', PIQ: '', ADOS_TOTAL: '', ADOS_COMM: '', ADOS_SOCIAL: '', ADOS_STEREO_BEHAV: '', SRS_RAW_TOTAL: '', AQ_TOTAL: '', DX_GROUP: '' },
      });
  
      const handleCategoryClick = (category) => setSelectedCategory(category);
  
      const handleTestResultChange = (category, test, value) => {
          setTestResults((prev) => ({
              ...prev,
              [category]: { ...prev[category], [test]: value },
          }));
      };
  
      const handleSubmit = () => {
          console.log("Submitted Results:", testResults[selectedCategory]);
          alert(`Results for ${selectedCategory} submitted successfully!`);
      };
  
      return (
          <div className="assessment-content">
              <h2>Assessment</h2>
              <ul className="assessment-categories">
                  <li className={selectedCategory === '0-3' ? 'active' : ''} onClick={() => handleCategoryClick('0-3')}>0-3 years</li>
                  <li className={selectedCategory === '3-5' ? 'active' : ''} onClick={() => handleCategoryClick('3-5')}>3-5 years</li>
                  <li className={selectedCategory === '6-12' ? 'active' : ''} onClick={() => handleCategoryClick('6-12')}>6-12 years</li>
                  <li className={selectedCategory === '13+' ? 'active' : ''} onClick={() => handleCategoryClick('13+')}>13 years and older</li>
              </ul>
  
              <div className="test-section">
                  <h3>{selectedCategory} years</h3>
  
                  {/* Render inputs based on selected category */}
                  {selectedCategory === '0-3' && (
                      <>
                          <label>
                              ADOS_TOTAL:
                              <input type="number" value={testResults['0-3'].ADOS_TOTAL} onChange={(e) => handleTestResultChange('0-3', 'ADOS_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_COMM:
                              <input type="number" value={testResults['0-3'].ADOS_COMM} onChange={(e) => handleTestResultChange('0-3', 'ADOS_COMM', e.target.value)} />
                          </label>
                          <label>
                              ADOS_SOCIAL:
                              <input type="number" value={testResults['0-3'].ADOS_SOCIAL} onChange={(e) => handleTestResultChange('0-3', 'ADOS_SOCIAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_STEREO_BEHAV:
                              <input type="number" value={testResults['0-3'].ADOS_STEREO_BEHAV} onChange={(e) => handleTestResultChange('0-3', 'ADOS_STEREO_BEHAV', e.target.value)} />
                          </label>
                          <label>
                              SRS_RAW_TOTAL:
                              <input type="number" value={testResults['0-3'].SRS_RAW_TOTAL} onChange={(e) => handleTestResultChange('0-3', 'SRS_RAW_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              DX_GROUP:
                              <input type="text" value={testResults['0-3'].DX_GROUP} onChange={(e) => handleTestResultChange('0-3', 'DX_GROUP', e.target.value)} />
                          </label>
                      </>
                  )}
  
                  {selectedCategory === '3-5' && (
                      <>
                          <label>
                              FIQ:
                              <input type="number" value={testResults['3-5'].FIQ} onChange={(e) => handleTestResultChange('3-5', 'FIQ', e.target.value)} />
                          </label>
                          <label>
                              VIQ:
                              <input type="number" value={testResults['3-5'].VIQ} onChange={(e) => handleTestResultChange('3-5', 'VIQ', e.target.value)} />
                          </label>
                          <label>
                              ADOS_TOTAL:
                              <input type="number" value={testResults['3-5'].ADOS_TOTAL} onChange={(e) => handleTestResultChange('3-5', 'ADOS_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_COMM:
                              <input type="number" value={testResults['3-5'].ADOS_COMM} onChange={(e) => handleTestResultChange('3-5', 'ADOS_COMM', e.target.value)} />
                          </label>
                          <label>
                              ADOS_SOCIAL:
                              <input type="number" value={testResults['3-5'].ADOS_SOCIAL} onChange={(e) => handleTestResultChange('3-5', 'ADOS_SOCIAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_STEREO_BEHAV:
                              <input type="number" value={testResults['3-5'].ADOS_STEREO_BEHAV} onChange={(e) => handleTestResultChange('3-5', 'ADOS_STEREO_BEHAV', e.target.value)} />
                          </label>
                          <label>
                              SRS_RAW_TOTAL:
                              <input type="number" value={testResults['3-5'].SRS_RAW_TOTAL} onChange={(e) => handleTestResultChange('3-5', 'SRS_RAW_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              DX_GROUP:
                              <input type="text" value={testResults['3-5'].DX_GROUP} onChange={(e) => handleTestResultChange('3-5', 'DX_GROUP', e.target.value)} />
                          </label>
                      </>
                  )}
  
                  {selectedCategory === '6-12' && (
                      <>
                          <label>
                              FIQ:
                              <input type="number" value={testResults['6-12'].FIQ} onChange={(e) => handleTestResultChange('6-12', 'FIQ', e.target.value)} />
                          </label>
                          <label>
                              VIQ:
                              <input type="number" value={testResults['6-12'].VIQ} onChange={(e) => handleTestResultChange('6-12', 'VIQ', e.target.value)} />
                          </label>
                          <label>
                              PIQ:
                              <input type="number" value={testResults['6-12'].PIQ} onChange={(e) => handleTestResultChange('6-12', 'PIQ', e.target.value)} />
                          </label>
                          <label>
                              ADOS_TOTAL:
                              <input type="number" value={testResults['6-12'].ADOS_TOTAL} onChange={(e) => handleTestResultChange('6-12', 'ADOS_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_COMM:
                              <input type="number" value={testResults['6-12'].ADOS_COMM} onChange={(e) => handleTestResultChange('6-12', 'ADOS_COMM', e.target.value)} />
                          </label>
                          <label>
                              ADOS_SOCIAL:
                              <input type="number" value={testResults['6-12'].ADOS_SOCIAL} onChange={(e) => handleTestResultChange('6-12', 'ADOS_SOCIAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_STEREO_BEHAV:
                              <input type="number" value={testResults['6-12'].ADOS_STEREO_BEHAV} onChange={(e) => handleTestResultChange('6-12', 'ADOS_STEREO_BEHAV', e.target.value)} />
                          </label>
                          <label>
                              SRS_RAW_TOTAL:
                              <input type="number" value={testResults['6-12'].SRS_RAW_TOTAL} onChange={(e) => handleTestResultChange('6-12', 'SRS_RAW_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              AQ_TOTAL:
                              <input type="number" value={testResults['6-12'].AQ_TOTAL} onChange={(e) => handleTestResultChange('6-12', 'AQ_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              DX_GROUP:
                              <input type="text" value={testResults['6-12'].DX_GROUP} onChange={(e) => handleTestResultChange('6-12', 'DX_GROUP', e.target.value)} />
                          </label>
                      </>
                  )}
  
                  {selectedCategory === '13+' && (
                      <>
                          <label>
                              FIQ:
                              <input type="number" value={testResults['13+'].FIQ} onChange={(e) => handleTestResultChange('13+', 'FIQ', e.target.value)} />
                          </label>
                          <label>
                              VIQ:
                              <input type="number" value={testResults['13+'].VIQ} onChange={(e) => handleTestResultChange('13+', 'VIQ', e.target.value)} />
                          </label>
                          <label>
                              PIQ:
                              <input type="number" value={testResults['13+'].PIQ} onChange={(e) => handleTestResultChange('13+', 'PIQ', e.target.value)} />
                          </label>
                          <label>
                              ADOS_TOTAL:
                              <input type="number" value={testResults['13+'].ADOS_TOTAL} onChange={(e) => handleTestResultChange('13+', 'ADOS_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_COMM:
                              <input type="number" value={testResults['13+'].ADOS_COMM} onChange={(e) => handleTestResultChange('13+', 'ADOS_COMM', e.target.value)} />
                          </label>
                          <label>
                              ADOS_SOCIAL:
                              <input type="number" value={testResults['13+'].ADOS_SOCIAL} onChange={(e) => handleTestResultChange('13+', 'ADOS_SOCIAL', e.target.value)} />
                          </label>
                          <label>
                              ADOS_STEREO_BEHAV:
                              <input type="number" value={testResults['13+'].ADOS_STEREO_BEHAV} onChange={(e) => handleTestResultChange('13+', 'ADOS_STEREO_BEHAV', e.target.value)} />
                          </label>
                          <label>
                              SRS_RAW_TOTAL:
                              <input type="number" value={testResults['13+'].SRS_RAW_TOTAL} onChange={(e) => handleTestResultChange('13+', 'SRS_RAW_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              AQ_TOTAL:
                              <input type="number" value={testResults['13+'].AQ_TOTAL} onChange={(e) => handleTestResultChange('13+', 'AQ_TOTAL', e.target.value)} />
                          </label>
                          <label>
                              DX_GROUP:
                              <input type="text" value={testResults['13+'].DX_GROUP} onChange={(e) => handleTestResultChange('13+', 'DX_GROUP', e.target.value)} />
                          </label>
                      </>
                  )}
  
                  {/* Submit Button */}
                  <button onClick={handleSubmit}>Submit</button>
              </div>
          </div>
      );
  };
  

  

  






  

  const DoctorLogin = () => {
    const [loginName, setLoginName] = useState('');
    const [patientId, setPatientId] = useState('');
    const [doctorType, setDoctorType] = useState('');

    const handleDoctorLogin = (e) => {
      e.preventDefault();
      if (loginName && patientId && doctorType) {
        setDoctorLoggedIn(true);
        setActiveSection('assessment');  // Navigate to assessment directly on login success
      } else {
        alert('Please fill all the fields.');
      }
    };

    return (
      <div>
        <h2>Doctor Login</h2>
        <form onSubmit={handleDoctorLogin}>
          <label>Patient Name:</label>
          <input type="text" value={loginName} onChange={(e) => setLoginName(e.target.value)} />
          <label>Patient ID:</label>
          <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
          <label>Doctor Type:</label>
          <select value={doctorType} onChange={(e) => setDoctorType(e.target.value)}>
            <option value="">Select Doctor Type</option>
            <option value="pediatrician">Pediatrician</option>
            <option value="psychologist">Psychologist</option>
            <option value="psychiatrist">Psychiatrist</option>
          </select>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };

  return (
    <div className="app-container">
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li onClick={() => setActiveSection('about')} className="nav-item">About</li>
          <li onClick={() => setActiveSection('services')} className="nav-item">Register</li>
          <li onClick={() => setActiveSection('doctor-login')} className="nav-item">Doctor Login</li>
          {doctorLoggedIn && <li onClick={() => setActiveSection('assessment')} className="nav-item">Assessment</li>}
        </ul>
      </nav>
      <div className="content">
        {activeSection === 'about' && <About />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'doctor-login' && <DoctorLogin />}
        {doctorLoggedIn && activeSection === 'assessment' && <Assessment />}
      </div>
    </div>
  );
}

export default App;

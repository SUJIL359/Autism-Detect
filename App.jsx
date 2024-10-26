import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const [testResults, setTestResults] = useState({
    newborn: { test1: false, test2: false, test3: false, test4: false },
    '0-3': { test1: false, test2: false, test3: false, test4: false, test5: false, test6: false, test7: false, test8: false, test9: false },
    '3-6': { test1: false, test2: false, test3: false, test4: false, test5: false, test6: false, test7: false, test8: false, test9: false, test10: false },
  });

  const About = () => (
    <div>
      <h2>About Us</h2>
      <p>This is an autism detection tool designed to help identify early signs of autism in children.</p>
    </div>
  );

  const Services = () => {
    const handlePersonalDataSubmit = (event) => {
      event.preventDefault();
      const generatedId = `ID-${Math.floor(Math.random() * 10000)}`;
      setUniqueId(generatedId);
      console.log({ name, age, gender, uniqueId: generatedId });
    };

    return (
      <div>
        <h2>Services</h2>
        <form onSubmit={handlePersonalDataSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
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
    const [selectedCategory, setSelectedCategory] = useState('newborn');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    const handleTestResultChange = (category, test) => {
      setTestResults((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          [test]: !prev[category][test],
        },
      }));
    };

    return (
      <div className="assessment-content">
        <h2>Assessment</h2>
        <ul className="assessment-categories">
          <li
            className={selectedCategory === 'newborn' ? 'active' : ''}
            onClick={() => handleCategoryClick('newborn')}
          >
            Newborn
          </li>
          <li
            className={selectedCategory === '0-3' ? 'active' : ''}
            onClick={() => handleCategoryClick('0-3')}
          >
            0-3 Years
          </li>
          <li
            className={selectedCategory === '3-6' ? 'active' : ''}
            onClick={() => handleCategoryClick('3-6')}
          >
            3-6 Years
          </li>
        </ul>

        {selectedCategory === 'newborn' && (
          <div className="test-section">
            <h3>Signs at Newborn</h3>
            <label>
              <input
                type="checkbox"
                checked={testResults.newborn.test1}
                onChange={() => handleTestResultChange('newborn', 'test1')}
              />
              Avoids eye contact
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults.newborn.test2}
                onChange={() => handleTestResultChange('newborn', 'test2')}
              />
              Doesn't smile at people
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults.newborn.test3}
                onChange={() => handleTestResultChange('newborn', 'test3')}
              />
              Ignores loud noises or voices
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults.newborn.test4}
                onChange={() => handleTestResultChange('newborn', 'test4')}
              />
              Limited or no response to social interaction
            </label>
          </div>
        )}

        {selectedCategory === '0-3' && (
          <div className="test-section">
            <h3>Signs at 3 Months-3 Years</h3>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test1}
                onChange={() => handleTestResultChange('0-3', 'test1')}
              />
              Limited or no babbling by 12 months
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test2}
                onChange={() => handleTestResultChange('0-3', 'test2')}
              />
              Repetitive movements
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test3}
                onChange={() => handleTestResultChange('0-3', 'test3')}
              />
              Delayed speech
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test4}
                onChange={() => handleTestResultChange('0-3', 'test4')}
              />
              Delayed motor milestones
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test5}
                onChange={() => handleTestResultChange('0-3', 'test5')}
              />
              Prefers to play alone
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test6}
                onChange={() => handleTestResultChange('0-3', 'test6')}
              />
              Doesn't point or gesture by 12-18 months
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test7}
                onChange={() => handleTestResultChange('0-3', 'test7')}
              />
              Unusual attachment to routines or objects
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test8}
                onChange={() => handleTestResultChange('0-3', 'test8')}
              />
              Unusual reactions to sensory input
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['0-3'].test9}
                onChange={() => handleTestResultChange('0-3', 'test9')}
              />
              Difficulty imitating actions or sounds
            </label>
          </div>
        )}

        {selectedCategory === '3-6' && (
          <div className="test-section">
            <h3>Signs at 3-6 Years</h3>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test1}
                onChange={() => handleTestResultChange('3-6', 'test1')}
              />
              Difficulty engaging in conversation or responding to questions appropriately
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test2}
                onChange={() => handleTestResultChange('3-6', 'test2')}
              />
              Lack of interest in peers or difficulty forming friendships
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test3}
                onChange={() => handleTestResultChange('3-6', 'test3')}
              />
              Fixation on specific topics or objects (e.g., talking excessively about one subject)
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test4}
                onChange={() => handleTestResultChange('3-6', 'test4')}
              />
              Difficulty understanding abstract concepts, such as time, emotions, or humor
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test5}
                onChange={() => handleTestResultChange('3-6', 'test5')}
              />
              Unusual speech patterns, such as speaking in a flat or robotic tone
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test6}
                onChange={() => handleTestResultChange('3-6', 'test6')}
              />
              Overwhelmed by crowded or noisy environments, leading to meltdowns or withdrawal
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test7}
                onChange={() => handleTestResultChange('3-6', 'test7')}
              />
              Difficulty following multi-step instructions or completing tasks independently
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test8}
                onChange={() => handleTestResultChange('3-6', 'test8')}
              />
              Unusual play patterns, such as lining up toys instead of using them in pretend play
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test9}
                onChange={() => handleTestResultChange('3-6', 'test9')}
              />
              Rigid thinking, struggling to adapt to new situations or solve problems creatively
            </label>
            <label>
              <input
                type="checkbox"
                checked={testResults['3-6'].test10}
                onChange={() => handleTestResultChange('3-6', 'test10')}
              />
              Shows intense interest in repetitive activities (e.g., spinning objects, watching the same video repeatedly)
            </label>
          </div>
        )}
      </div>
    );
  };

  const Resources = () => {
    return (
      <div>
        <h2>Resources</h2>
        <p>Here are some helpful resources for autism detection:</p>
        <ul>
          <li>CDC - Autism Spectrum Disorder (ASD) Facts</li>
          <li>Autism Speaks - Early Signs of Autism</li>
          <li>National Autism Association - Safety Resources</li>
        </ul>
      </div>
    );
  };

  // Main rendering
  return (
    <div className="app-container">
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li onClick={() => setActiveSection('about')} className="nav-item">About</li>
          <li onClick={() => setActiveSection('services')} className="nav-item">Register</li>
          <li onClick={() => setActiveSection('assessment')} className="nav-item">Assessment</li>
          <li onClick={() => setActiveSection('resources')} className="nav-item">Resources</li>
        </ul>
      </nav>
      <div className="content">
        {activeSection === 'about' && (
          <div className="section-block">
            <About />
          </div>
        )}
        {activeSection === 'services' && (
          <div className="section-block">
            <Services />
          </div>
        )}
        {activeSection === 'assessment' && (
          <div className="section-block">
            <Assessment />
          </div>
        )}
        {activeSection === 'resources' && (
          <div className="section-block">
            <Resources />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

1. I spent 3 hours. I would have put network calls through redux and had more tests. My styling (and colors) were geared towards accessability, but would have spent more time fine tuning it. My network call (avoiding CORs) is a 'hack' and I would have done it better, although that is not apart of the requirements. I also would have added pagination and the option to view more restaurants.

2. "Hooks" in react, an example of their use:
   const [city, setCity] = useState('Toronto');
   const [restaurants, setRestaurants] = useState([]);
   const [countryRestaurants, setCountryRestaurants] = useState([]);

useEffect(() => getOpen(city), []);
useEffect(() => getAll(), []);

3. I use logging and performance monitors to track down issues in production.
4. I would either have the heroku api return the categories or have the opentable api accept more query parameters (ie: city)
5. {
   "basics": {
   "name": "Andrew J Royce",
   "label": "React Developer",
   "email": "andrewjroyce@gmail.com",
   "summary": "I am a Javascript Developer who has spent the last year creating projects built in React, Redux, and Webpack. I've done backend development using Express and Rails, and have past experience working with Ruby, PHP and Wordpress. I have recently begun to work with Solidity building Dectralized Apps in persuit of building the next generation of web products.",
   "interests": [
   "Rugby",
   "Weight-lifting",
   "Running",
   "Gaming",
   "VR"
   ],
   "education": [
   {
   "institution": "Cornell University",
   "studyType": "Bachelor of Science"
   },
   {
   "institution": "Lighthouse Labs",
   "studyType": "Web Development Bootcamp"
   }
   ],
   "skills": [
   {
   "name": "Front End Development",
   "level": "Master",
   "keywords": [
   "Javascript",
   "ES2015",
   "React",
   "SASS/LESS",
   "Webpack",
   "React Native",
   "Material UI",
   "Node",
   "Git",
   "Jira"
   ]
   }
   ],
   "languages": [
   {
   "language": "English",
   "fluency": "Native speaker"
   }
   ]
   }
   }

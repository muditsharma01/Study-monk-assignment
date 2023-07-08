// Function to fetch candidate data from JSON file
let candidatesData;
async function fetchCandidatesData() {
    try {
      const data = [
        
            { "name": "John Doe", "location": "United States", "jobRole": "Software Developer" },
            { "name": "Jane Smith", "location": "Canada", "jobRole": "UX Designer" },
            { "name": "David Johnson", "location": "United Kingdom", "jobRole": "Data Analyst" },
            { "name": "Emily Wilson", "location": "Australia", "jobRole": "Front-end Developer" },
            { "name": "Michael Brown", "location": "India", "jobRole": "Full Stack Developer" },
            { "name": "Maria Garcia", "location": "Spain", "jobRole": "UI Designer" },
            { "name": "Andreas Müller", "location": "Germany", "jobRole": "Graphic Designer" },
            { "name": "Sophie Dupont", "location": "France", "jobRole": "Marketing Manager" },
            { "name": "Luca Rossi", "location": "Italy", "jobRole": "Content Writer" },
            { "name": "Marta Hernandez", "location": "Mexico", "jobRole": "Social Media Manager" },
            { "name": "Mohammed Ali", "location": "Egypt", "jobRole": "Sales Representative" },
            { "name": "Satoshi Yamamoto", "location": "Japan", "jobRole": "Account Manager" },
            { "name": "Chen Wei", "location": "China", "jobRole": "Financial Analyst" },
            { "name": "Anna Kowalska", "location": "Poland", "jobRole": "Human Resources Manager" },
            { "name": "Ravi Patel", "location": "India", "jobRole": "Operations Manager" },
            { "name": "Seo-hyun Kim", "location": "South Korea", "jobRole": "Customer Service Representative" },
            { "name": "Anastasia Ivanova", "location": "Russia", "jobRole": "Event Planner" },
            { "name": "Luis González", "location": "Mexico", "jobRole": "Logistics Coordinator" },
            { "name": "Jorge Silva", "location": "Brazil", "jobRole": "Supply Chain Analyst" },
            { "name": "Sarah Nguyen", "location": "Vietnam", "jobRole": "Research Analyst" },
            { "name": "Lucas Santos", "location": "Brazil", "jobRole": "Business Development Manager" },
            { "name": "Fernanda Costa", "location": "Brazil", "jobRole": "UX Researcher" },
            { "name": "Seung-ho Park", "location": "South Korea", "jobRole": "Mobile App Developer" },
            { "name": "Li Wei", "location": "China", "jobRole": "Systems Administrator" },
            { "name": "Olga Ivanova", "location": "Russia", "jobRole": "UI Developer" },
            { "name": "Tomasz Nowak", "location": "Poland", "jobRole": "IT Consultant" },
            { "name": "Gabriel Fernandez", "location": "Argentina", "jobRole": "Network Engineer" },
            { "name": "Ayu Putri", "location": "Indonesia", "jobRole": "Data Engineer" },
            { "name": "Ryu Ji-hoon", "location": "South Korea", "jobRole": "SEO Specialist" },
            { "name": "Mia Müller", "location": "Germany", "jobRole": "Video Editor" },
            { "name": "Elena Popescu", "location": "Romania", "jobRole": "Product Designer" },
            { "name": "Marcelo Silva", "location": "Brazil", "jobRole": "E-commerce Manager" },
            { "name": "Alexandra Petrova", "location": "Russia", "jobRole": "Digital Marketing Specialist" },
            { "name": "Kenta Tanaka", "location": "Japan", "jobRole": "Artificial Intelligence Engineer" },
            { "name": "Andrzej Kowalczyk", "location": "Poland", "jobRole": "Database Developer" },
            { "name": "Siti Utami", "location": "Indonesia", "jobRole": "IT Project Manager" },
            { "name": "Kim Min-ji", "location": "South Korea", "jobRole": "UX Designer" },
            { "name": "Gustavo Hernandez", "location": "Mexico", "jobRole": "Software Developer" },
            { "name": "Julia Rossi", "location": "Italy", "jobRole": "Data Analyst" },
            { "name": "Mohammed Ahmed", "location": "Egypt", "jobRole": "Front-end Developer" },
            { "name": "Léa Dubois", "location": "France", "jobRole": "Product Manager" },
            { "name": "Anushka Kapoor", "location": "India", "jobRole": "Back-end Developer" },
            { "name": "Ivan Ivanov", "location": "Bulgaria", "jobRole": "Full Stack Developer" },
            { "name": "Alicia García", "location": "Spain", "jobRole": "Database Administrator" },
            { "name": "Hans Schmidt", "location": "Germany", "jobRole": "Network Administrator" },
            { "name": "Sophia Müller", "location": "Germany", "jobRole": "Systems Analyst" },
            { "name": "Andrés López", "location": "Colombia", "jobRole": "Quality Assurance Analyst" },
            { "name": "Valeria Rojas", "location": "Mexico", "jobRole": "Business Analyst" },
            { "name": "Paolo Bianchi", "location": "Italy", "jobRole": "Project Manager" },
            { "name": "Maria Sanchez", "location": "Spain", "jobRole": "Technical Writer" },
            { "name": "Priya Patel", "location": "India", "jobRole": "IT Support Specialist" },
            { "name": "Takahiro Yamamoto", "location": "Japan", "jobRole": "DevOps Engineer" },
            { "name": "Chen Wei", "location": "China", "jobRole": "Cloud Architect" },
            { "name": "Abdel Rahman", "location": "Egypt", "jobRole": "Machine Learning Engineer" },
            { "name": "Marina Petrova", "location": "Russia", "jobRole": "Data Scientist" },
            { "name": "Pedro González", "location": "Mexico", "jobRole": "Cybersecurity Analyst" },
            { "name": "Luiza Silva", "location": "Brazil", "jobRole": "UI Designer" },
            { "name": "Raphael Bernard", "location": "France", "jobRole": "Graphic Designer" },
            { "name": "Lorenzo Rossi", "location": "Italy", "jobRole": "Marketing Manager" },
            { "name": "Ana Maria Fernández", "location": "Spain", "jobRole": "Content Writer" },
          { "name": "Priya Verma", "location": "India", "jobRole": "UX Designer" },
          { "name": "Rahul Sharma", "location": "India", "jobRole": "Software Developer" },
          { "name": "Deepika Singh", "location": "India", "jobRole": "Data Analyst" },
          { "name": "Raj Patel", "location": "India", "jobRole": "Front-end Developer" },
          { "name": "Neha Gupta", "location": "India", "jobRole": "Full Stack Developer" },
          { "name": "Sandeep Kumar", "location": "India", "jobRole": "UI Designer" },
          { "name": "Aman Singh", "location": "India", "jobRole": "Graphic Designer" },
          { "name": "Kiran Sharma", "location": "India", "jobRole": "Marketing Manager" },
          { "name": "Vikas Verma", "location": "India", "jobRole": "Content Writer" },
          { "name": "Aarti Patel", "location": "India", "jobRole": "Social Media Manager" },
          { "name": "Manish Gupta", "location": "India", "jobRole": "Sales Representative" },
          { "name": "Shweta Singh", "location": "India", "jobRole": "Account Manager" },
          { "name": "Rajesh Sharma", "location": "India", "jobRole": "Financial Analyst" },
          { "name": "Shalini Verma", "location": "India", "jobRole": "Human Resources Manager" },
          { "name": "Gaurav Kapoor", "location": "India", "jobRole": "Operations Manager" },
          { "name": "Anjali Singh", "location": "India", "jobRole": "Customer Service Representative" },
          { "name": "Arvind Gupta", "location": "India", "jobRole": "Event Planner" },
          { "name": "Riya Patel", "location": "India", "jobRole": "Logistics Coordinator" },
          { "name": "Akash Sharma", "location": "India", "jobRole": "Supply Chain Analyst" },
          { "name": "Pooja Verma", "location": "India", "jobRole": "Research Analyst" },
          { "name": "Prashant Singh", "location": "India", "jobRole": "Business Development Manager" },
          { "name": "Ananya Kapoor", "location": "India", "jobRole": "UX Researcher" },
          { "name": "Siddharth Kumar", "location": "India", "jobRole": "Mobile App Developer" },
          { "name": "Rajiv Patel", "location": "India", "jobRole": "Systems Administrator" },
          { "name": "Sneha Verma", "location": "India", "jobRole": "UI Developer" },
          { "name": "Aditya Sharma", "location": "India", "jobRole": "IT Consultant" },
          { "name": "Vishal Gupta", "location": "India", "jobRole": "Network Engineer" },
          { "name": "Sanjay Singh", "location": "India", "jobRole": "Data Engineer" },
          { "name": "Sonali Patel", "location": "India", "jobRole": "SEO Specialist" },
          { "name": "Aryan Verma", "location": "India", "jobRole": "Video Editor" },
          { "name": "Kavita Sharma", "location": "India", "jobRole": "Product Designer" },
          { "name": "Yash Kapoor", "location": "India", "jobRole": "E-commerce Manager" },
          { "name": "Juhi Patel", "location": "India", "jobRole": "Digital Marketing Specialist" },
          { "name": "Rajat Gupta", "location": "India", "jobRole": "Artificial Intelligence Engineer" },
          { "name": "Nisha Singh", "location": "India", "jobRole": "Database Developer" },
          { "name": "Ankit Sharma", "location": "India", "jobRole": "IT Project Manager" },
          { "name": "John Doe", "location": "United States", "jobRole": "Software Developer" },
  { "name": "Jane Smith", "location": "Canada", "jobRole": "UX Designer" },
  { "name": "David Johnson", "location": "United Kingdom", "jobRole": "Data Analyst" },
  { "name": "Emily Wilson", "location": "Australia", "jobRole": "Front-end Developer" },
  { "name": "Michael Brown", "location": "India", "jobRole": "Full Stack Developer" },
  { "name": "Maria Garcia", "location": "Spain", "jobRole": "UI Designer" },
  { "name": "Andreas Müller", "location": "Germany", "jobRole": "Graphic Designer" },
  { "name": "Sophie Dupont", "location": "France", "jobRole": "Marketing Manager" },
  { "name": "Luca Rossi", "location": "Italy", "jobRole": "Content Writer" },
  { "name": "Marta Hernandez", "location": "Mexico", "jobRole": "Social Media Manager" },
  { "name": "Mohammed Ali", "location": "Egypt", "jobRole": "Sales Representative" },
          
      ];
      return data;
    } catch (error) {
      console.error("Error fetching candidate data:", error);
      return [];
    }
  }
  

  fetchCandidatesData()
  .then((data) => {
    candidatesData = data;
  })
  .catch((error) => {
    console.error("Error fetching candidate data:", error);
    candidatesData = [];
  });
  
  

// Dummy data for job roles
const jobRoles = [
    "Software Developer",
    "Data Analyst",
    "UX Designer",
    "Web Designer",
    "Product Manager",
    "Front-end Developer",
    "Back-end Developer",
    "Full Stack Developer",
    "Database Administrator",
    "Network Administrator",
    "Systems Analyst",
    "Quality Assurance Analyst",
    "Business Analyst",
    "Project Manager",
    "Technical Writer",
    "IT Support Specialist",
    "DevOps Engineer",
    "Cloud Architect",
    "Machine Learning Engineer",
    "Data Scientist",
    "Cybersecurity Analyst",
    "UI Designer",
    "Graphic Designer",
    "Marketing Manager",
    "Content Writer",
    "Social Media Manager",
    "Sales Representative",
    "Account Manager",
    "Financial Analyst",
    "Human Resources Manager",
    "Operations Manager",
    "Customer Service Representative",
    "Event Planner",
    "Logistics Coordinator",
    "Supply Chain Analyst",
    "Research Analyst",
    "Business Development Manager",
    "UX Researcher",
    "Mobile App Developer",
    "Systems Administrator",
    "UI Developer",
    "IT Consultant",
    "Network Engineer",
    "Data Engineer",
    "SEO Specialist",
    "Video Editor",
    "Product Designer",
    "E-commerce Manager",
    "Digital Marketing Specialist",
    "Artificial Intelligence Engineer",
    "Database Developer",
    "IT Project Manager"
  ];

  

  const locations = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  
  

// Function to show the location dropdown
// Function to show the location dropdown
function showDropdown() {
    const locationInput = document.getElementById("location-input");
    const locationDropdown = document.getElementById("location-dropdown");
  
    locationDropdown.innerHTML = ""; // Clear previous options
  
    // Function to filter locations based on user input
    function filterLocations(input) {
      return locations.filter(function (location) {
        return location.toLowerCase().includes(input.toLowerCase());
      });
    }
  
    function updateDropdown(input) {
      const filteredLocations = filterLocations(input);
  
      filteredLocations.forEach(function (location) {
        const option = document.createElement("li");
        option.textContent = location;
        option.addEventListener("click", function () {
          locationInput.value = location;
          locationDropdown.style.display = "none";
        });
        locationDropdown.appendChild(option);
      });
  
      locationDropdown.style.display = "block";
    }
  
    // Add input event listener to the location input field
    locationInput.addEventListener("input", function (event) {
      const input = event.target.value;
      locationDropdown.innerHTML = ""; // Clear previous options
      updateDropdown(input);
    });
  
    // Add click event listener to the document to hide dropdown when clicking outside
    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!locationDropdown.contains(target) && target !== locationInput) {
        locationDropdown.style.display = "none";
      }
    });
  }
  


  //Enter locatoin ends
  const searchForm = document.getElementById("search-form");
  const locationInput = document.getElementById("location-input");
  const jobRoleInput = document.getElementById("job-role-input");
  const jobRoleDropdown = document.getElementById("job-role-dropdown");
  const candidatesList = document.getElementById("candidates");
  
  // Event listener for form submission
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the search values
    const location = locationInput.value.toLowerCase();
    const jobRole = jobRoleInput.value.toLowerCase();
  
    // Filter candidates based on search values
    const filteredCandidates = candidates.filter(function (candidate) {
      const candidateLocation = candidate.location.toLowerCase();
      const candidateJobRole = candidate.jobRole.toLowerCase();
  
      // Check if candidate matches the search criteria
      return (
        candidateLocation.includes(location) && candidateJobRole.includes(jobRole)
      );
    });
  
    // Render the filtered candidates
    renderCandidates(filteredCandidates);
  });
  
  // Event listener for job role input
// Event listener for job role input
jobRoleInput.addEventListener("input", function () {
    const input = jobRoleInput.value.toLowerCase();
    const filteredJobRoles = jobRoles.filter(function (jobRole) {
      return jobRole.toLowerCase().includes(input);
    });
    renderJobRoles(filteredJobRoles);
  });
  
  // Event listener to close dropdown menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!jobRoleInput.contains(e.target) && !jobRoleDropdown.contains(e.target)) {
      jobRoleDropdown.style.display = "none";
    }
  });
  
  
  // Function to render the job roles in the dropdown
  // Function to render the job roles in the dropdown
// Function to render the job roles in the dropdown
function renderJobRoles(jobRoles) {
    jobRoleDropdown.innerHTML = ""; // Clear previous options
  
    const maxVisibleOptions = 5; // Maximum number of visible options
    const sortedJobRoles = jobRoles.sort(); // Sort the job roles alphabetically
    const numOptionsToDisplay = Math.min(sortedJobRoles.length, maxVisibleOptions);
  
    if (numOptionsToDisplay > 0) {
      for (let i = 0; i < numOptionsToDisplay; i++) {
        const option = document.createElement("li");
        option.textContent = sortedJobRoles[i];
        option.addEventListener("click", function () {
          jobRoleInput.value = sortedJobRoles[i];
          jobRoleDropdown.style.display = "none";
        });
        jobRoleDropdown.appendChild(option);
      }
  
      if (sortedJobRoles.length > maxVisibleOptions) {
        jobRoleDropdown.style.maxHeight = "150px";
        jobRoleDropdown.style.overflowY = "scroll";
      } else {
        jobRoleDropdown.style.maxHeight = "none";
        jobRoleDropdown.style.overflowY = "hidden";
      }
  
      jobRoleDropdown.style.display = "block";
    } else {
      jobRoleDropdown.style.display = "none";
    }
  }
  
  
  
  // Function to render the candidates
  function renderCandidates(candidates) {
    candidatesList.innerHTML = ""; // Clear previous results
  
    if (candidates.length === 0) {
      candidatesList.innerHTML = "<p>No candidates found.</p>";
    } else {
      candidates.forEach(function (candidate) {
        const candidateCard = document.createElement("div");
        candidateCard.classList.add("candidate");
        candidateCard.innerHTML = `
          <h3>${candidate.name}</h3>
          <p>Location: ${candidate.location}</p>
          <p>Job Role: ${candidate.jobRole}</p>
        `;
        candidatesList.appendChild(candidateCard);
      });
    }
  }
  
  // Event listener for form submission
  // Event listener for form submission
searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the search values
    const location = locationInput.value.toLowerCase();
    const jobRole = jobRoleInput.value.toLowerCase();
  
    // Filter candidates based on search values
    const filteredCandidates = candidatesData.filter(function (candidate)  {
      const candidateLocation = candidate.location ? candidate.location.toLowerCase() : '';
      const candidateJobRole = candidate.jobRole ? candidate.jobRole.toLowerCase() : '';
  
      // Check if candidate matches the search criteria
      return (
        candidateLocation.includes(location) && candidateJobRole.includes(jobRole)
      );
    });
  
    // Render the filtered candidates
    renderCandidates(filteredCandidates);
  });
  
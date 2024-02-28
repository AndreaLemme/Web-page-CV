const contact = [
    {
        id: 'email',
        img: 'email.png',
        name: "andrea24081@gmail.com",
    },
    {
        id: 'phone',
        img: 'phone.png',
        name: "(+27) 62-203-8008",
    },
    {
        id:'linkedin',
        img: '../assets/linkedin.png',
        name: "@Andrealemme",
    },

];

function initializeContact() {
    const contactListElement = document.getElementById("contactContainer");

    contact.forEach(item => {
        const contactItemElement = document.createElement("div");
        contactItemElement.classList.add("contact-item");
    
        contactItemElement.innerHTML = `
          <img src="${item.img}" alt="Contact Image">
          <p>${item.name}</p>
        `;
    
        contactListElement.appendChild(contactItemElement);
      });
    }
    initializeContact();

const languages = [
    {
        id: 1,
        language: "English",
        level: "Home Language",
    },
    {
        id: 2,
        language: "Afrikaans",
        level: "Fluent",
    },
    {
        id: 3,
        language: "Italian",
        level: "Advanced",
    },
];

function initializeLanguages() {
    const languageListElement = document.getElementById("languages");
  
    languages.forEach(item => {
      const languageItemElement = document.createElement("div");
      languageItemElement.classList.add("language-item");
  
      languageItemElement.innerHTML = `
        <h3>${item.language}</h3>
        <p>${item.level}</p>
      `;
  
      languageListElement.appendChild(languageItemElement);
    });
  }
  

const experienceArray= [
    {
        time: 2022,
        job: "Data Capturer",
        location: "Italian Consulate, Cape Town",
        details: [
            "Data capturing, validation , and analysis experience",
            "Troubleshooting analysis techniques",
            "Document handling and processing practices",
            "Knowledge on Italian and South African travelling laws",
        ],

    },
    {
        time: 2023,
        job: "Tutor",
        location: "University of Cape Town",
        details: [
            "Tutored courses for Commercial Programming and Database Systems offered to second year Information Systems students.",
            "Strong knowledge on using SQL, Database documentation skills, C# and .NET programming environment",
            "Troubleshooting and debugging experience on both SQL and C# programming language-based projects",
    ],
    },

    {
        time: 2023,
        job: "Virtual Shopping Assistant Chatbot",
        location : "Univeristy of Cape Town and Impact.com",
        details: [
            "Created a Customisable E-commerce chatbot for WordPress Plugin, collaborating with UCT and Impact.com",
            "Implemented ChatGPT and MySQL to offer detailed multilingual customer responses",
            "Developed chatbot using Java, PHP, and VueJS",
            "Established an admin portal with Microsoft PowerBI for analytics",
            "Utilized VS Code, IntelliJ IDEA, J-Unit tests, Azure DevOps, and Github",
            "Was also the Product Owner, overseeing sprints and proficient in Atlassian’s Jira",

        ],
    },
  
  ];

  
function initializeExperience() {
    const experienceListElement = document.getElementById("experienceProjects");
  
    experienceArray.forEach(item => {
      const experienceItemElement = document.createElement("div");
      experienceItemElement.classList.add("experience-item");
  
      experienceItemElement.innerHTML = `
        <h3>${item.time}</h3>
        <h4>${item.job}</h4>
        <p>${item.location}</p>
        <ul>
          ${item.details.map(desc => `<li>${desc}</li>`).join('')}
        </ul>
      `;
  
      experienceListElement.appendChild(experienceItemElement);
    });
  }
  
  initializeExperience();
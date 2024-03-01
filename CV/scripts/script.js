const navLinks=document.querySelectorAll("nav a");


navLinks.forEach(link => {
  // Check if the current page's URL matches the href attribute of the link
  if (link.href === window.location.href) {
    link.style.color = "#ddd"; // Change the color to a lighter one
  }
});

const contact = [
    {
        id: 'email',
        img: '../assets/email.png',
        name: "andrea24081@gmail.com",
    },
    {
        id: 'phone',
        img: '../assets/phone.png',
        name: "(+27) 62-203-8008",
    },
    {
        id:'linkedin',
        img: '../assets/linkedin.png',
        name: "<a id='linkedin-link' href='https://www.linkedin.com/in/andrea-lemme-64a7b419a' target='_blank'>@Andrealemme</a>",
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
    
      // Apply flexbox to the language item
      languageItemElement.style.display = "flex";
      languageItemElement.style.alignItems = "center";
    
      languageItemElement.innerHTML = `
        <h3 style="color: white; margin-right: 40px;">${item.language}</h3>
        <p style="${item.language === 'Italian' ? 'margin-left: 20px;' : ''}">${item.level}</p>
      `;
    
      languageListElement.appendChild(languageItemElement);
    });
  }
  
  initializeLanguages();

  const educationArray= [
    {
        year: 2019,
        name: "Matric, Bachelors Pass",
        place: "Elkanah House",
        description: [],

    },
    {
        year: 2022,
        name: "Intensive Italian (2 years)",
        place: "University of Cape Town",
        description: [
            "Became proficient in written and spoken Italian",
            "Learnt about the history of Italy",
    ],
    },

    {
        year: 2022,
        name: "Bachelors of Arts in Film and Informatics",
        place : "Univeristy of Cape Town",
        description: [
            "Double Majored and completed FIlm history, genre and cinematography theory courses",
            "Completed Information Systems courses relating to Databases, Ecommerce, Commercial Programming, System Analysis, BPM , IT Project management and more",
            "Graduated with a first-class pass",

        ],
    },
    {
        year: 2023,
        name: "Honours in Information Systems",
        place: "Univeristy of Cape Town",
        description: [
            "Completed a Theoretical thesis on the use of AI vehicles within the Agricultural sector",
            "Built a ChatGPT-aided customisable E-commerce chatbot for my Software Development project",
            "Graduated with a first-class pass and above 75% for my Theoretical thesis",
        ],
    },
    {
        year: 2024,
        name: "Frontend Web Development Course",
        place: "SimpliLearn.com",
        description: [
            "Learnt in-depth about GitHub, CSS, HTML and JavaScript",
            "Built both ReactJS and Angular applications",
        ],
    },
    {
      year: 2024,
      name: "ReactJS 101",
      place: "Code Academy",
      description: [
        "Learnt about JSX, React Components, Hooks, Forms, Programming Patterns and Styles",
        "Course gave me a deep introductory understanding for react",
        "Completed projects related to developing forums, online food order system, identity form and more"

      ],
    }
  ];

  function initializeEducation() {
    const educationListElement = document.getElementById("education");
  
    educationArray.forEach(item => {
      const educationItemElement = document.createElement("div");
      educationItemElement.classList.add("education-item");
  
      educationItemElement.innerHTML = `
        <div class="education-details">
          <h3>${item.year}</h3>
          <div class="info-wrapper">
            <h4>${item.name}</h4>
            <p class="place">${item.place}</p>
          </div>
        </div>
        <ul class="description-list">
          ${item.description.map(desc => `<li>${desc}</li>`).join('')}
        </ul>
      `;
  
      educationListElement.appendChild(educationItemElement);
    });
  }
  
  initializeEducation();
  

  
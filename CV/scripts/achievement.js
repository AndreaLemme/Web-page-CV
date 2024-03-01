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

const achievementArray= [
    {
        date: 2019,
        award: "Vega Vibe annual design competition winner",
        info: [
            "My group and I finished 1st place provincially and locally out of 50 other schools across the whole of South Africa",
            "Competition was based on redesigning and marketing an ice-cream, where we were given 6 hours to do so, before presenting our solution"
        ],

    },
    {
        date: 2022,
        award: "Top 10 in final year project",
        info: [
            "My group and I finished among the top 10 groups out of 35 for our Informatics 3rd final project",
            "We were tasked with redesigning and managing the payroll process for SAPPI",
            "Project gave me experience using project management and process analysis tools",
    ],
    },
  ];

  function writeAchievement() {
    const achievementElement = document.getElementById("achievement-section");
  
    achievementArray.forEach(item => {
      const achievementItemElement = document.createElement("div");
      achievementItemElement.classList.add("achievement-item");
  
      achievementItemElement.innerHTML = `
        <div class="achievement-details">
          <h3>${item.date}</h3>
          <div class="achievement-wrapper">
            <h4>${item.award}</h4>
          </div>
        </div>
        <ul class="achievement-list">
          ${item.info.map(desc => `<li>${desc}</li>`).join('')}
        </ul>
      `;
  
      achievementElement.appendChild(achievementItemElement);
    });
  }
  
  writeAchievement();
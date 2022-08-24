const settings = {
  isSplash: true,
};

const seo = {
  title: "Ankit's Portfolio",
  description:
    "A self-motivated and hard worker Engineer with a great passion for programming and coding. I am a creative front end developer who like making beautiful and smart things through coding.",
  og: {
    title: "Ankit Yadav Portfolio",
    type: "website",
    url: "https://github.com/Drago215193/Drago_Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Ankit Yadav",
  logo_name: "AnkitYadav",
  nickname: "Drago",
  subTitle:
    "A self-motivated and hard worker Engineer with a great passion for programming and coding. I am a creative front end developer and software engineer who like making beautiful and smart things through coding.",
  resumeLink:
    "https://drive.google.com/file/d/1BcoWO0rqIa9RHR29lJuuZcf_p3AwFouW/view?usp=drivesdk",
  portfolio_repository: "https://github.com/Drago215193/Drago215193.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Drago215193",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ankit-yadav-1682b01bb/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:drago215193@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Drago215193/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/drago215193/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__a_n_k_i_t_._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing Web applications using HTML, CSS, JavaScript and Reactjs",
        "⚡ Creating application backend in Node, MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java Server Pages",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
            color: "#00000",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            backgroundColor: "transparent",
            color: "#0868ac",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#F1502F",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            backgroundColor: "transparent",
            color: "#211F1F",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            backgroundColor: "transparent",
            color: "#211F1F",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable production ready models.",
        "⚡ Experience of working with C, C++, Java and Python",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#234FC7",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Basic working of cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ankityadav215193",
    },
    {
      siteName: "Qwiklabs",
      iconifyClassname: "simple-icons:qwiklabs",
      style: {
        color: "#FCD12A",
      },
      profileLink:
        "https://google.qwiklabs.com/public_profiles/f5e6d474-8889-498e-9162-5f969579ddb7",
    },
    {
      siteName: "Microsoft-Learn",
      iconifyClassname: "simple-icons:microsoft",
      style: {
        color: "#00a2ed",
        backgroundColor: "white",
      },
      profileLink:
        "https://docs.microsoft.com/en-us/users/ankityadav-4638/achievements",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0000CD",
      },
    },
    {
      siteName: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      style: {
        color: "black",
      },
    },
    {
      siteName: "Linkdin-Learning",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rungta College Of Engineering and Technology Bhilai",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "r1.png",
      alt_name: "RCET BHILAI",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have successfully completed Bachelor of Technology In Computer Science and Engineering.",
        "⚡ Also have studied basic software engineering subjects like DS, Algorithms, DBMS, Operating System, CA, CG, Artificial Intelligence etc.",
        "⚡ Apart from this, I have done courses on Full Stack web Development, Full Stack Java programming, Basic Data Science and Basic Cloud Computing.",
      ],
      website_link: "https://www.rungta.ac.in/",
    },
    {
      title: "Sri Sankara Vidyalaya Bhilai",
      subtitle: "12th - Physics Chemistry Maths with Computer Science",
      logo_path: "ssv.png",
      alt_name: "SSV",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ I have studied Physics Chemistry Maths with Computer Science in 12th",
        "⚡ Where they teach us Python in Computer Science",
        "⚡ Apart from this, I have done courses on Basic Python Programming.",
      ],
      website_link: "http://www.ssvbhilai.edu.in/",
    },
    {
      title: "Kendriya Vidyalaya, Ahmedabad Cantt",
      subtitle: "10th",
      logo_path: "kv.png",
      alt_name: "KVS",
      duration: "2015 - 2016",
      descriptions: [
        "⚡ I have studied CBSE affiliation Class 10th.",
        "⚡ I have studied general subjects affilliated by CBSE.",
        "⚡ Apart from this, I have studied HTML, Basic CSS, JavaScript.",
      ],
      website_link: "https://ahmedabadcantt.kvs.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Design",
      subtitle: "- University of Michigan",
      logo_path: "uom_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/8JWS9L8JFEHY",
      alt_name: "University of Michigan",
      color_code: "#4169E1",
    },
    {
      title: "Python",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FSSDALNQCBSZ",
      alt_name: "python",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Project for Data Science",
      subtitle: "- Azim Hirjani",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XNFVYDRT3GYW",
      alt_name: "IBM",
      color_code: "#0000FF",
    },
    {
      title: "User Experience (UX) Design",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/HKGJ45ZQ3HAE",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },

    {
      title: "Learning Badges",
      subtitle: "- Microsoft-Learn",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://docs.microsoft.com/en-us/users/ankityadav-4638/achievements",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "JavaScript",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/8fec7ddf31fb",
      alt_name: "javaScript",
      color_code: "black",
    },

    {
      title: "Web Development Bootcamp",
      subtitle: "- Angela Yu",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Udemy",
      color_code: "#28282B",
    },
    {
      title: "Java",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1K5fLRl5sCmaX9Ft-Rhnh8jvdd6vuoXdG/view?usp=sharing",
      alt_name: "Linkedin",
      color_code: "white",
    },

    {
      title: "Google Cloud Training",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/f5e6d474-8889-498e-9162-5f969579ddb7",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cybersecurity Fundamentals",
      subtitle: "- Open P-Tech",
      logo_path: "open-p-tech_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1vNcDv4CmDqib4OLYeaKEEaitdk7jzecb/view?usp=sharing",
      alt_name: "Open P-Tech",
      color_code: "#2A73CC",
    },
    {
      title: "Python",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/8d649feea167",
      alt_name: "Python",
      color_code: "black",
    },
    {
      title: "C++ Programming",
      subtitle: "- Lernen Hub Academy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-20c8d6bb-0a8b-44ef-a85b-7866cd25b46d/",
      alt_name: "Udemy",
      color_code: "#28282B",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many organizations as front-end developer and Full-Stack Developer, Designer and Software Architect. I have also done some internship with some well established companies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Project Engineer",
          company: "Wipro Technologies",
          company_url: "https://www.wipro.com/",
          logo_path: "Wipro-logo.png",
          duration: "June 2022 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. After a successful internship, I decided to initiated my career with a multi national company such as wipro which offers a wide range of oppurtunities for my career and opens a path for a bigger and greater future.",
          color: "#0879bf",
        },
        {
          title: "Vacational Trainee",
          company: "SAIL Bhilai Steel Plant",
          company_url: "https://www.sail-bhilaisteel.com/",
          logo_path: "Steel_Authority_of_India_logo.jpg",
          duration: "December 2020 - January 2021",
          location: "Bhilai, Chhattisgarh",
          description:
            "The Bhilai Steel Plant, located in Bhilai, Chhattisgarh, is India's first and main producer of steel rails, as well as a major producer of wide steel plates and other steel products. Where I have completed a two month Vacational training in which I have designed a new Login/Signup Page & Homepage for the Computer and Network Department. And Designed an online Web event calender for the employees which shows upcoming events and holidays and can be used as a diary.",
          color: "#0879bf",
        },
      ],
    },

    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "Wipro Technologies",
          logo_path: "Wipro-logo.png",
          duration: "March 2022 - May 2022",
          location: "Work From Home",
          description:
            "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. It offered a three month internship where we learned Data Analytics and Artificial Intelligence Information Management and worked on a project where they asked us to create a responsive webpage showing data from different areas of the country affected due to covid-19 panedemic, using API and other functions. And after successfull completion of internship and project they provide us a Internship Completion Certificate.",
          color: "#ee3c26",
        },
        {
          title: "Java Full Stack Developer",
          company: "3i-Infotech",
          logo_path: "3i_infotech.png",
          duration: " January 2022 - March 2022",
          location: "Work From Home",
          description:
            "3i Infotech Ltd is an Indian IT company, incorporated in 1993. 3i Infotech was a wholly owned subsidiary of ICICI/ICICI Bank until ICICI divested the majority of the shares in March 2002, at which point the company ceased to be a subsidiary of ICICI. It offered a 3 month internship where they asked us to use Java, Java Server Page and PostgreSQL to create a minor atm program and webpage which consist user authentication, and other functionalities. After successful completion they provide us with Internship Completion Certificate and Pre-Placement Offer.",
          color: "#ee3c26",
        },
        {
          title: "Front End Development Intern",
          company: "Student Point",
          logo_path: "sp_logo.png",
          duration: "May 2021 - July 2021",
          location: "Work From Home",
          description:
            "It was a two month internship where they hired intern to create the front-end of an educational website they were working on. It Consist Of Video management system for classes, Doubt section and Private chat box, To build a easy to interact, easy to use platform which is Student friendly and can be accessed by student without any difficulties, it consist of video lectures for students depending on their respective classes and subjects, with a mode switch toggle to switch between dark and light mode.",
          color: "#ee3c26",
        },
        {
          title: "Intern",
          company: "WhiteHat Jr.",
          company_url: "https://www.whitehatjr.com/",
          logo_path: "whjr-removebg-preview.png",
          duration: "July 2021 - July 2021",
          location: "Work From Home",
          description:
            "This is an Education Company. It provides Live online teaching classes to students. I have made some front-end designs for them. But unfortunately was not able to complete my internship period due to circumstances.",
          color: "#0071C5",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Cloud Ready",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "April 2021 - June 2021",
          location: "Work From Home",
          description:
            "Google Cloud Ready is a Google-sponsored program for university students to get started with Google Cloud. The curriculum offers 4 Milestones of Google Cloud (Beginner, Intermediate, Advanced, Ultimate) and relies on university student to train and use cloud computing.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Azure Virtual Training",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "March 2021 - April 2021",
          location: "Work From Home",
          description:
            "Microsoft Azure Virtual Training is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have attended workshops and seminars to learn about Basic Cloud Computing concepts.",
          color: "#D83B01",
        },
        {
          title: "Techfest",
          company: "Aakriti Techfest'20",
          logo_path: "AAKRITI-2020.png",
          duration: "March 2020 - May 2020",
          location: "Work From Home",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Front-End projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Feel free to drop an email if you have any project or any oppurtunity in mind or just want to chat! Say Hello at:.",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle: "Visit My LinkedIn Profile",
    link: "https://www.linkedin.com/in/ankit-yadav-1682b01bb/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sector-05, Bhilai, Dist.-Durg, Chhattisgarh - 490006",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/tFjWiFss8WytwJvK8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6264032336",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

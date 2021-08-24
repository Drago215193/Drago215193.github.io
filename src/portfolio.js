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
    "A self-motivated and hard worker Engineer with a great passion for programming and coding. I am a creative front end developer who like making beautiful and smart things through coding.",
  resumeLink:
    "https://drive.google.com/file/d/1BcoWO0rqIa9RHR29lJuuZcf_p3AwFouW/view?usp=drivesdk",
  portfolio_repository: "https://drago215193.github.io/Master-Portfolio/",
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
    link: "mailto:ankityadav215193@gmail.com",
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
    link: "https://www.facebook.com/profile.php?id=100008059756038/",
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
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
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
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
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
      profileLink: "https://google.qwiklabs.com/public_profiles/f5e6d474-8889-498e-9162-5f969579ddb7",
    },
    {
      siteName: "Microsoft-Learn",
      iconifyClassname: "simple-icons:microsoft",
      style: {
        color: "#00a2ed",
        backgroundColor: "white"
      },
    profileLink: "https://docs.microsoft.com/en-us/users/ankityadav-4638/achievements",
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
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied Bachelor of Technology In Computer Science and Engineering.",
        "⚡ Also have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, CG etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, Basic Data Science and Basic Cloud Computing.",
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
      certificate_link:
        "https://www.hackerrank.com/certificates/8fec7ddf31fb",
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
      certificate_link:
        "https://www.hackerrank.com/certificates/8d649feea167",
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Front End Development Intern",
          company: "Student Point",
          logo_path: "sp_logo.png",
          duration: "May 2021 - July 2021",
          location: "Work From Home",
          description:
            "I have worked on project of Education website. It Consist Of Video management system for classes, Doubt section and Private chat box, To build a easy to interact, easy to use platform which is Student friendly and can be accessed by student without any difficulties, it consist of video lectures for students depending on their respective classes and subjects, with a mode switch toggle to switch between dark and light mode.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
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
      "I am available on almost every social media. You can message me. Have any project in mind? Say Hello at:.",
  },
  blogSection: {
    title: "Github",
    subtitle:
      "Visit My Github Profile",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sector-05, Bhilai, Dist.-Durg, Chhattisgarh - 490006",
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

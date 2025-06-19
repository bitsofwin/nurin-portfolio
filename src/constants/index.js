import {
  uitm,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  housepredict,
  facialdetection,
  cryptovault,
  madrasah,
  huntly,
  twomeet,
  dtwins,
  xrent,
  mumumiya,
  devfolio,
  kmkt,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  ultralytics,
  temic,
  rghub,
  gdiid,
  webinar,
  microsoft,
  petronas,
  coursera
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiRubyonrails,
  SiJquery,
  SiMysql,
  SiSolidity,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiFlask,
  SiFigma,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiClaude,
  SiOracle,
  SiPhp,
  SiAndroid,
  SiAdobephotoshop,
  SiAngular,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
  SiCnn,
} from "react-icons/si";

import { DiNetbeans } from "react-icons/di";

import { FaHardHat, FaRust, FaFacebook} from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { IconDeviconPlainMatlab } from "./IconDeviconPlainMatlab";

import prideShowcase1 from "../assets/prideShowcase1.jpg";
import prideShowcase2 from "../assets/prideShowcase2.jpg";
import microsoftai from "../assets/microsoftai.png";
import microsoftaz from "../assets/microsoftaz.png";
import prosolve from "../assets/prosolve.jpg";
import temiccert1 from "../assets/temiccert1.jpg";
import temiccert2 from "../assets/temiccert2.jpg";
import uiuxcert from "../assets/courseracert.jpg";
import bdbcert from "../assets/bdbcert.jpg";

export const resumeLink =
  "https://drive.google.com/file/d/1ZUsAZkMGIiLBr88erWux_hY32Hs_ogQ2/view?usp=sharing";
export const repoLink = "https://github.com/nurindev/nurin-portfolio";

export const callToAction = "https://www.linkedin.com/in/nurinilyana82/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: uitm,
    title: "Universiti Teknologi MARA (UiTM) Kuala Terengganu",
    degree: "Bachelor of Computer Science (Hons.)",
    cgpa: "3.81",
    duration: "October 2022 - February 2026",
    content1: "Related Coursework: Dynamic Web Application Development, Object-Oriented Programming, Artificial Intelligence Algorithms, Image Processing, Software Engineering",
  },
  {
    id: "education-2",
    icon: kmkt,
    title: "Kolej Matrikulasi Kelantan",
    degree: "Matriculation in Computer Science",
    cgpa: "3.67",
    duration: "July 2021 - May 2022",
    content1:
      "Selected for Jawatankuasa Perwakilan Pelajar (JPP), enhancing leadership, teamwork, and communication skills through campus-wide initiatives.",
  },
];

// Add your past achievements here
export const achievements = [
  {
    id: "a-1",
    icon: uitm,
    event: "Dean's List Award Semester 1-5",
    position: "Recipient",
    content1: "Awarded Dean's List for outstanding academic performance in the first five semesters of degree program."
  },
  {
    id: "a-2",
    icon: uitm,
    event: "UiTM PRIDE Showcase 10.0",
    position: "Best Video Award Winner",
    content1: "Proposed and presented “Hijabease,” an AI-powered portable ironing board concept; secured the Best Video Award.",
    images: [prideShowcase1, prideShowcase2],
    content2: "Certificate"
  },
  {
    id: "a-3",
    icon: uitm,
    event: "ProSolve National Competition 2025 Certification",
    position: "Recipient",
    content1: "Participated in the ProSolve National Competition 2025, showcasing problem-solving skills.",
    images: [prosolve],
    content2: "Certificate"
  },
  {
    id: "a-4",
    icon: temic,
    event: "TeMIC Conferences 2025 (ICECT | TEMIC 2025) Certification",
    position: "Recipient",
    content1: "Proposed research on 'Pattern Detection in Grid Clothes using Image Processing' at the conference.",
    images: [temiccert1, temiccert2],
    content2: "Certificate"
  },
  {
    id: "a-5",
    icon: petronas,
    event: "PETRONAS BeDigital Bootcamp Certification 2025",
    position: "Recipient",
    content1: "Achieved PETRONAS BeDigital Bootcamp certification, gained new knowledge regarding digital transformation.",
    images: [bdbcert],
    content2: "Certificate"
  },
  {
    id: "a-6",
    icon: coursera,
    event: "Coursera CalArts UI/UX Design Specialization Certification",
    position: "Recipient",
    content1: "Achieved Coursera CalArts UI/UX Design Specialization certification, learned about user interface and user experience design principles.",
    images: [uiuxcert],
    content2: "Certificate"
  },
  {
    id: "a-7",
    icon: microsoft,
    event: "Microsoft AI for My Future Certification",
    position: "Recipient",
    content1: "Completed the  AI for My Future certification program, enchancing knowledge in AI applications in various fields.",
    images: [microsoftai],
    content2: "Certificate"
  },
  {
    id: "a-8",
    icon: microsoft,
    event: "Microsoft Azure Data Fundamentals Certification",
    position: "Recipient",
    content1: "Achieved Microsoft Azure Data Fundamentals certification, learned about core data concepts and their applications in Azure.",
    images: [microsoftaz],
    content2: "Certificate"
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: SiMysql,
        name: "SQL",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-8",
        icon: SiPhp,
        name: "PHP",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "f-3",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "f-4",
        icon: SiFlutter,
        name: "Flutter",
      },
      {
        id: "f-5",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-7",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Tools/Platform",
    items: [
      {
        id: "t-1",
        icon: SiAndroid,
        name: "Android Studio",
      },
      {
        id: "t-2",
        icon: SiOracle,
        name: "Oracle Database",
      },
      {
        id: "t-3",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-4",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-5",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-7",
        icon: DiNetbeans,
        name: "NetBeans",
      },
      {
        id: "t-8",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-9",
        icon: SiAdobephotoshop,
        name: "Adobe Photoshop",
      },
      {
        id: "t-matlab",
        icon: IconDeviconPlainMatlab,
        name: "MATLAB",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "TwoMeet Dato' Kailan",
    logo: twomeet,
    link: "https://www.facebook.com/p/Kedai-kasut-twomeet-100024018952577/",
    linkIcon: FaFacebook,
    positions: [
      {
        title: "Retail Assistant",
        duration: "Jan 2020 - July 2020",
        content: [
          {
            text: "Managed daily retail operations including stock handling, product tagging, cashier duties, and customer assistance.",
            link: "",
          },
          {
            text: "Supported end-of-day store closing procedures, ensuring accuracy and accountability in transactions and inventory.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Mumumiya Kepala Batas",
    logo: mumumiya,
    positions: [
      {
        title: "Crew Member",
        duration: "June 2019 - Dec 2019",
        content: [
          {
            text: "Learned to prepare and serve various food items including waffles and popcorn. Handled customer orders, operated the cashier system and restocked ingredients. ",
            link: "",
          },
          {
            text: "Gained hands-on experience in sales, teamwork, and customer service in a fast-paced food environment.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Real-time Rice Leaf Diseases Detection System using YOLOv8",
    image: ultralytics,
    content:
      "A final year project to develop a mobile application for real-time detection of rice leaf diseases, using YOLOv8 object detection models to aid Malaysian farmers in improving crop health",
    stack: [
      {
        id: "icon-1",
        icon: SiFlutter,
        name: "Flutter",
      },
      {
        id: "icon-2",
        icon: SiAndroidstudio,
        name: "Android Studio",
      },
      {
        id: "icon-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      }
    ],
  },
  {
    id: "project-2",
    title: "Pattern Detection in Grid Clothes using Image Processing ",
    image: temic,
    content:
      "A group project to develop a MATLAB-based desktop app for textile pattern detection; research presented at UiTM TeMIC Conference and published in the JET journal.",
    stack: [
      {
        id: "icon-1",
        icon: IconDeviconPlainMatlab,
        name: "MATLAB",
      }
    ],
  },
  {
    id: "project-3",
    title: "RGHub: Rhythmic Gymnastic Scoring System",
    image: rghub,
    content:
      "A group project to build a web-based scoring system using Java, NetBeans, and MVC architecture to streamline judging and competition management in rhythmic gymnastics events",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "icon-2",
        icon: DiNetbeans,
        name: "NetBeans",
      }, 
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    id: "project-4",
    title: "D’Twins Inventory Management System",
    image: dtwins,
    content:
      "A group project to design and implement a spare parts inventory system using Oracle Database, improving record accuracy for a local motorcycle workshop.",
    stack: [
      {
        id: "icon-1",
        icon: SiOracle,
        name: "Oracle",
      },
      {
        id: "icon-2",
        icon: SiMysql,
        name: "MySQL",
      }
    ],
  },
  {
    id: "project-5",
    title: "Madrasah ad-Diniah al-Falahiah Inventory Management System",
    image: madrasah,
    content:
      "A group project to design and develop a web-based inventory management system for a local madrasah. Integrated SweetAlert for interactive pop-ups and Toaster notifications for real-time user feedback, streamlining the tracking and management of inventory items.",
    stack: [
      {
        id: "icon-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiMysql,
        name: "MySQL",
      },
    ],
  },
  {
    id: "project-6",
    title: "XRENT: Car Rental System",
    image: xrent,
    content:
      "A group project to develop a web-based car rental management system, XRENT. Allows users to rent cars and admins to manage the overall system including rent bookings, user management and view report.",
    stack: [
      {
        id: "icon-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiMysql,
        name: "MySQL",
      },
    ],
  },
  {
    id: "project-7",
    title: "Facial Emotion Detection System using Convolutional Neural Networks (CNN)",
    image: facialdetection,
    content:
      "A group project involving the development of a facial emotion detection system using CNN in Python. Webcam implementation for real-time emotion classification.",
    stack: [
      {
        id: "icon-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "icon-1",
        icon: SiCnn,
        name: "CNN",
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python",
      }
    ],
  },
  {
    id: "project-8",
    title: "CryptoVault: Columnar Transposition Cipher System",
    image: cryptovault,
    content:
      "A group project to build a web-based encryption and decryption system using the columnar cipher technique, implemented in Python without external libraries.",
    stack: [
      {
        id: "icon-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python",
      }
    ],
  },
  {
    id: "project-9",
    title: "House Price Prediction in Kuala Lumpur Using XGBoost",
    image: housepredict,
    content: "A group project to develop a standalone desktop application for predicting house prices in Kuala Lumpur using Python and the XGBoost. The system was trained on real housing datasets to provide accurate price estimations based on various property features, supporting better decision-making for buyers and investors.",
    stack: [
      {
        id: "icon-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "icon-1",
        icon: SiHtml5,
        name: "HTML",
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python",
      }
    ],
  }
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "SULAM 2.0 Project",
    title: "Multimedia Committee and Facilitator",
    duration: "2025",
    content: [
      {
        text: "Designed lanyards, produced creative visual content and facilitated educational activities for school outreach programs."
      }
    ],
    logo: uitm,
  },
  {
    id: 2,
    organisation: "GDIID Competition 2025",
    title: "Participant",
    duration: "2025",
    content: [
      {
        text: "Presented an innovative product concept video for “Hijabease”, focusing on AI-based household solutions.",
        youtube: "https://www.youtube.com/watch?v=vewgpbKnWfo&t=4s"
      }
    ],
    logo: gdiid,
  },
  {
    id: 3,
    organisation: "UiTM PRIDE Showcase 10.0",
    title: "Co-Participant & Awardee",
    duration: "2024",
    content: [
      {
        text: "Proposed and presented “Hijabease,” an AI-powered portable ironing board concept; secured the Best Video Award.",
        link: "",
      }
    ],
    logo: uitm,
  },
  {
    id: 4,
    organisation: "Webinar “Building a Career in Tech: Key Skills for the Future”",
    title: "Secretary",
    duration: "2024",
    content: [
      {
        text: "Coordinated official documentation and ensured seamless webinar execution on industry trends in technology careers."
      },
    ],
    logo: webinar,
  }
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/nurinilyana82",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/nurindev",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:nurinilyana82@gmail.com",
  }
];

// Your professional summary
export const aboutMe = {
  name: "Nurin Ilyana",
  githubUsername: "nurindev",
  tagLine:
    "Final-Year CS Student @UiTM | Aspiring UI/UX Designer",
  intro:
    "Computer Science student from UiTM Kuala Terengganu, constantly exploring the intersection of AI, software development, and real-world problem-solving. Whether refining detection models or crafting seamless user experiences, I enjoy turning ideas into impactful digital solutions.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];

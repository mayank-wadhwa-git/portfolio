import emoji from "react-easy-emoji";

export const greetings = {
  name: "Mayank Wadhwa",
  title: "Hi all, I'm Mayank Wadhwa",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with React.js, Next.js, Express.js, Node.js",
  resumeLink:
    "https://drive.google.com/file/d/1wEDhkjIDz9KmLqcW9NTZ-AFjx29WDrAJ/view?usp=sharing",
};

export const openSource = {
  githubUserName: "mayank-wadhwa-git",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100009372307526",
  instagram: "https://www.instagram.com/wadhwa1701/",
  github: "https://github.com/mayank-wadhwa-git",
  linkedin: "https://www.linkedin.com/in/mayank-wadhwa-1968791a1/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji("⚡ Experience of working on multiple cloud platforms"),
    //     emoji(
    //       "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
    //     ),
    //     emoji(
    //       "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "logos:aws",
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "logos:microsoft-azure",
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "logos:heroku-icon",
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "logos:postgresql",
    //     },
    //     {
    //       skillName: "Github",
    //       fontAwesomeClassname: "akar-icons:github-fill",
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "logos:docker-icon",
    //     },
    //     {
    //       skillName: "Github Actions",
    //       fontAwesomeClassname: "logos:github-actions",
    //     },
    //     {
    //       skillName: "Cloudinary",
    //       fontAwesomeClassname: "logos:cloudinary",
    //     },
    //     {
    //       skillName: "Nginx",
    //       fontAwesomeClassname: "logos:nginx",
    //     },
    //     {
    //       skillName: "Sentry",
    //       fontAwesomeClassname: "logos:sentry-icon",
    //     },
    //   ],
    // },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName:
      "University Institute of Engineering and Technology, Panjab University, Chandigarh",
    subHeader: "Bachelor of Engineering in Computer Science",
    duration: "August 2023 - Present",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Modgenics",
    companylogo: "/img/icons/common/modgenics.jpeg",
    date: "Feb 2022 – June 2022",
    descBullets: [
      "Created a complete website of a construction company using ReactJs and Tailwind Css. Integrated EmailJs which helps in sending form data to our mail.",
      "Worked on platform named Investability. Created many UI components for the platform.",
      "Also worked on the LMS system, another project of a client.",
    ],
  },
  {
    role: "Front-end Web Development Intern",
    company: "Codbrix",
    companylogo: "/img/icons/common/bleedAI.jpg",
    date: "Aug 2021 - Oct 2021",
    descBullets: [
      "Updated NGO website by adding gallery element, education and health pages, added google sheets API to contact and Join-Us pages for better user experience and wider reach",
      "Updated admin dashboard, added social links, updated article and blog pages through ejs",
      "Created a simple Kanban Board",
      "Completed 3 projects which included implementation of Admin Dashboard, Backend Integration, manual search bar",
    ],
  },
  {
    role: "Web Development Intern",
    company: "The Spark's Foundation",
    companylogo: "/img/icons/common/sparks.png",
    date: "July 2021",
    descBullets: [
      "A Dummy Donation Page created by HTML and CSS.Razorpay (payment gateway) is integrated inside the website. It generates an invoice of the donation amount and sends the invoice receipt and other details to the mail entered by the user.",
    ],
  },
];

export const projects = [
  {
    name: "To-Do List",
    desc: "List all the things you had like to do for the day!",
    github: "https://github.com/mayank-wadhwa-git/ToDoList",
    // link: "https://atlasmart.netlify.app/",
  },
  {
    name: "Notes Keeping App Using React",
    desc: "A platform which can be used to note the important things.",
    // link: "https://technota.netlify.app/",
    github:
      "https://github.com/mayank-wadhwa-git/mayank-wadhwa-git.github.io/tree/main/projects/NotesAppUsingReact",
  },
  {
    name: "Pattern Remembering Game-The Simon Game",
    desc: "A Game which can be relaxing on some point of time. The pattern needs to be rememebered and is to be repeated.",
    link: "https://mayank-wadhwa-git.github.io/projects/game/",
    github:
      "https://github.com/mayank-wadhwa-git/mayank-wadhwa-git.github.io/tree/main/projects/game",
  },
  {
    name: "Weather App",
    desc: "A website that lets you know the weather on entering the name of the city. ",
    github:
      "https://github.com/mayank-wadhwa-git/mayank-wadhwa-git.github.io/tree/main/projects/weather",
    link: "https://mayank-wadhwa-git.github.io/projects/weather/",
  },
  {
    name: "Connecting People With Dogs Nearby – TinDog",
    desc: "Platform to connect people who wish to adopt the dogs. This is a front-end website which also includes the plan to meet dogs in their locality",
    github:
      "https://github.com/mayank-wadhwa-git/mayank-wadhwa-git.github.io/tree/main/projects/website",
    link: "https://mayank-wadhwa-git.github.io/projects/website/",
  },
];

// export const feedbacks = [
//   {
//     name: "John Smith",
//     feedback:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
//   },
//   {
//     name: "John Smith",
//     feedback:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
//   },
// ];

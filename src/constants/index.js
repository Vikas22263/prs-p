import {
  allmovie,
  postman,
  prisma,
  seqlize,
  postgress,
  mysql,
  mongo,
  aws,
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs2,
  git,
  python,
  energy1,
  ai1,
  webdev1,
  security1,
  brain,
  threejswp,
  reactandthreewp,
  firebase,
  gracito,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: brain,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nodejs",
    icon: nodejs2,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "monogDb",
    icon: mongo,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Postgress",
    icon: postgress,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "sequelize ",
    icon: seqlize,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    icon: webdev1,
    company_name: "umpteen inovation",
    iconBg: "#383E56",
    date: "Nov 2022 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js, and Typescript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed an iDeveloping and maintaining backend applications using PostgreSQL, Prisma, and RabbitMQ",
      "Implementing efficient database operations and ensuring seamless data flow",
      "Developed a robust messaging system using RabbitMQ to manage asynchronous tasks and improve system reliability.nteractive product configurator using Three.js to allow users to customize and visualize products in real-time.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    icon: ai1,
    company_name: "van-jain tech",
    iconBg: "#383E56",
    date: " June 2022 - nov 2022",
    points: [
      "Assisted in developing and maintaining backend applications using Node.js, TypeScript, and PostgreSQL",
      "Collaborating with AI / ML developers on developing systems using collaborative filtering and content-based approaches for user experiences",
      "Supported backend operations and contributed to ensuring seamless data flow",
      "Collaborated on implementing database features and optimizing performance",
    ],
  },
  {
    title: "Fullstack Freelancer",
    icon: energy1,
    iconBg: "#383E56",
    date: "june 2022 - Present",
    points: [
      "Designed and implemented scalable APIs and microservices, ensuring high performance and reliability in distributed systems.",
      "Collaborated with developers to verify defect fixes and enhancements, ensuring that issues were resolved according to specifications and user requirements.",
      "Applied best practices for security and performance optimization, including data encryption, query optimization, and load balancing.",
      "Integrated third-party services and APIs, enabling seamless interoperability and extending application functionality.",
    ],
  },
  {
    title: "Full-stack developer(Contract)",
    icon: webdev1,
    company_name: "Gracito Private limited",
    iconBg: "#383E56",
    date: "Feb 2024 - june 2024",
    points: [
      "Developing and maintaining web applications using React.js, and Typescript.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Lp-finace",
    description:
      "LP Finance Labs is a cutting-edge platform designed to revolutionize synthetic asset management and yield generation. Built on the Solana blockchain, the website offers advanced financial tools that empower users to leverage staking yields up to 20x, short-sell Solana (SOL), and engage in permissionless Time-Weighted Average Price (TWAP) transactions. The platform also features LPFi staking, where users can earn revenue through staking LPFi tokens.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Reactjs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: threejswp,
    source_code_link: "https://www.lp.finance/",
  },
  {
    name: "Akerolabs",
    description:
      "Akero is an innovative student advertising and conversion platform designed specifically for higher education institutions. Leveraging the power of AI and deep industry expertise, Akero bridges the gap between marketing and admissions teams, providing a comprehensive solution to enhance student recruitment efforts.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: reactandthreewp,
    source_code_link: "https://akerolabs.com/",
  },
  {
    name: "Movie.in",
    description:
      "Movie.in is an innovative website designed specifically for movie enthusiasts, built with cutting-edge technologies including React, TypeScript, and Redux. This platform offers a seamless user experience, allowing movie lovers to explore, discover, and manage their favorite films effortlessly.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      { name: "Nodejs", color: "blue-text-gradient" },
      { name: "mongoDb", color: "blue-text-gradient" },
    ],
    image: allmovie,
    source_code_link: "https://movie-in-azfr.vercel.app/",
  },
  {
    name: "Grocitio.in",

    description:
      "Developed an online store builder using HTML, CSS, JavaScript, jQuery, and PHP, enabling businesses to create and manage online stores without coding",
  
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      { name: "Nodejs", color: "blue-text-gradient" },
      { name: "mongoDb", color: "blue-text-gradient" },
    ],
    image: gracito,
    source_code_link: "https://grocito.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };

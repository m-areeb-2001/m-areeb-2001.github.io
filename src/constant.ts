export const news = [
  {
    date: "Nov 01, 2024",
    text: "Rejoined Rehani Soko as Software Engineer",
  },
  {
    date: "Oct 30, 2024",
    text: "Concluded my role at Algorithm Consulting PVT",
  },
  {
    date: "May 01, 2024",
    text: "Joined Algorithm Consulting PVT as a Software Engineer",
  },
  {
    date: "Aug 21, 2023",
    text: "Graduated with a Bachelor's degree in Computer Systems Engineering from NED University of Engineering and Technology (NEDUET), achieving a CGPA of 3.5 .",
  },

  {
    date: "Sep 01, 2022",
    text: "Joined Monarca Jewels as Software Engineer (Part Time)",
  },
  {
    date: "Jan 31, 2023",
    text: "Concluded my role at Monarca Jewels",
  },
  {
    date: "Feb 01, 2023",
    text: "Joined Rehani Soko as a Software Engineer",
  },
];

export interface Project {
  title: string;
  status?: string; // “In Progress” etc.
  dates?: string; // “Jul 2024 – Aug 2024”
  thumbnail: string;
  description: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "AI Chatbot",
    dates: "July 2025 - Aug 2025",
    thumbnail: "/aichatbot.webp",
    description:
      "F1GPT is a domain-focused AI assistant built with Next.js and powered by GPT-5 through the AI/ML API. It uses a Retrieval-Augmented Generation (RAG) pipeline that scrapes and indexes authoritative Formula One sources — such as Wikipedia and the official F1 site — into a vector database (DataStax Astra DB). When a user asks a question, the system embeds the query, retrieves the most relevant chunks, and streams a GPT-5 answer enriched with this context. The chatbot is deployed with a sleek Formula One-themed UI, enabling real-time streaming responses. Its technical stack includes Next.js 15, Vercel AI SDK, LangChain text splitters, Puppeteer for scraping, and Astra DB for high-performance similarity search. Value & Use Cases: - Fans can quickly look up race results, driver stats, or rule explanations. - Journalists can explore historical data and technical regulations faster. - Teams & Analysts can leverage a conversational layer over structured F1 data. By combining GPT-5’s reasoning power with RAG, F1GPT reduces hallucinations and delivers trusted, up-to-date answers. This positions it as a unique sports-focused AI assistant, showing how AI can enhance fan engagement and knowledge accessibility in high-data domains like Formula One.",
    links: [
      {
        label: "View Project",
        href: "https://github.com/m-areeb-2001/rag-f1gpt-chatbot-nextjs",
      },
      {
        label: "View Demo",
        href: "https://rag-f1gpt-chatbot-nextjs-production.up.railway.app/",
      },
    ],
  },
  {
    title: "Optimal Robotic Arm Gripper (FYP)",
    dates: "Aug 2022 - Aug 2023",
    thumbnail: "https://owais142002.github.io/assets/img/fyp.jpg",
    description:
      "The Final Year Design Project aims to improve object grasping and manipulation in warehouses. It features an autonomous robotic arm that efficiently retrieves items from any defined place using dual monocular cameras for 6D object pose estimation and techniques involving robotics and machine learning for grasping strategies that includes kinematic modeling and inverse kinematic modeling of the robotic arm.",
    links: [
      {
        label: "View Presentation",
        href: "https://docs.google.com/presentation/d/1angaKsRuR_vHHrlyIwOUKt6ev2wqfSnjwKETaQpPNFc/",
      },
      {
        label: "View Project",
        href: "https://drive.google.com/drive/folders/1U4Bl81hgEc-5N_hCVpneEVkcrgtJiXAt",
      },
      {
        label: "View Demonstration",
        href: "https://www.youtube.com/shorts/nJrsF2eAPDo",
      },
      {
        label: "View Research Paper",
        href: "https://arxiv.org/pdf/2411.13205",
      },
    ],
  },
  {
    title: "SmartScan Billing Assistant",
    dates: "May 2024 - Jul 2024",
    thumbnail: "/smart_scan.webp",
    description:
      "The SmartScan Billing Assistant is a computer vision-based project designed to automate the process of calculating the total bill by detecting products and adding their prices using a camera, similar to a cashier. This project uses the YOLOv8 model for object detection and tracking. This is the MVP of the main project I did for a supermarket where I implemented the SmartScan billing system on more than 20 products.",
    links: [
      {
        label: "View Project",
        href: "https://github.com/m-areeb-2001/SmartScan-Billing-Assistant",
      },
    ],
  },
  {
    title: "Facial Emotion Detection",
    dates: "Mar 2024 - May 2024",
    thumbnail: "/Facial-Emotion-Detection.webp",
    description:
      "Facial Emotion Detection using YOLOv8 is a Flask web application designed to detect facial emotions in real time. Leveraging the power of the YOLOv8 model, this project offers a robust solution for identifying a range of emotions directly from images or webcam feeds.",
    links: [
      {
        label: "View Project",
        href: "https://github.com/m-areeb-2001/facial-emotion-detection",
      },
      {
        label: "View Demo",
        href: "https://github.com/user-attachments/assets/4994b6ab-7dfc-41cc-88d9-b690a8a25bcc",
      },
    ],
  },
  {
    title: "Human Sense Ads",
    dates: "Jan 2024 - Mar 2024",
    thumbnail: "/human-sense.jpeg",
    description:
      "Human Sense Ads is a project designed to detect humans, extract their features, and generate personalized messages using a language model (LLM) to grab their attention towards advertisements displayed on a screen.",
    links: [
      {
        label: "View Project",
        href: "https://github.com/m-areeb-2001/Human-Sense-Ads",
      },
      {
        label: "View Demo",
        href: "https://github.com/user-attachments/assets/d3f08d45-3e94-42f3-a3e7-4601874ea0de",
      },
    ],
  },
];

export const navLinks = [
  { href: "/", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/education", label: "Education" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  // { href: '/teaching', label: 'Teaching' },
  { href: "/competitions", label: "Competitions" },
  {
    href: "https://developer-portfolio-ten-opal.vercel.app/",
    label: "Developer Portfolio",
  },
  { href: "https://flowcv.com/resume/pcwj46tjs3", label: "CV" }, // external/static route
];

export const experiences = [
  {
    company: "Rehani Soko",
    logo: "/rehani.jpg",
    position: "Software Engineer",
    employmentType: "Full Time",
    periods: ["Feb 2023 - Present"],
    location: "57 N St NW, Washington DC (Remote)",
    responsibilities: [
      "Developed a cutting-edge real estate platform with Vue.js (frontend) and Django REST Framework (DRF) (backend).",
      "Built and optimized frontend user flows for a seamless, high-performance user experience.",
      "Designed and implemented backend APIs to support core platform features.",
      "Integrated external APIs and services to extend platform functionality.",
    ],

    letterUrl: "",
    link: "https://rehanisoko.com/",
  },
  {
    company: "Algorithm Consulting [Pvt.]",
    logo: "/logo-algo-glow.png",
    position: "Software Engineer",
    employmentType: "Full Time",
    periods: ["May 2024 - Oct 2024"],
    location: "Karachi, Pakistan (On-site)",
    responsibilities: [
      "Actively contributed to the development and maintenance of a dynamic product using ASP.NET.",
      "Worked closely with senior developers to implement core features, resolve technical issues, and improve overall system functionality.",
    ],
    link: "https://www.algorithm.com.pk/index.html",
  },

  {
    company: "Crosswing Inc.",
    logo: "https://owais142002.github.io/assets/img/crosswing.jpg",
    position: "Machine Learning Engineer (Remote)",
    employmentType: "Full Time",
    periods: ["Feb 2023 - Apr 2024"],
    location: "Ontario, Canada (Remote)",
    responsibilities: [
      "I worked on demand forecasting, where I designed and implemented machine learning models to predict customer needs with greater accuracy. Using techniques like BlockRNN, CatBoost, and XGBoost, I was able to capture complex patterns in data and translate them into actionable insights. This effort helped improve inventory planning and resource allocation, ensuring smarter, data-driven decision-making.",
    ],
    link: "https://www.crosswing.com/",
  },

  {
    company: "Monarca Jewels",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEEJBY_TZ9_Vj-5wYlR58Rkc2WaLdrftKjg&shttps://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/350803739_1075879650037972_8003595818928452589_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=og3N33PJNVIQ7kNvwEHXYFI&_nc_oc=AdktrFpxajskFdVofLT-KmQhASs86oSYPi5ibIDZebFOPiZTrYfqU7ui_hGFqHiPL9PoLC5mPz41HtCmsZc_C6S8&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=W7UqlUa9lM86543CPYuKOw&oh=00_AfNJKgivC9bKPQC2ifwkCnOtEPgbvsLxgy3bOsh5bn5ZTw&oe=6867455C",
    position: "Software Engineer (Remote)",
    employmentType: "Part Time",
    periods: ["Aug 2022 - Jan 2023"],
    location: "Ontario, Canada (Remote)",
    responsibilities: [
      "I was engaged as a member of Monarca Jewels' in-house technical team. Distinguished by its innovative approach, this jewelry store employs Demand Forecasting and AI-powered chatbots to gain deeper insights into customer preferences and tailor interactions accordingly. My role involved developing the company's website using the MERN stack, marking the inception of my journey in web development within this dynamic and forward-thinking environment.",
    ],
    link: "https://www.monarcajewels.com/",
  },

  {
    company: "Profecia Links",
    logo: "https://owais142002.github.io/assets/img/profecia.png",
    position: "Software Engineer Grade A1",
    employmentType: "Part Time",
    periods: ["Apr 2021 - Jul 2022"],
    location: "Dubai, United Arab Emirates (Remote)",
    responsibilities: [
      "Developed, implemented, and maintained web scrapers in JavaScript for extracting data from various e-commerce websites.",
      "Collaborated with the team to ensure efficient and accurate data extraction based on project requirements.",
    ],
    link: "https://profecialinks.com/",
    letterUrl:
      "https://drive.google.com/file/d/1MC-84XrH3tOOEENvm6NM1qJR4rxUfIBT/view?usp=sharing",
  },
];

export const schools = [
  {
    name: "NED University of Engineering and Technology",
    logo: "https://owais142002.github.io/assets/img/NEDUET_logo.png",
    degree: "Bachelor's of Engineering in Computer Systems",
    dates: "Oct 2019 - Oct 2023",
    location: "Service Rd, NED University, Karachi, Pakistan",
    summary: [
      "Ranked in the top 15 % of the batch.",
      "Graduated with a CGPA of 3.51.",
      "Completed one of the most complex final-year projects in the entire batch.",
    ],
  },
  {
    name: "Adamjee Govt. Science College",
    logo: "https://owais142002.github.io/assets/img/Adamjee_College_Logo.jpg",
    degree: "Higher Secondary School Certificate (H.S.S.C), Pre-Engineering",
    dates: "Aug 2017 - Aug 2019",
    location: "Soldier Bazaar, Garden East, Karachi, Pakistan",
    summary: [
      "Ranked 10 % in Karachi Board examinations.",
      "Scored 940 out of 1100 (85.45 %) in Karachi Board examinations.",
    ],
  },
  {
    name: "Merit N Merit School",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXw_KFSgd7ZXj_bo7aSNaWa_HQOn-PqzOEow&s",
    degree: "Secondary School Certificate (S.S.C), Computer Science",
    dates: "Aug 2015 - Aug 2017",
    location: "Gulshan-e-Iqbal, Karachi, Pakistan",
    summary: [
      "Ranked 5 % in Karachi Board examinations.",
      "Scored 774 out of 850 (91.05 %) in Karachi Board examinations.",
    ],
  },
];

export interface Pub {
  year: number;
  title: string;
  date: string; // Month YYYY
  thumbnail: string;
  absUrl: string;
  htmlUrl: string;
  pdfUrl: string;
  abstract: string;
}
export const publications: Pub[] = [
  {
    year: 2025,
    title:
      "Smart Shelf Advertising using Real-Time Product Segmentation and Interaction on Low-Cost Edge",
    date: "Jul 2025",
    thumbnail:
      "https://owais142002.github.io/assets/img/publication_preview/rg.png",
    absUrl: "#",
    htmlUrl:
      "https://www.researchgate.net/publication/394095306_Smart_Shelf_Advertising_using_Real-Time_Product_Segmentation_and_Interaction_on_Low-Cost_Edge_Devices",
    pdfUrl:
      "https://www.researchgate.net/publication/394095306_Smart_Shelf_Advertising_using_Real-Time_Product_Segmentation_and_Interaction_on_Low-Cost_Edge_Devices",
    abstract:
      'This paper presents a comprehensive review of the work "A Dynamic Algorithm for Approximate Flow Computations" by Professor Prabhakar and Professor Viswanathan. The original paper introduces an algorithm that improves the efficiency of reachability analysis in linear dynamical systems by dynamically determining time intervals and using polynomial approximations to maintain a specified error bound. This review summarizes the key contributions, including the use of Bernstein polynomials and error control mechanisms, and critically evaluates the algorithm’s performance, scalability, and limitations. Experimental insights, theoretical underpinnings, and potential directions for future research are discussed to highlight the broader implications of the work in formal verification and control systems.',
  },
  {
    year: 2023,
    title: "An Integrated Approach to Robotic Object Grasping and Manipulation",
    date: "Aug 2023",
    thumbnail:
      "https://owais142002.github.io/assets/img/publication_preview/arxiv.jpg",
    absUrl: "#",
    htmlUrl: "https://arxiv.org/pdf/2411.13205",
    pdfUrl:
      "https://drive.google.com/file/d/1ghqFgfXwl_K7K_odG0w792T9tBUI34-Z/view?usp=sharing",
    abstract:
      "In response to the growing challenges of manual labor and efficiency in warehouse operations, Amazon has embarked on a significant transformation by incorporating robotics to assist with various tasks. While a substantial number of robots have been successfully deployed for tasks such as item transportation within warehouses, the complex process of object picking from shelves remains a significant challenge. This project addresses the issue by developing an innovative robotic system capable of autonomously fulfilling a simulated order by efficiently selecting specific items from shelves. A distinguishing feature of the proposed robotic system is its capacity to navigate the challenge of uncertain object positions within each bin of the shelf. The system is engineered to autonomously adapt its approach, employing strategies that enable it to efficiently locate and retrieve the desired items, even in the absence of pre-established knowledge about their placements. Crucially, the robotic system operates with a paramount emphasis on autonomy. The intricate interplay of algorithms, control mechanisms, and sensor fusion empowers the robot to execute the entire object picking task without human intervention. This unfaltering commitment to autonomy is a pivotal step towards revolutionizing warehouse operations, potentially paving the way for unprecedented levels of efficiency and productivity. This project serves as a testament to the intersection of robotics, computer vision, and artificial intelligence in tackling a complex challenge within the realm of modern logistics. The envisioned robotic system represents a significant advancement in autonomous object-picking technology, holding the promise of transforming conventional warehousing practices. As the fusion of cutting-edge technology and logistical innovation unfolds, the outcomes of this endeavor have the potential to redefine the future of warehouse operations and automation within the industry.",
  },
];

export interface Competition {
  title: string;
  dates: string;
  thumbnail: string;
  organizer: { name: string; href?: string };
  project?: string;
  description: string;
  links: { label: string; href: string }[];
}

export const comps: Competition[] = [
  {
    title: "Co-Creating with GPT-5",
    dates: "18 Aug 2025 - 24 Aug 2025",
    thumbnail: "/aichatbot.webp",
    organizer: {
      name: "Lablab.ai",
      href: "https://lablab.ai/event/co-creating-with-gpt-5",
    },
    project: "F1GPT - Formula One AI Chatbot",
    description:
      "F1GPT is a domain-focused AI assistant built with Next.js and powered by GPT-5 through the AI/ML API. It uses a Retrieval-Augmented Generation (RAG) pipeline that scrapes and indexes authoritative Formula One sources — such as Wikipedia and the official F1 site — into a vector database (DataStax Astra DB). When a user asks a question, the system embeds the query, retrieves the most relevant chunks, and streams a GPT-5 answer enriched with this context. The chatbot is deployed with a sleek Formula One-themed UI, enabling real-time streaming responses. Its technical stack includes Next.js 15, Vercel AI SDK, LangChain text splitters, Puppeteer for scraping, and Astra DB for high-performance similarity search. Value & Use Cases: - Fans can quickly look up race results, driver stats, or rule explanations. - Journalists can explore historical data and technical regulations faster. - Teams & Analysts can leverage a conversational layer over structured F1 data. By combining GPT-5’s reasoning power with RAG, F1GPT reduces hallucinations and delivers trusted, up-to-date answers. This positions it as a unique sports-focused AI assistant, showing how AI can enhance fan engagement and knowledge accessibility in high-data domains like Formula One.",
    links: [
      {
        label: "View Project",
        href: "https://github.com/m-areeb-2001/rag-f1gpt-chatbot-nextjs",
      },
      {
        label: "View Submission",
        href: "https://lablab.ai/event/co-creating-with-gpt-5/aignitivex/f1gpt-formula-one-ai-chatbot",
      },
      {
        label: "View Demo",
        href: "https://rag-f1gpt-chatbot-nextjs-production.up.railway.app/",
      },
    ],
  },
];

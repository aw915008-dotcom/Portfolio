/* ============================================================
   PORTFOLIO CONTENT — single source of truth
   To add a new project: copy an object inside PROJECTS and edit it.
   To hide a field, delete it or leave it as an empty string/array.
   ============================================================ */

const PROFILE = {
  name: "Ahmed Waled",
  title: "Data Science & AI Specialist",
  location: "Cairo, Egypt",
  email: "aw915008@gmail.com",
  phone: "+20 155 479 3927",
  photo: "profile.jpg",
  cv: "Ahmed_Waled_Resume.pdf",
  tagline: "I build machine learning systems that turn raw, messy data into decisions — from the database schema to the deployed interface.",
  summary:
    "I build machine learning systems that turn raw, messy data into decisions — from the database schema to the deployed interface. I'm a Computer Science student in the Machine Learning track, currently completing a Data Science & AI diploma alongside my degree. My focus is the full lifecycle of a data product: cleaning and modeling the data, training and evaluating the algorithm, then shipping it behind an API and a frontend someone can actually use. Recent work spans healthcare prediction, retail analytics, resume screening and customer churn — usually with a SQL or MongoDB backend, a Scikit-learn or TensorFlow model at the core, and a Streamlit or React interface on top. Alongside the ML side, I'm just as comfortable in pure data analysis and BI — building executive dashboards in Excel and Tableau that turn a raw dataset into KPIs a business can actually act on. I like projects that don't stop at a notebook.",
  social: {
    github: "",
    linkedin: "",
    portfolio: ""
  }
};

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Java", "JavaScript", "HTML/CSS"]
  },
  {
    category: "Data Science & ML",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL Server", "PyMongo", "DB Design & Normalization"]
  },
  {
    category: "Web & Tools",
    items: ["REST APIs", "Web Scraping (BeautifulSoup, Selenium)", "React", "TypeScript", "Git"]
  },
  {
    category: "Data Analysis & BI",
    items: ["Excel (Pivot Tables, VLOOKUP)", "Power BI", "Tableau", "DAX", "Power Query", "KPI Dashboards"]
  }
];

const PROJECTS = [
  {
    title: "AI Resume Screening System",
    shortDescription: "NLP-powered system that scores and ranks resumes against a job description.",
    description:
      "An AI-powered resume screening system that automates candidate evaluation by comparing resumes against a specific job description. It uses NLP and machine learning to analyze candidate profiles, surface relevant skills and experience, and calculate a compatibility score — then ranks every candidate against the role.",
    image: "project-resume-screening.jpg",
    category: "NLP",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP", "Sentence Transformers", "MongoDB", "PyMongo", "Streamlit", "Plotly"],
    date: "2026",
    features: [
      "Resume and job description text processing",
      "Data cleaning and preprocessing pipeline",
      "NLP-based feature extraction",
      "Resume-to-job similarity analysis",
      "Candidate ranking and comparison",
      "Matching and missing skills detection",
      "AI-generated candidate insights",
      "Interactive Streamlit dashboard",
      "Model evaluation and performance analysis"
    ],
    overview:
      "Recruiters spend real time scanning resumes for fit. This system takes that first pass and automates it: upload two or more resumes and a job description, and it returns a ranked shortlist with an explanation of why.",
    methodology:
      "Resume and job-description text is cleaned and normalized, then passed through an NLP feature-extraction pipeline built on Sentence Transformers to produce semantic embeddings. Similarity between each resume and the job description is computed to generate a match score, and a skills-matching layer separately flags overlapping and missing skills so the score is explainable, not just a number.",
    results:
      "Outputs a ranked candidate list per job description, each with a compatibility score, a matched-skills list, and a missing-skills list, viewable through an interactive Streamlit dashboard.",
    keyInsights: [
      "Semantic similarity (via sentence embeddings) surfaces relevant candidates that keyword matching alone would miss.",
      "Pairing a similarity score with an explicit skills-gap list makes the ranking auditable for a human reviewer."
    ]
  },
  {
    title: "Customer Churn Prediction AI Web App",
    shortDescription: "End-to-end churn prediction system with a full analytics dashboard and live prediction API.",
    description:
      "An end-to-end customer churn prediction system combining data science, machine learning, MongoDB, and a modern web application to identify customers likely to churn — with an interactive dashboard for exploring behavior, monitoring model performance, and predicting churn probability in real time.",
    image: "project-churn.jpg",
    category: "Machine Learning",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "MongoDB", "FastAPI", "React", "Vite", "Tailwind CSS", "Plotly"],
    date: "2026",
    features: [
      "End-to-end data cleaning and preprocessing pipeline",
      "MongoDB integration for cleaned customer data",
      "Exploratory data analysis and interactive visualizations",
      "Feature engineering for churn prediction",
      "Multiple ML classification models, compared and benchmarked",
      "Single-customer and batch CSV prediction",
      "Interactive analytics dashboard",
      "Risk classification based on churn probability",
      "REST API integration",
      "Deployment-ready architecture with cloud database support"
    ],
    overview:
      "Built to answer one question for a subscription business: which customers are about to leave, and why? The system covers the full path from raw customer records to a live, browsable prediction dashboard.",
    methodology:
      "Raw customer data is extracted, cleaned, and preprocessed, then stored in MongoDB. From there the pipeline pulls the processed data, engineers churn-relevant features, and trains multiple classification models — selecting the best performer based on Precision, Recall, F1-Score, and ROC-AUC rather than accuracy alone, since churn datasets are typically imbalanced. The chosen model is served through a FastAPI backend, with a React + Tailwind frontend for exploration and prediction.",
    results:
      "The deployed dashboard reports 7,043 total customers, a 26.5% churn rate, and flags high-risk segments such as month-to-month contracts and fiber-optic internet customers, alongside single-customer and batch-CSV prediction tools.",
    keyInsights: [
      "Month-to-month customers churn at the highest rate of any contract type in the dataset.",
      "Customers with 6 months of tenure or less churn nearly twice as often as the overall base rate.",
      "Fiber-optic internet customers show the highest churn rate among internet service types."
    ]
  },
  {
    title: "AI-Based Disease Analysis & Prediction System",
    shortDescription: "Real-time disease prediction from user-input symptoms using ML and deep learning.",
    description:
      "An end-to-end disease prediction system that predicts likely conditions in real time from user-input symptoms, using a combination of machine learning and deep learning models, with medical data scraped and aggregated from public sources.",
    category: "Machine Learning",
    technologies: ["Python", "MongoDB", "Scikit-learn", "TensorFlow", "Streamlit", "REST APIs", "BeautifulSoup"],
    date: "2025 - 2026",
    features: [
      "Real-time symptom-based disease prediction",
      "Medical data scraping and aggregation (BeautifulSoup)",
      "Structured and unstructured storage in MongoDB",
      "Data preprocessing and feature engineering pipeline",
      "Interactive Streamlit frontend for non-technical users",
      "External medical API integration for broader diagnostic coverage"
    ],
    overview:
      "Built to make an ML diagnostic aid usable by someone without a data science background: enter your symptoms, get a prediction, an explanation, and a recommendation.",
    methodology:
      "Medical data is scraped from multiple online sources and stored in MongoDB in both structured and unstructured form. A preprocessing and feature-engineering pipeline cleans the raw medical data before it reaches the model layer, where both classical ML and deep learning models are trained to predict likely conditions from symptom input. External medical APIs enrich the dataset further to widen diagnostic coverage.",
    results:
      "Delivered as an interactive Streamlit application that returns disease predictions, a breakdown of contributing symptoms, and basic health recommendations for the predicted condition."
  },
  {
    title: "Retail Customer & Sales Analytics System",
    shortDescription: "Normalized SQL Server + MongoDB analytics system with 85%+ classification accuracy.",
    description:
      "A retail analytics system built on a normalized SQL Server database of 50,000+ transactions, 5,000 customers, and 500 products, denormalized into MongoDB for analytics, with customer segmentation, sentiment analysis, and demand-forecasting models on top.",
    category: "Data Science",
    technologies: ["SQL Server", "MongoDB", "Python", "Scikit-learn", "REST APIs", "Jupyter Notebook"],
    date: "2025 - 2026",
    features: [
      "Normalized 6-table SQL Server schema",
      "MongoDB denormalization layer for analytics",
      "KMeans customer segmentation",
      "Supervised classification models (85%+ accuracy)",
      "Sentiment analysis on customer reviews",
      "Regression models for branch profit and demand forecasting",
      "Microservices architecture with a rate-limited Gateway API"
    ],
    overview:
      "Designed to mirror how a real retail analytics stack is structured: a transactional relational store feeding an analytics-friendly document store, with several models layered on top for different business questions.",
    methodology:
      "Transactional data lives in a normalized SQL Server schema across 6 tables, then flows into MongoDB in a denormalized shape built for analytics queries. On top of that data, KMeans clustering segments customers by behavior, supervised classification models predict outcomes at 85%+ accuracy, sentiment analysis models score customer reviews, and regression models forecast branch profit and product demand. The system is split into dedicated Model APIs behind a rate-limited Gateway API, plus a separate reporting notebook.",
    results:
      "Manages 50,000+ transactions across 5,000 customers and 500 products, with classification models reaching 85%+ accuracy and a working segmentation, sentiment, and forecasting layer on top."
  },
  {
    title: "Sales Analysis & Prediction System",
    shortDescription: "SQL-generated sales dataset with EDA, forecasting models, and interactive KPI dashboards.",
    description:
      "A sales analysis and forecasting project built on a SQL-generated dataset, covering exploratory data analysis, seasonal trend detection, and machine learning models to forecast future sales.",
    category: "Data Analysis",
    technologies: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    date: "2025",
    features: [
      "SQL-designed and generated sales dataset",
      "End-to-end data preprocessing and transformation",
      "Exploratory data analysis of seasonal trends and customer behavior",
      "ML-based sales forecasting models",
      "Interactive dashboards for trends and KPIs"
    ],
    overview:
      "A ground-up sales analytics exercise, starting from schema design in SQL through to a forecasting model and a dashboard a stakeholder could actually read.",
    methodology:
      "The dataset was designed and generated directly in SQL, then moved through a full preprocessing and transformation pipeline in Python. Exploratory analysis identified seasonal trends, customer behavior patterns, and the key drivers of sales, which fed directly into the features used by the forecasting models.",
    results:
      "Produced working sales-forecast models plus interactive dashboards for tracking trends and KPIs over time."
  },
  {
    title: "MISUO Executive Sales Dashboard",
    shortDescription: "Interactive Excel dashboard tracking sales, delivery performance, and top markets.",
    description:
      "An interactive executive sales dashboard built in Microsoft Excel, giving leadership a single view of sales performance and operations — total sales, orders, average selling price, platform breakdown, top categories, delivery status, and top-performing areas.",
    image: "project-misuo-excel.jpg",
    category: "Data Analysis",
    technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Slicers", "Data Visualization", "Dashboard Design"],
    date: "2026",
    features: [
      "Total Sales, Orders, and Average Selling Price KPIs",
      "Sales by Platform breakdown",
      "Top Product Categories chart",
      "Monthly Sales Trend line chart",
      "Delivery Status and On-Time Delivery Rate visuals",
      "Top Sales Areas ranking",
      "Slicers and filters for interactive exploration"
    ],
    overview:
      "Built for a business (MISUO) that needed a single executive-level screen to read sales and delivery performance without digging through raw spreadsheets.",
    methodology:
      "Raw sales and order data was structured with Excel Pivot Tables and connected to Pivot Charts, slicers, and filters, transforming it into a single interactive, executive-facing view.",
    results:
      "Live dashboard reporting 1,166,207 in total sales across 112 orders, an average selling price of 10,413, 82 individual customers and 30 companies, with a 79% on-time delivery rate and Cairo as the top sales area."
  },
  {
    title: "HR Analytics Dashboard",
    shortDescription: "Tableau dashboard analyzing workforce attrition, demographics, and job satisfaction.",
    description:
      "An interactive HR analytics dashboard built in Tableau to analyze employee attrition, demographics, job roles, and job satisfaction, with dynamic filters to support HR decision-making.",
    image: "project-hr-tableau.jpg",
    category: "Data Analysis",
    technologies: ["Tableau", "Data Visualization", "Interactive Dashboards", "KPI Analysis", "HR Analytics"],
    date: "2026",
    features: [
      "Total Employees, Attrition Rate, Average Age and Income KPIs",
      "Attrition by Job Role breakdown",
      "Attrition by Marital Status",
      "Average Job Satisfaction by Department",
      "Attrition by Age Group and Gender",
      "Years Since Last Promotion trend",
      "Interactive filters for Gender, Department, and Promotion Group"
    ],
    overview:
      "Built to give an HR team a way to explore why employees leave — by role, age, department, and time since their last promotion — instead of reading it off a static report.",
    methodology:
      "Employee records were modeled in Tableau around a set of core HR KPIs, with charts for attrition broken down by role, marital status, department, age group, and gender, connected to shared filters for department, gender, and promotion group.",
    results:
      "Dashboard reporting 1,480 total employees, a 16.1% attrition rate, an average age of 36.9, and average monthly income of 6,505 — with Laboratory Technician and Sales Executive as the highest-attrition roles."
  }
];

const EXPERIENCE = [
  {
    company: "AMIT Learning",
    position: "Data Science & AI Trainee",
    startDate: "Aug 2025",
    endDate: "Jun 2026",
    description:
      "Hands-on training across the data science lifecycle — from OOP system design through data analysis, web scraping, and database management.",
    responsibilities: [
      "Developed a Patient Management System in Python using OOP to track patient visits and manage bookings",
      "Performed data analysis across multiple datasets, identifying inconsistencies and extracting actionable trends",
      "Implemented web scraping workflows and API integrations to gather and enrich datasets from public sources",
      "Built and managed MongoDB databases for storing patient records, booking data, and external medical information"
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "BeautifulSoup", "Requests", "PyMongo"]
  },
  {
    company: "Front-End Development Trainee",
    position: "Front-End Development Trainee",
    startDate: "Jan 2025",
    endDate: "May 2025",
    description: "Built responsive web pages and interactive user interfaces.",
    responsibilities: [
      "Built responsive web pages and interactive user interfaces using HTML, CSS, and JavaScript"
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];

const EDUCATION = [
  {
    university: "MNU University — Faculty of Computer and Artificial Intelligence",
    degree: "B.Sc. Computer Science — Machine Learning Department",
    years: "2023 - 2027"
  },
  {
    university: "AMIT Learning",
    degree: "Data Science and AI Diploma",
    years: "Aug 2025 - Jun 2026"
  }
];

const CERTIFICATIONS = [
  {
    name: "Data Science & AI Diploma",
    issuer: "AMIT Learning",
    date: "2025 - 2026",
    skills: ["Python", "Machine Learning", "Data Science", "Deep Learning"]
  },
  {
    name: "Front-End Developer Course",
    issuer: "AMIT Learning",
    date: "2023 - 2025",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B1+" }
];

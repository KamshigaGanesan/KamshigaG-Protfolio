const createProjectPreview = (title, accent) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="720" viewBox="0 0 960 720">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
      </defs>
      <rect width="960" height="720" rx="36" fill="url(#bg)"/>
      <rect x="72" y="72" width="816" height="576" rx="28" fill="#0b1220" stroke="rgba(56,189,248,0.2)"/>
      <rect x="108" y="108" width="744" height="48" rx="16" fill="#111827"/>
      <circle cx="138" cy="132" r="8" fill="#ef4444"/>
      <circle cx="166" cy="132" r="8" fill="#f59e0b"/>
      <circle cx="194" cy="132" r="8" fill="#22c55e"/>
      <rect x="108" y="192" width="264" height="304" rx="24" fill="#0f172a" stroke="rgba(255,255,255,0.06)"/>
      <rect x="408" y="192" width="444" height="128" rx="24" fill="url(#accent)" opacity="0.18"/>
      <rect x="408" y="344" width="444" height="152" rx="24" fill="#111827" stroke="rgba(255,255,255,0.06)"/>
      <text x="138" y="248" fill="#93c5fd" font-family="Arial, sans-serif" font-size="20">Project Snapshot</text>
      <text x="138" y="292" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="700">${title}</text>
      <text x="138" y="340" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="18">Modern UI preview</text>
      <text x="438" y="244" fill="#ffffff" font-family="Arial, sans-serif" font-size="26" font-weight="700">${accent}</text>
      <text x="438" y="284" fill="#dbeafe" font-family="Arial, sans-serif" font-size="18">Scalable full-stack interface</text>
      <rect x="438" y="386" width="160" height="18" rx="9" fill="#38bdf8" opacity="0.8"/>
      <rect x="438" y="422" width="250" height="18" rx="9" fill="#475569"/>
      <rect x="438" y="458" width="200" height="18" rx="9" fill="#334155"/>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const projects = [
  {
    id: 1,
    title: 'Career Selection & Education Guidance System',
    role: 'Full-stack feature development',
    type: 'Academic MERN project',
    description:
      'A MERN education + career guidance app that helps school leavers compare pathways using guided recommendations.',

    highlights: [
      'Built recommendation and pathway comparison features',
      'Integrated React screens with Express and MongoDB services',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/KamshigaGanesan/A-Web-Based-Career-Selection-and-Education-Guidance-System',
    image: "/projects/career-guidance.png",
  },

  {
    id: 2,
    title: 'Human Resource Management System',
    role: 'Backend API development',
    type: 'Spring Boot backend',
    description:
      'A backend HR management system with clean REST APIs, relational data modeling, and employee administration workflows.',

    highlights: [
      'Created CRUD APIs for employee management workflows',
      'Connected Spring Boot services to PostgreSQL and tested endpoints in Postman',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Postman'],
    github: 'https://github.com/KamshigaGanesan/hrm-system-springboot',
    image: createProjectPreview('HRM System', 'Spring Boot'),
  },

  {
    id: 3,
    title: 'Smart Campus Mobile Application',
    role: 'Mobile module development',
    type: 'React Native team project',
    description:
      'A university mobile app for student services; I owned the Lost & Found module UI and its backend API integration.',

    highlights: [
      'Developed Lost & Found screens and user flows',
      'Connected React Native UI with Node.js, Express, and MongoDB APIs',
    ],
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/KamshigaGanesan/Y2S2SmartUniMobileApp_WMT',
    image: "/projects/smartUNI.png",
  },

  {
    id: 4,
    title: 'Jewellers Website',
    role: 'Full-stack web development',
    type: 'Business showcase platform',
    description:
      'A responsive jewellery showcase platform for a local business to manage products, images, and daily gold-rate content.',

    highlights: [
      'Implemented product management and gold-rate update flows',
      'Used Cloudinary and MongoDB Atlas for image and data storage',
    ],
    tech: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/KamshigaGanesan/Jewellery_Management',
    image: "/projects/jewellery.png",
  },

];

export default projects


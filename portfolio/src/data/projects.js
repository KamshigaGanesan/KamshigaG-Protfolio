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
    description:
      'A MERN stack web application developed to help Sri Lankan school leavers identify suitable education and career pathways. My contribution focused on developing recommendation features, pathway comparisons, and integrating frontend and backend services.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/KamshigaGanesan/A-Web-Based-Career-Selection-and-Education-Guidance-System',
    image: "/projects/career-guidance.png",
  },

  {
    id: 2,
    title: 'Human Resource Management System',
    description:
      'A backend Human Resource Management System built using Spring Boot and PostgreSQL. Features include employee management, RESTful APIs, CRUD operations, database integration, and API testing with Postman.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Postman'],
    github: 'https://github.com/KamshigaGanesan/hrm-system-springboot',
    image: createProjectPreview('HRM System', 'Spring Boot'),
  },

  {
    id: 3,
    title: 'Smart Campus Mobile Application',
    description:
      'A React Native mobile application developed for university students. My contribution focused on the Lost & Found Management module with API integration, MongoDB connectivity, and frontend-backend communication.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/KamshigaGanesan/Y2S2SmartUniMobileApp_WMT',
    image: "/projects/smartUNI.png",
  },

  {
    id: 4,
    title: 'Jewellers Website',
    description:
      'A full-stack jewellery showcase platform developed for a local business. Includes product management, gold rate updates, Cloudinary image storage, responsive design, and MongoDB Atlas integration.',
    tech: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/KamshigaGanesan/Jewellery_Management',
    image: "/projects/jewellery.png",
  },

];

export default projects


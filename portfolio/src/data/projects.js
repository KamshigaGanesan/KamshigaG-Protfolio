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
    title: 'Career Guidance and Education System',
    description:
      'A MERN-based web application designed to guide Sri Lankan students in selecting education and career pathways. My main contribution focused on the Qualification and Eligibility Analyzer feature.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yourusername/your-repo',
    image: createProjectPreview('Career Guidance System', 'Eligibility Analyzer'),
  },
  {
    id: 2,
    title: 'Campus Food API',
    description:
      'A backend API project for managing student food ordering data using Express and MongoDB, with routes, models, and API testing through Postman.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yourusername/your-repo',
    image: createProjectPreview('Campus Food API', 'Backend Services'),
  },
]
export default projects
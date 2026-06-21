import { FaUsers, FaLaptopCode } from "react-icons/fa";

const activities = [
  {
    title: "Leadership & Soft Skills Workshop",
    description:
      "Participated in a professional development workshop focused on leadership, communication, teamwork, workplace readiness, and career growth.",
    image: "/professionalDevelopment/workshop.jpeg",
    icon: FaUsers,
    tags: ["Leadership", "Communication", "Teamwork"],
    detail: "Mrs. Kalavathy Sanjeewakumar - Asia Chartered Institute of Digital Marketing",
  },
  {
    title: "ThinkAI Expo 2025 - Poster Presentation",
    description:
      "Presented an academic AI poster at ThinkAI Expo 2025, demonstrating interest in artificial intelligence research and technical communication.",
    image: "/professionalDevelopment/AIposter.jpeg",
    icon: FaLaptopCode,
    tags: ["AI/ML", "Research", "Presentation"],
    detail: "ThinkAI Expo 2025 Participant",
  },
  {
    title: "Heart Rate Monitoring System - Project Presentation",
    description:
      "Presented an IoT-based Heart Rate Monitoring System for the Year 1 Fundamentals of Computing module, covering sensors, data flow, and real-time monitoring concepts.",
    image: "/professionalDevelopment/IOT.png",
    icon: FaLaptopCode,
    tags: ["IoT", "Academic Project", "Presentation"],
    detail: "Fundamentals of Computing - Year 1 Module Project",
  },
];

function Workshops() {
  return (
    <section className="section" id="development">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Professional Development</h2>
          <p className="section-subtitle">
            Selected workshops, presentations, and learning activities that support my growth as a software engineering undergraduate.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <article
                className="activity-card"
                key={activity.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="activity-image-wrap">
                  <img src={activity.image} alt={activity.title} />
                  <div className="activity-image-overlay">
                    <span className="activity-icon-badge">
                      <Icon />
                    </span>
                  </div>
                </div>

                <div className="activity-body">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <p className="activity-detail">{activity.detail}</p>
                  <div className="activity-tags">
                    {activity.tags.map((tag) => (
                      <span key={tag} className="activity-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Workshops;

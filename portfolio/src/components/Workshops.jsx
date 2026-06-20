const workshopPhotos = [
  {
    src: '/professionalDevelopment/workshop.jpeg',
    alt: 'Leadership and soft skills development workshop group photo',
  },
  {
    src: '/professionalDevelopment/AIposter.jpeg',
    alt: 'Academic poster presentation activity',
  },
  {
    src: '/professionalDevelopment/Carrierguidence.jpeg',
    alt: 'Career guidance and professional exposure session',
  },
  {
    src: '/professionalDevelopment/IOT.png',
    alt: 'Industry exposure and learning workshop',
  },
]

const skillsGained = [
  'Leadership',
  'Communication',
  'Teamwork',
  'Professional Development',
  'Industry Exposure',
]

function Workshops() {
  return (
    <section className="section" id="development">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Professional Development</h2>
          <p className="section-subtitle">
            Workshops, industry exposure, and continuous learning.
          </p>
        </div>

        <div className="development-wrapper" data-aos="fade-up">
          <div className="development-info">
            <div>
              <p className="project-kicker">Workshop Highlight</p>
              <h3>Leadership & Soft Skills Development Workshop</h3>
              <p>
                Participated in a professional development workshop focused on
                leadership, communication, teamwork, workplace readiness, and
                career growth.
              </p>
            </div>

            <dl className="development-meta">
              <div>
                <dt>Resource Person</dt>
                <dd>Mrs. Kalavathy Sanjeewakumar</dd>
              </div>
              <div>
                <dt>Organization</dt>
                <dd>Asia Chartered Institute of Digital Marketing</dd>
              </div>
            </dl>

            <div className="achievement-badges development-skills" aria-label="Skills gained">
              {skillsGained.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="development-gallery">
            {workshopPhotos.map((photo, index) => (
              <figure className={`development-photo photo-${index + 1}`} key={photo.src}>
                <img src={photo.src} alt={photo.alt} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshops

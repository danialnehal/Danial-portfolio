import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* First Job 2024 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>HasbiSoft</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed 6+ complete frontend applications using React.js.
              Created responsive UI/UX and designed wireframes using Figma.
              Focused on clean, interactive user interfaces and smooth
              component-based architecture.
            </p>
          </div>

          {/* Current Job 2026 – Present */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>InvoSQ</h5>
              </div>
              <h3>2026 – Present</h3>
            </div>
            <p>
              Building modern frontend solutions using Next.js, and React.
              Implementing responsive designs, animations, and interactive
              components for CMS-based projects, e-commerce, and CRM systems.
              Focused on delivering polished, user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

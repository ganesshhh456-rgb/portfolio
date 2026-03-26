import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>11th Grade</h4>
                <h5>Computer Science & Web Development</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing 11th Grade with a strong interest in Computer Science and Web Development. Dedicated to continuously improving my skills by exploring new technologies and working on real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

export default function Home() {
  return (
    <main>
      <header className="hero hero-grid">
        <div>
          <h1>AIBE Exam Preparation Made Simple</h1>
          <p>
            AIBEProExamPrep is designed to support your AIBE preparation with
            syllabus-aligned content, subject-wise practice, and continuous
            updates. Built to help law graduates prepare with clarity and
            confidence.
          </p>

          <div className="cta-stack">
            <a
              href="https://play.google.com/store/apps/details?id=com.aibe.proexamprep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                className="play-badge"
              />
            </a>

            <a
              className="text-cta"
              href="https://play.google.com/store/apps/details?id=com.aibe.proexamprep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Already on mobile? Tap to install
            </a>
          </div>
        </div>

        <div className="qr-box">
          <img
            src="/aibe-playstore-qr.png"
            alt="Scan to download AIBEProExamPrep"
          />
          <p className="qr-text">
            Scan to open directly in Play Store
          </p>
        </div>
      </header>

      <section className="features">
        <h2>How AIBEProExamPrep Helps You Prepare</h2>
        <ul>
          <li>Designed as per the latest AIBE syllabus</li>
          <li>Subject-wise practice questions for focused preparation</li>
          <li>Past year question patterns and exam-oriented content</li>
          <li>Regularly updated with new questions and improvements</li>
          <li>Works fully offline for uninterrupted study</li>
        </ul>
      </section>
    </main>
  );
}

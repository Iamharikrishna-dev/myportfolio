import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa'; // Download icon
import { ImSpinner8 } from 'react-icons/im'; // Spinner icon

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true); // Show spinner while downloading

    // Simulate download process
    const link = document.createElement('a');
    link.href = '/Harikrishnan.pdf'; // Path to the resume file
    link.download = 'Harikrishnan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate download completion (after 2 seconds)
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section id="resume" className="glassmorphism-section">
      <h2>Resume</h2>
      
      {/* Download Resume Section */}
      <div className="download-resume-section">
        <p>
          Click the button below to download a detailed copy of my resume. The resume includes
          information about my experience, skills, and projects in a professionally formatted PDF.
        </p>
        
        <button
          onClick={handleDownload}
          className={`download-btn ${isDownloading ? 'downloading' : ''}`}
          disabled={isDownloading} // Disable button while downloading
        >
          {isDownloading ? (
            <>
              <ImSpinner8 className="spinner" /> Downloading...
            </>
          ) : (
            <>
              <FaDownload /> Download Resume
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Resume;

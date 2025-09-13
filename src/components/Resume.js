import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaDownload } from 'react-icons/fa'; // Download icon
import { FaFilePdf, FaFileWord } from 'react-icons/fa'; // PDF and DOC icons

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="glassmorphism-section">
      <h2>Resume</h2>
      
      {/* Download Resume Section */}
      <div className="download-resume-section">
        <p>
          Click the button below to download a detailed copy of my resume. The resume includes
          information about my experience, skills, and projects in a professionally formatted PDF or DOC.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className={`download-btn`}
        >
          <FaDownload /> Download Resume
        </button>
        {showModal && ReactDOM.createPortal(
          <div
            className="resume-modal-overlay"
            onClick={e => {
              if (e.target.classList.contains('resume-modal-overlay')) {
                setShowModal(false);
              }
            }}
            style={{ zIndex: 2147483647 }}
          >
            <div className="resume-modal">
              <h3>Select Format</h3>
              <div className="resume-modal-options">
                <a
                  className="download-btn pdf-btn"
                  href="/HariKrishnan_K_M_CV_2025.pdf"
                  download="Harikrishnan_Resume.pdf"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  onClick={() => setShowModal(false)}
                >
                  <FaFilePdf style={{ color: 'white', fontSize: '1.5rem' }} /> PDF
                </a>
                <div className="doc-sample" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '20px' }}>
                  <a
                    className="download-btn doc-btn"
                    href="/Harikrishnan.docx"
                    download="Harikrishnan_Resume.doc"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    onClick={() => setShowModal(false)}
                  >
                    <FaFileWord style={{ color: 'white', fontSize: '1.5rem' }} /> DOC
                  </a>
                </div>
              </div>
            </div>
            <style>{`
              .resume-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0,0,0,0.4);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2147483647 !important;
              }
              .resume-modal {
                background: #fff;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
                min-width: 300px;
                z-index: 2147483647 !important;
              }
              .resume-modal-options {
                display: flex;
                flex-direction: row;
                gap: 24px;
                align-items: center;
                justify-content: center;
                width: 100%;
              }
              .pdf-btn {
                background-color: #e53935 !important;
                color: white !important;
                border: none;
              }
              .pdf-btn:hover {
                background-color: #b71c1c !important;
              }
              .doc-btn {
                background-color: #1976d2 !important;
                color: white !important;
                border: none;
              }
              .doc-btn:hover {
                background-color: #0d47a1 !important;
              }
            `}</style>
          </div>,
          document.body
        )}
        
      </div>
    </section>
  );
};

export default Resume;

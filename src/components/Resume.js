import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaDownload } from 'react-icons/fa'; // Download icon
import { FaFilePdf, FaFileWord } from 'react-icons/fa'; // PDF and DOC icons
<<<<<<< HEAD

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

=======
import { ImSpinner8 } from 'react-icons/im'; // Spinner icon

const Resume = () => {
  const [downloadingType, setDownloadingType] = useState(null); // 'pdf' or 'doc' or null
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (type) => {
  setDownloadingType(type);
    let fileName = '';
    let filePath = '';
    if (type === 'pdf') {
      fileName = 'Harikrishnan_Resume.pdf';
      filePath = '/HariKrishnan_K_M_CV_2025.pdf';
    } else if (type === 'doc') {
      fileName = 'Harikrishnan_Resume.doc';
      filePath = '/Harikrishnan.docx'; // Make sure this file exists in public folder
    }
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
  setDownloadingType(null);
  setShowModal(false);
    }, 2000);
  };

>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
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
<<<<<<< HEAD
=======
          disabled={downloadingType === 'pdf' || downloadingType === 'doc'}
>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
        >
          <FaDownload /> Download Resume
        </button>
        {showModal && ReactDOM.createPortal(
          <div
            className="resume-modal-overlay"
            onClick={e => {
<<<<<<< HEAD
              if (e.target.classList.contains('resume-modal-overlay')) {
=======
              if (e.target.classList.contains('resume-modal-overlay') && !downloadingType) {
>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
                setShowModal(false);
              }
            }}
            style={{ zIndex: 2147483647 }}
          >
            <div className="resume-modal">
              <h3>Select Format</h3>
              <div className="resume-modal-options">
<<<<<<< HEAD
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
=======
                <button
                  className="download-btn pdf-btn"
                  onClick={() => handleDownload('pdf')}
                  disabled={downloadingType === 'pdf' || downloadingType === 'doc'}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {downloadingType === 'pdf' ? <ImSpinner8 className="spinner" /> : <FaFilePdf style={{ color: 'white', fontSize: '1.5rem' }} />}
                  PDF
                </button>
                <div className="doc-sample" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '20px' }}>
                  <button
                    className="download-btn doc-btn"
                    onClick={() => handleDownload('doc')}
                    disabled={downloadingType === 'pdf' || downloadingType === 'doc'}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    {downloadingType === 'doc' ? <ImSpinner8 className="spinner" /> : <FaFileWord style={{ color: 'white', fontSize: '1.5rem' }} />}
                    DOC
                  </button>
>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
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
<<<<<<< HEAD
        
=======
>>>>>>> ba752a6148810468c279a8f3de50ca6136f1d0c6
      </div>
    </section>
  );
};

export default Resume;

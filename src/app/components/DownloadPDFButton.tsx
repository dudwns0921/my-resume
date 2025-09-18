'use client';
import { useState } from 'react';
import Spinner from './common/Spinner';

const DownloadPDFButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      const response = await fetch('/my-resume/api/pdf?url=' + window.location.href);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className={`text-white bg-blue-500 px-4 py-2 rounded flex items-center justify-center min-w-[120px] transition
        ${loading
          ? 'cursor-not-allowed opacity-70'
          : 'hover:bg-blue-600'
        }`}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center gap-2">
            <div>PDF 생성 중</div>
            <Spinner />
        </div>
      ) : (
        'PDF 다운로드'
      )}
    </button>
  );
};

export default DownloadPDFButton;
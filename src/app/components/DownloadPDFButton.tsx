'use client';
import { useState } from 'react';
import Spinner from './common/Spinner';
import { getPdfUrl } from '@/utils';

const DownloadPDFButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      const response = await fetch(getPdfUrl());
      if (!response.ok) throw new Error('PDF 생성에 실패했습니다.');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      alert('PDF 생성에 실패했습니다. 잠시 후 다시 시도해 주세요.');
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
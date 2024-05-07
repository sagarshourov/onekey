import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadDivAsPDFButton = ({ divId }) => {
  useEffect(() => {
    const handleDownload = () => {
      const div = document.getElementById(divId);

      html2canvas(div).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('div_as_pdf.pdf');
      });
    };

    // Call handleDownload function when the component mounts
    handleDownload();
  }, [divId]);

  return null; // This component doesn't render anything visible
};

export default DownloadDivAsPDFButton;

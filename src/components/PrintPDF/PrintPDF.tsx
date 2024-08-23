import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

//Loading PDF
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF File
import PdfDoc from "./assets/purpose-compressed.pdf";

import styles from "./style.module.scss";

export const PrintPDF = () => {
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>();

  const onDocumentLoadSuccess = ({
    numPages,
  }: {
    numPages: number | undefined;
  }) => {
    setNumberOfPages(numPages);
  };

  return (
    <div className={styles.pdfContainer}>
      <Document file={PdfDoc} onLoadSuccess={onDocumentLoadSuccess} className={styles.pdfDocument}>
        {[...Array(numberOfPages).keys()].map((page) => (
          <Page pageNumber={page + 1}  className={styles.pdfPage}/>
        ))}
      </Document>
    </div>
  );
};

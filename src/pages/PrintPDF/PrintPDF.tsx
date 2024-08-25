import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';

//Loading PDF
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF File
import PdfDoc from "./assets/purpose-compressed.pdf";

import styles from "./style.module.scss";
import { PageEditor } from "./components/PageEditor";
import { TopBar } from "./components/TopBar/TopBar";

export const PrintPDF = () => {
  const [numberOfPages, setNumberOfPages] = useState<number>();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumberOfPages(numPages);
  };

  const pages = [...Array(numberOfPages).keys()];

  return (
    <DndProvider options={HTML5toTouch}>
      <div className={styles.pdfContainer}>
        <div className={styles.topBarWrapper}></div>
        <TopBar/>
        <div className={styles.documentContainer}>
          <Document
            file={PdfDoc}
            onLoadSuccess={onDocumentLoadSuccess}
            className={styles.pdfDocument}
          >
            {pages.map((page) => (
              <Page
                pageNumber={page + 1}
                className={styles.pdfPage}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                key={page}
              >
                <PageEditor pageNumber={page + 1} />
              </Page>
            ))}
          </Document>
        </div>
      </div>
    </DndProvider>
  );
};

import { useRef } from "react";
// import generatePDF from "react-to-pdf";
// import { useRef } from "react";
import jsPDF from "jspdf";

export default function test() {
  const targetRef = useRef();

  const createPDF = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.html(targetRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  return (
    <div>
      <button onClick={() => createPDF(targetRef, { filename: "page.pdf" })}>
        Download PDF
      </button>
      <div ref={targetRef} className="text-2xl">
        Dow University of Health Science
      </div>
    </div>
  );
}

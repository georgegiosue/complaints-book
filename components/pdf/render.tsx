import { PDFViewer } from "@react-pdf/renderer";
import { PDF } from "./template";

export const RenderPDF = () => {
  return (
    <PDFViewer>
      <PDF />
    </PDFViewer>
  );
};

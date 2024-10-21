import ReactPDF from "@react-pdf/renderer";
import { PDF } from "./template";

export const SavePDF = () => {
  ReactPDF.render(<PDF />, `${__dirname}/example.pdf`);
};

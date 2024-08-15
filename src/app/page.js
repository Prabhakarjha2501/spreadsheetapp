import Image from "next/image";
import styles from "./page.module.css";
import SpreadsheetGrid from "@/component/SpreadsheetGrid";
import Pagination from "@/component/Pagination";

export default function Home() {
  return (
       <>
        <div className="space-y-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Spreadsheet Application</h1>

      {/* Main Spreadsheet Grid */}
      <SpreadsheetGrid/>

      {/* Pagination Component */}
      <Pagination/>
    </div>
       </>
  );
}

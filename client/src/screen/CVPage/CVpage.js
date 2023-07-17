import React from "react";
import Builder from "../../dashboardComponent/Builder";
import ResumePreview from "../../dashboardComponent/ResumePreview";
import { useReactToPrint } from "react-to-print";
import { useResume } from "../../Context";
import { Link } from "react-router-dom";
import { Container, Stack, Heading } from "@chakra-ui/react";

const CVpage = () => {
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });
  return (
    <div>
      <div>
        <button className='button-9' style={{ marginBottom: "1rem" }} onClick={handlePrint}>
          Download
        </button>
      </div>
      <div className='builder-section'>
        <Builder />
      </div>
      <div className='builder-container'>
        <ResumePreview />
      </div>
    </div>
  );
};

export default CVpage;

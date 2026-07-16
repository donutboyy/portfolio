import { Stack } from "@mui/material";
import Education from "../components/Education";
import SectionHeader from "../components/SectionHeader";
import { useReveal } from "../hooks/useReveal";

function EducationSection() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <>
      <div className="reveal" ref={headerRef}>
        <SectionHeader title="Education" />
      </div>
      <Stack spacing={4}>
        <Education
          degree="Bachelor of Engineering in Computer Engineering"
          dates=""
          institution="The Hong Kong University of Science and Technology"
          institutionLink=""
          location="Hong Kong"
          logo="/images/HKUST_symbol.svg.png"
        />
        <Education
          degree="Exchange Program in Computer Science and Game Design"
          dates=""
          institution="The University of Utah"
          institutionLink=""
          location="Salt Lake City, UT, United States"
          logo="/images/university-of_utah_logo.png"
        />
      </Stack>
    </>
  );
}

export default EducationSection;

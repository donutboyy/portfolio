import { Typography, Stack } from "@mui/material";
import Education from "../components/Education";
import "./pages.css";

function EducationSection() {
  return (
    <>
      <div>
        <Typography
          variant="h2"
          align="center"
          className="section-title"
          sx={{ pb: "3vh" }}
        >
          Education
        </Typography>
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

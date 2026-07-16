import { Stack } from "@mui/material";
import Experience from "../components/Experience";
import SectionHeader from "../components/SectionHeader";
import { useReveal } from "../hooks/useReveal";

function ExperiencePage() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <>
      <div className="reveal" ref={headerRef}>
        <SectionHeader title="Experience" />
      </div>
      <Stack className="experience-timeline" spacing={0}>
        <Experience
          title="Freelance Developer"
          dates="2024 - Present"
          company=""
          companyLink=""
          location="Hong Kong"
          details={[
            "Building an AI powered whiteboard tool",
            "Building a card management website from the ground up",
            "Created key features for an educational RPG game startup including game mechanics and quests, optimized to help with high school level maths, chemistry and physics",
          ]}
        />
        <Experience
          title="Software Engineer"
          dates="2021 - 2024"
          company="Area28 Technologies"
          companyLink="https://area28.io"
          location="Hong Kong"
          details={[
            "Worked on the companies core product: A real time collaboration platform for video game developers",
            "Built a multi platform (Mac, Linux, Windows) desktop app using Python / Qt (PySide) and Rx",
            "Created Unity3D/Maya plugins (C# / Python)",
            "Created a front-end web portal/dashboard using React and MUI",
            "Created a new back-end authorization service using FastAPI and Postgres",
            "Wrote and maintained unit tests and integration tests for 90+% code coverage",
            "Used the agile development cycle in 2 week sprints within a team of around 5 engineers",
            "Apply and enforce best coding practices by committing and reviewing over 1000 commits worth of code",
            "Guide and mentor interns on software engineering practices",
          ]}
        />
        <Experience
          title="Software Engineer Intern"
          dates="2020 - 2021"
          company="Simfusion Technology Ltd."
          companyLink="https://www.simfusion.com.hk"
          location="Hong Kong"
          details={[
            "Created, tested and debugged interactive apps, games and tools using Unity",
            "Software developed for Windows, Linux, Android, iOS and HTC Vive",
          ]}
        />
      </Stack>
    </>
  );
}

export default ExperiencePage;

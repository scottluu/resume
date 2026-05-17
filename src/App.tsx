import { useState } from "react";
import WorkExperienceData from "./WorkExperienceData.json";
import { HoverLink } from "./components/HoverLink.tsx";
import { Accordion } from "./components/Accordion.tsx";
import { Chip } from "./components/Chip.tsx";

interface WorkExperienceDatum {
  employer: string;
  start_date: string;
  end_date: string;
  title: string;
  workItems: string[];
  link: string;
  techStack: string[];
}

const WorkExperienceItem = ({ datum }: { datum: WorkExperienceDatum }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className={"flex flex-col gap-2"}
    >
      <HoverLink link={datum.link} isHovering={isHovering}>
        <h3 className={"text-2xl"}>{datum.employer}</h3>
      </HoverLink>
      <div className={"flex gap-4"}>
        <Chip badgeType={"accent"}>{`👤 ${datum.title}`}</Chip>|
        <Chip
          badgeType={"accent"}
        >{`🗓️ ${datum.start_date} - ${datum.end_date}`}</Chip>
      </div>
      <div>
        {datum.workItems.map((wi) => (
          <div className={"flex gap-2 items-center"}>
            <div aria-label="status" className="status status-neutral"></div>
            <ul>{wi}</ul>
          </div>
        ))}
      </div>
      {"Tech Stack: "}

      <div className={"flex gap-1"}>
        {datum.techStack.map((ts) => (
          <Chip>{ts}</Chip>
        ))}
      </div>
    </div>
  );
};

const WorkExperienceSection = () => {
  return (
    <Accordion title={"Work Experience"}>
      <div className={"flex flex-col gap-5"}>
        {(WorkExperienceData as WorkExperienceDatum[]).map((w) => {
          return <WorkExperienceItem datum={w} />;
        })}
      </div>
    </Accordion>
  );
};

const EducationSection = () => {
  return (
    <Accordion title={"Education"}>
      <div className={"flex flex-col gap-2"}>
        <div className={"text-2xl"}>University of British Columbia</div>
        <div className={"flex gap-4"}>
          <Chip
            badgeType={"accent"}
          >{`📜 Bachelor of Science - Computer Science`}</Chip>
          |<Chip badgeType={"accent"}>{`🗓️ 2018`}</Chip>
        </div>
        3.7 GPA
      </div>
    </Accordion>
  );
};

const HobbiesSection = () => {
  const [hoveringSection, setHoveringSection] = useState<null | "photography">(
    null,
  );
  return (
    <Accordion title={"Hobbies"}>
      <div>
        <span
          onMouseEnter={() => {
            setHoveringSection("photography");
          }}
          onMouseLeave={() => {
            setHoveringSection(null);
          }}
        >
          <HoverLink
            link={"https://scottyphotography.myportfolio.com"}
            isHovering={hoveringSection === "photography"}
          >
            Photography
          </HoverLink>
        </span>
        <div>Game Dev</div>
      </div>
    </Accordion>
  );
};

function App() {
  return (
    <div className={"flex gap-4 flex-col"}>
      <div className={"flex gap-2 flex-col mt-8"}>
        <span className={"text-6xl font-bold ml-4"}>Scott Luu</span>
        <div className={"bg-red-600 min-h-2"} />
      </div>
      <WorkExperienceSection />
      <EducationSection />
      <HobbiesSection />
    </div>
  );
}

export default App;

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const printElem = useRef();
  const toast = useToast();

  // default color theme
  const [theme, setTheme] = useState("black");

  const [about, setAbout] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    picture: "",
  });

  const [educationList, setEducationList] = useState([
    {
      id: "",
      degree: "",
      school: "",
      startYr: 0,
      endYr: 0,
      grade: "",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "ReactJS",
    },
    {
      id: 3,
      name: "NodeJS",
    },
    {
      id: 4,
      name: "MongoDB",
    },
    {
      id: 5,
      name: "ExpressJS",
    },
  ]);

  const [workList, setWorkList] = useState([
    {
      id: "",
      position: "",
      company: "",
      type: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: "",
      name: "",
      description: "",
      url: "",
    },
  ]);

  const value = {
    about,
    setAbout,
    educationList,
    setEducationList,
    skills,
    setSkills,
    workList,
    setWorkList,
    projects,
    setProjects,
    printElem,
    theme,
    setTheme,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

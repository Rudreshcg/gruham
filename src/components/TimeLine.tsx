import React, { useRef, useEffect } from "react";
import "./TimeLine.css";

const projects = [
  { year: 2023, name: "Mr. Sunil Residence", location: "Ramamurthy Nagar", sqft: "1400 sqft" },
  { year: 2023, name: "Mr. Arjun Residence", location: "Banerghetta", sqft: "3500 sqft" },
  { year: 2023, name: "Highdrate", location: "Banashankari", sqft: "7000 sqft", type: "Resto-Pub" },
  { year: 2023, name: "Mr. Naveen Residence", location: "Mahalakshmi Layout", sqft: "200 sqft" },
  { year: 2022, name: "Lulu Accommodation", location: "Kumaraswamy", sqft: "36000 sqft" },
  { year: 2022, name: "Mr. Avinash Residence", location: "Kumaraswamy Layout", sqft: "2400 sqft" },
  { year: 2021, name: "Sloshed", location: "RR Nagar", sqft: "7500 sqft", type: "Resto-Pub" },
  { year: 2021, name: "Aradhya Grang", location: "Kolar", sqft: "32000 sqft", type: "Restaurant" },
  { year: 2021, name: "Mr. Gopi Residence", location: "Kanakpura", sqft: "3000 sqft" },
  { year: 2021, name: "Ms. Divya Residence", location: "Nagarabhavi", sqft: "300 sqft" },
  { year: 2021, name: "Lemon Leaf", location: "Kolar", sqft: "24000 sqft", type: "Restaurant" },
  { year: 2021, name: "Mr. Lingaraju Residence", location: "HAL", sqft: "1800 sqft" },
  { year: 2021, name: "Mr. Nishanth Residence", location: "Nagarabhavi", sqft: "3300 sqft" },
  { year: 2020, name: "Project XYZ", location: "Some Location", sqft: "5000 sqft" },
  { year: 2020, name: "ABC Restaurant", location: "City Center", sqft: "10000 sqft", type: "Restaurant" },
  { year: 2020, name: "Residence Z", location: "Outer Ring Road", sqft: "1500 sqft" },
  { year: 2019, name: "Park Plaza", location: "MG Road", sqft: "8000 sqft", type: "Hotel" },
];

const HorizontalTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (timelineRef.current) {
      const timelineLine = document.querySelector('.timeline-line') as HTMLElement;
      const timelineItems = document.querySelector('.timeline-items') as HTMLElement;
      timelineLine.style.width = `${timelineItems.scrollWidth}px`;
    }
  }, []);

  const groupProjectsByYear = () => {
    const groupedProjects: { year: number, projects: typeof projects }[] = [];

    projects.forEach((project) => {
      let yearGroup = groupedProjects.find((group) => group.year === project.year);
      if (!yearGroup) {
        yearGroup = { year: project.year, projects: [] };
        groupedProjects.push(yearGroup);
      }
      yearGroup.projects.push(project);
    });

    return groupedProjects;
  };

  return (
    <div className="timeline-wrapper">
      <button className="scroll-button left" onClick={scrollLeft}>{"<"}</button>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {groupProjectsByYear().map((yearGroup, yearIndex) => (
            <React.Fragment key={yearIndex}>
              <div className="timeline-item">
                <div className="timeline-dot year-dot">{yearGroup.year}</div>
              </div>
              {yearGroup.projects.map((project, index) => (
                <div key={`${yearGroup.year}-${index}`} className={`timeline-item ${index % 2 === 0 ? 'top' : 'bottom'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    {/* <div className="timeline-year" style={{ fontSize: "1.5rem" }}>{project.year}</div>  */}
                    <div className="timeline-info">
                      <div className="timeline-name">{project.name}</div>
                      <div className="timeline-location">{project.location}</div>
                      <div className="timeline-sqft">{project.sqft}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <button className="scroll-button right" onClick={scrollRight}>{">"}</button>
    </div>
  );
};

export default HorizontalTimeline;

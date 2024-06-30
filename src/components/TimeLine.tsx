import React from "react";
import "./TimeLine.css";

const projects = [
  { year: 2023, name: "Mr. Sunil Residence", location: "Ramamurthy Nagar", sqft: "1400 sqft" },
  { year: 2023, name: "Mr. Arjun Residence", location: "Banerghetta", sqft: "3500 sqft" },
  { year: 2023, name: "Highdrate", location: "Banashankari", sqft: "7000 sqft", type: "Resto-Pub" },
  { year: 2023, name: "Mr. Naveen Residence", location: "Mahalakshmi Layout", sqft: "200 sqft" },
  { year: 2022, name: "Lulu Accommodation", location: "", sqft: "36000 sqft" },
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

const HorizontalTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {projects.map((project, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'top' : 'bottom'}`}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-year">{project.year}</div>
            <div className="timeline-info">
              <div className="timeline-name">{project.name}</div>
              <div className="timeline-location">{project.location}</div>
              <div className="timeline-sqft">{project.sqft}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalTimeline;

import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const projects = [
  { year: 2023, name: 'Mr. Sunil Residence', location: 'Ramamurthy Nagar', sqft: '1400 sqft' },
  { year: 2023, name: 'Mr. Arjun Residence', location: 'Banerghetta', sqft: '3500 sqft' },
  { year: 2023, name: 'Highdrate', location: 'Banashankari', sqft: '7000 sqft', type: 'Resto-Pub' },
  { year: 2023, name: 'Mr. Naveen Residence', location: 'Mahalakshmi Layout', sqft: '200 sqft' },
  { year: 2022, name: 'Lulu Accommodation', location: '', sqft: '36000 sqft' },
  { year: 2022, name: 'Mr. Avinash Residence', location: 'Kumaraswamy Layout', sqft: '2400 sqft' },
  { year: 2021, name: 'Sloshed', location: 'RR Nagar', sqft: '7500 sqft', type: 'Resto-Pub' },
  { year: 2021, name: 'Aradhya Grang', location: 'Kolar', sqft: '32000 sqft', type: 'Restaurant' },
  { year: 2021, name: 'Mr. Gopi Residence', location: 'Kanakpura', sqft: '3000 sqft' },
  { year: 2021, name: 'Ms. Divya Residence', location: 'Nagarabhavi', sqft: '300 sqft' },
  { year: 2021, name: 'Lemon Leaf', location: 'Kolar', sqft: '24000 sqft', type: 'Restaurant' },
  { year: 2021, name: 'Mr. Lingaraju Residence', location: 'HAL', sqft: '1800 sqft' },
  { year: 2021, name: 'Mr. Nishanth Residence', location: 'Nagarabhavi', sqft: '3300 sqft' }
];

const HorizontalTimeline: React.FC = () => {
  const handleScroll = (scrollOffset: number) => {
    // Handle scrolling logic here if needed
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: '100%', overflowX: 'auto' }}>
      <Timeline position="alternate">
        {projects.map((project, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index !== projects.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">
                {project.year} - {project.name}
                <br />
                {project.location && `${project.location} | `}
                {project.sqft}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {/* Example buttons as per previous implementation */}
      <Button
        className="timeline-nav-button timeline-nav-button--prev"
        disabled
        onClick={() => handleScroll(-100)}
        style={{ top: '214px', left: '0' }}
      >
        {'<'} Previous
      </Button>
      <Button
        className="timeline-nav-button timeline-nav-button--next"
        onClick={() => handleScroll(100)}
        style={{ top: '214px', right: '0' }}
      >
        Next {'>'}
      </Button>
      <span className="timeline-divider" style={{ top: '214px' }}></span>
    </Box>
  );
};

export default HorizontalTimeline;

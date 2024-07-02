import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import './TimeLine.css';  // Import the CSS file

const projects = [
  {
    year: '2023',
    items: [
      { title: 'Lulu Accommodation', location: '', size: '36,000 sqft' },
      { title: 'Mr. Sunil Residence', location: 'Ramamurthy Nagar', size: '1400 sqft' },
    ],
  },
  {
    year: '2022',
    items: [
      { title: 'Mr. Arjun Residence', location: 'Banerghetta', size: '3500 sqft' },
      { title: 'Mr. Avinash Residence', location: 'Kumaraswamy Layout', size: '2400 sqft' },
      { title: 'Highdrate', location: 'Banashankari', size: 'Resto-Pub | 7000 sqft' },
      { title: 'Sloshed', location: 'RR Nagar', size: 'Resto-Pub | 7500 sqft' },
    ],
  },
  {
    year: '2021',
    items: [
      { title: 'Mr. Naveen Residence', location: 'Mahalakshmi Layout', size: '200 sqft' },
      { title: 'Aradhya Grang', location: '', size: '' },
    ],
  },
];

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: '#8d6748',
}));

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: '#8d6748',
}));

const CustomTimelineContent = styled(TimelineContent)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const TimelineComponent = () => {
  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto' }}>
      <Timeline position="right">
        {projects.map((project, projectIndex) => (
          <React.Fragment key={projectIndex}>
            <TimelineItem className="custom-timeline-item">
              <TimelineSeparator>
                <CustomTimelineDot />
                <CustomTimelineConnector />
              </TimelineSeparator>
              <CustomTimelineContent>
                <Typography variant="h6" component="span" sx={{ color: '#8d6748', fontWeight: 'bold' }}>
                  {project.year}
                </Typography>
              </CustomTimelineContent>
            </TimelineItem>
            {project.items.map((item, itemIndex) => {
              const isLastItem =
                projectIndex === projects.length - 1 && itemIndex === project.items.length - 1;
              return (
                <TimelineItem className="custom-timeline-item" key={itemIndex}>
                  <TimelineSeparator>
                    <CustomTimelineDot />
                    {!isLastItem && <CustomTimelineConnector />}
                  </TimelineSeparator>
                  <CustomTimelineContent>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography>{item.location}</Typography>
                    <Typography>{item.size}</Typography>
                  </CustomTimelineContent>
                </TimelineItem>
              );
            })}
          </React.Fragment>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelineComponent;

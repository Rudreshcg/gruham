import React, { ReactNode, FC } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import './TimeLine.css';

const projects = [
  {
    year: '2023',
    items: [
      { title: 'Lulu Accommodation', location: 'Lulu | 36,000 sqft' },
      { title: 'Mr. Sunil Residence', location: 'Ramamurthy Nagar | 1400 sqft' },
    ],
  },
  {
    year: '2022',
    items: [
      { title: 'Mr. Arjun Residence', location: 'Banerghetta | 3500 sqft' },
      { title: 'Mr. Avinash Residence', location: 'Kumaraswamy Layout | 2400 sqft' },
      { title: 'Highdrate', location: 'Banashankari | Resto-Pub | 7000 sqft' },
      { title: 'Sloshed', location: 'RR Nagar | Resto-Pub | 7500 sqft' },
    ],
  },
  {
    year: '2021',
    items: [
      { title: 'Mr. Naveen Residence', location: 'Mahalakshmi Layout | 200 sqft' },
      { title: 'Aradhya Grang', location: 'Ramamurthy Nagar | 1400 sqft' },
    ],
  },
];

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '5px',
  border: '5px solid #8d6748',
}));

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: '#a39283',
}));

const CustomTimelineContent = styled(TimelineContent)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

const CustomTimelineSeparator = styled(TimelineSeparator)(({ theme }) => ({
  marginTop: '20px',
}));

interface LazyTimelineItemProps {
  children: ReactNode;
  isLastItem: boolean;
}

const LazyTimelineItem: FC<LazyTimelineItemProps> = ({ children, isLastItem }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <TimelineItem className={`custom-timeline-item ${inView ? 'fade-in' : 'fade-out'}`} ref={ref}>
      <TimelineSeparator>
        <CustomTimelineDot />
        {!isLastItem && <CustomTimelineConnector />}
      </TimelineSeparator>
      <CustomTimelineContent>{children}</CustomTimelineContent>
    </TimelineItem>
  );
};

const TimelineComponent: FC = () => {
  return (
    <Box sx={{ maxWidth: '600px', margin: 'auto' }}>
      <Timeline position="right">
        {projects.map((project, projectIndex) => (
          <React.Fragment key={projectIndex}>
            <LazyTimelineItem isLastItem={false}>
              <Typography variant="h6" component="span" sx={{ color: '#8d6748', fontWeight: 'bold' }}>
                {project.year}
              </Typography>
            </LazyTimelineItem>
            {project.items.map((item, itemIndex) => {
              const isLastItem = projectIndex === projects.length - 1 && itemIndex === project.items.length - 1;
              return (
                <LazyTimelineItem key={itemIndex} isLastItem={isLastItem}>
                  <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography>{item.location}</Typography>
                </LazyTimelineItem>
              );
            })}
          </React.Fragment>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimelineComponent;

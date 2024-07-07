// src/Projects.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface Project {
  title: string;
  description: string;
}

const projects = {
  completed: [
    { title: 'Completed Project 1', description: 'Description of completed project 1' },
    { title: 'Completed Project 2', description: 'Description of completed project 2' },
  ],
  running: [
    { title: 'Running Project 1', description: 'Description of running project 1' },
    { title: 'Running Project 2', description: 'Description of running project 2' },
  ],
  future: [
    { title: 'Future Project 1', description: 'Description of future project 1' },
    { title: 'Future Project 2', description: 'Description of future project 2' },
  ],
};

const data = [
  { name: 'Completed Projects', value: projects.completed.length },
  { name: 'Running Projects', value: projects.running.length },
  { name: 'Future Projects', value: projects.future.length },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Projects: React.FC = () => (
  <Container>
    <Typography variant="h3" align="center" gutterBottom>Projects</Typography>
    <Box mb={4} display="flex" justifyContent="center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Box>
  </Container>
);

export default Projects;

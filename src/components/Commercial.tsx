import { Box, Grid, Typography, Card, CardContent, CardMedia, styled, Link } from "@mui/material";

const projects = [
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp",
        name: "Gruham",
        path: "/project1"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp",
        name: "Project 2",
        path: "/project2"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp",
        name: "Project 3",
        path: "/project3"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp",
        name: "Project 4",
        path: "/project4"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp",
        name: "Project 5",
        path: "/project5"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp",
        name: "Project 6",
        path: "/project6"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/best-architecture-firm-in-bangalore.jpg.webp",
        name: "Project 7",
        path: "/project7"
    },
    {
        image: "https://www.ashwinarchitects.com/3/wp-content/uploads/2023/03/leading-residential-architects-in-bangalore.jpg.webp",
        name: "Project 8",
        path: "/project8"
    }
];

const CustomCardContent = styled(CardContent)(({ theme }) => ({
    paddingBottom: '10px !important',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'white',
}));

const Commercial: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', py: 4 }}>
            <Typography variant="h5" sx={{ py: 2, textAlign: 'center' }}>
                PROJECTS
            </Typography>
            <Grid container spacing={2} sx={{ px: 2 }}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>

                        <Link href={project.path} color="inherit" underline="none">
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={project.image}
                                    alt={`Project ${index + 1} image`}
                                    style={{ height: 'auto', width: '100%' }}
                                />
                                <CustomCardContent>
                                    <Typography variant="h6">
                                        {project.name}
                                    </Typography>
                                </CustomCardContent>

                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Commercial;

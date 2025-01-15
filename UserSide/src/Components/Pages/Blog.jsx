import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  CardActions,
  InputAdornment,
  TextField,
  Divider
} from '@mui/material';
import { Search as SearchIcon, AccessTime, Bookmark } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Signs Your AC Needs Immediate Repair",
      image: "https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWlyJTIwY29uZGl0aW9ufGVufDB8fDB8fHww",
      category: "Maintenance",
      date: "June 15, 2024",
      readTime: "5 min read",
      excerpt: "Learn the critical warning signs that indicate your air conditioning system needs professional attention...",
      featured: true
    },
    {
      title: "How to Reduce Your AC Energy Bills This Summer",
      image: "https://plus.unsplash.com/premium_photo-1714875083906-e9771ecea92f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Energy Saving",
      date: "June 12, 2024",
      readTime: "4 min read",
      excerpt: "Practical tips and tricks to keep your AC running efficiently while saving money on energy costs..."
    },
    {
      title: "The Ultimate AC Maintenance Checklist",
      image: "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "DIY",
      date: "June 10, 2024",
      readTime: "100 min read",
      excerpt: "A comprehensive guide to maintaining your AC unit throughout the year for optimal performance..."
    },
    {
      title: "Common AC Problems and Their Solutions",
      image: "https://images.unsplash.com/photo-1563623700465-1265fad258f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Troubleshooting",
      date: "June 8, 2024",
      readTime: "6 min read",
      excerpt: "Discover solutions to common AC issues that you might encounter and when to call a professional..."
    },
    {
      title: "Choosing the Right AC for Your Home",
      image: "https://images.unsplash.com/photo-1563623700465-1265fad258f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Buying Guide",
      date: "June 15 , 2024",
      readTime: "8 min read",
      excerpt: "A complete guide to selecting the perfect air conditioning system for your home's needs..."
    },
    {
      title: "Smart AC Features Worth Investing In",
      image: "https://images.unsplash.com/photo-1552853160-8ec65527b252?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFpciUyMGNvbmRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Technology",
      date: "June 1, 2024",
      readTime: "5 min read",
      excerpt: "Explore the latest smart AC technologies that can enhance comfort and efficiency..."
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            AC Repair Blog
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Expert tips and insights for AC maintenance and repair
          </Typography>
          
          {/* Search Bar */}
          <TextField
            fullWidth
            placeholder="Search articles..."
            sx={{ maxWidth: 600, mb: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <Card key={index} sx={{ mb: 6 }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="400"
                  image={post.image}
                  alt={post.title}
                  sx={{ objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Chip label="Featured" color="primary" sx={{ mb: 2 }} />
                  <Typography variant="h4" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTime sx={{ mr: 1 }} color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                  <Button variant="contained" size="large">
                    Read More
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}

        <Divider sx={{ my: 6 }} />

        {/* Regular Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Chip label={post.category} size="small" sx={{ mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTime sx={{ fontSize: 16, mr: 0.5 }} color="action" />
                      <Typography variant="caption" color="text.secondary">
                        {post.readTime}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2 }}>
                  <Button size="small">Read More</Button>
                  <Button size="small" startIcon={<Bookmark />}>Save</Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="outlined" size="large">
            Load More Articles
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Blog;

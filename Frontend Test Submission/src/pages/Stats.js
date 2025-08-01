import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { getURLs } from '../data/store';

export default function Stats() {
  const urls = getURLs();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      {urls.map((url, i) => (
        <Card key={i} sx={{ mb: 2 }}>
          <CardContent>
            <Typography><strong>Short URL:</strong> http://localhost:3000/{url.shortcode}</Typography>
            <Typography><strong>Created:</strong> {url.createdAt}</Typography>
            <Typography><strong>Expires:</strong> {url.expiresAt}</Typography>
            <Typography><strong>Clicks:</strong> {url.clicks}</Typography>
            <Typography><strong>Click History:</strong></Typography>
            {url.history?.map((h, idx) => (
              <Typography key={idx} sx={{ ml: 2 }}>- {h.time} from {h.source} ({h.location})</Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

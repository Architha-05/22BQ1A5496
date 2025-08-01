import { Card, CardContent, Typography, Link } from '@mui/material';
import React from 'react';

export default function URLCard({ entry }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography><strong>Original:</strong> {entry.original}</Typography>
        <Typography><strong>Short URL:</strong> 
          <Link href={`/${entry.shortcode}`} target="_blank" rel="noreferrer"> http://localhost:3000/{entry.shortcode}</Link>
        </Typography>
        <Typography><strong>Expires At:</strong> {entry.expiresAt}</Typography>
      </CardContent>
    </Card>
  );
}

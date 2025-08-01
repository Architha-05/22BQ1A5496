import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import URLInputForm from '../components/URLInputForm';
import URLCard from '../components/URLCard';
import { logAction } from '../middleware/logger';

export default function Shortener() {
  const [entries, setEntries] = useState([]);

  const handleShorten = (entry) => {
    logAction("Shortened URL", entry);
    setEntries((prev) => [...prev, entry]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <URLInputForm onSubmit={handleShorten} />
      <Box mt={4}>
        {entries.map((entry, i) => (
          <URLCard key={i} entry={entry} />
        ))}
      </Box>
    </Container>
  );
}

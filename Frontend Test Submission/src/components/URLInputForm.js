import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { isValidURL, isAlphanumeric } from '../utils/validators';
import { saveURL } from '../data/store';

export default function URLInputForm({ onSubmit }) {
  const [fields, setFields] = useState([{ url: '', shortcode: '', validity: '' }]);

  const handleChange = (index, field, value) => {
    const updated = [...fields];
    updated[index][field] = value;
    setFields(updated);
  };

  const addField = () => {
    if (fields.length < 5) setFields([...fields, { url: '', shortcode: '', validity: '' }]);
  };

  const handleSubmit = () => {
    const validEntries = [];

    for (const field of fields) {
      if (!isValidURL(field.url)) {
        alert('Invalid URL!');
        return;
      }

      const short = field.shortcode || Math.random().toString(36).substring(2, 8);
      if (!isAlphanumeric(short)) {
        alert('Shortcode must be alphanumeric and 3-10 chars!');
        return;
      }

      const existing = JSON.parse(localStorage.getItem('urls') || '[]');
      if (existing.some((e) => e.shortcode === short)) {
        alert(`Shortcode ${short} already exists!`);
        return;
      }

      const createdAt = new Date().toISOString();
      const validity = parseInt(field.validity) || 30;
      const expiresAt = new Date(Date.now() + validity * 60000).toISOString();

      const entry = {
        original: field.url,
        shortcode: short,
        createdAt,
        expiresAt,
        clicks: 0,
        history: [],
      };

      saveURL(entry);
      validEntries.push(entry);
    }

    onSubmit && validEntries.forEach(onSubmit);
  };

  return (
    <Box>
      {fields.map((f, i) => (
        <Grid key={i} container spacing={2} mt={1}>
          <Grid item xs={12} sm={5}>
            <TextField label="Original URL" fullWidth value={f.url} onChange={(e) => handleChange(i, 'url', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Shortcode (optional)" fullWidth value={f.shortcode} onChange={(e) => handleChange(i, 'shortcode', e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField label="Validity (min)" type="number" fullWidth value={f.validity} onChange={(e) => handleChange(i, 'validity', e.target.value)} />
          </Grid>
        </Grid>
      ))}
      <Box mt={2}>
        <Button variant="outlined" onClick={addField} disabled={fields.length >= 5}>Add URL</Button>
        <Button variant="contained" sx={{ ml: 2 }} onClick={handleSubmit}>Shorten</Button>
      </Box>
    </Box>
  );
}

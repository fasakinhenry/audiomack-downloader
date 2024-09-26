import express from 'express';
import cors from 'cors';
import { scrapeAudiomack } from './audiomackScraper.js';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle Audiomack scraping
app.post('/api/scrape', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "No URL provided" });
  }

  // Call the scraping function
  const data = await scrapeAudiomack(url);

  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: "Failed to scrape Audiomack" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import axios from 'axios';
import * as cheerio from 'cheerio'; 

// Function to scrape the Audiomack song page
export async function scrapeAudiomack(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const songTitle = $('meta[property="og:title"]').attr('content');
      const downloadUrl = $('#downloadButton').attr('href');
  
      return { songTitle, downloadUrl };
    } catch (error) {
      console.error("Error scraping Audiomack:", error);
      return null;
    }
}

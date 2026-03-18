export default async function handler(req, res) {
  const { query } = req.query;
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "Search failed" });
  }
}
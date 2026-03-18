export default async function handler(req, res) {
  const { city } = req.query;
  const API_KEY = process.env.WEATHER_API_KEY;
  const BASE = "https://api.weatherapi.com/v1";

  const today = new Date().toISOString().split("T")[0];

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yDate = yesterday.toISOString().split("T")[0];

  try {
    // 🔥 Always required (main data)
    const current = await fetch(
      `${BASE}/current.json?key=${API_KEY}&q=${city}&aqi=yes`
    ).then(r => r.json());

    // ⚡ Optional APIs (safe)
    const forecast = await fetch(
      `${BASE}/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    )
      .then(r => r.json())
      .catch(() => null);

    const astronomy = await fetch(
      `${BASE}/astronomy.json?key=${API_KEY}&q=${city}&dt=${today}`
    )
      .then(r => r.json())
      .catch(() => null);

    const history = await fetch(
      `${BASE}/history.json?key=${API_KEY}&q=${city}&dt=${yDate}`
    )
      .then(r => r.json())
      .catch(() => null);

    res.status(200).json({
      current,
      forecast,
      astronomy,
      history,
    });

  } catch (err) {
    res.status(500).json({ error: "Main weather fetch failed" });
  }
}
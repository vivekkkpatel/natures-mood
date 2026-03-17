import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "../features/weather/WeatherPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
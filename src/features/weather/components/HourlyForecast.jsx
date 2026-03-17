const HourlyForecast = ({ forecast }) => {
  if (!forecast) return null;

  const hours = forecast.forecastday[0].hour;

  return (
    <div className="mt-10 w-full max-w-5xl mx-auto">
      <h2 className="font-Outfit text-2xl font-semibold mb-4 text-white">
        Hourly Forecast
      </h2>

      <div
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x">
        {hours.map((hour) => {
          const time = new Date(hour.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={hour.time_epoch}
              className="
                font-Outfit
                min-w-[90px]
                snap-start
                bg-white/10
                backdrop-blur-xl
                rounded-xl
                p-3
                text-center
                text-white
              "
            >
              <p className="text-sm opacity-80">{time}</p>

              <img
                src={hour.condition.icon}
                alt={hour.condition.text}
                className="mx-auto my-2"
              />

              <p className="font-Manrope font-semibold">{hour.temp_c}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;

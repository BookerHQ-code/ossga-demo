import { SunIcon } from '@heroicons/react/24/outline';
import weather from '../../data/weather.json';

const WeatherBanner = () => {
  const { current, forecast } = weather;
  const thursday = forecast.find((d) => d.day === 'Thursday');

  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1.5 shadow-sm inline-flex flex-col text-sm">
      <div className="flex items-center gap-2">
        <SunIcon className="h-5 w-5 flex-shrink-0" />
        <span className="font-semibold whitespace-nowrap">
          {current.condition}, {current.temperature}&deg;C
        </span>
        <span className="text-blue-100 whitespace-nowrap">
          Wind {current.windSpeed} km/h
        </span>
      </div>
      {thursday && (
        <p className="text-blue-100 text-xs mt-0.5 pl-7">
          {thursday.day}: {thursday.condition} ({thursday.precipitation}mm)
        </p>
      )}
    </div>
  );
};

export default WeatherBanner;

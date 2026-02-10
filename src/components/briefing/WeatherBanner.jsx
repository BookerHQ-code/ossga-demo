import {
  SunIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';
import weather from '../../data/weather.json';

const WeatherBanner = () => {
  const { current, operationalGuidance, forecast } = weather;
  const thursday = forecast.find((d) => d.day === 'Thursday');

  return (
    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 shadow-sm">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <SunIcon className="h-12 w-12 flex-shrink-0" />
          <div>
            <p className="text-2xl font-bold">
              {current.condition}, {current.temperature}&deg;C
            </p>
            <p className="text-blue-100 text-sm">
              Feels like {current.feelsLike}&deg;C &middot; Wind {current.windSpeed} km/h{' '}
              {current.windDirection}
            </p>
          </div>
        </div>
        {thursday && (
          <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2 text-sm">
            <CloudIcon className="h-5 w-5" />
            <span>
              {thursday.day}: {thursday.condition} ({thursday.precipitation}mm)
            </span>
          </div>
        )}
      </div>
      <p className="mt-4 text-sm text-blue-50 leading-relaxed">{operationalGuidance}</p>
    </div>
  );
};

export default WeatherBanner;

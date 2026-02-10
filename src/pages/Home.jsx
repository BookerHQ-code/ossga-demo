import { ChartBarIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const features = [
    {
      name: 'Fast Development',
      description: 'Lightning-fast development with Vite and hot module replacement.',
      icon: RocketLaunchIcon,
    },
    {
      name: 'Modern Tooling',
      description: 'Built with React 18, Tailwind CSS, and modern JavaScript.',
      icon: CogIcon,
    },
    {
      name: 'Production Ready',
      description: 'Optimized builds with code splitting and tree shaking.',
      icon: ChartBarIcon,
    },
  ];

  return (
    <div className='space-y-12'>
      {/* Hero Section */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 sm:text-6xl'>
          Welcome to <span className='text-blue-600'>Vite React</span>
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto'>
          A modern React application template built with Vite, Tailwind CSS, and best practices for
          rapid development.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-outline'>Learn More</button>
        </div>
      </div>

      {/* Features Section */}
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Everything you need to build modern apps
        </h2>
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div key={feature.name} className='card hover:shadow-xl transition-shadow'>
              <div>
                <feature.icon className='h-8 w-8 text-blue-600' />
                <h3 className='mt-4 text-lg font-semibold text-gray-900'>{feature.name}</h3>
                <p className='mt-2 text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

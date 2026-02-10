const About = () => {
  return (
    <div className='space-y-8'>
      <div className='card max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>About This Project</h1>

        <div className='prose prose-lg'>
          <p>This project was created using our custom Vite React template that includes:</p>

          <ul>
            <li>
              <strong>Vite</strong> - Next generation frontend tooling
            </li>
            <li>
              <strong>React 18</strong> - Latest version with concurrent features
            </li>
            <li>
              <strong>Tailwind CSS</strong> - Utility-first CSS framework
            </li>
            <li>
              <strong>React Router</strong> - Declarative routing for React
            </li>
            <li>
              <strong>Heroicons</strong> - Beautiful hand-crafted SVG icons
            </li>
            <li>
              <strong>ESLint & Prettier</strong> - Code quality and formatting
            </li>
            <li>
              <strong>Husky & lint-staged</strong> - Git hooks for quality assurance
            </li>
            <li>
              <strong>Netlify Dev</strong> - Local development with Netlify functions
            </li>
          </ul>

          <p>
            The template is configured with modern best practices and is ready for deployment to
            Netlify with full development server support via <code>netlify dev</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

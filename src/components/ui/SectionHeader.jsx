const SectionHeader = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      {Icon && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon className="h-4 w-4 text-blue-600" />
        </div>
      )}
      <div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;

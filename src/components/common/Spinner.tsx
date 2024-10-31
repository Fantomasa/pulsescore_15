const Spinner = () => {
  return (
    <svg className="animate-spin h-8 w-8 text-gradient" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25 text-gray-300" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="url(#gradient)" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4F46E5", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Spinner;

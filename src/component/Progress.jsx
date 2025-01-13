function Progress({ value, max, className, indicatorClassName }) {
    const percentage = Math.min((value / max) * 100); // Limitar al 100%
  
    return (
      <div className="relative pt-1">
        <div className={`overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 ${className}`}>
          <div
            style={{ width: `${percentage}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${indicatorClassName}`}
          />
        </div>
      </div>
    );
  }
  
export default Progress;
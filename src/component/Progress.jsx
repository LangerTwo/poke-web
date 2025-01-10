function Progress({ value, max, className, indicatorClassName }) {
    const percentage = Math.min((value / max) * 100, 120); // Limitar al 100%
  
    return (
      <div className={`w-full bg-gray-200 rounded-full ${className}`}>
        <div
          className={`h-full rounded-full ${indicatorClassName}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  }
  
export default Progress;
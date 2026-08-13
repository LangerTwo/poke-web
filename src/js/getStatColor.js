export const getStatColor = (value) => {
  if (value >= 100) return "bg-green-500";
  if (value > 80) return "bg-green-400";
  if (value > 60) return "bg-yellow-500";
  if (value > 40) return "bg-orange-500";
  return "bg-red-500";
};

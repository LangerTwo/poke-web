import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = ({ to, text = "← Regresar" }) => {
  return (
    <Link to={to} className="text-green-500 hover:underline">
      {text}
    </Link>
  );
};

export default BackLink;

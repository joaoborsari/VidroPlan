import React from 'react';

import './styles.css';

interface TextProps {
  title: string;
  description: string;
}

export const TextInfo:React.FC<TextProps> = (props) => {
  return(
    <div className="text-info">
      <h1>{props.title}</h1>
      <hr className="text-divider" />
      <p>{props.description}</p>
    </div>
  );
}
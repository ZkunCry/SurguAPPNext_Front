import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string; // Связывает метку с полем ввода
  className?: string; // Дополнительные классы для стилизации
}

const Label: React.FC<LabelProps> = ({ htmlFor, className, children }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;

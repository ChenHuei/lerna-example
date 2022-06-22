import React, { PropsWithChildren } from "react";

interface ButtonProps {
  textColor: string;
  onClick: () => void;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { textColor, children, onClick } = props;

  return (
    <button style={{ color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

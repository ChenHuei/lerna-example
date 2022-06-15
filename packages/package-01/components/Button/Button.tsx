import React, { PropsWithChildren } from "react";

type ButtonProps = {
  textColor: string;
  onClick: () => void;
} & PropsWithChildren;

const Button = (props: ButtonProps) => {
  const { textColor, children, onClick } = props;

  return (
    <button style={{ color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

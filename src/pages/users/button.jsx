import React from "react";

const Button = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const buttonClicked = () => {
    window.open(props.data.link);
  };

  return (
    props.data.link && (
      <span>
        <span>{cellValue}</span>&nbsp;
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-full"
          onClick={() => buttonClicked()}
        >
          Voir la facture
        </button>
      </span>
    )
  );
};

export default Button;

import React from 'react'

const CustomButton = ({ buttonText, onClick, Icon, textColor, bgColor}) => {
  return (
    <button className={`m-2 text-sm text-${textColor} bg-${bgColor} border p-2 flex items-center rounded-[10px]`} onClick={onClick}>
      {Icon && <Icon className="mr-0.5" />}
      {buttonText}
    </button>
  );
};

export default CustomButton;
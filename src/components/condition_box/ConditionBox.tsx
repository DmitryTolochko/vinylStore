import { FC } from "react";

const ConditionBox : FC<{
    image: string | undefined,
    title: string | undefined,
    text: string | undefined,
}> = ({ image, title, text }) => {
    return (
      <div className="cond-card">
        <img alt='image' src={image}></img>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  };
  
  export default ConditionBox;
  
import React from "react";

export default function PropsEx(props) {
  return (
    <div className="propsEx">
      <h1>
        {props.name} {props.lastname} {props.text}
      </h1>
    </div>
  );
}

import React from "react";

interface CalloutProps {
  children: any
}
const Callout: React.FC<CalloutProps> = (props) => {
  return (
    <div className="callout">{props.children}</div>
  );
};

export default Callout;

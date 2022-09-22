import React, { useState } from "react";

export function Tabs({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = useState(childrenArray[0].key);
  const newChildren = childrenArray.map((child) => {
    return React.cloneElement(child, { selected: child.key === current });
  }); // cloneElement sert surtout àparcourir les enfant et les modifier ainsi que les propritées et les injecter

  return (
    <div>
      <nav>
        {childrenArray.map((child) => (
          <button onClick={() => setCurrent(child.key)} key={child.key}>
            {child.props.title}
          </button>
        ))}
      </nav>
      <section>{newChildren}</section>
    </div>
  );
}

export function Tab({ children, selected }) {
  return <div hidden={!selected}>{children}</div>;
}

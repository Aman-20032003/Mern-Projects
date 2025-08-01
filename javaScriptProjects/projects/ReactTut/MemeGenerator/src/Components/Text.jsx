import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const nodeRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("Double Click To Edit Text");

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        {edit ? (
          <input
            value={val}
            onDoubleClick={() => setEdit(false)}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <h1 onDoubleClick={() => setEdit(true)}>{val}</h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;

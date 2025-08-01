import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../Components/Text";
import { toJpeg } from "html-to-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef(null);

  const addText = () => {
    setCount(count + 1);
  };

  const handleExport = async () => {
    if (memeRef.current === null) return;

    try {
      const dataUrl = await toJpeg(memeRef.current, { quality: 0.95 });
      const link = document.createElement("a");
      link.download = "meme.jpeg";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Could not export JPEG", error);
    }
  };

  return (
    <div>
      <div
        ref={memeRef}
        style={{ width: "500px", border: "1px solid black" ,backgroundColor:"white" }}
        className="meme mt-5 mb-5"
      >
        <img src={params.get("url")} width="250px" alt="Meme base" />
        {
             Array(count).fill(0).map(e=><Text/>)
        }
      </div>

      <button className="btn btn-primary me-2"  onClick={addText}>Add Text</button>
      <button className="btn btn-success"  onClick={handleExport}>Save</button>
    </div>
  );
};

export default EditPage;

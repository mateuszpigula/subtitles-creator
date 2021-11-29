import React, { useRef, useEffect } from "react";

export function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileInput = (e) => {
    if (!videoRef.current) {
      return;
    }

    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);

    videoRef.current.src = fileURL;
  };

  return (
    <div className="padding">
      <div>Hello world!</div>
      <div>Fast full page reload from esbuild</div>
      <input type="file" accept="video/*" onChange={handleFileInput} />
      <video controls autoPlay ref={videoRef} width={500} />
    </div>
  );
}

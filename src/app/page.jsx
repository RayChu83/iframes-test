"use client";
import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="outline p-2"
        placeholder="what a beautiful input"
      />
      <p>This is a iframe below, test me by providing url in input above 🤗</p>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="600"
        height="400"
        className="bg-gray-100 p-6"
        src={input}
      ></iframe>
    </div>
  );
}

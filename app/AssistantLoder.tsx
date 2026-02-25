"use client";

import { useEffect } from "react";

export default function AssistantLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assistant.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
import React from "react";
import { useState } from "react";

export const ControlledForm = () => {
  const [input, setInput] = useState({});

  return <form onSubmit={handleSubmit} className="form"></form>;
};

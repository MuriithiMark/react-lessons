import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const UseRefComponent = ({ docRef }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const buttonRef = useRef();

  const handleClick = () => {
    buttonRef.current.innerHTML = '<span>Hello World</span>'
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={usernameRef} />
      <input type="text" ref={passwordRef} />
      <button onClick={handleClick} ref={buttonRef}>
        Scroll To Top
      </button>
    </>
  );
};

export default UseRefComponent;

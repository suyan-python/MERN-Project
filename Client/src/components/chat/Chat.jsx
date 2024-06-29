import React from "react";
import { useEffect } from "react";

const NavigateExternal = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, []);
  return null;
};

export default function Chat() {
  return (
    <>
      <NavigateExternal to="http://localhost:3001/" />
    </>
  );
}

import React, { useEffect } from "react";

const NavigateExternal = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, []);
  return null;
};

export default function FileTransfer() {
  return (
    <>
      <NavigateExternal to="http://localhost:3001/" />
    </>
  );
}

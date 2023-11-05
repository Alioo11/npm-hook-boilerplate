import React from "react";

const useTest = () => {
  React.useEffect(() => {
    console.log("use test");
  }, []);
};

export default useTest;

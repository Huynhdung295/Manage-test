/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

function PaginationHook(array, pageSize) {
  const [newArray, setNewArray] = React.useState([]);
  const chunkArray = (myArray, size) => {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, size));
    }
    return results;
  };
  const arrayChunk = [...array];
  useEffect(() => {
    setNewArray(chunkArray(arrayChunk, pageSize));
  }, [array, pageSize]);

  return { newArray };
}

export default PaginationHook;

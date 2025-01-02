import React, { useEffect, useState } from "react";

const UseEffect_Task10 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [retrying, setRetrying] = useState(true);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError("");
        setRetrying(false);
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    if (!retrying) return;

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [retrying]);

  return (
    <div>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>{error ? `Error: ${error}` : "Loading..."}</p>
      )}
      <button onClick={() => setRetrying(!retrying)}>
        {retrying ? "Stop Retry" : "Resume Retry"}
      </button>
    </div>
  );
};

export default UseEffect_Task10;

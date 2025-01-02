import React, { useEffect, useState } from "react";

const UseEffect_Task8 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "lightblue",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>Notification: You have a new message!</p>
          <button onClick={() => setVisible(false)}>Dismiss</button>
        </div>
      )}
    </div>
  );
};

export default UseEffect_Task8;

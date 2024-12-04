import React, { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);
  console.log(error !== null && error.errors);
  const errorMessage = useCallback(() => {
    if (!error || !error.errors) return [];
    return Object.keys(error.errors).map((key) => {
      const msg = error.errors[key].join(", ");
      return `${key} - ${msg}`;
    });
  }, [error]);

  const messages = errorMessage();

  return (
    error !== null && (
      <div>
        {messages.map((msg, idx) => (
          <div key={idx} class="alert alert-danger m-1 p-1" role="alert">
            {msg}
          </div>
        ))}
      </div>
    )
  );
}

export default ValidationError;

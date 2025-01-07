import React, { useState } from "react";
import Create from "../ui/create";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <Create
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
      />
    </div>
  );
};

export default CreateArticle;

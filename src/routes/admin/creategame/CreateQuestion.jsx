import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
const initialQuestion = ["hello"];
const CreateQuestion = () => {
  const [listQuestion, setListQuestion] = useState(initialQuestion);
  return (
    <div>
      <div>
        {listQuestion.map((item, index) => {
          return (
            <div className="flex justify-around items-center" key={index}>
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
      <Button className="my-8">Add Question</Button>
    </div>
  );
};
export default CreateQuestion;

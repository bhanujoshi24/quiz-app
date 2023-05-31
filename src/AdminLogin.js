import React, { useState } from "react";
import axios from "axios";
import { HeaderNav } from "./HeaderNav";
import { useLocation } from "react-router-dom";

const AdminLogin = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctSolution, setCorrectSolution] = useState("");
  const [technology, setTechnology] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const username = location.state?.username;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = {
      questionText: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correctOption: parseInt(correctSolution),
      technology: technology,
    };

    try {
      await axios.post(
        "http://localhost:8080/api/questions/addquestion",
        newQuestion
      );
      // Handle success, e.g., display a success message or update the question list
      console.log("Question added successfully");
      setQuestion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setTechnology("");
      setCorrectSolution("");
    } catch (error) {
      setError("Failed to add question");
    }
  };

  return (
    <div>
      <HeaderNav username={username} />
      <div className="container">
        <h2 className="mt-4 mb-3">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Question:</label>
            <input
              type="text"
              className="form-control"
              value={question}
              placeholder="Enter Question"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Options:</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Option 1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Option 2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Option 3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Option 4"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Correct Solution:</label>
            <select
              className="form-control"
              value={correctSolution}
              onChange={(e) => setCorrectSolution(e.target.value)}
            >
              <option value="">Select Correct Solution</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
          <div className="form-group">
            <label>Technology:</label>
            <input
              type="text"
              className="form-control"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Question
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

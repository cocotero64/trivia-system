const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://triviaadmin:trivia123@cluster0.kfpnwdh.mongodb.net/?appName=Cluster0");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

const app = express();

app.use(cors());
app.use(express.json());

const questions = [
  {
    id: 1,
    question: "Which country produces most K-dramas?",
    options: ["Japan", "South Korea", "China", "Thailand"],
    answer: "South Korea"
  },
  {
    id: 2,
    question: "What does K-drama mean?",
    options: ["Korean Drama", "King Drama", "Kawaii Drama", "Karma Drama"],
    answer: "Korean Drama"
  }
];

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.post("/answer", (req, res) => {
  const { questionId, answer } = req.body;

  const question = questions.find(q => q.id === questionId);

  if (!question) {
    return res.status(404).json({ message: "Question not found" });
  }

  const correct = question.answer === answer;

  res.json({
    correct: correct
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
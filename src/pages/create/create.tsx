import { map } from "@firebase/util";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import "./create.scss";

const Create = () => {
  const [questions, setQuestions] = useState<any>([]);

  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState(0);
  const [answers, setAnswers] = useState<any>([]);
  const [correct_answer, setCorrect_Answer] = useState("");

  const setCorrectAnswer = (answer: any) => {
    answer.preventDefault();
    setCorrect_Answer(answer);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        name: title,
        answers: answers,
        correct_answer: correct_answer,
        timeLimit: 0,
      },
    ]);
  };

  const addToDatabase = () => {
    console.log(questions);
  };

  useEffect(() => {
    console.log(questions);
    console.log(answers);
    console.log(correct_answer);
  }, [questions, answers]);

  return (
    <div className="create-container">
      <form>
        <div className="side-menu">
          <button
            type="submit"
            onSubmit={addToDatabase}
            className="side-menu-item-publish"
          >
            Publish
          </button>
          <button type="submit" className="side-menu-item-save">
            Save
          </button>
          <button
            type="submit"
            onSubmit={addQuestion}
            className="side-menu-item-addquestion"
          >
            Add Question
          </button>

          {questions.map((question: any) => {
            return (
              <div className="question-container">
                <div className="question-title">{question.title}</div>
                <div className="question-timelimit">{question.timeLimit}</div>
                <div className="question-answers">
                  <div className="question-answer"></div>
                  <div className="question-answer"></div>
                  <div className="question-answer"></div>
                  <div className="question-answer"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="time-limit-container">
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Time Limit <AccessAlarmIcon />
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeLimit}
              label="Time Limit"
              onChange={(e) => setTimeLimit(e.target.value as number)}
            >
              <MenuItem value={10}>10 seconds</MenuItem>
              <MenuItem value={20}>20 seconds</MenuItem>
              <MenuItem value={30}>30 seconds</MenuItem>
              <MenuItem value={40}>40 seconds</MenuItem>
              <MenuItem value={50}>50 seconds</MenuItem>
              <MenuItem value={60}>60 seconds</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="create-question">
          <input
            type="text"
            placeholder="Type your question here"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="create-answers">
          <div className="create-answer">
            <button
              type="button"
              onClick={(answer) => setCorrectAnswer(answers[0])}
            >
              <input
                type="text"
                placeholder="Answer 1"
                onChange={(e) =>
                  setAnswers({ ...answers, answer1: e.target.value })
                }
                required
              />
            </button>
          </div>
          <div className="create-answer">
            <button
              type="button"
              onClick={(answer) => setCorrectAnswer(answers[1])}
            >
              <input
                type="text"
                placeholder="Answer 2"
                onChange={(e) =>
                  setAnswers({ ...answers, answer2: e.target.value })
                }
                required
              />
            </button>
          </div>
          <div className="create-answer">
            <button
              type="button"
              onClick={(answer) => setCorrectAnswer(answers[2])}
            >
              <input
                type="text"
                placeholder="Answer 3"
                onChange={(e) =>
                  setAnswers({ ...answers, answer3: e.target.value })
                }
              />
            </button>
          </div>
          <div className="create-answer">
            <button
              type="button"
              onClick={(answer) => setCorrectAnswer(answers[3])}
            >
              <input
                type="text"
                placeholder="Answer 4"
                onChange={(e) =>
                  setAnswers({ ...answers, answer4: e.target.value })
                }
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form, TextArea, Button } from "semantic-ui-react";

const GenerateTitle = () => {
  const [inputText, setInputText] = useState("");
  const [titles, setTitles] = useState([]);
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    organization: "org-ovUyAs1bwLsCHxsYIbvaA7XI",
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const getOpenAIResponse = () => {
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt:
          "You are a blogger who takes on the persona of a cheerful and spirited lady \
          to recommend users places to go in their desired travel destinations. \
          Your job is to surface three places to visit. \nUser:" +
          inputText +
          "\n Blog Post:",
        max_tokens: 256,
        temperature: 0.7,
        n: 100, // generate 100 titles
      })
      .then((response) => {
        const newTitles = response.data.choices.map((choice) => choice.text);
        setTitles(newTitles);
      });
  };

  return (
    <div>
      <div className="app-header">
        <h2 className="header">Trip Candy's Blog Generator</h2>
      </div>

      <div className="app-body">
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder="Type Desired Location.."
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button color="blue" size="large" onClick={getOpenAIResponse}>
              Generate Titles
            </Button>
          </Form>

          {titles.length > 0 && (
            <div>
              <h3>Generated Titles:</h3>
              <ul>
                {titles.map((title) => (
                  <li key={title}>
                    <Link to={`/articles/${encodeURIComponent(title)}`}>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateTitle;

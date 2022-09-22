import nock from 'nock';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';
import notSubmittedStub from './stubs/not-submitted.json';
import submittedStub from './stubs/submitted.json';
import questionsStub from './stubs/questions.json';

const corsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-credentials': 'true'
};

afterEach(() => {
  nock.cleanAll();
})

describe('not submitted before', () => {
  beforeEach(() => {
    nock('https://fhc-api.onrender.com')
      .defaultReplyHeaders(corsHeaders)
      .get('/submissions?user=null')
      .reply(404, notSubmittedStub)
      .get('/questions?user=null')
      .reply(200, questionsStub)
      .post('/submissions?user=null')
      .reply(200, submittedStub);
  });

  test('gets redirected to the wizard page', async () => {
    render(<App />);
    const startTestButton = await (screen.findByText(/Start the test/i));
    expect(startTestButton).toBeInTheDocument();
  });

  describe('submits the wizard', () => {
    const checkQuestionAndAdvance = async(q, score, buttonText = 'Next') => {
      const text = await (screen.findByText(q.text));
      expect(text).toBeInTheDocument();

      const scoreInput = screen.getByTestId(`score-option-${score}`);
      fireEvent.click(scoreInput);

      const nextButton = await (screen.findByText(buttonText));
      fireEvent.click(nextButton);
    };

    test('sees the expected questions, submits and gets to see results', async () => {
      render(<App />);
      const startTestButton = await (screen.findByText(/Start the test/i));
      fireEvent.click(startTestButton);

      const [q1, q2, q3, q4] = questionsStub.questions;
      await checkQuestionAndAdvance(q1, 1);
      await checkQuestionAndAdvance(q2, 2);
      await checkQuestionAndAdvance(q3, 2);
      await checkQuestionAndAdvance(q4, 4, 'Finish');

      const seeResultsButton = await (screen.findByText(/See results/i));
      expect(seeResultsButton).toBeInTheDocument();
    });
  });
});

describe('submitted before', () => {
  beforeAll(() => {
    nock('https://fhc-api.onrender.com')
      .defaultReplyHeaders(corsHeaders)
      .get('/submissions?user=null')
      .reply(200, submittedStub);
  });

  test('gets redirected to the see results page', async () => {
    render(<App />);
    const seeResultsButton = await (screen.findByText(/See results/i));
    expect(seeResultsButton).toBeInTheDocument();
  });
});

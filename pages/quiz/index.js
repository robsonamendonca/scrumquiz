/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}
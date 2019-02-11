<template>
  <div id="app">
    <div class="content-container" >
      <div v-if="currentQuestion">
        <p class="question-letter">{{currentQuestion.question.jp}}</p>
        <ul class="question-variants">
          <li v-for="k in currentQuestion.variants" class="variants-list-el">
            <span
              class="variant"
              v-bind:class="[!isAnswered ? '' : isAnswered && k.ru === currentQuestion.question.ru ? 'variant-correct' : 'variant-false']"
              v-on:click="onAnswerClick(k)">{{ k.ru }}</span>
          </li>
        </ul>
        <span>Question {{currentQuestionIndex}} out of 10</span>
      </div>
      <button class="start-test-btn" v-if="!currentQuestion" v-on:click="generateQuestionsAction('katakana')">Start katakana test</button>
      <button class="start-test-btn" v-if="!currentQuestion" v-on:click="generateQuestionsAction('hiragana')">Start hiragana test</button>
      <button
        v-on:click="onNextQuestionClick"
        v-bind:class="[currentQuestion && isAnswered ? 'next-question-btn--visible' : 'next-question-btn--hidden']"
      >
          Next question
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { generateQuestion, generateQuestions } from './utils.js'
export default {
  name: 'app',
  data: function () {
    return {
      questions: null,
      currentQuestion: null,
      isAnswered: false,
      isAnswerCorrect: false,
      isAnswerFalse: false,
      answer: null,
      currentQuestionIndex: 1,
      generateQuestionsAction: (a) => {
        this.questions = generateQuestions(a);
        this.currentQuestion = this.questions[0];
        this.currentQuestionIndex = 1;
      },
      onAnswerClick: (v) => {
        if (this.isAnswered) { return; }; 
        const answer = v;
        this.answer = answer.ru;
        this.isAnswered = true;
        if (this.currentQuestion.question.ru === answer.ru) {
          this.isAnswerCorrect = true;
        } else {
          this.isAnswerFalse = true;
        }
      },
      onNextQuestionClick: () => {
        const index = this.questions.findIndex(i => i.question.ru === this.currentQuestion.question.ru) + 1;
        this.currentQuestion = this.questions[index];
        this.isAnswered = false;
        this.isAnswerCorrect = false;
        this.isAnswerFalse = false;
        this.currentQuestionIndex = this.currentQuestionIndex + 1;
      }
    }
  },
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
p {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #94a0a9;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.start-test-btn {
  margin-top: 10px;
}
.next-question-btn--hidden {
  visibility: hidden;
}
.content-container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.question-variants {
  list-style: none;
  padding: 0px;
}
.variants-list-el {
  margin-top: 20px;
}
.question-letter {
  font-size: 25px;
  font-weight: 600;
}
.variant {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #dcd5d5c7;
}
.variant-correct {
  border-bottom: 2px solid green;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.variant-false {
  border-bottom: 2px solid red;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
</style>

// import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';
const pollQuestionEl = document.querySelector('#poll-question');
const optionATitleEl = document.querySelector('#option-a-title');
const optionBTitleEl = document.querySelector('#option-b-title');
const optionAVotesEl = document.querySelector('#option-a-votes');
const optionBVotesEl = document.querySelector('#option-b-votes');
const optionAAddButton = document.querySelector('#option-a-add');
const optionBAddButton = document.querySelector('#option-b-add');
const optionAUndoButton = document.querySelector('#option-a-undo');
const optionBUndoButton = document.querySelector('#option-b-undo');
const endPollButton = document.querySelector('#end-poll');
const form = document.querySelector('form');
const pastPollsEl = document.querySelector('.past-polls');


// let state
let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPollsArray = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;
    optionAVotesEl.textContent = optionAVotes;
});

optionBAddButton.addEventListener('click', () => {
    optionBVotes++;
    optionBVotesEl.textContent = optionBVotes;
});

optionAUndoButton.addEventListener('click', () => {
    optionAVotes--;
    optionAVotesEl.textContent = optionAVotes;
});

optionBUndoButton.addEventListener('click', () => {
    optionBVotes--;
    optionBVotesEl.textContent = optionBVotes;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    question = data.get('poll-question');
    optionATitle = data.get('poll-option-a');
    optionBTitle = data.get('poll-option-b');
    displayCurrentPoll();
});

endPollButton.addEventListener('click', () => {
    form.reset();
    const poll = makePoll();
    pastPollsArray.push(poll);
    resetState();
    displayCurrentPoll();
    displayList();
});

function makePoll() {
    return {
        question: question,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };
}

function resetState() {
    question = '';
    optionAVotes = 0;
    optionBVotes = 0;
    optionATitle = '';
    optionBTitle = '';
}

function displayCurrentPoll() {
    pollQuestionEl.textContent = question;
    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}

function displayList() {
    pastPollsEl.textContent = '';

    for (let pastPoll of pastPollsArray) {
        const container = renderPastPoll(pastPoll);
        pastPollsEl.append(container);
    }
}
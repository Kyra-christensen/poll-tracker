export function renderPastPoll(pastPoll) {
    const pastPollEl = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pPollA = renderOption(pastPoll.optionATitle, pastPoll.optionAVotes);
    const pPollB = renderOption(pastPoll.optionBTitle, pastPoll.optionBVotes);

    pastPollEl.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
   
    pastPollEl.append(pQuestionEl, pPollA, pPollB);

    return pastPollEl;
}

export function renderOption(title, votes) {
    const pastDiv = document.createElement('div');
    const pastTitleEl = document.createElement('p');
    const pastVotesEl = document.createElement('p');

    pastDiv.classList.add('past-div');
    pastTitleEl.classList.add('past-title');
    pastVotesEl.classList.add('past-votes');

    pastTitleEl.textContent = title;
    pastVotesEl.textContent = votes;

    pastDiv.append(pastTitleEl, pastVotesEl);

    return pastDiv;
}


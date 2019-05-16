function countWords(inputWords) {
    return inputWords.reduce(chiamaIndietro, {});
}

function chiamaIndietro(accumulatore, corrente) {
    accumulatore[corrente] = ++accumulatore[corrente] || 1;
    return accumulatore;
}

module.exports = countWords
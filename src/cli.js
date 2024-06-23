import readlineSync from 'readline-sync';

const AskName = () => readlineSync.question('Your answer: ');

export default AskName;
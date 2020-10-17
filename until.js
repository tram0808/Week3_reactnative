import { CHOICES } from "./constants";

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRound = (userChoice, computerChoice) => {
  let resultText;
  if (userChoice === 'Kéo') {
    resultText = computerChoice === 'Bao' ? 'Victory :)' : 'Defeat :(';
  }
  if (userChoice === 'Bao') {
    if (computerChoice === 'Búa')
      resultText = 'Victory :)';
    else resultText = 'Defeat :(';
  }
  if (userChoice === 'Búa') {
    if (computerChoice === 'Kéo')
      resultText = 'Victory :)';
    else resultText = 'Defeat :(';
  }
  if (userChoice === computerChoice)
    resultText = 'Tie game!';
  return resultText;
}

export {randomComputerChoice,getRound};
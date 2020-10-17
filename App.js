//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup, GameStatus, PlayerCard } from './component'
import { CHOICES } from './constants';
import { randomComputerChoice, getRound } from './until';

const getResultColor = result => {
  if (result === 'Victory :)') return 'red';
  if (result === 'Tie game!') return 'blue';
  return null;
}


// create a component
class App extends Component {
  constructor(props) {
    super(props),
      this.state = {
        playerChoice: {},
        computerChoice: {},
        result: '',
      }
  }
  onPressButton = playerChoice => {
    const foundChoice = CHOICES.find(choice => choice.name === playerChoice); //find: loc tung cai, neu name trong mang === voi nut bam(palyerChoice) thi xuat ra phan tu do
    const randomComputer = randomComputerChoice();
    const kq = getRound(foundChoice.name, randomComputer.name);
    this.setState({
      playerChoice: foundChoice,
      computerChoice: randomComputer,
      result: kq,
    })

  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gameStatusWapper}>
          <GameStatus result={this.state.result} />
        </View>
        <View style={styles.gamePlayerWapper}>
          <PlayerCard playerName="Your" choice={this.state.playerChoice} />
          <PlayerCard playerName="Computer" choice={this.state.computerChoice} />
        </View>
        <View style={styles.buttonGroupWapper}>
          <ButtonGroup onPressButton={this.onPressButton} />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameStatusWapper: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  gamePlayerWapper: {
    flex: 0.4,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 2,
  },
  buttonGroupWapper: {
    flex: 0.4,
    alignItems: 'center',
  },

});

//make this component available to the app
export default App;

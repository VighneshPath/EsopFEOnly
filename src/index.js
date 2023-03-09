import example from './images/example.png'
import './styles/main.scss'
import './css/index.css'

// Create a class property without a constructor
class Game {
  name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const heading = document.createElement('h1');

heading.textContent = 'Interesting!';

const app = document.querySelector('#root');
app.append(heading);

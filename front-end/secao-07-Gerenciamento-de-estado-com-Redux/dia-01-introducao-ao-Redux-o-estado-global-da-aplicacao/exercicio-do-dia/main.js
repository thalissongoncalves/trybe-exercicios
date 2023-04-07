import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEXT_COLOR: {
      return {
        ...state,
        index: state.index === (state.colors.length - 1) ? 0 : state.index + 1,
      }
    }
    case PREVIOUS_COLOR: {
      return {
        ...state,
        index: state.index === 0 ? (state.colors.length - 1) : state.index - 1,
      }
    }
    case RANDOM_COLOR: {
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const randomBtn = document.getElementById('random');
nextBtn.addEventListener('click', () => {
  store.dispatch({
    type: NEXT_COLOR
  })
});
previousBtn.addEventListener('click', () => {
  store.dispatch({
    type: PREVIOUS_COLOR
  })
})
randomBtn.addEventListener('click', () => {
  store.dispatch({
    type: RANDOM_COLOR
  })
});

store.subscribe(() => {
  const { index, colors } = store.getState();
  const spanElement = document.querySelector('#value');
  spanElement.innerHTML = colors[index];
  const containerElement = document.querySelector('#container');
  containerElement.style.backgroundColor = colors[index];
})
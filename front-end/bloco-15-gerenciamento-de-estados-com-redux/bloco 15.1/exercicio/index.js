const DEFAULT_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const NEXT_COLOR = 'nxt_color';
const PREVIOUS_COLOR = 'prv_color';

const reducer = (state = DEFAULT_STATE, action) => {

  console.log("reducer", action.type);

  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index + 1
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index - 1
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const state = store.getState();

  console.log("index", state.index);

  const container = document.querySelector('#container');
  const colorText = document.querySelector('#value');
  colorText.innerHTML = DEFAULT_STATE.colors[state.index];
  container.style.backgroundColor = DEFAULT_STATE.colors[state.index];
})

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#previous');

nextButton.addEventListener('click', () => {
  store.dispatch({type: NEXT_COLOR})
});

prevButton.addEventListener('click', () => {
  store.dispatch({type: PREVIOUS_COLOR})
});

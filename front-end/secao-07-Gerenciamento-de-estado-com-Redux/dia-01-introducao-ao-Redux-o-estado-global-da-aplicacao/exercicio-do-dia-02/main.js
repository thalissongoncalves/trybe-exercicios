import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_STATUS = 'CHANGE_STATUS';

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      }
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);

const body = document.querySelector('body');
const statusElement = document.getElementById('status');
const themeBtn = document.getElementById('toggle-theme');
const statusBtn = document.getElementById('toggle-status');

store.subscribe(() => {
  const { theme, status } = store.getState();
  if (theme === 'light') {
    body.style.backgroundColor = 'white';
    body.style.color = '#333333';
    themeBtn.innerHTML = 'Dark Mode';
  }
  if (theme === 'dark') {
    body.style.backgroundColor = '#333333';
    body.style.color = 'white';
    themeBtn.innerHTML = 'Light Mode';
  }
  if (status === 'online') {
    statusElement.innerHTML = 'Online';
    statusBtn.innerHTML = 'Ficar Offline';
  }
  if (status === 'offline') {
    statusElement.innerHTML = 'Offline';
    statusBtn.innerHTML = 'Ficar Online';
  }
})

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({
    type: CHANGE_THEME
  })
});

statusButton.addEventListener('click', () => {
  store.dispatch({
    type: CHANGE_STATUS
  })
});
export default INITIAL_STATE => (state = INITIAL_STATE, action) => {
  localStorage.setItem('yoga-auth', JSON.stringify(action));
  return { ...state, ...action.payload };
}


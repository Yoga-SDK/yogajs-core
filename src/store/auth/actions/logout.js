export default INITIAL_STATE => (state = INITIAL_STATE, action) => {
  localStorage.removeItem('yoga-auth');
  return {};
}

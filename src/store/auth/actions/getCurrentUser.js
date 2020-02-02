export default INITIAL_STATE => (state = INITIAL_STATE, action) => {
  return { ...state, ...action.payload };
}

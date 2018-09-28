const INITIAL_STATE = {
  on: true
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'TOGGLE':
    return {
      ...state,
      on: !state.on
    }

  default:
    return state
  }

}

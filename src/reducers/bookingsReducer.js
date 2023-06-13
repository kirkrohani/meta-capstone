const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '20:00', '21:00', '22:00'];

function bookingsReducer(state, action) {
  console.log('inside bookingsReducer w/action: ', state, action);
  const selectedDate = action.date;
  switch (action.type) {
    case 'create-reservation': {
      const availableTimesByDate = state[selectedDate] ? state[selectedDate].filter(timeSlot => timeSlot !== action.time) : availableTimes.filter(timeSlot => timeSlot !== action.time);
      const updatedState = { ...state };
      updatedState[selectedDate] = availableTimesByDate;
      return updatedState;
    }
    case 'cancel-reservation': {
      const updatedState = { ...state };
      updatedState[selectedDate] = [...state[selectedDate], action.time];
      return updatedState;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export { availableTimes, bookingsReducer };
const getAvailableTimes = (date) => {
  const times = fetchAPI((date && new Date(date)) || new Date());
  return times;
}

let availableTimes = getAvailableTimes();

function bookingsReducer(state, action) {
  const selectedDate = action.date;
  availableTimes = getAvailableTimes(selectedDate);
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
const changeFormState = (event, initState) => {
  const newState = {
    ...initState,
  };

  newState[event.target.name] = event.target.value;
  return newState;
};

export default changeFormState

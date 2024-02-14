const initialState = {
    count: 0,
    alert: { visible: false, message: '' }
};

const combineReducers = (reducers) => {
    return (state = initialState, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {})
    }
}

export default combineReducers;
function countReducer(state, action) {
    switch (action.type) {
        case 'counter/increment':
            return state + 1;
        case 'counter/decrement':
            return state - 1;
        default:
            return state;
    }
}

function alertReducer(state, action) {
    switch (action.type) {
        case 'alert/show':
            return {
                ...state,
                visible: true,
                message: action.payload.message
            }
        case 'alert/hide':
            return {
                ...state,
                visible: false,
                message: ''
            }
        default:
            return state;
    }
}

export { alertReducer, countReducer }
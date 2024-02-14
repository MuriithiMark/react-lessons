import { countReducer as count, alertReducer as alert } from "./reducers";
import combineReducers from "./combineReducers";

const rootReducer = combineReducers({
    count,
    alert
})

export default rootReducer;
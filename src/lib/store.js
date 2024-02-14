import rootReducer from "./rootReducer";
import createStore from "./createStore";

const store = createStore(rootReducer);

export default store;
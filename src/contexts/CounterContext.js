import { createContext } from "react";

/**
 * @type {React.Context<[
 * count: number,
 * setCount: (count: number) => void,
 * ]>}
 */
const CounterContext = createContext();

export default CounterContext;
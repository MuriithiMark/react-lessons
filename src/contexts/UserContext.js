import { createContext } from "react";

/**
 * @type {React.Context<{
 * user?: {
 *      username: string,
 *      password: string
 * },
 * setUser: ({ username, password}: { username: string, password: string}) => void
 * }>}
 */
const UserContext = createContext();

export default UserContext;
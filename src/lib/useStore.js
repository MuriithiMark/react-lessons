import { useState, useContext, useEffect } from "react";
import { StoreContext } from "./StoreProvider";

const useStore = () => {
    // TODO provide efficient re-render to prevent all components from re-rendering on change
    // Allow rerender of subscribers
    const [, setRender] = useState(false);
    const { getState, subscribe, dispatch } = useContext(StoreContext);

    useEffect(() => {
        const unsubscribe = subscribe(() => setRender(prev => !prev));
        return () => unsubscribe()
    }, []);

    let store = getState()

    return [store, dispatch]
}


export default useStore;
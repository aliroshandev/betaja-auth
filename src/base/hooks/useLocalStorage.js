import React from "react";

/**
 * 
 * @param {string} key  the key to set in localStorage for this value
 * @param {object} defaultValue the value to use if it is not already in localStorage
 */

function useLocalStorageState(key, defaultValue=""){

    const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if(valueInLocalStorage){
        return JSON.parse(valueInLocalStorage)
    }
       return defaultValue;
    });

    const prevKeyRef = React.useRef(key);

    React.useEffect(()=>{
        const prevKey = prevKeyRef.current;
        if(prevKey !== key){
            window.localStorage.removeItem(prevKey)
        }
        prevKeyRef.current = key;
        window.localStorage.setItem(key, JSON.stringify(state))
    },[key, state])

    return [state, setState]
}

export {useLocalStorageState }
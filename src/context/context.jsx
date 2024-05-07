import { createContext, useEffect, useReducer, useContext } from "react";

export const darkMode = createContext();
export const Language = createContext();

function reducer(state, {type, payload = null}){
    switch(type){
        case "CHANGE_MODE":
            return {...state, darkmode: !state.darkmode}
        case "ru":
            return {...state, language: "ru"}
        case "uz":
            return {...state, language: "uz"}
    }
}

export function Provider({children}){
    const [state, dispatch] = useReducer(reducer, 
        {darkmode: false, language: "eng"});

    // useEffect(() => {
    //     const dark = JSON.parse(localStorage.getItem("dark"));
    //     if (dark !== null) {
    //         dispatch({ type: "TOOGLE_MODE" });
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("dark", JSON.stringify(state.darkmode));
    // }, [state.darkmode]);

    function ChangeMode(){
        return dispatch({type: "CHANGE_MODE"})
    }
    return <darkMode.Provider value={{state, ChangeMode}}>
        {children}
    </darkMode.Provider>
};

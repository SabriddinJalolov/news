import React from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [lang, setLang] = React.useState(
        localStorage.getItem("lang") || "uz"
    );

    React.useEffect(() => {
        if(lang) {
            localStorage.setItem("lang", lang);
        } else {
            localStorage.removeItem("lang");
        }
    }, [lang]);

    return (
        <Context.Provider value={{ lang, setLang }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider };
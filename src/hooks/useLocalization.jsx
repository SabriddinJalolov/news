import React from 'react'
import { Context } from '../context/localizated';

export const    useLocalization = (setterOnly = false) => {
    const { lang, setLang } = React.useContext(Context);

    return setterOnly ? [setLang] : [lang, setLang];
}
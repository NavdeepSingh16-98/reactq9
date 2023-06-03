// import { createContext } from 'react'

// export const colorContext = createContext({ colorMode: String, setColorMOde: (colorMode: 'light') => { } })

// import { createContext } from "react";

// export type colorCodeContextType = "light" | "dark";

// export const colorCodeContext = createContext<colorCodeContextType>("light");

import { createContext, useContext } from 'react';

export enum Color {
    Dark = 'dark',
    Light = 'light',
}

export type colorContextType = {
    color: Color;
    setColor: (Color: Color) => void;
}

export const colorContext = createContext<colorContextType>({ color: Color.Dark, setColor: color => console.warn('no theme provider')});
export const useColor = () => useContext(colorContext);
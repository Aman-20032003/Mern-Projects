import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [state, setState] = useState(0);
  return (
    <CounterContext.Provider value={{ count: state, setCount: setState, name: 'Aman' }}>
      {props.children}
    </CounterContext.Provider>
  );
};

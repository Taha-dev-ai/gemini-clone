import { createContext } from "react";
import runChat from "../config/gemini";
import { SomeComponent } from './SomeComponent';

export const Context = createContext();

const ContextProvider = (props) => {

  const onSent = async (prompt) => {
    await runChat(prompt);
  };

  useEffect(() => {
    // Call onSent when component mounts
    onSent("what is react js");
  }, []); // Empty dependency array to run once on component mount

  const contextValue = {
    // Define context value if needed
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

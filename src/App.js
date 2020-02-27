import React, { createContext } from "react";

import ContactForm from "./ContactForm";

export const StoreContext = createContext();

function App() {
  return (
    <StoreContext.Provider value={{ name: "Konrad" }}>
      <ContactForm />
    </StoreContext.Provider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { auth } from "./firebase";

export const stateContext = createContext()
export const dispatchContext = createContext()


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)
        dispatch({ type: 'SET_USER', user: authUser })
      }
      else {
        dispatch({ type: 'SET_USER', user: null })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return <div>
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </dispatchContext.Provider>
    </stateContext.Provider>
  </div>
}
export default App;

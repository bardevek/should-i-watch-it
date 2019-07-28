import React, { Fragment, useState, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { MoviesList } from "./components/MoviesList";
import { ErrorNotification } from "./components/ErrorNotification";

const ErrorContext = createContext(undefined);

function App() {
  const [showErrorToast, setErrorToastVisibility] = useState(false);

  return (
    <Fragment>
      <ErrorNotification
        isVisible={showErrorToast}
        hideNotification={() => setErrorToastVisibility(false)}
      />
      <ErrorContext.Provider value={() => setErrorToastVisibility(true)}>
        <BrowserRouter>
          <Switch>
            <Route render={() => <MoviesList />} path="/movies-list" />
            <Route component={() => <LandingPage />} path="/" />
          </Switch>
        </BrowserRouter>
      </ErrorContext.Provider>
    </Fragment>
  );
}

export { ErrorContext };

export default App;

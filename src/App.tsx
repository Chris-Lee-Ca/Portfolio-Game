import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import { AppContextProvider } from "./Context";

import { Analytics } from "@vercel/analytics/react";
import { ApolloProvider } from "@apollo/client";
import client from "./sanity/apolloClient";

function App() {
    return (
        <div className="App">
            <ApolloProvider client={client}>
                <AppContextProvider>
                    <Analytics />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Game />} />
                        </Routes>
                    </BrowserRouter>
                </AppContextProvider>
            </ApolloProvider>
        </div>
    );
}

export default App;

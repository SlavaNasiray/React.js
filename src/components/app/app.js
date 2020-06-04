import React from "react";
import ShopHeader from "../shop-header";
import { HomePage, CartPage } from "../pages";

import "./app.css";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <HomePage />
            <CartPage />
        </main>
    );
};

export default App;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import AddressSearch from "./AddressSearch";
import NameSearch from "./NameSearch";
import IconLabelTabs from "./IconLabelTabs";
const AppRouter = () => {

    return (
        <BrowserRouter>
            <IconLabelTabs />
            <Routes>

            <Route path="/name" element={<NameSearch />} />
                <Route path="/address" element={<AddressSearch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

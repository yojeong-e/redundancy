import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddressSearch from "./AddressSearch";
import NameSearch from "./NameSearch";
import IconLabelTabs from "./IconLabelTabs";
import Search from "./Search";

const AppRouter = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <IconLabelTabs/>
            <Routes>
                <Route path="/name" element={<NameSearch/>}/>
                <Route path="/address" element={<AddressSearch/>}/>
                <Route path="/search" element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

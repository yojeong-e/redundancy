import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BusinessIcon  from '@mui/icons-material/Business';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import {Link} from "react-router-dom";
import AddressSearch from "./AddressSearch";
function IconLabelTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<BusinessIcon  />} label="업소명" to='/name' component={Link}/>
            <Tab icon={<LocalPostOfficeIcon />} label="주소" to='/address' component={Link}/>
        </Tabs>
    );
}
export default IconLabelTabs;
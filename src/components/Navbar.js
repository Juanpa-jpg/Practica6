import {AppBar, Toolbar} from "@mui/material";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Sidebar/>
                Menu NBA
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

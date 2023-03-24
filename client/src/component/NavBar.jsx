import styled from '@emotion/styled';
import {AppBar, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
background: #111111
`
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`

const NavBar = () => {
    return(
        <div>
        <Header position="static"> 
              <Toolbar>
                  <Tabs to="/">Code for Interview</Tabs>
                  <Tabs to="/all">All user</Tabs>
                  <Tabs to="/add">Add User</Tabs>
              </Toolbar>
        </Header>
        </div>
   
    )
}
export default NavBar;
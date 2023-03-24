import { TableBody, TableHead, Table, TableRow, TableCell, styled} from "@mui/material";
import { getUsers } from "../service/api";
import { useEffect, useState } from "react";

const StyledTable = styled(Table)`
width: 90%;
margin: 50px auto 0 auto;

`
const THead = styled(TableRow)`
background: #000000;
& > th {
    color: #fff;
    font-size: 12px;
}

`
const TBody = styled(TableBody)`
background:aqua;

`
const TData = styled(TableRow)`
background: pink;
& > td{
    font-size :10px;
}
`

const AllUsers= () =>{


    const [users, setUsers] = useState([]);


    useEffect(() => {
            getAllUsers();
    }, []);

    const getAllUsers = async () =>{
        let response = await getUsers();
        setUsers(response.data);
    }


    return(
    <StyledTable>
        <TableHead>
            <THead>
                <TableCell> Name </TableCell>
                <TableCell> Username</TableCell>
                <TableCell> Email </TableCell>
                <TableCell> Phone</TableCell>
            </THead>
        </TableHead>
        <TBody>
            {
                users.map( (user)  => {

                    return <TData>
                              <TableCell> {user.name} </TableCell>
                              <TableCell> {user.username} </TableCell>
                              <TableCell> {user.email} </TableCell>
                              <TableCell> {user.phone} </TableCell>
                          </TData>
                }) 
            }
        </TBody>
    </StyledTable>
    )
}

export default AllUsers;
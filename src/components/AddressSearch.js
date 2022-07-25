import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";
import {Button, Stack} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

// const USER_API_BASE_URL = "https://redundancyfacility1.run.goorm.io";

const USER_API_BASE_URL = "http://localhost:8080";

const columns = [{field: 'id', headerName: 'ID', width: 70}, {
    field: 'companySimilarity', headerName: 'companySimilarity', width: '80'
}, {
    field: 'companyName', headerName: 'companyName', width: '500', renderCell: (params) => {
        return <div className="rowitem">{params.row.company.companyName}</div>;
    },
}, {
    field: 'companyAddress', headerName: 'companyAddress', width: '700', renderCell: (params) => {
        return <div className="rowitem">{params.row.company.companyAddress}</div>;
    },
}];

const AddressSearch = () => {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('CN')
    const [address, setAddress] = useState('GUANGDONG')


    useEffect(() => {
        let completed = false;

        async function get() {
            const result = await axios(USER_API_BASE_URL + `/api/address?country=${country}&address="${address}"`)

            if (!completed) {
                setData(result.data);
                console.log(data);
            }
        }

        get()
        return () => {
            completed = true
        }
    }, [address])


    return (<>
        <div>



            <span>국가<input name="countryInput" value={country}
                          onChange={e => setCountry(e.target.value)}
            /></span>
                <span>주소<input name="wordInput" value={address}
                               onChange={e => setAddress(e.target.value)}/></span>


            <div style={{height: 700, width: '100%'}}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    initialState={{
                        sorting: {
                            sortModel: [{field: 'companySimilarity', sort: 'desc'}],
                        },
                    }}
                />
            </div>
        </div>
    </>)
}
export default AddressSearch;
import {useState} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";
import {Box, Button, Stack, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// const USER_API_BASE_URL = "https://redundancyfacility1.run.goorm.io";

const USER_API_BASE_URL = "http://localhost:8080";

const columns = [{field: 'id', headerName: 'ID', width: 70}, {
    field: 'companySimilarity', headerName: '유사도', width: '120'
}, {
    field: 'companyCode', headerName: '업소코드', width: '150', renderCell: (params) => {
        return <div className="rowitem">{params.row.company.companyCode}</div>;
    },
}, {
    field: 'companyName', headerName: '업소명', width: '500', renderCell: (params) => {
        return <div className="rowitem">{params.row.company.companyName}</div>;
    },
}, {
    field: 'companyAddress', headerName: '소재지', width: '700', renderCell: (params) => {
        return <div className="rowitem">{params.row.company.companyAddress}</div>;
    },
}];

const Search = () => {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({
        countryInput: 'CN', wordInput: 'GUANGDONG', searchOption: 'name', preprocessType: 'None'
    });
    const state = {
        country: ''
    }


    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value});
    };
    const Search = () => {
        let completed = false;

        async function get() {
            const result = await axios(USER_API_BASE_URL + `/api/search?country=${inputs.countryInput}&word="${inputs.wordInput}"&option=${inputs.searchOption}&preprocessType=${inputs.preprocessType}`)
            console.log(USER_API_BASE_URL + `/api/search?country=${inputs.countryInput}&word="${inputs.wordInput}&option="${inputs.searchOption}&preprocessType="${inputs.preprocessType}"`);
            if (!completed) {
                setData(result.data);
            }
        }

        get()
        return () => {
            completed = true
        }
    }

    return (<>
        <div>


            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="국가" variant="outlined" type="text" name="countryInput"
                           value={inputs.countryInput} onChange={onChange}/>
                <TextField id="outlined-basic" label="단어" variant="outlined" type="text" name="wordInput"
                           value={inputs.wordInput} onChange={onChange}/>

                <select name='searchOption' size='2' onChange={onChange}>
                    <option value='NAME' defaultValue>이름</option>
                    <option value='ADDRESS'>주소</option>
                </select>
                <select name='preprocessType' size='3' onChange={onChange}>
                    <option value='NONE' defaultValue>기본</option>
                    <option value='REMOVE_WHITESPACE'>공백제거</option>
                    <option value='REMOVE_PUNCTUATION'>특수문자제거</option>
                </select>
            </Box>


            <Stack direction="row" spacing={2}>
                <Button onClick={Search} variant="outlined" startIcon={<SearchIcon/>}>
                    검색
                </Button>
            </Stack>
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
export default Search;
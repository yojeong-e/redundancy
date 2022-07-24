import axios from 'axios';

const USER_API_BASE_URL = "https://redundancyfacility1.run.goorm.io/api";

class ApiService {

    fetchCompanyByAddress(country, address){
        return axios.get(USER_API_BASE_URL + '/address?country=' + country +"&address="+address );
    }

    fetchUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserByID(userID){
        return axios.get(USER_API_BASE_URL + '/' + userID);
    }

    deleteUser(userID){
        return axios.delete(USER_API_BASE_URL + '/' + userID);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(user){
        return axios.put(USER_API_BASE_URL + '/' + user.id, user)
    }

}

export default new ApiService();
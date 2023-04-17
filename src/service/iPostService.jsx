import axios from "axios";

const API = axios.create({ baseURL: 'http://192.168.0.99:4002/v1/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

const token = localStorage.getItem('token');
const headers = {
    'authorization': `bearer ${token}`
}

//getUserMailData
const getUserDetails = (id, type) => API.get(`auth/getUser/${id}`, { params: { type } })

//admin
const adminLogin = (values) => API.post(`admin/adminLogin`, values)

//admin (get user list)
const getUserList = () => API.get('admin/getUsersList')

//admin (get User Count)
const getUserCount = () => API.get('admin/getUserCount')

//admin (get Total mails)
const getTotalMailCount = () => API.get('admin/getTotalMails')

//admin (admin registration)
const adminRegister = (values) => API.post('admin/adminRegistration', values)

//admin (admin User datas)
const userDatas = (id) => API.get(`admin/getMailsList/${id}`)

//admin (admin logout)
const adminLogout = (id) => API.get(`admin/adminLogout/${id}`)


//Get data
const getUserMailData = () => API.get(`mails/getMails`);

//increment counter
const readCounterData = (id) => API.patch(`mails/incrementCounter/${id}`);

//readMails
const readMailData = (id) => API.patch(`mails/readMails/${id}`);

//changePassword
const changeUserPassword = (id, oldPassword, password) => API.patch(`users/changePassword/${id}`, { oldPassword, password });


//update Profile
const updateUserProfile = (id, firstName, lastName) => API.patch(`users/updateProfile/${id}`, { firstName, lastName });


//sent Mail
const userSendMail = (formData) => API.post(`mails/sendMail`, formData);


//sent Mail Inbox
const userSendMailInbox = () => API.get(`mails/sentMails`);


// Trashed Mail Inbox
const userTrashedMailInbox = () => API.get(`mails/getTrashedMails`);

//Logout 
const userLogout = (_id) => API.patch(`users/logout/${_id}`)

//Register User
const userRegister = (values) => API.post(`/auth/register`, values);

//Login User
const userLogin = (values) => API.post(`/auth/login`, values)

//Delete Mail
const deleteUserMail = (id) => API.delete(`/mails/deleteMail/${id}`)


export { getUserMailData, readCounterData, readMailData, changeUserPassword, updateUserProfile, userSendMail, userSendMailInbox, userTrashedMailInbox, userLogout, userRegister, userLogin, deleteUserMail, adminLogin, getUserList, getTotalMailCount, getUserCount, adminRegister, userDatas, adminLogout, getUserDetails }
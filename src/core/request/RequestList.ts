import { IRequestConfigList } from "./RequestFactory";


const RequestList: IRequestConfigList = {
    getCards: {
        path: '/cards/humans',
        method: 'GET'
    },
    // POST
    login: {
        path: '/auth/login/',
        method: 'POST'
    },
    //DELETE
    deleteHumanCard: {
        path: '/cards/humans/{id}/',
        method: 'DELETE'
    },
    //PATCH
    updateHumanCard: {
        path: '/cards/humans/{id}/',
        method: 'PATCH'
    },
}

export default RequestList;

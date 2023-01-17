import * as types from "./actionTypes";
const initialstate={

    isLoading: false,
    isError: false,
    adminProducts: [], 
    adminOrderRecord: [], 
    adminSearchData: []
}
export const reducer=(state = initialstate,{ type, payload })=>{
    switch(type){
        case types.GET_ADMIN_DATA_REQUEST:
            case types.ADD_ADMIN_DATA_REQUEST:
                case types.EDIT_ADMIN_DATA_REQUEST:
                    case types.DELETE_ADMIN_DATA_REQUEST:
                        case types.ADMIN_DATA_SEARCH_REQUEST:
                            case types.ADMIN_ORDER_RECORD_REQUEST:{
            return { ...state, isLoading: true, isError: false };
        }
        case types.GET_ADMIN_DATA_SUCESSS:{
            return { ...state, isLoading: true,adminProducts:payload, isError: false };
        }
        case types.ADD_ADMIN_DATA_SUCESSS:{
            return { ...state, isLoading: true,adminProducts:payload, isError: false };
        }
        case types.EDIT_ADMIN_DATA_SUCESSS:{
            return { ...state, isLoading: true,adminProducts:payload, isError: false };
        }
        case types.DELETE_ADMIN_DATA_SUCESSS:{
            return { ...state, isLoading: true,adminProducts:payload, isError: false };
        }
        case types.ADMIN_DATA_SEARCH_SUCESSS:{
            return { ...state, isLoading: true, adminSearchData:payload, isError: false };
        }
        case types.ADMIN_ORDER_RECORD_SUCESSS:{
            return { ...state, isLoading: true, adminOrderRecord:payload, isError: false };
        }
        case types.GET_ADMIN_DATA_FAILURE:
            case types.ADD_ADMIN_DATA_FAILURE:
                case types.EDIT_ADMIN_DATA_FAILURE:
                    case types.DELETE_ADMIN_DATA_FAILURE:
                        case types.ADMIN_DATA_SEARCH_FAILURE:
                           case types.ADMIN_ORDER_RECORD_FAILURE:{
            return { ...state, isLoading: false, isError: false };
        }
        default: return state
    }
    
}
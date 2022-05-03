import { CONSTANTS } from "../action";

export const addList = title => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    }
}
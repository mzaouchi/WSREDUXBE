import { CHANGETEXT, DECREMENT, HANDLESHOW, INCREMENT } from "./ActionTypes"

export const increment=()=>{
    return(
        {
            type : INCREMENT
        }
    )
}




export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const changeText=(payload)=>{
    return(
        {
            type : CHANGETEXT,
            payload
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}
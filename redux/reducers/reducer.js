const initialState = {
    data:[]
}


export const reducer = (state=initialState, action)=>{
    console.log('////',state)
    switch(action.type){
        case 'ADD':
            return {...state[action.payload]}
           
    }
}
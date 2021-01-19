const initState ={
    projects:[
        {id: '1', title: 'help me find peach', content: 'blahhh blahhhhh blahhhhhh'},
        {id: '2', title: 'collect all the stars', content: 'blahhh blahhhhh blahhhhhh'},
        {id: '2', title: 'egg hunt with gaurij', content: 'blahhh blahhhhh blahhhhhh'}
    ]
}

const projectReducer =(state= initState,action) =>{
    switch (action.type) {
        case 'CREATE_PROJECT' :
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR' :
            console.log('create project error', action.err)
            return state;

        default:
            return state 
    }
}

export default projectReducer 
import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer'

let state = {
    myPosts:[
        { id:1, text:"Hi, it's my first post" },
        { id:2, text:"Hi, it's my second post" },
        { id:3, text:"Hi, it's my third post" },
        { id:4, text:"Hi, it's my fourth post" },
    ],
    newPostText: 'Moi, tannan ',
    userProfile:null,
    status: ''
}

it('Length myPosts should be incrimented', () => {
    let action = addPostActionCreator('basenkoDenis')
    
    let newState = profileReducer(state,action)

    expect(newState.myPosts.length).toBe(5)
})

it('meesage of new post should be correct', () => {
    let action = addPostActionCreator('basenkoDenis')
    let newState = profileReducer(state,action)

    expect(newState.myPosts[4].text).toBe('basenkoDenis')
})

it('after deleting length of myPosts should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action)

    expect(newState.myPosts.length).toBe(3)
})

it('after deleting length of myPosts should be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state,action)

    expect(newState.myPosts.length).toBe(4)
})

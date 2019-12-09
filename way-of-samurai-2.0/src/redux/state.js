import { renderEntireTree } from "../render"

let state = {
    profilePage:{
        myPosts:[
            { id:1, text:"Hi, it's my first post" },
            { id:2, text:"Hi, it's my second post" },
            { id:3, text:"Hi, it's my third post" },
            { id:4, text:"Hi, it's my fourth post" },
        ],
        newPostText: 'Denis'
    },
    dialogsPage:{
        posts: [
            { id:1, name:'Andrey' },
            { id:2, name:'Igor' },
            { id:3, name:'Valera' },
            { id:4, name:'Vova' },
        ],
        messages:[
            { id:1, autor:'Oleg', text:'Hi' },
            { id:2, autor:'Denis', text:'Hello' },
            { id:3, autor:'Oleg', text:'How are you?' },
            { id:4, autor:'Oleg', text:'Fine' },
        ],
    }
    
    
}
window.state = state
export let addPost = (postMessage) => {
    let newPost = {id:state.profilePage.myPosts.length + 1, text:state.profilePage.newPostText}
    state.profilePage.myPosts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
} 
export let updateNewPostText = (newText) =>{
state.profilePage.newPostText = newText
renderEntireTree(state)
}
export default state;
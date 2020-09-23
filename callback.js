'use strict';

const posts = [
    {'title': 'post one', 'body': 'this is post one'},
    {'title': 'post two', 'body': 'this is post two'},
];


function getPosts() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);        
}

function removeFirstElement(){
        posts.shift();
}

function modifyThirdElement(){
    posts[2].title.replace('Three', 'Four');
}

function createPost(post, callback_1, callback_2){
    setTimeout(() => {
        posts.push(post);
        callback_1();
        callback_2();
    }, 2000);
    
} 


getPosts();

createPost({'title' : 'Post three', 'body' : 'This is post three'}, removeFirstElement, modifyThirdElement, getPosts);

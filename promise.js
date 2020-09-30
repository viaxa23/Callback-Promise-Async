'use strict' ;

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

function createPost(post,){
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else
            {
                reject(`Valami elromlott!`);
            }
    });

        
    }, 2000);
    
} 

createPost({'title' : 'Post three', 'body' : 'This is post three'})
.then(getPosts)
.catch(error => console.log(error));

const promise_2 = fetch(`https://jsonplaceholder.typicode.com/users`)
.then((resolve) => resolve.json());
promise_2 //.then(values => console.log(values));
    .then(
        function megjelenit(values) {
            let tablazat = `<table><tr><th>Név</th><th>Email</th></tr>`;
            tablazat += '</table>';
            tablazat += 
        }
    )
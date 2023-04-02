
QUESTION A:
Implement the code which the youtuber does based on promise.all

ANSWER A:
const promise1= Promise.resolve('Hello World');
const promise2= 10;
const promise3= new Promise((resolve,reject) => setTimeout(resolve,2000, 'Goodbye'));

Promise.all([promise1,promise2,promise3]).then((values) => console.log(values));

Output(In Console):
Hello World
10
Goodbye


QUESTION B:
Create one more promise called postLastUpdated. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and postLastUpdated resolve), console log all the posts created and lastActivityTime of the user.

ANSWER B:
const myPost = [
  {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
  {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

const users = {
  userName: 'user1', 
  lastUpdated: new Date() 
};


function createPost(post){

  return new Promise((resolve, reject) => {
  setTimeout(() => {
    
    myPost.push({...post, createdAt: new Date().getTime()});

   const error = false;
   
   if(!error) {
      resolve(myPost);
   } else{
       reject('Error: Something went wrong');
   }  
  },1000);
 
 });
}

function postLastUpdated(){

    return new Promise((resolve,reject) => {
    setTimeout(() => {
      users.lastUpdated = new Date().getTime();
      resolve(users.lastUpdated);
       },1000);  
  }); 
} 

function userUpdatesPost(post){

Promise.all([createPost(post),postLastUpdated()])
  .then(([returnedValue1,returnedValue2]) => {
        console.log(returnedValue1);
        console.log(returnedValue2);
  }).catch(err => console.log(err))
}

 userUpdatesPost({title: 'Post Three', body: 'This is post three'});

Output(In Console):
(3) [{…}, {…}, {…}]
 0: {title: 'Post One', body: 'This is post one', createdAt: 1672752750688}
 1: {title: 'Post Two', body: 'This is post two', createdAt: 1672752750688}
 2: {title: 'Post Three', body: 'This is post three', createdAt: 1672752751706}
 length: 3
 [[Prototype]]: Array(0)
 1672752751706


QUESTION C:
Once both the above promises are resolved, delete the last post by calling the deletion promise. Once successfully deleted, console log the new set of Posts of the user.

ANSWER C:
const myPost = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
  ];
  
  const users = {
    userName: 'user1', 
    lastUpdated: new Date() 
  };
  
  
  function createPost(post){
  
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      myPost.push({...post, createdAt: new Date().getTime()});
  
     const error = false;
     
     if(!error) {
        resolve(myPost);
     } else{
         reject('Error: Something went wrong');
     }  
    },1000);
   
   });
  }
  
  function postLastUpdated(){
  
      return new Promise((resolve,reject) => {
      setTimeout(() => {
        users.lastUpdated = new Date().getTime();
        resolve(users.lastUpdated);
         },1000);  
    }); 
  } 

  function deletePost(){
    
    return new Promise((resolve,reject) => {
         setTimeout(() =>{
            resolve(myPost.pop());
         },1000)
    })
}
  
  function userUpdatesPost(post){
  
  Promise.all([createPost(post),postLastUpdated()])
    .then(([returnedValue1,returnedValue2]) => {
           deletePost().then(() => {
            console.log(returnedValue1);
            console.log(returnedValue2);
           }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }
  
   userUpdatesPost({title: 'Post Three', body: 'This is post three'});

   Output(In Console):
(2) [{…}, {…}]
0: {title: 'Post One', body: 'This is post one', createdAt: 1680433299330}
1: {title: 'Post Two', body: 'This is post two', createdAt: 1680433299330}
length: 2
[[Prototype]]: Array(0)
 1680433300338


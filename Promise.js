
QUESTION A:
Watch and create a promise as per the youtuber.

ANSWER A:
const myPost = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
   setTimeout(()=> {
    let output = '';
    myPost.forEach((element) => {
      output+=`<li>${element.title}</li>`;
    });
    document.body.innerHTML = output;
   },1000);
}

function createPost(post){
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    myPost.push(post);
    
   const error = false;
   
   if(!error) {
      resolve();
   } else{
       reject('Error: Something went wrong');
   }  
  },1000);
 });
}
createPost({title: 'Post Three', body: 'This is post three'})
     .then(getPosts);

Output(On Screen):
Post One
Post Two
Post Three

const myPost = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
   setTimeout(()=> {
    let output = '';
    myPost.forEach((element) => {
      output+=`<li>${element.title}</li>`;
    });
    document.body.innerHTML = output;
   },1000);
}

function createPost(post){
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    myPost.push(post);
    
   const error = true;
   
   if(!error) {
      resolve();
   } else{
       reject('Error: Something went wrong');
   }  
  },1000);
 });
}
createPost({title: 'Post Three', body: 'This is post three'})
     .then(getPosts);

Output(In Console):
Uncaught (in promise) Error: Something went wrong

createPost({title: 'Post Three', body: 'This is post three'})
     .then(getPosts)
     .catch(err => console.log(err));

Output(In Console):
Error: Something went wrong


QUESTION B:
Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setTimeout). Everytime you call it, it should delete the last element of the array.

ANSWER B:
const myPost = [
  {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
  {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

let timerId;

function getPosts(){
    clearInterval(timerId); //Clearing the previous instance of setInterval().
    timerId = setInterval(() => { //It will display the output at regular intervals.
    //let timerId=setInterval(() => { 
      let output = '';
      myPost.forEach((element) => {
        output+=`<li>${element.title} - updated ${(new Date().getTime() - element.createdAt)/1000} seconds ago</li>`; //new Date().getTime() will give the current time in milliseconds
      });
      //console.log(timerId); //For checking how many setInterval function is running
      document.body.innerHTML = output;
     },1000);
}


function createPost(post){
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    myPost.push({...post, createdAt: new Date().getTime()});
    
   const error = false;
   
   if(!error) {
      resolve();
   } else{
       reject('Error: Something went wrong');
   }  
  },1000);
 });
}

function deletePost(){
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        
        if(myPost.length>0) {
          resolve(myPost.pop());          
        }
        else{
          reject('Error: Array is empty now');
        }
    },1000);
   });
}
createPost({title: 'Post Three', body: 'This is post three'})
     .then(() => {
         getPosts();
         deletePost();
     });

Output(On Screen):
Post One - updated 2.033 seconds ago  //The updated time changes continuously
Post Two - updated 2.033 seconds ago  //The updated time changes continuously
Post Three - updated 1.015 seconds ago //The updated time changes continuously

Post One - updated 5.033 seconds ago  //The updated time changes continuously
Post Two - updated 5.033 seconds ago  //The updated time changes continuously
     

QUESTION C:
Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now. You dont have to use for loop as there are only 3 posts . Just call delete post 3 times.


ANSWER C:
const myPost = [
  {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
  {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

let timerId;

function getPosts(){
    clearInterval(timerId); //CLearing the previous instance of setInterval().
    timerId = setInterval(() => { //It will display the output at regular intervals.
    //let timerId=setInterval(() => { 
      let output = '';
      myPost.forEach((element) => {
        output+=`<li>${element.title} - updated ${(new Date().getTime() - element.createdAt)/1000} seconds ago</li>`; //new Date().getTime() will give the current time in milliseconds
      });
      //console.log(timerId); //For checking how many setInterval function is running
      document.body.innerHTML = output;
     },1000);
}


function createPost(post){
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    myPost.push({...post, createdAt: new Date().getTime()});
    
   const error = false;
   
   if(!error) {
      resolve();
   } else{
       reject('Error: Something went wrong');
   }  
  },1000);
 });
}

function deletePost(){
  return new Promise((resolve,reject) => {
   setTimeout(() => {
       
       if(myPost.length>0) {
         resolve(myPost.pop());          
       }
       else{
         reject('Error: Array is empty now');
       }
   },1000);
  });
}
createPost({title: 'Post Three', body: 'This is post three'})
     .then(() =>{
         getPosts();
         deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {
                   getPosts();
                   deletePost().then(() =>{                   
                   }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
         }).catch(err => console.log(err))
     }).catch(err => console.log(err))

Output(On Screen):
Post One - updated 2.033 seconds ago  //The updated time changes continuously
Post Two - updated 2.033 seconds ago  //The updated time changes continuously
Post Three - updated 1.015 seconds ago //The updated time changes continuously

Post One - updated 3.033 seconds ago  //The updated time changes continuously
Post Two - updated 3.033 seconds ago  //The updated time changes continuously

Post One - updated 4.033 seconds ago  //The updated time changes continuously

                                      //Empty screen

Output(In Console):
Error: Array is empty now


QUESTION D:
Try creating a post (post four) and once the post is created, call delete post after 1 second and delete post 4 .how would you do it. Write the code.

ANSWER D:
const myPost = [
  {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
  {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

let timerId;

function getPosts(){
    clearInterval(timerId); //CLearing the previous instance of setInterval().
    timerId = setInterval(() => { //It will display the output at regular intervals.
    //let timerId=setInterval(() => { 
      let output = '';
      myPost.forEach((element) => {
        output+=`<li>${element.title} - updated ${(new Date().getTime() - element.createdAt)/1000} seconds ago</li>`; //new Date().getTime() will give the current time in milliseconds
      });
      //console.log(timerId); //For checking how many setInterval function is running
      document.body.innerHTML = output;
     },1000);
}


function createPost(post){
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    myPost.push({...post, createdAt: new Date().getTime()});
    
   const error = false;
   
   if(!error) {
      resolve();
   } else{
       reject('Error: Something went wrong');
   }  
  },1000);
 });
}

function deletePost(){
  return new Promise((resolve,reject) => {
   setTimeout(() => {
       
       if(myPost.length>0) {
         resolve(myPost.pop());          
       }
       else{
         reject('Error: Array is empty now');
       }
   },1000);
  });
}
createPost({title: 'Post Three', body: 'This is post three'})
     .then(() =>{
         getPosts();
         deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {
                  createPost({title: 'Post Four', body: 'This is post four'}).then(() => {
                          getPosts();
                          deletePost();
                  }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
         }).catch(err => console.log(err))
     }).catch(err => console.log(err))

Output(On Screen):
Post One - updated 2.033 seconds ago  //The updated time changes continuously
Post Two - updated 2.033 seconds ago  //The updated time changes continuously
Post Three - updated 1.015 seconds ago //The updated time changes continuously

Post One - updated 3.033 seconds ago  //The updated time changes continuously
Post Two - updated 3.033 seconds ago  //The updated time changes continuously

Post One - updated 4.033 seconds ago  //The updated time changes continuously

                                      //empty screen

Post Four - updated 1.033 seconds ago  //The updated time changes continuously

                                       //empty screen

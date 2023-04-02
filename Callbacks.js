Question A:
Implement the code as per the youtuber

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

function createPost(post,callback){
  setTimeout(() => {
    myPost.push(post);
    callback();
  },1000);
}
 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

Output(On Screen):
Post One
Post Two
Post Three


QUESTION B:
Make a new function called create4thPost for adding one more new post "Post Four". create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too.

ANSWER B:
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

function createPost(post,callback){
  setTimeout(() => {
    myPost.push(post);
    callback();
  },1000);
}

function create4thPost(callback){
    callback({title: 'Post Four', body: 'This is post four'}, getPosts);
}
 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
create4thPost(createPost);

Output(On Screen):
Post One
Post Two
Post Three
Post Four


QUESTION C:
Lets also record when the post was created. So now onwards whenever. a new post is created add a new key called createdAt in each post. CreatedAt should have the timestamp of when the post was created. So now your post object would look like { title, body, createdAt}.

ANSWER C:
const myPost = [
  {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
  {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

function getPosts(){
   setTimeout(()=> {
    let output = '';
    myPost.forEach((element) => {
      output+=`<li>${element.title} - ${element.createdAt}</li>`; 
    });
    document.body.innerHTML = output;
   },1000);
}

function createPost(post,callback){
  setTimeout(() => {
    myPost.push({...post, createdAt: new Date().getTime()});
    callback();
  },1000);
}

function create4thPost(callback){
    callback({title: 'Post Four', body: 'This is post four'}, getPosts);
}
 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
create4thPost(createPost);
createPost({title: 'Post Five', body: 'This is post five'}, getPosts);

Output(On Screen):
Post One - 1672721883494
Post Two - 1672721883494
Post Three - 1672721884510
Post Four - 1672721884511
Post Five - 1672721884511


QUESTION D:
On the screen show the user how long back each of the post was edited in seconds ago. Just add "{ current timestamp - postcreated At timestamp }" on each of the post. It should look like the following
Post 1 created 8 seconds ago
Post 2 created 7 seconds ago
Post 3 crated 2 seconds
(The value should keep updating every second )


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

function createPost(post,callback){
  setTimeout(() => {
    myPost.push({...post, createdAt: new Date().getTime()});
    callback();
  },1000);
}

function create4thPost(callback){
    callback({title: 'Post Four', body: 'This is post four'}, getPosts);
}
 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
create4thPost(createPost);
createPost({title: 'Post Five', body: 'This is post five', createdAt: new Date().getTime()}, getPosts);

Output(On Screen):
Post One - updated 27.033 seconds ago  //The updated time changes continuously
Post Two - updated 27.033 seconds ago  //The updated time changes continuously
Post Three - updated 26.015 seconds ago //The updated time changes continuously
Post Four - updated 26.014 seconds ago //The updated time changes continuously
Post Five - updated 26.014 seconds ago //The updated time changes continuously
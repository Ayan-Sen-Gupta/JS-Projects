
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.mssg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
 

  if(nameInput.value==''||emailInput.value=='')
  {
   
   msg.classList.add('error');
   msg.innerHTML='Please fill all the fields';
   setTimeout(()=>msg.remove(),3000);
  }
  else
  {
   
    
    let myObj={
      name:nameInput.value,
      email:emailInput.value
    };    

    axios.post("https://crudcrud.com/api/50011786b48c42d6934a5cf079e70fb0/AppointmentData",myObj)
         .then((response) => {
              showUserOnScreen(response.data);
            
         })
         .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
         })
  } 

   //Clear fields
   nameInput.value='';
   emailInput.value='';
} 
    
window.addEventListener('DOMContentLoaded', onPageLoading); //When the webpage gets loaded

function onPageLoading(e){
   e.preventDefault();

   axios.get("https://crudcrud.com/api/50011786b48c42d6934a5cf079e70fb0/AppointmentData")
        .then((response) =>{

            console.log(response);

            for(let i=0;i<response.data.length;i++){ 
                showExistingUserOnScreen(response.data[i]);
            }
                    
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
        })

}
   

function showExistingUserOnScreen(user){

  let parentNode=document.getElementById('users'); 
    let childHTML=`<li id=${user._id}>${user.name} - ${user.email}
                      <button onclick=deleteUser('${user._id}')>delete user</button> 
                      <button onclick=editUser('${user._id}','${user.email}','${user.name}')>edit user</button></li>`; 
     parentNode.innerHTML=parentNode.innerHTML+childHTML; 

};

        
    function showUserOnScreen(user){

    let parentNode=document.getElementById('users'); 
    let childHTML=`<li id=${user._id}>${user.name} - ${user.email}
                      <button onclick=deleteUser('${user._id}','${user.emailId}')>delete user</button> 
                      <button onclick=editUser('${user._id}','${user.email}','${user.name}')>edit user</button></li>`;  
     parentNode.innerHTML=parentNode.innerHTML+childHTML; 

      }

    function removeUserFromScreen(userId){
      
        let  parentNode=document.getElementById('users'); 
        let childNodeToBeDeleted=document.getElementById(userId); 
        parentNode.removeChild(childNodeToBeDeleted); 

      }  
        
    function deleteUser(userId){ 

       axios.delete(`https://crudcrud.com/api/50011786b48c42d6934a5cf079e70fb0/AppointmentData/${userId}`)
            .then((response) => {
              removeUserFromScreen(userId); 
            })
            .catch((err) => {
              document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
              console.log(err);
            })
        
}

    function editUser(userId,emailId,name){
      
      nameInput.value=name;   
      emailInput.value=emailId;  
      deleteUser(userId);  
}

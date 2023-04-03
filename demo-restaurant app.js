

const myForm = document.querySelector('#my-form');
const dishInput = document.querySelector('#dish');
const priceInput = document.querySelector('#price');
const tableInput = document.querySelector('#table');
const orderList = document.querySelector('#orders');

myForm.addEventListener('submit', onAddingToBill);

async function onAddingToBill(e) {
   
try{
    e.preventDefault();
    
    let myObj={
      dish:dishInput.value,
      price:priceInput.value,
      table:tableInput.value
    };    

    const response = await axios.post("https://crudcrud.com/api/745eb8ebb0ca409da3015cf1fc0ec10b/OrderData",myObj)

    console.log(response);
    showOrderOnScreen(response.data);

  }catch(err){
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
         }

   dishInput.value='';
   priceInput.value='';
   tableInput.value='Select';
} 


window.addEventListener('DOMContentLoaded', onPageLoading);

async function onPageLoading(e){

  try{
   e.preventDefault();

   const response = await axios.get("https://crudcrud.com/api/745eb8ebb0ca409da3015cf1fc0ec10b/OrderData")

            for(let i=0;i<response.data.length;i++){
                showExistingOrderOnScreen(response.data[i]);
            }
                    
      }catch(err){
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
            console.log(err);
        }

}

      
function showOrderOnScreen(order){

      let parentNode=document.getElementById('orders'); 
      let childHTML=`<li id=${order._id}>${order.table} => ${order.dish} - Rs.${order.price} 
                        <button onclick=deleteOrder('${order._id}')>delete order</button> 
                        <button onclick=editOrder('${order._id}','${order.dish}','${order.price}','${order.table}')>edit order</button></li>`; 
       parentNode.innerHTML=parentNode.innerHTML+childHTML;
  
        }



function showExistingOrderOnScreen(order){
    let parentNode=document.getElementById('orders'); 
      let childHTML=`<li id=${order._id}>${order.table} => ${order.dish} - Rs.${order.price}
                        <button onclick=deleteOrder('${order._id}')>delete order</button> 
                        <button onclick=editOrder('${order._id}','${order.dish}','${order.price}','${order.table}')>edit order</button></li>`; 
       parentNode.innerHTML=parentNode.innerHTML+childHTML;
  };

  
    
function removeOrderFromScreen(orderId){
      
        let  parentNode=document.getElementById('orders'); 
        let childNodeToBeDeleted=document.getElementById(orderId); 
        parentNode.removeChild(childNodeToBeDeleted); 

      } 

        
   async function deleteOrder(orderId){

    try{
  
    const response = await axios.delete(`https://crudcrud.com/api/745eb8ebb0ca409da3015cf1fc0ec10b/OrderData/${orderId}`)
    removeOrderFromScreen(orderId);               
              
        }catch(err){
              document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>";
              console.log(err);
            }
        
}


    function editOrder(orderId,dish,price,table){  
      dishInput.value=dish; 
      priceInput.value=price;
      tableInput.value=table; 
      deleteOrder(orderId);  
       
}
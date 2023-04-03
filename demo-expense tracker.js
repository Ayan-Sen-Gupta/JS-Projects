const myForm = document.querySelector('#my-form');
const itemNumberInput = document.querySelector('#item-number'); 
const amountInput = document.querySelector('#expense-amount');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');

myForm.addEventListener('submit', onAddingExpense);

function onAddingExpense(e){
  
    e.preventDefault();

        let myObj = {
            item_number:itemNumberInput.value,
            expense_amount: amountInput.value,
            description: descriptionInput.value,
            category: categoryInput.value
        };

        showExpenseOnScreen(myObj);
        let myObj_serialised=JSON.stringify(myObj);
        localStorage.setItem(myObj.item_number, myObj_serialised);


        
        itemNumberInput.value='';
        amountInput.value='';
        descriptionInput.value='';
        categoryInput.value='';

}


    window.addEventListener('DOMContentLoaded', onPageLoading);

    function onPageLoading(e){
        e.preventDefault();

        let myKeys=Object.keys(localStorage);
        
        myKeys.forEach((key) =>{
            let stringifiedValue=localStorage.getItem(key); 
            let expenseDetails=JSON.parse(stringifiedValue);
            showExistingExpenseOnScreen(expenseDetails);
        });

        
    }


    function showExistingExpenseOnScreen(expense){ 
        let parentNode=document.getElementById('expenses');
        let childHTML=`<li id=${expense.item_number}>${expense.item_number}) Rs.${expense.expense_amount} - ${expense.description} - ${expense.category}
                        <button onclick=editExpense(${expense.item_number},${expense.expense_amount},'${expense.description}','${expense.category}')>Edit Expense</button>
                        <button onclick=deleteExpense(${expense.item_number})>Delete Expense</button></li>`;
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
    }


     function showExpenseOnScreen(expense){ 
        if(localStorage.getItem(expense.item_number))
            removeExpenseFromScreen(expense.item_number); 
            
        let parentNode=document.getElementById('expenses');
        let childHTML=`<li id=${expense.item_number}>${expense.item_number}) Rs.${expense.expense_amount} - ${expense.description} - ${expense.category}
                        <button onclick=editExpense(${expense.item_number},${expense.expense_amount},'${expense.description}','${expense.category}')>Edit Expense</button>
                        <button onclick=deleteExpense(${expense.item_number})>Delete Expense</button></li>`;
        parentNode.innerHTML=parentNode.innerHTML+childHTML;
    }


     function removeExpenseFromScreen(itemNo){ 
        let parentNode = document.getElementById('expenses');
        let childNodeToBeDeleted= document.getElementById(itemNo);
        parentNode.removeChild(childNodeToBeDeleted);         
    }


     function deleteExpense(itemNo){
        localStorage.removeItem(itemNo);
        removeExpenseFromScreen(itemNo);
    }


     function editExpense(itemNo,expenseAmount,description,category){
        
        itemNumberInput.value=itemNo;
        amountInput.value=expenseAmount;
        descriptionInput.value=description;
        categoryInput.value=category;
        
        

        deleteExpense(itemNo);
    }
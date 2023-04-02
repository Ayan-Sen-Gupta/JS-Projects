Question:
- Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
- Write a function to check whether the student is eligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
- Create 5 students with different names and age.
- Write a function which keeps track of the number of students created.


- Take the student class which you made up and write a function called eligible for placements which basically takes the minimum board marks required by a candidate to sit for the company coming for placement and it returns a fat arrow function.
- The fat arrow function takes age as an argument and returns true if the given student has board marks greater than minimum board marks required by company and is above the required age set by the company.[If stuck check the hint 2].
- Run the code across all the students and print the names of eligible students.

Solution:
class student{
    static count=0; 
    constructor(name,age, phone_no,marks){
       this.name=name;
       this.age=age;
       this.phone_no=phone_no;
       this.marks=marks;
        student.numOfStudents();
    }
  
     
     static numOfStudents(){
        return student.count++; //5 because here, it returns the previous value of 'count' and then increments that value.
        // return(student.count=student.count+1); //6 because here, it will increment the value of 'count' and then return that value.
  }
     
     eligibility(){
    if(this.marks>=40)
        console.log(this.name + ' is eligible for college');
    else
        console.log(this.name + ' is not eligible for college');
   }

   eligibleForPlacements(minMarks){    
     return (minAge) => {
           if(this.marks>minMarks && this.age>minAge)
             console.log(this.name + ' is eligible for placements');
            else
             console.log(this.name + ' is not eligible for placements');
    }
   }
  }
  
  let S1 = new student('Harry', 29, 999, 60);
  let S2 = new student('Ron', 28, 888, 70);
  let S3 = new student('Hermoine', 27, 777, 80);
  let S4 = new student('Neville', 26, 666, 30);
  let S5 = new student('Draco', 25, 555, 20);

  console.log(student.numOfStudents()); //When we call the function separately, the function will be executed one more time.
  S1.eligibility();
  S2.eligibility();
  S3.eligibility();
  S4.eligibility();
  S5.eligibility();

  S1.eligibleForPlacements(50)(26);
  S2.eligibleForPlacements(50)(26);
  S3.eligibleForPlacements(50)(26);
  S4.eligibleForPlacements(50)(26);
  S5.eligibleForPlacements(50)(26);
const employ = [

    { name: 'Veer Singh', age: 41, salary: 97500 },

    { name: 'Yash Pratap Singh', age: 72, salary: 78800 },

    { name: 'Gaurav Pratap Singh', age: 61, salary: 78000 },

    { name: 'Shailesh Mishra', age: 35, salary: 32000 }

]
let empList=employ.map((value) =>{

    if(value.age>60){

        value.pf=value.salary*0.12
    }
    return value
    })
   console.log(empList)
let bonus = 5000;

function calculateSalery(isPermanent) {
    let salary = 40000;
    if(isPermanent){
        salary += bonus; 
    }

    console.log("Total Salary: ", salary);
}

calculateSalery(true);
calculateSalery(false);

console.log("Global Bonus :" , bonus );
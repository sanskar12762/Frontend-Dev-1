
const Data = [                    // dictonary ke tarah
    {"user":"Ekta","age":20},
    {"id":10},
    {invalid},
    {"user":"Minna","age":"22"}
];

const clean = [];
const errors = [];

for (let i = 0; i < Data.length; i++) {
    try {
        let obj = JSON.parse(Data[i]);

        if (!obj.user || !obj.age) throw "Missing keys";

        obj.age = Number(obj.age);
        if (Number.isNaN(obj.age)) throw "Invalid age";

        clean.push(obj);
        console.log("Valid:", obj);
    } catch (err) {
        errors.push({ line: i, err });
        console.log("Error at line", i, err);
    }
}

console.log(clean);
console.log(errors);   //print karne ke liye
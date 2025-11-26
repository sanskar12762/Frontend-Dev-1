let str = "Great product! Fast delivery and amazing sound quality!";

let counts_words = str.trim().split(/\s+/).length;


let feedback = str.includes("bad") || str.includes("poor");

if(feedback){
    console.log("Need Improvement");
}
else{
    console.log("Positive FeedBack");
}

console.log(`Numbers of words in string is : ${counts_words}`);

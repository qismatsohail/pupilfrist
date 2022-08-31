// let prefix = "Mohammed ";
// let fristName = "Sohail";
// let greetings = prefix + fristName;
// let greetings2 = prefix.concat( fristName )
// let word = "world";

// if (word.length < 5) {
//   console.log("less than 5");
// } else if (word.length > 5) {
//   console.log("more than 5");
// } else {
//   console.log("exactly 5");
// }

// let password = "1231111111111";
// if (password.length >= 8){
//     console.log("youu are in");
// }
// else{
//     console.log("youu are not in");
// }

// let email = "example@abcd.com"
// let nogmail = email.includes("@gmail.com");
// if (nogmail){
//     console.log("no @gmail.com")
// }
// else{
//     console.log("success")
// }
// let a = "ILoveProgramming"; 
// let result = a.substring(-3, 3);
// console.log(result);


// let a = "sohail bhai";
// let b = "sohailbhai";
// if (a === b){
//     console.log("login sucessful");
// }
// else{
//     // console.log("a; " + a);
//     // console.log("b; " + b);
//     console.log("not susscesful")
// }

// alert("mohammed sohail")

// function submitfunction(){
//     alert("thankyou")
// }

// let names = ["jacob", "hari", "jasim"];
// names.sort();
// console.log(names.sort());

// let sohail1 = "6303.704.735";
// let findsohail1 = sohail1.split(".");
// if (findsohail1[0] === "6303"){
//     console.log("ok good");
// }
// else{
//     console.log("not good");
// }

// Math.pow(2,2);

// 3.14 * Math.pow(10, 2);

// let a = 100;
// (a > 0) && (a > 99);


// let password1 = "1234567";
// let password2 = "1";
// let passwordMatch = password1 === password2;
// let passwordRequiredLenght = password1.length >= 8;
// let valid = passwordMatch && passwordRequiredLenght;

// if (valid){
//     console.log("password match");
// }
// else{
//     console.log("password not match");
// }

// if (!passwordMatch){
//     console.log("fix: password did not match");
// }

// if (!passwordRequiredLenght){
//     console.log("fix need 8 long");
// }

// let ipAddress = "172.32.0.1";
// // let ipAddress = "10.1.2.3";
// let octets = ipAddress.split(".");
// let classA = octets[0] == "10";
// let oct2 = Number(octets[1])
// let classB = octets[0] == "172" && oct2 >= 16 && oct2 <= 31;
// let classC = octets[0] == "192" && octets[1] == "168";

// let privateIp = classA || classB || classC;

// console.log(privateIp);

// let isValidPassphrase = (sohail) => {
//     let words = sohail.split(".");
//     let minimumFourWords = words.length >= 4;
//     let minimumTwoCharsEach = words.every(word => word.length >= 2);
//     let conditionsSatisfied = words && minimumTwoCharsEach;
//     return conditionsSatisfied;
// }
// console.log(isValidPassphrase("he is very good boy"));
// console.log(isValidPassphrase("h"));
// module.exports = isValidPassphrase;


    
// function WordCount(str) { 
//     return str.split(" ").length.every >= 2;
//   }
  
//   console.log(WordCount("he"));

// console.log("i am sohail");
// "i am".concat("sohail")

// let name = () => console.log("Mohammed Sohal");
// name()

// let greetHello = (uName) => console.log("Hello " + uName);
// greetHello("sohail")

// let uAge = (age) => console.log("my age is " + age);
// uAge("20");

// let helloAndGoodbye = (fristName, lastName) => {
//     let fullName = fristName + " " + lastName;
//     console.log("hello, " + fullName);
//     console.log("goodbye");
// };
// helloAndGoodbye("sohail", "moahmmed");

// let l = "i am ".concat("sohail from hyderbad i was born on 2003 april 29");
// console.log(l);

// console.log(isNaN("20"));

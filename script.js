// Part 2: Expanding Functionality

let parentArray = [

]

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let row = csv.split("\n")
for(const rows of row){
    let cells = rows.split(",")
    parentArray.push(cells)
}

console.log(parentArray)

// Part 3: Transforming Data

let headers = parentArray[0];
let finalResult = [];

for(let i = 1; i < parentArray.length; i++){
    const obj = {};

    for(let j = 0; j < headers.length; j++){
        obj[headers[j].toLowerCase()] = parentArray[i][j]
    }
    finalResult.push(obj)
}

console.log(finalResult)

// Part 4: Sorting and Manipulating Data
// 1. Pop 2. 

finalResult.pop()
finalResult.splice(1, 0, { id: "48", name: "Barry", 
occupation: "Runner", age: "25" })
finalResult.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }
)

console.log(finalResult)

// Average age

let averageAge = 



console.log(finalResult[5].age)
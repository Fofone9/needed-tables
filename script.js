// const form = document.getElementById("form");
// const btn = document.getElementById("btn")
// btn.addEventListener("click", sendInfo)

// function sendInfo(){
//     const conf = document.getElementsByClassName("conf")
//     let confArray = new Array();
//     for(let i = 0; i<conf.length;i++) {
//         if(isNaN(+(conf[i].value)))
//             {
//                 alert("вводить можно только цифры!!!")
//                 return false;
//             }
//         else if(conf[i].value=='')
//         {
//             alert("не все поля введены!!!")
//             return false;
//         }
//         else
//             confArray.push(+conf[i].value);
//         }

//     const diplom = document.getElementsByClassName("dip")
//     let diplomArray = new Array();
//     for(let i = 0; i<conf.length;i++){
//         if(isNaN(+(diplom[i].value)))
//             {
//                 alert("вводить можно только цифры!!!")
//                 return false;
//             }
//         else if(diplom[i].value=='')
//         {
//             alert("не все поля введены!!!")
//             return false;
//         }
//         else
//             diplomArray.push(+diplom[i].value);
//         }

//     const some = document.getElementsByClassName("some")
//     let someArray = new Array();
//     for(let i = 0; i<conf.length;i++){
//         if(isNaN(+(some[i].value)))
//             {
//                 alert("вводить можно только цифры!!!")
//                 return false;
//             }
//         else if(some[i].value=='')
//             {
//                 alert("не все поля введены!!!")
//                 return false;
//             }
//         else
//             someArray.push(+some[i].value);
//         }

//     const another = document.getElementsByClassName("another")
//     let anotherArray = new Array();
//     for(let i = 0; i<conf.length;i++){
//         if(isNaN(+(another[i].value)))
//             {
//                 alert("вводить можно только цифры!!!")
//                 return false;
//             }
//         else if(another[i].value=='')
//             {
//                 alert("не все поля введены!!!")
//                 return false;
//             }
//         else
//             anotherArray.push(+another[i].value);
//         }

//     let data = {
//         "conference":{
//             "some":confArray[0],
//             "region":confArray[1],
//             "russia":confArray[2],
//             "international":confArray[3]

//         },
//         "diplom":{
//             "some":diplomArray[0],
//             "region":diplomArray[1],
//             "russia":diplomArray[2],
//             "international":diplomArray[3]

//         },
//         "some":{
//             "some":someArray[0],
//             "region":someArray[1],
//             "russia":someArray[2],
//             "international":someArray[3]

//         },
//         "another":{
//             "some":anotherArray[0],
//             "region":anotherArray[1],
//             "russia":anotherArray[2],
//             "international":anotherArray[3]

//         }
//     }
//     console.log(JSON.stringify(data))
//     return false;
// }
let someObj = {
    "headers":["Вуз","Республика","Россия","Международное"],
    "rows":{
        "конференция":[null, 3,4,5],
        "статься":[4,4,4,4]
    }
}
const body = document.getElementById('table-body');
const header = document.getElementById('table-header');
let newHeader = document.createElement('tr');
newHeader.className = 'header';
newHeader.innerHTML += `
        <td>Вид достижения</td>
`;
for(let i = 0; i<someObj["headers"].length;i++){
    newHeader.innerHTML += `
        <td>${someObj["headers"][i]}</td>
`;
}
header.append(newHeader);

for(key in someObj["rows"]){
    let newTr = document.createElement('tr');
    newTr.className = 'compitition';
    newTr.innerHTML += `
    <td>${key}</td>
    `;
    for (let i=0; i<someObj["rows"][key].length;i++){
        if(someObj["rows"][key][i] == null)
        newTr.innerHTML += `
            <td><input class = "input ${key}"></td>
        `;
        else  newTr.innerHTML += `
            <td><input class = "input ${key}" value = "${someObj["rows"][key][i]}"></td>
        `;
    }
    body.append(newTr);
}

const btn = document.getElementById("btn");
let newAnswer = {
    "headers": someObj["headers"],
    "rows":{}
};
btn.addEventListener("click", (event)=>{
    event.preventDefault();
    for(key in someObj["rows"]){
        const temp = document.getElementsByClassName(key);
        let compititionValues = [];
        for( let i = 0; i<someObj["rows"][key].length;i++){
            compititionValues.push(temp[i].value);
        }
        newAnswer['rows'][key]=compititionValues;
    }
    console.log(newAnswer);
});


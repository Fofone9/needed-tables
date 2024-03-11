const example = {
    name: "повышенная госсударственная академическая стипендия в научно-исследовательской деятельности",
    description: "описание",
    levels:[
        "университет",
        "регион",
        "всероссийское",
        "международное"
    ],
    blocks:{
        '1':{
            name:"Награда за результат научно-исследовательской работы, проводимой студентом1",
            configuration:{
                "НИР":[0,0,0,0],
                "Конфференция":[3,3,3,3]
            }
        },
        '2':{
            name:"Награда за результат научно-исследовательской работы, проводимой студентом2",
            configuration:{
                "НИР":[0,0,0,0],
                "Конфференция":[3,3,3,3]
            }
        },
        '3':{
            name:"Награда за результат научно-исследовательской работы, проводимой студентом3",
            configuration:{
                "НИР":[0,0,0,0],
                "Конфференция":[3,3,3,3]
            }
        },

    }
};
{/* <table border="0" id="form">
        <thead id="table-header">
    
        </thead>
        <tbody id="table-body">
            
        </tbody>
        <input type="submit" class ="btn" id="btn">    
    </table> */}
const form = document.getElementById('form');
const container = document.getElementById("table_body");
const levels = example["levels"]

for (block in example['blocks'])
// создание таблицы
{
    const table = document.createElement('table');
    table.className = "table";
// создание заголовка таблицы
    const caption = document.createElement("caption");
    caption.className = 'table_caption';
    caption.innerHTML = example['blocks'][block]['name'];
    table.append(caption);

    // создание заголовков столбцов таблицы
    const tableHead = document.createElement("thead")
    tableHead.className = "table_header"
    const box = document.createElement('td')
    box.className = 'first_row_elem';
    box.innerHTML = 'мероприятие';
    tableHead.append(box)
    for(let i in levels){
        const box = document.createElement('td')
        box.className = 'row_elem';
        box.innerHTML = levels[i];
        tableHead.append(box)
    }
    table.append(tableHead);

    // добавляем строки

    const lines = example['blocks'][block]['configuration'];
    for (let key in lines){
        const tableLine = document.createElement('tr');
        tableLine.className='table_line';
        const box = document.createElement('td');
        box.className = 'first_row_elem';
        box.innerHTML = key;
        tableLine.append(box);
        let elems = lines[key]
        elems.forEach(element => {
            const box = document.createElement('td');
            box.className = 'row_elem';
            box.innerHTML = `<input class = "input ${key}" value = ${element} />`;
            tableLine.append(box);
        });
        table.append(tableLine);
    }

    container.append(table);
}



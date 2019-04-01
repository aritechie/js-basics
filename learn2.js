const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with the boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//for loop in an array
for(let i = 0; i < todos.length; i++)
{
    console.log(todos[i].text);
}


//for of loop method
for(let todo of todos) {
    console.log(todo.id);
}

// forEach, map, filter
todos.forEach(function(todo){
console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
}
);    
 console.log(todoText);


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted===true;
}
);    
 console.log(todoCompleted);
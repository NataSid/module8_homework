//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
//
// XML:
//
//<list>
//  <student>
//    <name lang="en">
//      <first>Ivan</first>
//      <second>Ivanov</second>
//    </name>
//    <age>35</age>
//    <prof>teacher</prof>
//  </student>
//  <student>
//    <name lang="ru">
//      <first>Петр</first>
//      <second>Петров</second>
//    </name>
//    <age>58</age>
//    <prof>driver</prof>
//  </student>
//</list>
//
//JS-объект:
//
//{
//  list: [
//    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//  ]
//}

const jsonString =`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

let rezult = { 
 list: []
};

const data = JSON.parse(jsonString);
const list = data.list;
list.forEach(elem => {
 let list = {
   name: elem.name,
   age: Number(elem.age),
   prof: elem.prof,   
  }
rezult.list.push(list)
});

console.log(rezult)

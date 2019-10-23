// Задание 4

// Напиши класс StringBuilder. На вход он получает один параметр - строку, 
// которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder{
  constructor(value){
    this.value1 = value;
  }
  get value(){
    return this.value1
  }
  set value(item){
    return this.value1 = item
  }
  append (item){
    return this.value1 = `${this.value}${item}`
  }
  prepend (item){
    return this.value1 = `${item}${this.value}`
}
  pad (item){
  return this.value1 = `${item}${this.value}${item}`
  }
}
      
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
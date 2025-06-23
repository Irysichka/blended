// // 1. 

// // 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector("body");
// console.log(body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.getElementById("title");
// console.log(title);

// // 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
// console.log(list);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const allData = document.querySelectorAll("[data-topic]");
// console.log(allData);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstEl = allData[0];
// console.log(firstEl);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastIndexEl = allData.length - 1;
// const lastEl = allData[lastIndexEl];
// console.log(lastEl);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const next = document.querySelector("h1");
// const nextEl = next.nextElementSibling;
// console.log(nextEl);

// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3 = document.querySelectorAll("h3");
// h3.forEach(item => {
//     console.log(item.textContent);
// })

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const changeClass = document.querySelectorAll("h3");
// h3.forEach(element => {
//     element.classList.add("active");
//     element.style.color = "red";
// }
// )
// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const Li = document.querySelector('[data-topic ="navigation"]')
// console.log(Li);


// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// firstEl.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const changeText = Li.querySelector('p').textContent = "Я змінив тут текст!";


// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";

// const findElement = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(findElement);


// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// findElement.style.backgroundColor = "lightblue"

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const findTitle = document.querySelector(".completed")

// console.log(findTitle)

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// const nextElement = findTitle.closest("li")
// nextElement.remove()

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const par = document.createElement("p");
// par.textContent = "Об'єктна модель документа (Document Object Model)";
// list.prepend(par);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newItem = document.createElement("li");
// const newItemList = document.createElement("h3")
// newItemList.textContent = "Властивість innerHTML";
// const newText = document.querySelector("p");
// newText.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// newItem.appendChild(newItemList);
// newItem.appendChild(newText);

// list.appendChild(newItem);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const newItemmList = `
// <li data-topic="navigation">
//                 <h3>Властивість innerHTML</h3>
//                 <p>
//                     Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.
//                 </p>

// `
// list.insertAdjacentHTML("beforeend", newItemmList)
// // 20 - очисти список
list.remove();

// 2.

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const container = document.querySelector(".number-container");

// for (let i = 0; i < 100; i++){
//     const block = document.createElement("div");
    
//     block.classList.add("numberContainer");
//     block.textContent = randomNumber();
//     if (block.textContent % 2 === 0) {
//         block.classList.add("even")
//     } else {
//         block.classList.add("odd")
//     }
//     container.appendChild(block);
// }


// 3.

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// const input = document.querySelector(".js-username-input");
// input.addEventListener("input", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     if (input.value.length < 6) {
//         input.classList.add("error");

//     } else {
//         input.classList.replace("error", "success");
//     }
// }




// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener("focus", onFocus);

// function onFocus(){
//     if (input.value === "") {
//         input.style.outline = '3px solid red';
//     } else {
//       input.style.outline = '3px solid green';
// }
// }


// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener("blur", onFocus);

// function onFocus(){
//     if (input.value === "") {
//         input.style.outline = '3px solid red';
//     } else {
//       input.style.outline = '3px solid lime';
// }
// }


// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector(".js-contact-form")
// form.addEventListener("submit", handleSubmit);
// const input = document.querySelector(".js-username-input");
// const checkbox = document.querySelector(".js-policy-checkbox")
// const span = document.querySelector(".js-username-output")


// input.addEventListener("input", handleInput);

// function handleInput() {
//     span.textContent = input.value === "" ? "Anonymous" : input.value;
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     if (input.value.trim() !== "" || checkbox.checked) {
//         const userName = {
//             email: input.value.trim(),
//     }
//         console.log(userName);
//     span.textContent = input.value;

//         form.reset();
//          span.textContent = "Anonymous";
//     } else {
//         alert ("Error. You don`t write your name!")
//     }
    
// }




// 4. 

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
 

const decrease = document.querySelector(".js-decrease");
const increase = document.querySelector(".js-increase");
const box = document.querySelector(".box")

decrease.addEventListener("click", decreaseClick);
increase.addEventListener("click", increaseClick);

let size = 50;

function decreaseClick(event) {
    event.preventDefault();
        size -= 20;
       box.style.width = `${size}px`;
    box.style.height = `${size}px`; 

    
}


function increaseClick(event) {
    event.preventDefault();
    size += 20;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
}



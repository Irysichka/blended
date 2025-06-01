// 1. 

// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector("body");
console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.getElementById("title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allData = document.querySelectorAll("[data-topic]");
console.log(allData);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstEl = allData[0];
console.log(firstEl);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastIndexEl = allData.length - 1;
const lastEl = allData[lastIndexEl];
console.log(lastEl);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const next = document.querySelector("h1");
const nextEl = next.nextElementSibling;
console.log(nextEl);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3 = document.querySelectorAll("h3");
h3.forEach(item => {
    console.log(item.textContent);
})

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const changeClass = document.querySelectorAll("h3");
h3.forEach(element => {
    element.classList.add("active");
    element.style.color = "red";
}
)
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const Li = document.querySelector('[data-topic ="navigation"]')
console.log(Li);


// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
firstEl.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const changeText = Li.querySelector('p').textContent = "Я змінив тут текст!";


// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";

const findElement = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(findElement);


// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

findElement.style.backgroundColor = "lightblue"

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const findTitle = document.querySelector(".completed")

console.log(findTitle)

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

const nextElement = findTitle.closest("li")
nextElement.remove()

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"


// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список










// 2.

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;








// 3.

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

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






// 4. 

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
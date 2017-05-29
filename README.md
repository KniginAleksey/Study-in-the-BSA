<h2>Домашнє завдання. Lecture 1 - Git</h2>

Створити репозиторій на GitHub'і та додати в основну гілку текстовий файл довільної назви і щоб його вмістом була якась стаття, яка тобі сподобалась останнім часом або ж викликала резонанс у суспільстві, чи улюблений уривок з книжки тощо. Цей текст буде першим коммітом до репозиторію.

Завдання полягає в тому, щоб відредагувати помилки в статті (якщо вони є — можна спеллчекером прогнати, наприклад) і додати свою думку стосовно вибраної теми у вигляді коментарів. Можна навіть додати статтю вже з коментарями інших людей і відповісти їм (десь серйозно, десь мемчиком, а десь самому пожартувати) — творчий підхід вітається, але не є обов'язковим. Так само і форматування тексту — markdown для читабельності не буде лишнім, але й не вимагається.

Оцінюватись буде робочий процес (той самий GitKraken дуже гарно намалює, що відбувалося):

1) які гілки були створені
2) чи для кожного коментаря була окрема гілка чи одна для всіх
3) чи впроваджувалися зміни до власних коментарів і як називались гілки, в яких впроваджувались ці зміни
4) чи використовувались такі функції GitHub як Issues, Projects, Pull Requests.

Зробіть два таких текстових файли, будь ласка, по статті на кожен ("нам нужно больше веток, хозяин!")


<h2>Домашнє завдання. Lecture 2 - JS</h2>

Створити класс “Fighter”. Клас повиненин приймати значення name, power і health. Також клас повинен мати методи “setDamage” та “hit”.

Метод “setDamage” приймає значення “damage” і наносить урон змінюючи значення health (health = health - damage), і виводить в консоль строку “ health: ”.

Метод “hit” приймає значення “enemy”, “point”, і в середині викликає метод переданого обекту “enemy.setDamage(damage)”. “damage” вираховується наступним чином - damage = point * power, де point - змінний параметр, прийнятий в функцію "fight", power - це властивість об'єкту який наносить урон.

Створити клас ImprovedFighter, який буде наслідуватися від класу Fighter, з його властивостями і методами.

Для цього класу створити метод doubleHit, який буде викликати наслідуваний метод “hit”, і передавати туди подвоєне значення “point”.

Від обох класів породити по екземпляру відповідно fighter, improvedFighter.

Створити функцію fight, яка прийматиме параметри - fighter, improvedFighter, і point.

fight може приймати довільну кількість параметрів. Наприклад, fight(fighter, improvedFighter, 25, 13, 45), де point = [25, 13, 45].

Ця функція запускатиме процес гри: гравці по черзі наносять удар один одному за допомогою методу hit, що приймає відповідне значення point. Якщо один із них помирає (health = 0), то гра закінчується і результат виводиться в консоль.

При виконанні домашнього завдання необхідно використати: - block scoping (let) - spread / rest operator - default parameters - string interpolation - arrow functions - classes + inheritance + super


<h2>Домашнє завдання.Lecture 3 - Mongo DB</h2>

Установить mongodb.

Скачать файл results.json. (https://www.dropbox.com/s/0enj7o0h33fdgzn/dataSample.json?dl=0)

Выполнить команду:

mongoimport --db yourDbName --collection yourCollectionName --file ~/results.json --jsonArray, где:

~/results.json - Ваш путь к файлу yourDbName - имя Вашей базы данных yourCollectionName - имя Вашей коллекции Запустить консоль командой mongo.

Выполнить команду use yourDbName.

написать следующие запросы:

Написать запрос для поиска всех студентов, у которых score > 87% и < 93% по любому из типов выполненных заданий.<br>
Написать запрос-агрегацию для выборки всех студентов, у которых результат по экзамену (type: "exam") более 90% (использование unwind)<br>
Студентам с именем Dusti Lemmond добавить поле “accepted” со значением true.
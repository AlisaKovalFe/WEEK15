Ответы на тест

1.

2. через тернарный оператов
(time < 10) ? alert('Доброе утро!') : alert('Добрый день!');

3. да, выведется, так как '0' - это true

4. (x < 10 && y > 1) - true
    (x == 5 || y == 5) - false
    !(x == y) = true

5. запись button.onclick = hello() некорректна, так как добавление этих скобок вызывает функцию, результатом которой будет underfined, так как эта функци ничего не возвращает.
Нужно написать так:
    button.onclick = hello;
    fuction hello() {
        alert('пример')
    }

6. События клавиатуры - событие keydown происходит при нажатии клавиши, а keyup – при отпускании.    



9. Операторы сравнения: 

    Больше/меньше: a > b, a < b.
    Больше/меньше или равно: a >= b, a <= b.
    Равно: a == b. 
    Не равно: != b.

    Равно: a == b
    Не равно != b.
    Больше чем: a > b

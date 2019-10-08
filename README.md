# Веб флэш-карты (Flashcards)

## Общая информация 
Мы собираемся создать веб-приложение для флэш-карт. Наше приложение предоставит пользователям возможность использования флэш-карты.  Пользователь выберет колоду и сыграет партию с флэш-картами.

Это будет наше самое сложное веб-приложение на текущем этапе.  Помимо преодоления технических препятствий, данная задача также включает в себя элементы управления производством.  Мы научимся управлять сложными проектами, поскольку проекты растут и становятся более дифференцированными как со стороны дизайна, так и со стороны разработки. Нам нужно распределять задания и работать в команде.  Как и в реальном мире, мы также сталкиваемся с неполными и неоднозначными техническими спецификациями. 


## Releases 
### Release 0: Создайте MVP
 Мы начнем с фокусировки на продукте с минимальной функциональностью (MVP).  Существует много интересных функций, которые может включать приложение для флэш-карт, но давайте начнем с основных функциональных возможностей.  У нас есть определенные требования и описание нашего приложения.  Они могут быть не такими полными и подробными, как хотелось бы; нам нужно заполнить некоторые существующие пробелы. 

**История пользователя:** Как пользователь я посещаю домашнюю страницу и вижу список колод.  Я нажимаю на название колоды и играю партию с этой колодой.  После окончания игры я вижу статистику о моих результатах.  Если я войду в систему, я могу зайти в мой профиль, чтобы просмотреть статистику всех сыгранных мной игр. 

**Описание раунда:** После того, как пользователь выбирает колоду, начинается еще одна партия.  У нас есть специфические требования к тому, что должно произойти, когда пользователь играет партию. 

- Пользователь использует каждую карту в колоде. 
- Карты воспроизводятся в произвольном порядке. 
-  По каждой карте пользователю отображается вопрос, и он отвечает, указывая ответ. 
- После предоставления ответа пользователь узнает, правильно ли было угадано или нет, и дается правильный ответ.
 - Игра продолжается до тех пор, пока каждая карта не будет отгадана правильно - при неправильном ответе карты отображаются повторно. 

**Описание статистики партии:** После того, как пользователь завершит партию, пользователю должна быть предоставлена статистика по этой партии.  У нас есть конкретные требования к тому, какая статистика должна отображаться. 

- Название колоды. 
- Количество карточек, получивших правильный ответ с первого раза по сравнению с количеством карточек в колоде.
 - Общее количество поданных ответов. 

**Описание профиля:** Зарегистрированные пользователи должны иметь страницу профиля, которая демонстрирует историю использования флэш-карт. 

- Статистика должна быть доступна для всех раундов. 
- Статистика должна отображаться для каждой колоды и в хронологическом порядке. 
- Обязательные данные по каждой партии - это дата партии, количество карточек в колоде, количество карточек, получивших правильный ответ с первого раза, и общее количество  поданных ответов, необходимых для завершения раунда. 

**Макеты:** У нас есть некоторые макеты, которые дают представление о том, как наши страницы должны выглядеть. 

- [Домашняя страница](mockups/homepage.png) 
- [Отображение карты пользователю](mockups/display-a-card.png) 
- [Окончательная статистика по партии](mockups/round-statistics.png) 
- [Страница профиля](mockups/profile.png) 

Мы хотим добиться полного понимания приложения, которое нам нужно разработать.  Как только мы поймем, что от нас ожидается, мы сможем разобраться, как достичь поставленной цели.  Мы будем принимать много решений.  Возможно, мы примем правильное решение, возможно, неправильное.  Мы команда, и нам нужно общаться и сотрудничать друг с другом. И, скорее всего, корректировать наши действия по мере необходимости. 

*Примечание:* Скорее всего, нам, как минимум, понадобятся, следующие модели: `User`, `Deck`, `Card`, `Round`, и `Guess`.


### Release 1: Дополнительные возможности.
Благодаря нашему MVC мы можем добавить дополнительные функции для улучшения нашего приложения.  У нас есть небольшой список пожеланий, который мы можем реализовать. Или, может быть, у нас есть функция или две, которые мы хотели бы добавить от себя. 

**Созданные пользователем колоды::** В MVC пользователи могли выбрать уже существующие колоды для начала игры.  Было бы неплохо, если бы пользователи могли создавать свои собственные колоды с заданными пользователем картами.  Кроме того, пользователи должны иметь возможность отмечать колоду как пометкой "конфиденциально", чтобы только они могли использовать принадлежащие им колоды. 

**Визуализировать статистику профиля:** В MVC статистика сыгранных партий отображается в виде таблицы.  Было бы неплохо, если бы пользователи могли отслеживать их прогресс со временем в визуальном формате - возможно, в графиках, сгенерированных с использованием библиотеки JavaScript [d3.js JavaScript](http://d3js.org/). 


**Список колод:** В MVC все колоды перечислены на главной странице.  Было бы неплохо, если бы колоды имели четкую организацию: список самых новых колод, список наиболее часто играемых колод и т. д.  То есть мы можем выделить колоды в группы для пользователей.

**Подходит для мобильного телефона:** В MVC мы разработали наш сайт для отображения на ноутбуке, настольном компьютере или другом более крупном экранном устройстве.  Было бы неплохо, если бы наши макеты были [адаптивными](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/): соответствовали размерам экранов устройств, чтобы пользователи могли легко использовать приложение на их телефонах. 


### Release 2: Тестирование 
Если мы не писали тесты по мере работы, не использовали Test-driven подход (что было бы лучше всего), то сейчас самое время добавить тесты.  У нас должно быть достаточное тестовое покрытие наших моделей и контроллеров.


## Заключение
Созданное нами приложение в этом задании, представляет собой шаг вперед по сложности по сравнению с нашими предыдущими заданиями по созданию веб-приложений - как технически, так и организационно.  Эта задача связана как с управлением проектами и командной динамикой, так и с программированием.  Какие навыки / уроки вы извлекли из работы в команде?  Как вам лучше работать в следующий раз?

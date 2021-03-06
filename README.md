This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Toxin

Цель данного проекта: Изучить React, Redux, Mobx

Описание проекта Toxin: сайт отеля с возможностью выбора и бронирования определенного номера. Макеты можно посмотреть вот тут https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1

Проект будет состоять из 3 модулей(страниц):
1. Модуль Guide. Состоит из страницы с ui элементами и с ui компонентами. Должны быть доступны по адресам /guide/elements и /guide/components соответственно
2. Модуль Main. В нем всего 1 страница - главная. Адрес - /
3. Модуль Rooms. Состоит из 3 страниц. Страница с выбором номера и фильтрами и страница конкретного номера, страница мои номера
4. Модуль Auth. Состоит из 3 страниц: вход, регистрация, забыли пароль.

Для выполнения проекта был создан беклог задач. Но список не конечный, возможно чтото добавится, что не учли на старте или если появятся каки-либо баги при приемке проекта :)

# Старт проекта
Перед началом работы над проектом скопируйте данный репозиторий. Скопировать репозиторий должен ктото один из команды, которая планирует работать над проектом. Работать нужно будет не в этом репозитории а в копии.

# Как работать с задачами
Базовая ветка - Master.
Коммиты в мастер строго запрещены, все изменения по проекту в мастер должны попадать через пулреквесты(ПР).
Ниже приведен флоу по работе в проекте:
Каждая задача должна быть оформлена через ишью(issues).
После создания ишью ему автоматически присваивается номер. Даже если ишью ни на кого не назначена, необходимо спросить у команды (либо у менеджера проекта), не работает ли уже кто-то над этой задачей. В случае получения одобрения необходимо назначить ишью на себя.
После этого создаете ветку для выполнения ишью в формате issueNumber-short-task-description.
В ходе работы над задачей делаете коммиты с содержательными пояснениями на англйском языке.
  - Пример плохого коментария к коммиту: "fix".
  - Пример хорошего комментария к комиту: "create profile service".

После завершения все коммиты пушатся в текущую ветку.
Затем создается ПР в мастер. После создания ПРа в первую очередь небходимо проверить его самостоятельно. Обращаем внимание не запушили ли закомментированный код, работает ли весь функционал в соответствии с задачей, описанной в ишью. Плюс проверить работоспособность хотябы в двух браузерах, к примеру хром и файрфокс. И только после этого уже просить других смотреть ПР.
Все участники проекта смотрят новый код и оставляют замечания(дискашены).
ПР принимается только после исправления всех дискашенов.
Закрытием задачи является мерж ветки в мастер. Мержить позволяется только в случае получения одобрения ПРа всеми участниками команды (гитхаб позволяет ставить апрувы, нужно попросить всех участников поставить их, если замечаний больше нет).

# Про тех. требования
Приложение нужно сделать на базе react https://reactjs.org/ и next.js https://nextjs.org/. Для статической типизации использовать typescript

Для управления данными приложения есть библиотеки redux https://redux.js.org/ и mobx https://mobx.js.org. Мы бы хотели чтобы вы поработали и с обоими подходами для расширения кругозора :) Поэтому первую версию нужно будет сделать на redux, а после выполнения бизнес-задач сделать отдельную ветку "mobx" и поменять redux на mobx. Времени это много не займет, ведь вся верстка и реакт компоненты останутся такими же.

Для альтернативы серверу предлагаем использовать сервис firebase. Про то как с ним работать и настроить снизу будет отдельная инструкция
Для управления сайд эффектами в redux приложении рекомендуем использовать redux-saga https://redux-saga.js.org/
Для работы с формами рекомендуем использовать библиотеку react-final-form
Для инпута с маской react-text-mask

# Про доп. требования
не забывайте при разработке проекта следовать стандартам fsd https://github.com/fullstack-development/front-end-best-practices

Также при отправке форм на сервер неободимо блокировать кнопку пока идет запрос

# Про firebase
подсказки как работать с firebase https://github.com/fullstack-development/toxin-group-project/issues/44



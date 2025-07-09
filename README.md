# SkillSwap_31_3
# Учебный коллективный проект
## Макет - https://www.figma.com/design/bKwOakHJI7Z2mh2zVCBphP/SkillSwap---Для-разработчиков?node-id=69-279&p=f&t=vzqAQ2y33VvMGpzP-0
## ТЗ - https://docs.google.com/document/d/1CAK44JRaTrUiLBlqDPwc5iC7D4EJfKw7pU1ZAJwyMGU/edit?pli=1&tab=t.0#heading=h.ynonjn54b672

### Запуск проекта npm run start

### Стек: Storybook, React, Redux, TypeScript, Cypress, Jest.

</br>

## У проекта есть сервер. Для работы сервера необходимо скачать все зависимости ``npm i``, далее в файле .env прописать следующее: API_URL=http://localhost:3000
### Для запуска используйте команду ``npm run dev:server``. После можно уже запускать клиент 

</br>

##  В проекте реализованы три сущности для хранилища: User, UserCards, Skills
### Для них были написаны тесты и селекторы. При необходимости можно изменить логику слайсов и изменять селекторы.

</br>
## Как пользоваться стором
Реализованы кастомные хуки ``useDispatch`` и ``useSelector`` на основе стора.

Пример использования useDispatch:
```ts

const dispatch = useDispatch();
dispatch(something)
```
      
Пример использования useSelector:
```ts
const user = useSelector(selectUser)
```
</br>

### Сущность Skills
Представляет из себя слайс для работы с навыками
```ts
type TSkillState = {
  skills: TSkill[];
};

```

Асинхронные функции описаны в объекте ``skillsThunk``. Используйте его для какого-либо диспатча
| Название | Описание |
|----------|----------|
getSkills | используется для получения всех навыков

Пример использования:
```ts
  dispatch(skillsThunk.getSkills()); 
```
Селекторы:
| Название | Описание |
|----------|----------|
selectAllSkills | получаем все навыки
selectSkillByName | получаем навык по названию
selectSkillById | получаем навык по id


</br>

### Сущность User
Представляет из себя слайс для работы с пользовательскими данными
```ts
type TAuthState = {
  isAuthChecked: boolean;
  user: TUser | null;
  error: string | null;
};
```

Асинхронные функции описаны в объекте ``userThunk``. Используйте его для какого-либо диспатча
| Название | Описание |
|----------|----------|
register | используется для регистрациия пользователя 
logout | используется для выхода пользователя 
putLike | используется, чтобы поставить лайк 
deleteLike | используется, чтобы убрать лайк

Пример использования:
```ts
  dispatch(userThunk.register(someData)); 
```
Селекторы:
| Название | Описание |
|----------|----------|
selectUser | получаем данные пользователя
selectAuthChecked | получаем статус авторизации
selectAuthError | получаем ошибку авторизации
selectIsUserAuth | получаем булевое значение о наличии пользователя

</br>

### Сущность UserCards
Представляет из себя слайс для работы с карточками пользователей
```ts
type TUserCardsState = {
  cards: TUserCard[];
  exchangeRequest: boolean;
  error: boolean;
};

```

Асинхронные функции описаны в объекте ``userCardsThunk``. Используйте его для какого-либо диспатча
| Название | Описание |
|----------|----------|
getUserCards | используется для получения всех карточек
exchangeRequest | используется для отправки запроса на обмен навыками

Пример использования:
```ts
  dispatch(userCardsThunk.getUserCards()); 
```
Селекторы:
| Название | Описание |
|----------|----------|
selectUserCards | получаем все карточки пользователей
selectExchangeRequest | получаем статус об отправке заявки
selectUserCardError | получаем ошибку


</br>


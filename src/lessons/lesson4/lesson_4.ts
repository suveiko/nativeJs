console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
console.log(new Promise(() => console.log("Promise is created")))


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
console.log(new Promise((resolve) => resolve('Promise Data'))
    .then(console.log))


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
console.log(new Promise((resolve, reject) => reject('Promise Error'))
    .catch(console.log))


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
console.log(new Promise((resolve) => setTimeout(resolve, 3000, 'Promise Data'))
    .then(console.log))


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type testObjType = {
    promise: null | Promise<any>
    resolve: null | Function,
    reject: null | Function,
    onSuccess: (data: string) => void,
    onError: (data: string) => void
}

const handlePromise: testObjType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: string) => console.log(`Promise is rejected with error: ${paramName}`)
}

export const createPromise = () => {
    const newPromise: Promise<any> = new Promise((res, rej) => {
        handlePromise.resolve = res;
        handlePromise.reject = rej
    })
    handlePromise.promise = newPromise
    handlePromise.promise
        .then(res => handlePromise.onSuccess(res))
        .catch(error => handlePromise.onError(error))

    console.log(newPromise)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve("Resolve Promise")
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject("Reject Promise")
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const myNameIs: Promise<string> = new Promise(res => setTimeout(res, 1000, 'My name is'))

const onSuccess = (description: string) => `${description} Sasha`
const print = (param: string) => console.log(param)

myNameIs.then(onSuccess).then(print)

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const funcForPromiseAll = (time: number, value: {}) => new Promise(res => setTimeout(res, time, value))

const res: Promise<Object[]> = Promise
    .all([
        funcForPromiseAll(2000, {name: "Anna"}) as Promise<Object[]>,
        funcForPromiseAll(3000, {age: 16}) as Promise<Object[]>
        , funcForPromiseAll(4000, {city: ''}) as Promise<Object[]>
    ])

res.then(([first, second, third]: Object[]) => ({...first, ...second, ...third})).then(console.log)

// just a plug
export default () => {
};
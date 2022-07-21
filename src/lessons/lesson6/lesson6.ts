console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string
    surName: string
    groupHumber: number
    score: number[]
    averageScore: number
}

class Student implements IStudent {
    name: string;
    surName: string;
    groupHumber: number;
    score: number[];
    averageScore: number;

    constructor(name: string, surName: string, groupHumber: number, score: number[]) {
        this.name = name
        this.surName = surName
        this.groupHumber = groupHumber
        this.score = score
        this.averageScore = this.score.reduce((sum, mark) => sum + mark) / this.score.length
    }

    static sort(arr: Student[]) {
        return [...arr].sort(this.sortStudents)
    }

    private static sortStudents(s1: IStudent, s2: IStudent) {
        if (s1.averageScore > s2.averageScore) {
            return 1
        } else if (s1.averageScore < s2.averageScore) {
            return -1
        } else {
            return 0
        }
    }

    private static isAllScoresEqualFour(score: number[]) {
        return score.every(sc => sc === 4)
    }

    private static isAllScoresEqualFive(score: number[]) {
        return score.every(sc => sc === 5)
    }

    static filterStudent(arr: Student[]) {
        const result: IStudent[] = []

        arr.forEach(item => {
            if (this.isAllScoresEqualFive(item.score) || this.isAllScoresEqualFour(item.score)) {
                result.push(item)
            }
        })

        return result
    }

    static printGoodStudents(arr: Student[]) {
        this.filterStudent(arr).forEach(st => {
            console.log(`Student - ${st.surName}, Group - ${st.groupHumber}`)
        })
    }
}


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?




// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};
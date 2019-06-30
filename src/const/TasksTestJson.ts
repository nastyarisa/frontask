
import { ITask } from "../components/Task/Task";

export const GeneralTasks: ITask[] = [
  {
    id: 1,
    title: 'Задача на поиск вхождений',
    description: 'Есть текст, нужно найти все вхождения слова "javascript" и вывести console.log на каждое вхождение',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 1,
    category: ['javascript', 'algorithms'],
    level: 'junior',
    rating: 0,
    answeredAt: 1561815268,
    createDate: 1561815268,
  },{
    id: 2,
    title: 'Посчитай количество слов',
    description: 'Дается текст, нужно вывести количество слов. В тексте могут быть пробелы, запятые, точки.',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 1,
    category: ['javascript', 'algorithms'],
    level: 'junior',
    rating: 2,
    createDate: 1561815268,
  },{
    id: 3,
    title: 'Какого цвета будет текст',
    description: `Есть тег 
    <p class='blue' id='red' style={color:green}>Текст</p>
    Содержимое style.css:
    #red {color:red}
    p.blue {color:blue !important}
    Какой цвет внутри тега p будет в итоге?
    `,
    author: 'Леонид Агутин',
    autorId: 1,
    countAnswers: 1,
    category: ['css', 'html'],
    level: 'junior',
    rating: 0,
    createDate: 1561815268,
  },{
    id: 4,
    title: 'Отсортировать массив',
    description: 'Дан числовой массив, элементы массива могут повторяться. Напиши свою реализацию сортировки, старый массив не должен измениться.',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 0,
    category: ['algorithms'],
    level: 'junior',
    rating: 0,
    answeredAt: 1561815268,
    createDate: 1561815268,
  },{
    id: 5,
    title: 'Создать глубокий клон объекта',
    description: 'Дан объект или массив, нужно сделать его клубокий клон. Он может содержать другие объекты, массивы или простые типы данных.',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 2,
    category: ['javascript', 'algorithms'],
    level: 'middle',
    rating: 0,
    createDate: 1561815268,
  }
]

const JavaScriptTasks: ITask[] = [
  {
    id: 1,
    title: 'Задача на поиск вхождений',
    description: 'Есть текст, нужно найти все вхождения слова "javascript" и вывести console.log на каждое вхождение',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 1,
    category: ['javascript', 'algorithms'],
    level: 'junior',
    rating: 0,
    answeredAt: 1561815268,
    createDate: 1561815268,
  },{
    id: 2,
    title: 'Посчитай количество слов',
    description: 'Дается текст, нужно вывести количество слов. В тексте могут быть пробелы, запятые, точки.',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 1,
    category: ['javascript', 'algorithms'],
    level: 'junior',
    rating: 2,
    createDate: 1561815268,
  },{
    id: 5,
    title: 'Создать глубокий клон объекта',
    description: 'Дан объект или массив, нужно сделать его клубокий клон. Он может содержать другие объекты, массивы или простые типы данных.',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 2,
    category: ['javascript', 'algorithms'],
    level: 'middle',
    rating: 0,
    createDate: 1561815268,
  }
]

const AlgorithmsTasks: ITask[] = [
  {
    id: 1,
    title: 'Задача на поиск вхождений',
    description: 'Есть текст, нужно найти все вхождения слова "javascript" и вывести console.log на каждое вхождение',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 1,
    category: ['javascript', 'algorithms'],
    level: 'junior',
    rating: 0,
    answeredAt: 1561815268,
    createDate: 1561815268,
  },{
    id: 2,
    title: 'Посчитай количество слов',
    description: 'Дается текст, нужно вывести количество слов. В тексте могут быть пробелы, запятые, точки.',
    author: 'Человек-паук',
    autorId: 2,
    countAnswers: 1,
    category: ['javascript', 'algorithms'],
    level: 'junior',
    rating: 2,
    createDate: 1561815268,
  },
  {
  id: 4,
  title: 'Отсортировать массив',
  description: 'Дан числовой массив, элементы массива могут повторяться. Напиши свою реализацию сортировки, старый массив не должен измениться.',
  author: 'Человек-паук',
  autorId: 2,
  countAnswers: 0,
  category: ['algorithms'],
  level: 'junior',
  rating: 0,
  answeredAt: 1561815268,
  createDate: 1561815268,
},{
  id: 5,
  title: 'Создать глубокий клон объекта',
  description: 'Дан объект или массив, нужно сделать его клубокий клон. Он может содержать другие объекты, массивы или простые типы данных.',
  author: 'Человек-паук',
  autorId: 2,
  countAnswers: 2,
  category: ['javascript', 'algorithms'],
  level: 'middle',
  rating: 0,
  createDate: 1561815268,
}
]

const CssTasks: ITask[] = [
  {
    id: 3,
    title: 'Какого цвета будет текст',
    description: `Есть тег 
<p class='blue' id='red' style="color:green">Текст</p>
Содержимое style.css:
#red {color:red}
p.blue {color:blue !important}
Какой цвет внутри тега p будет в итоге?
    `,
    author: 'Леонид Агутин',
    autorId: 1,
    countAnswers: 1,
    category: ['css', 'html'],
    level: 'junior',
    rating: 0,
    createDate: 1561815268,
  }
]

const HtmlTasks: ITask[] = [{
  id: 3,
  title: 'Какого цвета будет текст',
  description: `Есть тег 
<p class='blue' id='red' style="color:green">Текст</p>
Содержимое style.css:
#red {color:red}
p.blue {color:blue !important}
Какой цвет внутри тега p будет в итоге?
  `,
  author: 'Леонид Агутин',
  autorId: 1,
  countAnswers: 1,
  category: ['css', 'html'],
  level: 'junior',
  rating: 0,
  createDate: 1561815268,
}]
const GitTasks: ITask[] = []
const WebpackTasks: ITask[] = []
const OtherTasks: ITask[] = []
const ReactjsTasks: ITask[] = []
const VuejsTasks: ITask[] = []
const AngularjsTasks: ITask[] = []
const TypescriptTasks: ITask[] = [];

export const TestData = new Map<string, ITask[]>([
  ["general", GeneralTasks],
  ["html", HtmlTasks],
  ["css", CssTasks],
  ["javascript", JavaScriptTasks],
  ["git", GitTasks],
  ["webpack", WebpackTasks],
  ["algorithms", AlgorithmsTasks],
  ["other", OtherTasks],
  ["reactjs", ReactjsTasks],
  ["vuejs", VuejsTasks],
  ["angularjs", AngularjsTasks],
  ["typescript", TypescriptTasks]
]);
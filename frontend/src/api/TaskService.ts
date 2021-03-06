import {ajax} from "./ajax";

export interface TaskServiceProps {
  // userService: any;
}

export class TaskService {
  props: TaskServiceProps;
  constructor(props:TaskServiceProps) {
    this.props = props;
  }

  GET = async (url:string) => {
    try {
      let res = await ajax({url});
      return res;
    } catch (e) {
      throw new Error(e.message)
    }
  }

  // получение списка категорий
  getCategories = async () => {
    return this.GET('/categories');
  }

  // получение списка задач (с указанным количеством и пагинацией)
  getTasks = async (category?: string) => {
    return this.GET(`/tasks?category=${category}`);
  }
  // получение задачи по id
  getTaskById = async (id: string) => {
    return this.GET(`/tasks/${id}`);
  }
  // todo: получение ответов к задаче
  // todo: создание задачи
  // todo: ответ на задачу
  // todo: изменение ответа к задаче
  // todo: изменение задачи
  // todo: удаление ответа
  // todo: удаление задачи
  // todo: получение всех задач по пользователю
  // todo: получение всех ответов по пользователю
}
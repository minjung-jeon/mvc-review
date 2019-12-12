import { fetchJson, getRefinedData } from './utils/index.js';
import { TodoFormView, TodoListView, TodoCountView } from './views/index.js';
import { TodoController } from './controller/index.js';
import TodoState from './state/todoState.js';

const REQUEST_PATH = '../list.json';

export default class App {
    constructor(){
        const getStoredData = async reqPath => {
            const dataArray = await fetchJson(reqPath);
            return getRefinedData(dataArray);
        }

        const todoState = new TodoState();
        const todoFormView = new TodoFormView();
        const todoListView = new TodoListView();
        const todoCountView = new TodoCountView();
        
        const todoController = new TodoController({
            state: { todoState },
            view: { todoFormView, todoListView, todoCountView, }
        });

        todoController.init();
        // data fetching
        getStoredData(REQUEST_PATH).then((todos) => {
            todoState.addAllTodo(todos);
        });
    }
}

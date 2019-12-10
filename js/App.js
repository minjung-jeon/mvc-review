import { fetchJson } from './utils/index.js';
import { TodoModel } from './models/index.js';
import { TodoFormView, TodoListView, TodoCounterView } from './views/index.js';
import { TodoController } from './controller/index.js';
import Router from './router/router.js';

const REQUEST_PATH = '../list.json';

export default class App {
    constructor(){
        const router = new Router();
        const todoModel = new TodoModel({
            reqUrl: REQUEST_PATH,
            util: fetchJson,
        });
        const todoFormView = new TodoFormView();
        const todoListView = new TodoListView();
        const todoCounterView = new TodoCounterView();
        const todoController = new TodoController({
            model: { todoModel },
            view: { todoFormView, todoListView, todoCounterView, }
        });

        // router을 통한 App 실행 - 추후 다른 controller 추가 상황 고려
        router.set('todo', todoController)
            .route('todo');
    }
}

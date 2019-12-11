import { fetchJson } from './utils/index.js';
import { TodoFormView, TodoListView, TodoCountView } from './views/index.js';
import { TodoController } from './controller/index.js';
import Router from './router/router.js';
import TodoState from './state/todoState.js';

const REQUEST_PATH = '../list.json';

export default class App {
    constructor(){
        const router = new Router();
        // const todoModel = new TodoModel({
        //     reqUrl: REQUEST_PATH,
        //     util: fetchJson,
        // });
        const todoState = new TodoState();

        const todoFormView = new TodoFormView();
        const todoListView = new TodoListView();
        const todoCountView = new TodoCountView();
        
        const todoController = new TodoController({
            state: { todoState },
            view: { todoFormView, todoListView, todoCountView, }
        });

        // router을 통한 App 실행 - 추후 다른 controller 추가 상황 고려
        router.set('todo', todoController)
            .route('todo');
    }
}

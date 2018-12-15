import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';

@inject(DataServices)
export class Todo {
  constructor(data) {
    this.data = data;
    this.TODO_SERVICE = 'todos';
  }
  
  async saveTodo(todo) 
  {
            console.log(todo);
            if (todo) {
                let serverResponse;
                if (todo._id) {
                     serverResponse = await this.data.put(todo, this.TODO_SERVICE);
                } else {
                     serverResponse = await this.data.post(todo, this.TODO_SERVICE);
                }
                // let serverResponse = await this.data.post(todo, this.TODO_SERVICE);
                return serverResponse;
            }
        }

  async getTodos() {
    let response = await this.data.get(this.TODO_SERVICE);
    if (!response.error) {
      this.todosArray = response;

    } else {
      this.todosArray = [];
    }
  }

  async delete(todo){
    if(todo && todo._id){
      await this.data.delete(this.TODO_SERVICE + '/' + todo._id)
    }
    }
}
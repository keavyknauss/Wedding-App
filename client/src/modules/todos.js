import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Todo} from '../resources/data/todo-object'

@inject(Router, Todo)

export class Todos {
  constructor(router, todos) {
    this.router = router;
    this.todos = todos;
    this.message = 'Todos';
    this.showTodoEditForm = false;
  }

  newTodo() {
    this.todo = {
      todo: "",
      priotity: "High",
      done: false
    }

    this.openEditForm();
  }

  openEditForm() {
    this.showTodoEditForm = true;
    setTimeout(() => {
      $("#todo").focus();
    }, 500);
  }


  attached() {
    feather.replace()
  }

  back() {
    this.showTodoEditForm = false;
  }

  editTodo(todo) {
    this.todo = todo;
    this.showTodoEditForm = true;
  }

  async activate() {
    await this.getTodos();
  }

  async getTodos() {
    await this.todos.getTodos();
  }

  async save() {
    console.log('HI SAVE');
    if (this.todo && this.todo.todo && this.todo.priotity) {
      await this.todos.saveTodo(this.todo);
      await this.getTodos();
      this.back();
    }
  }

  async delete() {
    if (this.todo) {
      await this.todos.delete(this.todo);
      await this.getTodos();
      this.back();
    }
  }

  changeActive(todo) {
    this.todo = todo;
    this.save();
  }
}
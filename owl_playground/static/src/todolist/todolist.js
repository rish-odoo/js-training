/** @odoo-module **/

import { Todo } from "../todo/todo";
import { Component, useState } from "@odoo/owl";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    setup() {
        this.todoList = [];
        this.nextId = 1;
        this.todoList = useState([]);
        this.inputred = useAutofocus("inputElement");


    }
    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todoList.push({ id: this.nextId++, description: ev.target.value, done: false });
            ev.target.value = "";
        }
    }
    toggled(todoId) {
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.done = !todo.done;
        }
    }
    remove(todoId) {
        const index = this.todoList.findIndex((todo) => todo.id === todoId);
        if (index >= 0) {
            this.todoList.splice(index, 1);
        }
    }
}
TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";
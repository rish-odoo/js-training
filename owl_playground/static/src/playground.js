/** @odoo-module **/


import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";
import { TodoList } from "./todolist/todolist";
import { Card } from "./card/card";
import { Component } from "@odoo/owl";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = {
        Counter,
        Todo,
        TodoList,
        Card
    };
}
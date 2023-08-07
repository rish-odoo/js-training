/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Todo extends Component {

    onClick(ev) {
        this.props.toggleState(this.props.id);
    }
    onRemove(ev) {
        this.props.removeTodo(this.props.id);
    }
}

Todo.template = "owl_playground.Todo";

Todo.props = {
    id: { Number },
    description: { String },
    done: { Boolean },
    toggleState: { type: Function },
    removeTodo: { type: Function },
};
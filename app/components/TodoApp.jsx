var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp =  React.createClass ({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the Dog'
        }, {
          id: 2,
          text: 'Wash the clothes'
        }, {
          id: 3,
          text: 'Hang the clothes'
        }, {
          id: 4,
          text: 'Go to SChool'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('New To do: ' + text);
  },
  render: function () {
    var {todos} = this.state;


    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;

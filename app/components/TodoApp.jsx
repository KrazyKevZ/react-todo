var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;


    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;

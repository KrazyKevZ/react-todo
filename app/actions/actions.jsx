//setSearchText
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};
//addTodo
export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

//toggleShowCompleted
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};
//toggleTodo
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

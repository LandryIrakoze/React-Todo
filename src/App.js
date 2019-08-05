import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list
    }
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
            return item;
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  clearItems = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
          items={this.state} 
          toggleItem={this.toggleItem}
          clearItems={this.clearItems}
        />
      </>
    );
  }
}

export default App;

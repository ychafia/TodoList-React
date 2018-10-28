import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Items extends Component {
    createItems(item) {
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        var todoEntries = this.props.items;
        var listItems = todoEntries.map(this.createItems);
        console.log(listItems);
        return (
          <ul className="theList">
              {listItems}
          </ul>
        );
    }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this._inputElement.value !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });
       
        this._inputElement.value = "";
      }
       
      console.log(this.state.items);
         
      e.preventDefault();
  }
  
  render() {
    return (
        <div className="container-todo">
            <section className="title">
                <h2>Todolist CHAFIA</h2>
            </section>
            <section className="principale">
                <div className="inputText">
                    <form onSubmit={this.handleClick}>
                        <p>
                            <input ref={(a) => this._inputElement = a} placeholder="put your text..."></input>
                            <button type="submit"> Ajouter </button>
                        </p>
                    </form>
                </div>
                <div>
                    <Items items={this.state.items}></Items>
                </div>
            </section>
        </div>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
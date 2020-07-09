import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './style.less'

@inject('store') @observer
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleTodos(type) {
    let { store } = this.props
    switch (type) {
      case 'add':
        store.addTodo('一条新任务')
        break
      case 'delete':
        store.deleteTodo()
        break
      case 'reset':
        store.resetTodo()
        break
      default:
    }
  }

  render(callbackfn, thisArg) {
    let { store } = this.props
    return (
      <div className='home'>
        <h1>在react中使用mobx</h1>
        <p>
          {store.desc}
        </p>
        <div className='operate'>
          <button type='button' onClick={this.handleTodos.bind(this, 'add')}>添加</button>
          <button type='button' onClick={this.handleTodos.bind(this, 'delete')}>删除</button>
          <button type='button' onClick={this.handleTodos.bind(this, 'reset')}>重置</button>
        </div>
        <ul>
          {
            store.todos.map((ele, index, arr) => {
              return (
                <li key={JSON.stringify(ele + index)}>{ele}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Index

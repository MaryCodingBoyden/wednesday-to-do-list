import REact from 'react'

class TodoFrom extends React.Component {


    state = {name: ""}

    handleChange = (e) => {
      this.setState({ name: e.target.value})
    }
}

    handleSubmit = (e) => {
      debugger
      e.preventDefault()
      this.props.addItem(this.state.name)
      this.setState({ name: ""})
    }
    
    render() {
      return(
        <form
        onSubmit={this.handleSubmit}
        >
          <input 
          required
          placeholder="Add a To Do!"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          />
          </form>
      )
    }
    
    
    }

export default TodoForm; 
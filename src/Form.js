import React, {Component} from 'react';
import './Form.css'

class Form extends Component{
constructor(props){
  super(props)
  this.state={
    username:'',
    data1: []
  }
}


handleUsername=event=>{
  this.setState({
      username:event.target.value
  })
}

handleSubmit=e=>{
  console.log(e);
  e.preventDefault();
  this.updateFromDB();
}
updateFromDB(){
  fetch(`https://api.github.com/users/${this.username}/repos`,{method:'get'})
  .then(response => response.json())
  .then(data => this.setState({ data1: data.data1 }));
}

render(){
  return(
    <div className= "form">
    <Form onSubmit = {(e) => this.handleSubmit(e)}>
      
        <label>UserName:
        <input type='text' value={this.state.username}
        onChange={this.handleUsername} />
        </label>
      
      <button type='submit'>Submit</button>
    </Form>
    </div>
  )
}
}
export default Form;
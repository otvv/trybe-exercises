import React from 'react';
import TextInputComponent from './Components/TextInputComponent';

class Form extends React.Component {

  state = {
    items1: '',
    text1: '',
    text2: '',
    textarea1: '',
    checkbox1: false,
    formIncomplete: true
  };

  // handleSelectBox = (event) => {
  //   this.setState({ items: event.target.value });
  // }

  handleStateChange = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;


    this.setState({
      [name]: value,
    }, () => {
      const { checkbox1, items1, text1, text2 } = this.state;
      const newFormState = (!checkbox1 || (items1 === 'item0') || (text1.length < 5 && text2.length < 5));

      console.log(newFormState);

      this.setState({formIncomplete: newFormState})
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <form className='myform' onSubmit={this.handleSubmit}>
          <fieldset className='myfieldset'>
            <legend>My React Form</legend>
            <label>
              <select value={this.state.items1} onChange={this.handleStateChange} name='items1'>
                <option value='item0'>Disabled</option>
                <option value='item1'>Item 1</option>
                <option value='item2'>Item 2</option>
                <option value='item3'>Item 3</option>
                <option value='item4'>Item 4</option>
                <option value='item5'>Item 5</option>
              </select>
            </label>

            <TextInputComponent value={this.state.text1} placeholder='Input 1' name='text1' handleStateChange={this.handleStateChange} />
            <TextInputComponent value={this.state.text2} placeholder='Input 2' name='text2' handleStateChange={this.handleStateChange} />

            <fieldset>
              <legend>TextArea 1</legend>
              <textarea value={this.state.textarea1} onChange={this.handleStateChange} name='textarea1'></textarea>
            </fieldset>
            <label>
              Checkbox 1
              <input type='checkbox' value={this.state.checkbox1} onChange={this.handleStateChange} name='checkbox1'></input>
            </label>

            <button disabled={this.state.formIncomplete}>Submit</button>
          </fieldset>
        </form>
      </section>
    );
  };
};

export default Form;

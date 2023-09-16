import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({ name: '', number: '' });
    this.props.closeModal();
  };

  render() {
    return (
      <form className="row g-3" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Number
          </label>
          <input
            name="number"
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="number"                
            onChange={this.handleChange}
            value={this.state.number}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary mb-3">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default FormContact;

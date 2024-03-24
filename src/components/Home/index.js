import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {
    textInput: '',
    isChecked: false,
  }

  onChangeSearchInput = event => {
    this.setState({textInput: event.target.value})
  }

  onSaveButton = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {textInput, isChecked} = this.state

    return (
      <div className="bg-container">
        <div className="mini-card">
          <h1 className="heading">Editable Text Input</h1>
          {isChecked === true ? (
            <>
              <p className="textIcons">{textInput}</p>
              <button
                type="button"
                className="editbtn"
                onClick={this.onSaveButton}
              >
                Edit
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                className="textIcons"
                onChange={this.onChangeSearchInput}
                value={textInput}
              />
              <button type="button" className="btn" onClick={this.onSaveButton}>
                Save
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {userSearch: ''}

  userSearchedList = event => {
    this.setState({userSearch: event.target.value})
  }

  addToSearchInputBox = suggestion => {
    this.setState({userSearch: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {userSearch} = this.state

    const searchedResult = suggestionsList.filter(eachList => {
      const userSearchinSmall = userSearch.toLowerCase()
      const suggetioninsmall = eachList.suggestion.toLowerCase()
      return suggetioninsmall.includes(userSearchinSmall)
    })
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="logo-container">
            <img
              className="google-logo"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
            />
          </div>
          <div className="search-container">
            <div className="user-input-container">
              <div className="search-logo-container">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                />
              </div>
              <input
                className="input-box"
                type="search"
                placeholder="Search Google"
                onChange={this.userSearchedList}
                value={userSearch}
              />
            </div>
            <ul className="suggestion-container">
              {searchedResult.map(eachList => (
                <SuggestionItem
                  suggestionList={eachList}
                  key={eachList.id}
                  addToSearchInputBox={this.addToSearchInputBox}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

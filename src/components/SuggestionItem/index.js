import './index.css'

const SuggestionItem = prpos => {
  const {suggestionList, addToSearchInputBox} = prpos
  const {suggestion} = suggestionList
  const onAddtoSearchandDelete = () => {
    addToSearchInputBox(suggestion)
  }
  return (
    <li className="suggestion-list-container">
      <p className="suggestion-para">{suggestion}</p>
      <button type="button" className="button" onClick={onAddtoSearchandDelete}>
        <img
          className="arroe-logo"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

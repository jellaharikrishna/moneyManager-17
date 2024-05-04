import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onToggleDelete} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    onToggleDelete(id)
  }

  return (
    <li className="transaction-data-card">
      <p className="userinputs">{title}</p>
      <p className="userinputs">Rs {amount}</p>
      <p className="userinputs">{type}</p>
      <button
        className="delete-btn"
        type="button"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem

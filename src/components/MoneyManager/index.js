import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionHistory: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const typeOptionId = transactionTypeOptions.find(
      eachTransactiontype => eachTransactiontype.optionId === optionId,
    )
    const {displayText} = typeOptionId

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionHistory: [...prevState.transactionHistory, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getTotalBalance = () => {
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    const {transactionHistory} = this.state
    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getTotalIncome = () => {
    let incomeAmount = 0
    const {transactionHistory} = this.state
    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getTotalExpenses = () => {
    let expensesAmount = 0
    const {transactionHistory} = this.state
    transactionHistory.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount = eachTransaction.amount
      }
    })
    return expensesAmount
  }

  onToggleDelete = id => {
    const {transactionHistory} = this.state
    const updatedDeleteTransaction = transactionHistory.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({transactionHistory: updatedDeleteTransaction})
  }

  render() {
    const {transactionHistory, titleInput, amountInput, optionId} = this.state
    const totalBalance = this.getTotalBalance()
    const totalIncome = this.getTotalIncome()
    const totalExpenses = this.getTotalExpenses()

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="name-card">
            <h1 className="username">Hi, Richard</h1>
            <p className="bankname">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            totalBalance={totalBalance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
          />

          <div className="transaction-history-container">
            <form className="transactionform-card" onSubmit={this.onSubmitForm}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <div className="title-card">
                <label htmlFor="titleId" className="label">
                  TITLE
                </label>
                <input
                  id="titleId"
                  className="input"
                  type="text"
                  value={titleInput}
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="title-card">
                <label htmlFor="amountId" className="label">
                  AMOUNT
                </label>
                <input
                  id="amountId"
                  className="input"
                  type="text"
                  value={amountInput}
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="title-card">
                <label htmlFor="typeId" className="label">
                  TYPE
                </label>
                <select
                  id="typeId"
                  className="input"
                  value={optionId}
                  onChange={this.onChangeType}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      className="option"
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div className="history-card">
              <h1 className="history-heading">History</h1>
              <div className="history-sub-title-card">
                <p className="history-sub-title-heading">Title</p>
                <p className="history-sub-title-heading">Amount</p>
                <p className="history-sub-title-heading">Type</p>
                <p className="history-sub-title-heading" />
              </div>
              <ul className="transaction-list">
                {transactionHistory.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    onToggleDelete={this.onToggleDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager

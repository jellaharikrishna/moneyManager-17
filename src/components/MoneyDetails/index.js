import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props
  return (
    <div className="statement-container">
      <div className="balance-card">
        <img
          className="img-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="summary-card">
          <p className="summary-name">Your Balance</p>
          <p className="summary-amt" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          className="img-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="summary-card">
          <p className="summary-name">Your Income</p>
          <p className="summary-amt" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <img
          className="img-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="summary-card">
          <p className="summary-name">Your Expenses</p>
          <p className="summary-amt" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails

import "./ExpenseItem.css";
function expenseDetails(props) {
    return(
        <div>
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
        </div>
    );
}

export default expenseDetails;
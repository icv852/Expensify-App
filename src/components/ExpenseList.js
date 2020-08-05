import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => {
    const amountsArray = props.expenses.map(expense => expense.amount)
    const addAmounts = (a, b) => {
        return a + b
    }
    

    return (<div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
        {/* Show total expense */}
        <p>
            Your total expense is: ${amountsArray.length !== 0 ? (amountsArray.reduce(addAmounts) / 100) : 0}            
        </p>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
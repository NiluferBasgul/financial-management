import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import BudgetsPage from './BudgetsPage';
import ExpensesPage from './ExpensesPage';
import IncomesPage from './IncomesPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RevenuePage from './RevenuePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route path="/budgets" component={BudgetsPage} />
                <Route path="/expenses" component={ExpensesPage} />
                <Route path="/incomes" component={IncomesPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/revenue" component={RevenuePage} />
            </Switch>
        </Router>
    );
}

export default App;
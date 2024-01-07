import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import BudgetsPage from './pages/BudgetsPage';
import ExpensesPage from './pages/ExpensesPage';
import IncomesPage from './pages/IncomesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RevenuePage from './pages/RevenuePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/budgets" element={<BudgetsPage />} />
                <Route path="/expenses" element={<ExpensesPage />} />
                <Route path="/incomes" element={<IncomesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/revenue" element={<RevenuePage />} />
            </Routes>
        </Router>
    );
}

export default App;
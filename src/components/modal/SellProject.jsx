import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { PortfolioContext } from '../../context/PortfolioContext';

function SellProject({ selectedProject, onClose, projects }) {

    const { err, setErr, currentUser, setCurrentUser } = useContext(UserContext);
    const { investments, setInvestments } = useContext(PortfolioContext);

    return (
        <div>SellProject</div>
    )
}

export default SellProject
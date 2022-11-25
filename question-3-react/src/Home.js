import React, { useContext } from 'react'
import Card from './components/Card'
import EmployeeModal from './components/EmployeeModal'
import PopUp from './components/PopUp'
import SearchBar from './components/SearchBar'
import SortBy from './components/SortBy'
import TableDashboard from './components/TableDashboard'
import { SiteContext } from './ContextProvider'

const Home = () => {
    const { showPopUp, popUpError } = useContext(SiteContext)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <SearchBar />
                    <SortBy />
                    <div className="question-dashboard">
                        <Card />
                        <TableDashboard />
                    </div>
                </div>
            </div>

            <EmployeeModal />
            {showPopUp && <PopUp error={popUpError} />}
        </div>
    )
}

export default Home
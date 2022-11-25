import React, { useContext } from 'react'
import { SiteContext } from '../ContextProvider'

const Card = () => {
    const { employees, setNewOrEdit,setOldEmployee } = useContext(SiteContext)

    let available = employees.filter(employee => employee.available !== false).length
    let total= employees.length

    return (
        <div className="card mt-4 mb-3 mb-md-4">
            <div className="card-body p-3">
                <h5 className="text-secondary mb-2">Available: <span
                    className="font-weight-bold ml-1 text-dark">{available}</span></h5>
                <h5 className="text-secondary">Total: <span className="font-weight-bold ml-1 text-dark">{total}</span>
                </h5>

                <button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal"
                    onClick={() => {
                        setNewOrEdit("new");
                        setOldEmployee({})
                    }}
                >
                    <i className="fa fa-plus"></i>&nbsp; Add Employee
                </button>
            </div>
        </div>
    )
}

export default Card
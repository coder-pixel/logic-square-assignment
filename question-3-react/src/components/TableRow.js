import React, { useContext, useState } from 'react'
import { SiteContext } from '../ContextProvider'

const TableRow = ({ employee }) => {
    const { employees, setEmployees, removeEmployee, setOldEmployee, setNewOrEdit } = useContext(SiteContext)
    const [checkedInp, setCheckedInp] = useState(employee.available)

    const updateCheck = (id) => {
        const updatedEmployeesList = employees.map(employee => {
            if (employee.id == id) {
                let newEmployee = {
                    ...employee,
                    available: !(employee.available),
                }
                // console.log(newEmployee)
                return newEmployee
            }
            return employee
        })
        setEmployees(updatedEmployeesList)
    }


    return (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>
                <div className="custom-control custom-checkbox"
                    onClick={() => updateCheck(employee.id)}>
                    <input type="checkbox" className="custom-control-input"
                        checked={employee.available ? "checked" : ""}
                        onChange={(e) => setCheckedInp(e.target.checked)}
                    />
                    <label className="custom-control-label" htmlFor="customCheck"></label>
                </div>
            </td>
            <td>
                <button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal" onClick={() => {
                    setOldEmployee(employee);
                    setNewOrEdit("edit");
                }}>
                    <i className="fa fa-edit"></i>&nbsp; Edit
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => removeEmployee(employee.id)}>
                    <i className="fa fa-trash"></i>&nbsp; Delete
                </button>
            </td>
        </tr>
    )
}

export default TableRow
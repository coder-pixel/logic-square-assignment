import React, { useContext, useEffect, useState } from 'react'
import { SiteContext } from '../ContextProvider'

const EmployeeModal = ({ }) => {
    const { employees, setEmployees, setShowPopUp, setPopUpError, oldEmployee, newOrEdit } = useContext(SiteContext)

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState()
    const [designation, setDesignation] = useState("")
    const [department, setDepartment] = useState("")
    const [joiningDate, setJoiningDate] = useState("")

    const newEmployee = () => {
        console.log("newEmployee() called")
        if (!name || !gender || !age || !designation || !department || !joiningDate) {
            // console.log("error in newEmployee()")
            setPopUpError(true)
        } else {
            console.log("no error in newEmployee()")
            setPopUpError(false)
            // setErr(false)
            const newEmployee = {
                id: oldEmployee ? oldEmployee.id : employees.length + 1,
                name: name,
                gender: gender,
                age: age,
                designation: designation,
                department: department,
                available: oldEmployee ? oldEmployee.available : false,
                joiningDate: joiningDate
            }

            if (newOrEdit == "new") {
                // console.log("new employee")
                // console.log(newEmployee)
                setEmployees([newEmployee, ...employees])
                // console.log(employees)
            } else if (newOrEdit == "edit") {
                // console.log("edit employee")
                // console.group(newEmployee)
                const updatedEmployees = employees.map(employee => {
                    // console.log(employee)
                    if (employee.id == newEmployee.id) {
                        return newEmployee
                    }
                    return employee
                })
                setEmployees(updatedEmployees)
            }
        }
        setShowPopUp(true)
        setTimeout(() => {
            setShowPopUp(false)
        }, 1000)
    }

    useEffect(() => {
        if (Object.keys(oldEmployee).length > 0) {
            // console.log("old employee called")
            setName(oldEmployee.name)
            setGender(oldEmployee.gender)
            setAge(oldEmployee.age)
            setDesignation(oldEmployee.designation)
            setDepartment(oldEmployee.department)
            setJoiningDate(oldEmployee.joiningDate)
        } else {
            // console.log("new employee called")
            setName("")
            setGender("")
            setAge("")
            setDesignation("")
            setDepartment("")
            setJoiningDate("")
        }
    }, [oldEmployee])

    return (
        <div className="modal fade" id="addEmployeeModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header pt-3 pb-2">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-row ">
                                <div className="form-group col-md-6">
                                    <label htmlFor="" className="mb-1">Name</label>
                                    <input type="text" className="form-control" id="" placeholder="Enter"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="" className="mb-1">Gender</label>
                                    <select className="form-control" id="exampleFormControlSelect1"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="" className="mb-1">Age</label>
                                    <input type="number" className="form-control" id="" placeholder="Enter"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="" className="mb-1">Designation</label>
                                    <input type="text" className="form-control" id="" placeholder="Enter"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="" className="mb-1">Department</label>
                                    <input type="text" className="form-control" id="" placeholder="Enter"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="" className="mb-1">Joining Date</label>
                                    <input type="date" className="form-control" id="" placeholder=""
                                        value={joiningDate}
                                        onChange={(e) => setJoiningDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-success btn-sm" data-dismiss="modal" onClick={() => newEmployee()}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeModal
import React, { createContext, useEffect, useState } from 'react'

export const SiteContext = createContext()

const ContextProvider = ({ children }) => {

    const employeesList = [
        {
            id: 1,
            name: "John Doe",
            gender: "male",
            age: 32,
            department: "Testing",
            designation: "Tester",
            available: false,
        },
        {
            id: 2,
            name: "Peter Doe",
            gender: "male",
            age: 28,
            department: "Deployment",
            designation: "DevOps Master",
            available: true,
        },
        {
            id: 3,
            name: "Anna Doe",
            gender: "female",
            age: 35,
            department: "Backend",
            designation: "Senior Developer",
            available: false,
        },
        {
            id: 4,
            name: "Sasha Doe",
            gender: "female",
            age: 23,
            department: "Frontend",
            designation: "Junior Developer",
            available: true,
        },
        {
            id: 5,
            name: "Eren",
            gender: "male",
            age: 29,
            department: "Frontend",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 6,
            name: "Abhay Doe",
            gender: "male",
            age: 25,
            department: "Testing",
            designation: "Junior Tester",
            available: false,
        },
        {
            id: 7,
            name: "Natasha",
            gender: "female",
            age: 23,
            department: "Deployment",
            designation: "Project Lead",
            available: true,
        },
        {
            id: 8,
            name: "Sasha Doe",
            gender: "female",
            age: 43,
            department: "Backend",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 9,
            name: "Marco",
            gender: "male",
            age: 36,
            department: "Deployment",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 10,
            name: "Bella",
            gender: "female",
            age: 43,
            department: "Backend",
            designation: "Senior Developer",
            available: false,
        },
        {
            id: 11,
            name: "Annie",
            gender: "female",
            age: 31,
            department: "Frontend",
            designation: "Senior Developer",
            available: false,
        },
        {
            id: 12,
            name: "Alex Doe",
            gender: "male",
            age: 35,
            department: "Backend",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 13,
            name: "Emma",
            gender: "female",
            age: 39,
            department: "Deployment",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 14,
            name: "Alex Doe",
            gender: "male",
            age: 35,
            department: "Backend",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 15,
            name: "Alexander",
            gender: "male",
            age: 27,
            department: "Testing",
            designation: "Senior Developer",
            available: true,
        },
        {
            id: 16,
            name: "Alexa",
            gender: "female",
            age: 22,
            department: "Frontend",
            designation: "Junior Developer",
            available: true,
        },
    ]

    const [employees, setEmployees] = useState([])
    const [searchVal, setSearchVal] = useState("")
    const [searching, setSearching] = useState(false)
    const [oldEmployee, setOldEmployee] = useState({})
    const [newOrEdit, setNewOrEdit] = useState("new")
    const [isChecked, setIsChecked] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpError, setPopUpError] = useState(true)


    useEffect(() => {
        if (searchVal) {
            setSearching(true)
        } else {
            setSearching(false)
        }
    }, [searchVal])


    const removeEmployee = (id) => {
        const updatedEmployeesList = employees.filter(employee => employee.id !== id)
        setEmployees(updatedEmployeesList)
    }

    const addEmployee = (employee) => {
        setEmployees({ employee, ...employees })
    }


    // getting local storage
    useEffect(() => {
        const getEmployeesTemp = localStorage.getItem("employees")
        const employeesLoaded = JSON.parse(getEmployeesTemp);
        // console.log("-------------------")
        // console.log(employeesLoaded)
        // console.log(employeesLoaded.length)
        console.log("-------------------")
        if (employeesLoaded && employeesLoaded.length > 0) {
            console.log("employeesLoaded")
            console.log(employeesLoaded)
            console.log(employeesLoaded.length)
            setEmployees(employeesLoaded)
        }
    }, [])


    // setting local storage
    useEffect(() => {
        console.log("employees changed")
        console.log(employees)
        const employeesJson = JSON.stringify(employees)
        localStorage.setItem("employees", employeesJson)
    }, [employees])


    return (
        <SiteContext.Provider value={{
            employees,
            setEmployees,
            searchVal,
            setSearchVal,
            searching,
            setSearching,
            oldEmployee,
            setOldEmployee,
            newOrEdit,
            setNewOrEdit,
            isChecked,
            setIsChecked,
            showPopUp,
            setShowPopUp,
            popUpError,
            setPopUpError,
            removeEmployee,
            addEmployee
        }}>
            {children}
        </SiteContext.Provider>
    )
}

export default ContextProvider
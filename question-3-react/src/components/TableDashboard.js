import React, { useContext, useEffect, useState } from 'react'
import { SiteContext } from '../ContextProvider'
import TableRow from './TableRow'

const TableDashboard = () => {
    const { employees, searchVal, searching, isChecked } = useContext(SiteContext)

    return (
        <div className="table-responsive mt-3 mt-md-4 mb-2">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Available</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {searching ?
                        (
                            isChecked ? (
                                employees.filter(employee => employee.name.toLowerCase().includes(searchVal.toLowerCase()) || employee.department.toLowerCase().includes(searchVal.toLowerCase()))
                                    .filter(employee => employee.available)
                                    .map(employee => {
                                        return (
                                            <TableRow key={employee.id} employee={employee} />
                                        )
                                    })
                            )
                                :
                                (
                                    employees.filter(employee => employee.name.toLowerCase().includes(searchVal.toLowerCase()) || employee.department.toLowerCase().includes(searchVal.toLowerCase()))
                                        .map(employee => {
                                            return (
                                                <TableRow key={employee.id} employee={employee} />
                                            )
                                        })
                                )
                        )
                        :
                        (
                            isChecked ? (
                                employees.filter(employee => employee.available)
                                    .map(employee => {
                                        return (
                                            <TableRow key={employee.id} employee={employee} />
                                        )
                                    })
                            )
                                :
                                (
                                    employees.map(employee => (
                                        <TableRow key={employee.id} employee={employee} />
                                    ))
                                )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboard
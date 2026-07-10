import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'

const ViewStudent = () => {

    const [data, changeData] = useState(
        [
            { "name": "Joe Doe", "avatar": "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D", "admn": "12345", "classGrade": "First Class" },
            { "name": "John Doe", "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D", "admn": "23456", "classGrade": "Second Class" },
            { "name": "Ken John", "avatar": "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D", "admn": "78956", "classGrade": "Second Class" },
            { "name": "Ben Johnson", "avatar": "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fHww", "admn": "56349", "classGrade": "First Class" },
            { "name": "Sam Wilson", "avatar": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fHww", "admn": "98234", "classGrade": "Second Class" },
            { "name": "Henry Paul", "avatar": "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D", "admn": "23456", "classGrade": "Third Class" },
            { "name": "Peter Parker", "avatar": "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D", "admn": "74365", "classGrade": "First Class" },
            { "name": "John Doe", "avatar": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHx8MA%3D%3D", "admn": "66574", "classGrade": "Second Class" }
        ]
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">View Students</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                            <div className="card">
                                                <img src={value.avatar}
                                                    className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.name}</h5>
                                                </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item"><strong>Admission No:</strong> {value.admn}</li>
                                                    <li className="list-group-item"><strong>Class/Grade:</strong> {value.classGrade}</li>
                                                </ul>
                                                <div className="card-body">
                                                    <a href="#" className="btn btn-primary">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent
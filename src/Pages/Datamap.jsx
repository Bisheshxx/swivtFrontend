import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./css/views.css"
import Star from "./svg/star.png"
import StarIcon from '@material-ui/icons/Star';

function Datamap() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:90/data').then((res) => {
            const response = res.data.data
            setData(response)
        })
            .catch((err) => {
                console.log(err.response)
            })

    }, [])
    console.log(data)
    return (
        <div className="Datamap">

            {data.map((item) => {
                return (
                    <div className="Viewbody__container">
                        <div className="viewbody__header">
                            <a href={item.repo_url}><p>{item.repository_name}</p></a>
                            <a href={item.author_url}><p className="ptag">{item.author}</p></a>


                        </div>
                        <div className="viewbody__desc">
                            <p>{item.desc}</p>
                        </div>

                        <div className="viewbody_body">
                            <p className="stars">
                                <StarIcon fontSize="small"/>{item.no_of_star}
                            </p>
                            
                            <p>{item.watcher}</p>
                            <p>{item.forks}</p>
                        </div>
                        <div className="viewbody__footer">
                            <p>{item.last_update}</p>
                        </div>

                    </div>

                )
            })}
        </div>
    )
}

export default Datamap

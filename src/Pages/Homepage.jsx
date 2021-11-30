import { Pagination ,Row} from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Datamap from './Datamap'
import "antd/dist/antd.css"
import "./css/home.css"
function Homepage() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:90/data').then((res) => {
            const response = res.data.data
            setData(response)
            console.log(response)
        })
            .catch((err) => {
                console.log(err.response)
            })

    }, [])
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const pageSize = 12;

    const handlePaginationChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        let newArray;
        let maxCountIndex = 11;

        if (data && data.length > 0) {
            // ((1-1)*12=0, 11*1+1=12)=(0,12)   
            newArray = data.slice(
                (currentPage - 1) * pageSize,
                maxCountIndex * currentPage + currentPage
            );
        }

        setPaginatedData(newArray);
        console.log(paginatedData)

        return () => {
            // cleanup
        };
    }, [data, currentPage]);


    return (
        <div className="homepage">
            
            <div className="results">
                <Datamap data={paginatedData} />
                <Row style={{width:"100%"}} justify="center">
                    <Pagination
                        current={currentPage}
                        onChange={handlePaginationChange}
                        total={data.length}
                        pageSize={pageSize}
                        showSizeChanger={false} 
                    />
                </Row>
            </div>
        </div>
    )
}

export default Homepage

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';

const Index: React.FunctionComponent = () => {
    
    const [planetsData, setplanetsData] = useState([]);
    const planetsUrl = "https://swapi.dev/api/planets/";

    useEffect(() => {
        axios.get(planetsUrl).then((res) => {
            return res.data;
        }).then((res: any) => { //TODO
            if(res.count > 0) setplanetsData(res.results);
        });
    }, []);

    const renderList = () => {
        return planetsData.map((currData, i) => (
                <li key={i}>
                    <Link href={`planets/${i}`}>
                        {currData.name}
                    </Link>
                </li>
        ));
    }

    if(!planetsData.length){
        return <div data-testId="loading">Loading Data...</div>
    }

  return (
    <Layout title="Planets">
        <ul>
            {renderList()}
        </ul>
    </Layout>
  )
}
export default Index
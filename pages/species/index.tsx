import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';

const Index: React.FunctionComponent = () => {

    const [speciessData, setspeciessData] = useState([]);
    const speciesUrl = "https://swapi.dev/api/species/";
    useEffect(() => {
        axios.get(speciesUrl).then((res) => {
            return res.data;
        }).then((res: any) => { //TODO
            if(res.count > 0) setspeciessData(res.results);
        });
    }, []);

    const renderList = () => {
        return speciessData.map((currData, i) => (
                <li key={i}>
                     <Link href={`species/${i}`}>
                        {currData.name}
                    </Link>
                </li>
        ));
    }

    if(!speciessData.length){
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
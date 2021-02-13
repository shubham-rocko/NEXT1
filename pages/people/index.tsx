import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';

const Index: React.FunctionComponent = () => {

    const [peopleData, setPeopleData] = useState([]);
    const peopleUrl = "https://swapi.dev/api/people/";
    useEffect(() => {
        axios.get(peopleUrl).then((res) => {
            return res.data;
        }).then((res: any) => { //TODO
            if(res.count > 0) setPeopleData(res.results);
        });
    }, []);

    const renderList = () => {
        return peopleData.map((currData, i) => (
                <li key={i}>
                    <Link href={`people/${i}`}>
                        {currData.name}
                    </Link>
                </li>
        ));
    }

    if(!peopleData.length){
        return <div data-testId="loading">Loading Data...</div>
    }

  return (
    <Layout title="People">
      <ul>
          {renderList()}
      </ul>
    </Layout>
  )
}
export default Index
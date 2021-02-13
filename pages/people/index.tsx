import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';
import {getPeopleList} from '../service';

const Index: React.FunctionComponent<any> = () => {

    const [peopleData, setPeopleData] = useState([]);
    useEffect(() => {
        getPeopleList().then((res) => { //TODO
            if(res.count > 0) setPeopleData(res.results);
        });

        return () => setPeopleData([]);
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
        return <div data-testid="loading">Loading Data...</div>
    }

  return (
    <Layout title="People">
      <ul data-testid="resolved">
          {renderList()}
      </ul>
    </Layout>
  )
}
export default Index
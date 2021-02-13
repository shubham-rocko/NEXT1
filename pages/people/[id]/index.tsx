import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';
import axios from 'axios';

const PeopleDetails: React.FunctionComponent = () => {
  const router = useRouter();
  const id = +router.query.id + 1;
  const peopleUrl = "https://swapi.dev/api/people/";

  const [peopleDetails, setpeopleDetails] = useState({});

  useEffect(() => {
    if(!isNaN(id)){
      axios.get(`${peopleUrl}${id}`).then((res) => {
        return res.data;
      }).then((data) => {
        setpeopleDetails(data)
      })
    }
  }, [id]);

  return (
    <Layout title="Home">
      <pre> {JSON.stringify(peopleDetails, null, 2)} </pre>
    </Layout>
  )
}
export default PeopleDetails;
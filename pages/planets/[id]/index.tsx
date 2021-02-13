import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';
import axios from 'axios';

const PlanetsDetails: React.FunctionComponent = () => {
  const router = useRouter();
  const id = +router.query.id + 1;
  const planetsUrl = "https://swapi.dev/api/planets/";

  const [planetsDetails, setPlanetsDetails] = useState({});

  useEffect(() => {
    if(!isNaN(id)){
      axios.get(`${planetsUrl}${id}`).then((res) => {
        return res.data;
      }).then((data) => {
        setPlanetsDetails(data)
      })
    }
  }, [id]);

  return (
    <Layout title="Home">
      <pre> {JSON.stringify(planetsDetails, null, 2)} </pre>
    </Layout>
  )
}
export default PlanetsDetails;
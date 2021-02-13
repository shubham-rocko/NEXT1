import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';
import axios from 'axios';

const speciesDetails: React.FunctionComponent = () => {
  const router = useRouter();
  const id = +router.query.id + 1;
  const speciesUrl = "https://swapi.dev/api/species/";

  const [speciesDetails, setSpeciesDetails] = useState({});

  useEffect(() => {
    if(!isNaN(id)){
      axios.get(`${speciesUrl}${id}`).then((res) => {
        return res.data;
      }).then((data) => {
        setSpeciesDetails(data)
      })
    }
  }, [id]);

  return (
    <Layout title="Home">
      <pre> {JSON.stringify(speciesDetails, null, 2)} </pre>
    </Layout>
  )
}

export default speciesDetails;
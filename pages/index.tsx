import axios from "axios";
import { NextPage } from "next";

const Home: NextPage = () => {
  return <div></div>;
};

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name);

  return {
    props: {},
  };
};

export default Home;

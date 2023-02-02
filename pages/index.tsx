import axios from "axios";
import { NextPage } from "next";

const Home: NextPage = ({ videos }) => {
  return <div></div>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  // console.log(response.data.name);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;

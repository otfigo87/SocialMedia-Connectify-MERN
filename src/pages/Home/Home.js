import "./Home.css";
import NewPost from "../../components/NewPost/NewPost";
import Thread from "../../components/Thread/Thread";
import Navbar from "../../components/Navbar/Navbar";

const Home = ({ user, setUser }) => {


  return (
    <>
      <Navbar setUser={setUser} />
      <NewPost user={user} />
        {/* users posts */}
      <Thread user={user} />
    </>
  );
};

export default Home;

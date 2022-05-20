import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <div className="container mx-auto sm:px-4">
        <Notes showAlert={showAlert} />
      </div>
    </div>
  );
};

export default Home;

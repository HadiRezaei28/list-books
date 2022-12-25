import styles from "./App.module.css"
import Export from "./components/Export";
import Header from "./components/Header";
import Import from "./components/Import";
import { useState } from "react";

function App() {

  const [data,setData] = useState({
    title: "",
    author: "",
    number: ""
})

const [informations, setInformations] = useState([]);

const clickHandler = () => {
    setInformations([...informations,data]);   
}

const changeHandler = (e) => {
  setData({...data, [e.target.name]: e.target.value})
}
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <Header />
      </div>
      <div className={styles.main}>
          <Export informations={informations}/>
          <Import data={data} informations={informations} clickHandler={clickHandler} changeHandler={changeHandler}/>
      </div>
    </div>
  );
}

export default App;

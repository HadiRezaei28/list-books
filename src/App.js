import styles from "./App.module.css"
import Export from "./components/Export";
import Header from "./components/Header";
import Import from "./components/Import";
import { useEffect, useState } from "react";

const getfromLocalstorage = () => {
  const getlo = JSON.parse(localStorage.getItem("books"));
  if(getlo) {
    return getlo
  } else {
    return []
  }
}

function App() {

  const [data, setData] = useState({
    title: "",
    author: "",
    number: ""
  })

  const [informations, setInformations] = useState(getfromLocalstorage());

  useEffect(() => {
      localStorage.setItem("books", JSON.stringify(informations));
  },[informations])

  const clickHandler = () => {
    setInformations([...informations, data]);
    setData({
      title: "",
      author: "",
      number: ""
    })
  }

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const oneRemove = (number) => {
      const filterBooks = informations.filter(item => {
        return item.number !== number
      })
      setInformations(filterBooks)
  }

  const allRemove = () => {
    setInformations([])
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Export informations={informations} oneRemove={oneRemove} allRemove={allRemove}/>
        <Import data={data} informations={informations} clickHandler={clickHandler} changeHandler={changeHandler} />
      </div>
    </div>
  );
}

export default App;

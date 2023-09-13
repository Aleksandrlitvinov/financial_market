import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Markets from "./pages/Markets";
import Government from "./pages/Government";
import Sport from "./pages/Sport";
import Company from "./pages/Company";
import Insurance from "./pages/Insurance";
import Personal from "./pages/Personal";
import Etf from "./pages/Etf";
import React from "react";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "./firebase/firebaseConfig";


function App() {

  const [listOfArticles, setListOfArticles] = React.useState([])
  const addNewArticle = (article) => {
    listOfArticles.push(article)
  }

  const fetchArticles = async () => {

    await getDocs(collection(db, "articles"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id: doc.id}));
        setListOfArticles(newData);
        console.log(newData);
      })

  }


  const newArticle = {
    imgUrl: 'CA',
    title: 'Los Angeles',
    description: 'USA'
  };

  const addTodo = async () => {

    try {
      const docRef = await addDoc(collection(db, "articles"), newArticle | null);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  React.useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Routes>
          <Route path={"/"}
                 element={<Home listOfTotalArticles={listOfArticles} addNewArticle={(obj) => addNewArticle(obj)}/>}/>
          <Route path={"/markets"} element={<Markets listOfTotalArticles={listOfArticles}/>}/>
          <Route path={"/government"} element={<Government listOfTotalArticles={listOfArticles}/>}/>
          <Route path={"/sport"} element={<Sport listOfTotalArticles={listOfArticles}/>}/>
          <Route path={"/company"} element={<Company listOfTotalArticles={listOfArticles}/>}/>
          <Route path={"/insurance"} element={<Insurance listOfTotalArticles={listOfArticles}/>}/>
          <Route path={"/personal"} element={<Personal listOfTotalArticles={listOfArticles}/>}/>
          <Route path={"/etf"} element={<Etf listOfTotalArticles={listOfArticles}/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

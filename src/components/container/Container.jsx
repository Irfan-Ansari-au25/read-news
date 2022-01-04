import Button from "./Button";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import axios from "axios";
import AddButton from "./AddButton";
import InputForm from "./InputForm";

const url =
  "https://newsapi.org/v2/everything?q=apple&from=2022-01-02&to=2022-01-02&sortBy=popularity&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d";

const DUMMY = [
  {
    api: "https://newsapi.org/v2/everything?q=apple&from=2022-01-02&to=2022-01-02&sortBy=popularity&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d",
    title: "Tech Crunch",
    id: "cat1",
  },
  {
    api: "https://newsapi.org/v2/everything?q=tesla&from=2021-12-03&sortBy=publishedAt&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d",
    title: "Business",
    id: "cat2",
  },

  {
    api: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d",
    title: "Wall Street Journal",
    id: "cat3",
  },
];

const Container = () => {
  const [API, setAPI] = useState(DUMMY);
  const [post, setPost] = useState([]);
  const [catWiseData, setCatWiseData] = useState({ api: url });
  const [isActive, setIsActive] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const activeHandler = (state) => {
    setIsActive(state);
  };

  const addDataHandler = (catData) => {
    console.log("from container", catData);
    setCatWiseData(catData[0]);
  };

  // console.log("from catwisedata", catWiseData);

  /////
  useEffect(() => {
    console.log("here");
    axios.get(catWiseData.api).then((response) => {
      setPost(response.data.articles);
      setFilteredResults(response.data.articles);

      // console.log("response", post, typeof post);
    });
  }, [catWiseData.api]);

  ///
  const openModalHandler = (state) => {
    setModalOpen(state);
  };

  const modalCloseHandler = (state) => {
    setModalOpen(state);
  };

  ////////add dataa

  const addInputDataHandler = (data) => {
    setAPI((prevState) => {
      if (prevState.length > 4) {
        return;
      }
      return [...prevState, data];
    });
  };

  console.log(API, "api added");

  ////////

  const handleFilterFn = (searchWord) => {
    console.log("here", searchWord, post);
    const newFilteredPosts = post.filter((p) => {
      return p.title?.match(searchWord);
    });
    setFilteredResults(newFilteredPosts);
  };

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1 className="heading mb-40">News Today</h1>
          <div className="flex mb-16">
            {API.map((category) => {
              return (
                <Button
                  key={category.id}
                  id={category.id}
                  onActive={activeHandler}
                  state={isActive}
                  title={category.title}
                  api={category.api}
                  data={API}
                  addData={addDataHandler}
                ></Button>
              );
            })}
            <AddButton onOpen={openModalHandler}></AddButton>
          </div>
          <SearchBar
            data={post}
            filteredPosts={filteredResults}
            filterFn={handleFilterFn}
          ></SearchBar>
          {filteredResults.map((article, index) => {
            // return <h1>{article.author}</h1>;
            return (
              <Card
                key={Math.random().toString(26)}
                i={index}
                article={article}
              ></Card>
            );
          })}
          {modalOpen && (
            <InputForm
              data={API}
              onAddData={addInputDataHandler}
              modalClose={modalCloseHandler}
            ></InputForm>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;

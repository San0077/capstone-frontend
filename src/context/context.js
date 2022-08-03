import React, { useState, useEffect, useReducer } from "react";
//import axios from "axios";
import { Reducer, ACTION } from "./reducer.js";
// import { repos } from "../repos";

export const DataContext = React.createContext();

const initialState = {
  data: "",
  loading: false,
  error: false,
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  let [mainTags, setMainTags] = useState({});
  let [tags, setTags] = useState({});
  // const [tags,setTags]=useState({
  //   language:{},
  //   topics:{},
  //   license:{}
  //  })

  const fetchData = async (selectTags) => {
    try {
      dispatch({ type: ACTION.CALL_API });
        fetch(
        "https://capstonebackend--q.herokuapp.com/repo",
        { params: selectTags }
      ).then(res=>res.json()).then(res=>{
        dispatch({ type: ACTION.SUCCESS, payload: res })
        dispatch({ type: ACTION.SUCCESS, payload: res});
      });
     
    } catch (err) {
      dispatch({ type: ACTION.ERROR });
    }
  };

  const setTagMain = (paramsObj) => {
    let params = { ...paramsObj };

    setMainTags({ ...params });
    console.log(mainTags, paramsObj, params);
    for (let key in params) {
      params[key] = params[key].join(",");
    }
    fetchData(params);
  };

  useEffect(() => {
    fetchData({});
  }, []);

  return (
    <>
      <DataContext.Provider
        value={{
          data: state.data,
          loading: state.loading,
          error: state.error,
          setTagMain,
          mainTags: mainTags,
          tags: tags,
          setTags,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}
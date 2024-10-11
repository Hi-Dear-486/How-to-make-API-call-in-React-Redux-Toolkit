"use client";

import { useDispatch } from "react-redux";
import { userFetch } from "./store/api/Userapi";
import { selectStateData } from "./store/slice/Users";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    formData: { user },
  } = selectStateData();

  const handleFetchUser = async () => {
    setLoading(true);
    try {
      await dispatch(userFetch());
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div>
        <h2>How to make API call in React Redux Toolkit</h2>
        <button onClick={handleFetchUser}>Fetch User</button>
      </div>
      {user?.map((e) => (
        <h2>{e.email}</h2>
      ))}
    </>
  );
};

export default Home;

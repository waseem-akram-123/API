import './App.css';
import React,{useEffect,useState} from 'react';
import {getPosts,getUser} from './api';
import PostCard from './components/postCard';
import UserCard from './components/userCard';

function App() {

  const [data,setData] = useState (null);
  const [userData,setUserData] = useState (null);

  useEffect (()=> {
    getPosts().then ((posts)=> setData(posts));
  },[]);

  useEffect (()=> {
    getUser().then ((user)=> setUserData (user.results[0]));
  },[]);

  function refresh (){
    getUser().then ((user)=> setUserData (user.results[0]));
  }

  return (
    <div className="App">
      {/* {data ? data.map((e) => <PostCard title ={e.title} body = {e.body}/>): <p> No data</p>} 
      {userData ? <p>{userData.name}</p> : <p>No data</p>}    dont use this */}  

      {/* {userData ? <p>{JSON.stringify(userData)}</p> : <p>No data</p>}
      {data ? data.map((e, index) => <PostCard key={index} title={e.title} body={e.body} />) : <p>No data</p>}  use this      */}  

      {userData ? <UserCard data = {userData}/> : <p> No data</p>}

      <button onClick = {refresh}> New User </button>

      {data ? data.map((e, index) => <PostCard key={index} title={e.title} body={e.body} />) : <p>No data</p>} 

    </div>
  );
}

export default App;

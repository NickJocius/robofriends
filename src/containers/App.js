import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchRobots } from '../features/robotSearch/robotSearchSlice';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {
  const searchField = useSelector((state) => state.robotSearch.searchField);
  const dispatch = useDispatch();

  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => {
        setRobots(users);
        setLoading(false);
      });
  }, []);

  const onSearchChange = (event) => {
    dispatch(searchRobots(event.target.value))
  }

  const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className='tc'>
      {loading ? (
        <h1>Loading</h1>
      ) : (
          <h1 className='f1'>RoboFriends</h1>
        )
      }
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default App;

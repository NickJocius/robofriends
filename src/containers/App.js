import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchRobots } from '../features/robotSearch/robotSearchSlice';
import {useGetAllRobotsQuery} from '../services/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {
  const searchField = useSelector((state) => state.robotSearch.searchField);
  const dispatch = useDispatch();

  const { data, isError, isLoading, isSuccess } = useGetAllRobotsQuery('users');

  const onSearchChange = (event) => {
    dispatch(searchRobots(event.target.value))
  }

  const filteredRobots = isSuccess && data.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className='tc'>
      {isError && (
        <h1>Error Loading</h1>
      )}
      {isLoading ? (
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

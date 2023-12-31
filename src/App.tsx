import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';
import Posts from './components/Posts';

function App() {
	// const dispatch = useAppDispatch();
	// const { users, isLoading, error } = useAppSelector(
	// 	(state) => state.userReducer
	// );

	// useEffect(() => {
	// 	dispatch(fetchUsers());
	// }, []);

	return (
		<div className='App'>
			{/* {isLoading && <h1>Идет загрузка...</h1>}
			{error && <h1>{error}</h1>}
			{users.map((user) => (
				<ul>
					<li>{user.name}</li>
				</ul>
			))} */}
			<Posts />
		</div>
	);
}

export default App;

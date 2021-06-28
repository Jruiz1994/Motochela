import React from 'react';
import './Home.css';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

function Home() {
	return (
		<div className='Home' style={{ padding: 40 }}>
			<ItemListContainer />
		</div>
	);
}

export default Home;

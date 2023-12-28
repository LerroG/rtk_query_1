import React, { FC } from 'react';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';

const Posts: FC = () => {
	const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(5);
	return (
		<div>
			<div className='post-list'>
				{isLoading && <h1>Идёт загрузка...</h1>}
				{error && <h1>Произошла ошибка</h1>}
				{posts &&
					posts.map((post) => (
						<PostItem
							key={post.id}
							post={post}
						/>
					))}
			</div>
		</div>
	);
};

export default Posts;

import React, { FC, useState } from 'react';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const Posts: FC = () => {
	const [limit, setLimit] = useState(10);
	const {
		data: posts,
		error,
		isLoading,
	} = postApi.useFetchAllPostsQuery(limit);
	const [createPost, {}] = postApi.useCreatePostMutation();
	const [updatePost, {}] = postApi.useUpdatePostMutation();
	const [deletePost, {}] = postApi.useDeletePostMutation();

	const handleCreate = async () => {
		const title = prompt();
		await createPost({ title, body: title } as IPost);
	};

	const handleRemove = (post: IPost) => {
		deletePost(post);
	};

	const handleUpdate = (post: IPost) => {
		updatePost(post);
	};

	return (
		<div>
			<div className='post-list'>
				<button onClick={handleCreate}>Add new post</button>
				{isLoading && <h1>Идёт загрузка...</h1>}
				{error && <h1>Произошла ошибка</h1>}
				{posts &&
					posts.map((post) => (
						<PostItem
							key={post.id}
							post={post}
							remove={handleRemove}
							update={handleUpdate}
						/>
					))}
			</div>
		</div>
	);
};

export default Posts;

import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import PostCard from './PostCard';

import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const PostList: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const { users } = useTypedSelector(state => state.user);
    const { page, error, loading, posts, limit, totalCount } = useTypedSelector(state => state.post);
    const { fetchPosts, setPostPage, fetchUsers } = useActions();
    const pagesCount = Math.ceil(totalCount / limit);

    useEffect(() => {
        fetchPosts(page, limit, search);
        fetchUsers();
    }, [page]);
    console.log(users);
    if (loading) {
        return (
            <div
                style={{
                    margin: '200px auto',
                    width: '150px',
                    height: '150px',
                }}
            >
                <CircularProgress size={'100px'} />
            </div>
        );
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <Paper style={{ padding: '15px' }} variant='outlined'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'start',
                    flexWrap: 'wrap',
                }}
            >
                {posts.map(post => (
                    <PostCard key={post.id} post={post} users={users} />
                ))}
            </div>
            <hr />
            <div style={{ width: '350px', margin: 'auto' }}>
                <Stack spacing={2}>
                    <Pagination
                        page={page}
                        count={pagesCount}
                        defaultPage={1}
                        color='primary'
                        onChange={(e, page) => setPostPage(page)}
                    />
                </Stack>
            </div>
        </Paper>
    );
};

export default PostList;

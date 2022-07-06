import React from 'react';

import { IPost } from '../types/post';
import { IUser } from '../types/user';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface PropsType {
    post: IPost;
    users: IUser[];
}

const PostCard: React.FC<PropsType> = ({ post, users }) => {
    return (
        <Card style={{ width: '300px', margin: '30px 20px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    {post.id} - {post.title}
                </Typography>
                <Typography variant='h6' component='div'>
                    {post.body}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    author -{users.map(users => (users.id === post.userId ? users.name : null))}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PostCard;

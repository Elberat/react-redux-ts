import { Dispatch } from 'redux';
import axios from 'axios';
import { PostAction, PostActionTypes } from '../../types/post';

export const fetchPosts = (page = 1, limit = 20, search: string = '') => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.FETCH_POSTS });
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?`,
                {
                    params: { q: search, _page: page, _limit: limit },
                }
            );
            setTimeout(() => {
                dispatch({
                    type: PostActionTypes.FETCH_POSTS_SUCCESS,
                    payload: response.data,
                    setTotal: response.headers['x-total-count'],
                });
            }, 300);
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке ',
            });
        }
    };
};
export function setPostPage(page: number): PostAction {
    return { type: PostActionTypes.SET_POST_PAGE, payload: page };
}

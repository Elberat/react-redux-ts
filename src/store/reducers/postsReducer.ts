import { PostAction, PostActionTypes, PostsState } from '../../types/post';

const initialState: PostsState = {
    posts: [],
    page: 1,
    error: null,
    limit: 20,
    loading: false,
    totalCount: 1,
};

export const postReducer = (state = initialState, action: PostAction): PostsState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return { ...state, loading: true };
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                totalCount: action.setTotal,
            };
        case PostActionTypes.FETCH_POSTS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case PostActionTypes.SET_POST_PAGE:
            return { ...state, page: action.payload };
        default:
            return state;
    }
};

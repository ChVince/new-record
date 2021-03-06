import * as actions from '../constants/asyncActionTypes'
import {
    CLIP_LIST_URL,
    PRESENTATION_CLIP_URL,
    CLIP_URL,
    CLIP_LIST_NUM_URL,
} from './../constants/URLs'
import axios from 'axios'


function _dispatchClipListPromise(dispatch, tag, activePage, limit = null) {


    dispatch({
        type: actions.GET_CLIP_LIST_REQUEST,
    });

    axios.get(CLIP_LIST_URL + tag + '/' + activePage, {
        params: {
            limit: limit
        }
    })
        .then(response => {
            dispatch({
                type: actions.GET_CLIP_LIST_SUCCESS,
                payload: {
                    clipList: response.data.entity.body,
                    page: activePage,
                }
            })
        })
        .catch(error => {
            let response = error.response;
            dispatch({
                type: actions.GET_CLIP_LIST_FAILURE,
                payload: response.data.entity
            })
        })
}


export function getClipList(tag, activePage, limit = null) {
    return (dispatch) => {
        _dispatchClipListPromise(dispatch, tag, activePage, limit)
    }
}


export function getPresentationClip() {
    return (dispatch) => {
        dispatch({
            type: actions.GET_PRESENTATION_CLIP_REQUEST
        });

        axios.get(PRESENTATION_CLIP_URL)
            .then(response => {
                dispatch({
                    type: actions.GET_PRESENTATION_CLIP_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch((error) => {
                let response = error.response;
                dispatch({
                    type: actions.GET_PRESENTATION_CLIP_FAILURE,
                    payload: response.data.entity
                })
            })

    }
}


export function changePresentationClip(id) {
    return (dispatch) => {
        dispatch({
            type: actions.CHANGE_PRESENTATION_CLIP_REQUEST
        });

        axios.put(PRESENTATION_CLIP_URL, {
            id: id
        })
            .then(response => {
                dispatch({
                    type: actions.CHANGE_PRESENTATION_CLIP_SUCCESS,
                })
            })
            .catch(error => {
                let response = error.response;
                dispatch({
                    type: actions.CHANGE_PRESENTATION_CLIP_FAILURE,
                    payload: response.data.entity
                })
            })

    }
}

export function addClip(clip) {
    return (dispatch) => {
        dispatch({
            type: actions.ADD_CLIP_REQUEST
        });
        axios.post(CLIP_URL, {
            clip: clip
        })
            .then(response => {
                dispatch({
                    type: actions.ADD_CLIP_SUCCESS,
                    payload: response.data.entity
                })
            })
            .catch(error => {
                let response = error.response;
                dispatch({
                    type: actions.ADD_CLIP_FAILURE,
                    payload: response.data.entity
                })
            })

    }
}


export function removeClip(id) {
    return (dispatch) => {
        dispatch({
            type: actions.REMOVE_CLIP_REQUEST,
        });
        axios.delete(CLIP_URL + id)
            .then(response => {
                dispatch({
                    type: actions.REMOVE_CLIP_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch(error => {
                let response = error.response;
                dispatch({
                    type: actions.REMOVE_CLIP_FAILURE,
                    payload: response.data.entity
                })
            })
    }
}


export function getClipListPageNumByTag(tag, limit = null) {
    return (dispatch) => {
        dispatch({
            type: actions.GET_CLIP_LIST_NUM_REQUEST,
        });

        axios.get(CLIP_LIST_NUM_URL + tag, {
            params: {
                limit: limit
            }
        })
            .then(response => {
                dispatch({
                    type: actions.GET_CLIP_LIST_NUM_SUCCESS,
                    payload: response.data.entity.body
                });
            }).then(() => {
            let defaultActivePage = 1;
            _dispatchClipListPromise(dispatch, tag, defaultActivePage, limit)
        })
            .catch(error => {
                let response = error.response;
                dispatch({
                    type: actions.GET_CLIP_LIST_FAILURE,
                    payload: response.data.entity
                })
            })
    }
}

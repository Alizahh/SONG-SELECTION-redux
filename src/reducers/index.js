import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        { title: 'international love', duration : '3:50'},
        { title: 'sky full of stars', duration : '3:00'},
        { title: 'rude', duration : '4:30'},
        { title: 'maps', duration : '3:20'},

    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type == 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};
export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

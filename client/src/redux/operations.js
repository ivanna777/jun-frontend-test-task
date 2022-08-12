import io from 'socket.io-client';
import {
    fetchDistanceError,
    fetchDistanceRequest,
    fetchDistanceSuccess,
} from './actions'

const socket = io('http://localhost:3002')
socket.on('connect', () => console.log(socket.connected));
socket.emit('start')

export const fetchDistance = () => dispatch => {
    dispatch(fetchDistanceRequest());
    socket.on('ticker', round=>dispatch(fetchDistanceSuccess(round)));
    socket.io.on('error', error=>dispatch(fetchDistanceError(error.message)));
}




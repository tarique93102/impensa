import { SAMPLE_ACTION } from '../utils/actionConstants';
import { Action } from '../interfaces/action';

export default (state = {}, action: Action) => {
    switch (action.type) {
        case SAMPLE_ACTION:
            return state;
        default:
            return state;
    }
}
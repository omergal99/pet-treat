import DogService from '../../services/DogService';

function loadDogs() {
    return DogService.query();
    // return { type: '', payload: { } };
}

export default {
    loadDogs
}
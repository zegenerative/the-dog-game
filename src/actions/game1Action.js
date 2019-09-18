import { GET_RANDOM_BREED} from './types';
import request from 'superagent';
import _ from 'lodash';
export const getRandomBreed = (randomBreed) => dispatch => {
    request
            .get('https://dog.ceo/api/breed/' + randomBreed + '/images/random')
            .then(response => {
            const imgUrl = response.body.message
            
            dispatch({
                type: GET_RANDOM_BREED,
                payload: 
                    response.body.message
                
            })
            })
            .catch(console.error)
  };
  
  export const getDogs = () => {
     
    return (dispatch, getState) => {
        const dogsList = getState().dogs
       
  
        request.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch({
                    type: 'SET_DOGS_LIST', 
                    payload: Object.keys(response.body.message)
                })
            })
    }
  }
  

  export const getRandomDog = () => {
    return (dispatch, getState) => {
        const dogsList = getState().dogs

        if(dogsList === null) {
            const dogsList = getState().dogs
            if(dogsList !== null) return
    
            request.get('https://dog.ceo/api/breeds/list/all')
                .then(response => {
                    dispatch({
                        type: 'SET_DOGS_LIST', 
                        payload: Object.keys(response.body.message)
                    });

                    const randomDog = _.sample(Object.keys(response.body.message))
                    console.log(randomDog);
                    request.get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
                        .then(response => {
                            dispatch({
                                type: 'SET_RANDOM_IMAGE_URL',
                                payload: response.body.message
                            })
                        })
                })
        } else{
            const randomDog = _.sample(getState().game1.dogs);
            const randomDog2 = _.sample(getState().game1.dogs);
            const randomDog3 = _.sample(getState().game1.dogs);
           
            request.get(`https://dog.ceo/api/breed/${randomDog}/images/random`)
                .then(response => {
                    dispatch({
                        type: 'SET_RANDOM_IMAGE_URL',
                        payload: {
                           random : response.body.message,
                           breed : randomDog,
                           option1 : randomDog2,
                           option2: randomDog3
                        }
                    })
                })
        }

    }
}
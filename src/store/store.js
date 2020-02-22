import Vuex from 'vuex';
import defaultState from '../state/state';
import mutations from '../mutations/mutations';
import getters from '../getter/getter';
console.log('加载到了')


export default ()=>{
    return new Vuex.Store({
        state:defaultState,
        mutations:mutations,
        getters
    })
}
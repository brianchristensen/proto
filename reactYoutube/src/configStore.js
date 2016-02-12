import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore ( initialState = {} )
{
    // compose final middleware and use devtools in debug environment
    let finalCreateStore = applyMiddleware( thunk );
    if ( __DEBUG__ )
    {
        const devTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;
        finalCreateStore = compose( finalCreateStore, devTools );
    }

    // create final store and subscribe router in debug env ie. for devtools
    const store = finalCreateStore( createStore )( rootReducer, initialState );

    return store
}

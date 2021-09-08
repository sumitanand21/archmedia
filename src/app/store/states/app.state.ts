import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromAuth from 'src/app/store/reducers/auth.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {

    [fromAuth.authFeatureKey]: fromAuth.State;

    router: fromRouter.RouterReducerState;

}

export const reducers: ActionReducerMap<AppState> = {

    [fromAuth.authFeatureKey]: fromAuth.reducer,

    router: fromRouter.routerReducer,

};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [debug]
    : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return  (state, action) => {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

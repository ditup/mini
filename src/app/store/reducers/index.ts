import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromUser from './user.reducer';
import * as fromTag from './tag.reducer';
import * as fromUserTag from './user-tag.reducer';

export interface State {

  auth: fromAuth.State;
  user: fromUser.State;
  tag: fromTag.State;
  userTag: fromUserTag.State;
}

export const reducers: ActionReducerMap<State> = {

  auth: fromAuth.reducer,
  user: fromUser.reducer,
  tag: fromTag.reducer,
  userTag: fromUserTag.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

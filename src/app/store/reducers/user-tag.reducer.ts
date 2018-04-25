import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserTag } from '../models/user-tag.model';
import { UserTagActions, UserTagActionTypes } from '../actions/user-tag.actions';

export interface State extends EntityState<UserTag> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserTag> = createEntityAdapter<UserTag>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: UserTagActions
): State {
  switch (action.type) {
    case UserTagActionTypes.AddUserTag: {
      return adapter.addOne(action.payload.userTag, state);
    }

    case UserTagActionTypes.UpsertUserTag: {
      return adapter.upsertOne(action.payload.userTag, state);
    }

    case UserTagActionTypes.AddUserTags: {
      return adapter.addMany(action.payload.userTags, state);
    }

    case UserTagActionTypes.UpsertUserTags: {
      return adapter.upsertMany(action.payload.userTags, state);
    }

    case UserTagActionTypes.UpdateUserTag: {
      return adapter.updateOne(action.payload.userTag, state);
    }

    case UserTagActionTypes.UpdateUserTags: {
      return adapter.updateMany(action.payload.userTags, state);
    }

    case UserTagActionTypes.DeleteUserTag: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserTagActionTypes.DeleteUserTags: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserTagActionTypes.LoadUserTags: {
      return adapter.addAll(action.payload.userTags, state);
    }

    case UserTagActionTypes.ClearUserTags: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { UserTag } from '../models/user-tag.model';

export enum UserTagActionTypes {
  LoadUserTags = '[UserTag] Load UserTags',
  AddUserTag = '[UserTag] Add UserTag',
  UpsertUserTag = '[UserTag] Upsert UserTag',
  AddUserTags = '[UserTag] Add UserTags',
  UpsertUserTags = '[UserTag] Upsert UserTags',
  UpdateUserTag = '[UserTag] Update UserTag',
  UpdateUserTags = '[UserTag] Update UserTags',
  DeleteUserTag = '[UserTag] Delete UserTag',
  DeleteUserTags = '[UserTag] Delete UserTags',
  ClearUserTags = '[UserTag] Clear UserTags'
}

export class LoadUserTags implements Action {
  readonly type = UserTagActionTypes.LoadUserTags;

  constructor(public payload: { userTags: UserTag[] }) {}
}

export class AddUserTag implements Action {
  readonly type = UserTagActionTypes.AddUserTag;

  constructor(public payload: { userTag: UserTag }) {}
}

export class UpsertUserTag implements Action {
  readonly type = UserTagActionTypes.UpsertUserTag;

  constructor(public payload: { userTag: Update<UserTag> }) {}
}

export class AddUserTags implements Action {
  readonly type = UserTagActionTypes.AddUserTags;

  constructor(public payload: { userTags: UserTag[] }) {}
}

export class UpsertUserTags implements Action {
  readonly type = UserTagActionTypes.UpsertUserTags;

  constructor(public payload: { userTags: Update<UserTag>[] }) {}
}

export class UpdateUserTag implements Action {
  readonly type = UserTagActionTypes.UpdateUserTag;

  constructor(public payload: { userTag: Update<UserTag> }) {}
}

export class UpdateUserTags implements Action {
  readonly type = UserTagActionTypes.UpdateUserTags;

  constructor(public payload: { userTags: Update<UserTag>[] }) {}
}

export class DeleteUserTag implements Action {
  readonly type = UserTagActionTypes.DeleteUserTag;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserTags implements Action {
  readonly type = UserTagActionTypes.DeleteUserTags;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserTags implements Action {
  readonly type = UserTagActionTypes.ClearUserTags;
}

export type UserTagActions =
 LoadUserTags
 | AddUserTag
 | UpsertUserTag
 | AddUserTags
 | UpsertUserTags
 | UpdateUserTag
 | UpdateUserTags
 | DeleteUserTag
 | DeleteUserTags
 | ClearUserTags;

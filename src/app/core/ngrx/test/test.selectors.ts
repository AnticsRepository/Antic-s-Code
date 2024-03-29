import { createSelector } from '@ngrx/store';
import * as fromTest from './test.reducer';
import { getTestPartialState } from '../ngrx.index';
import { TestPartialState } from '../ngrx.config';

export const getTestState = createSelector(
  getTestPartialState,
  (state: TestPartialState) => state.test
);

export const getTests = createSelector(
  getTestState, fromTest.getTests
);

export const getEntry = createSelector(
  getTestState, fromTest.getEntry
);

export const getByCategory = createSelector(
  getTestState, fromTest.getByCategory
);

export const getLoaded = createSelector(
  getTestState, fromTest.getLoaded
);

export const getEntryLoaded = createSelector(
  getTestState, fromTest.getEntryLoaded
);

export const getResult = createSelector(
  getTestState, fromTest.getResult
);

export const getResultLoaded = createSelector(
  getTestState, fromTest.getResultLoaded
);

export const getQuestions = createSelector(
  getTestState, fromTest.getQuestions
);

export const getEntries = createSelector(
  getTestState, fromTest.getEntries
);



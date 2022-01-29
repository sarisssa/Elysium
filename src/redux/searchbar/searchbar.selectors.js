import { createSelector } from "reselect";

const selectSearchBar = state => state.searchbar;

export const selectSearchBarHidden = createSelector(
    [selectSearchBar],
    searchbar => searchbar.hidden
);
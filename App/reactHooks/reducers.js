export const reducers = (state, action) => 
{
    switch (action.type) {
      case 'changeUser':
        return {
          ...state,
          user: action.user
        };
        case 'changeDrawerOpen':
          // console.log('state drawerOpen:' + state.drawerOpen);
          return {
            ...state,
            drawerOpen: action.drawerOpen
          };
        default:
        return state;
  }
};

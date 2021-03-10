const navHeader = (state = '', action) => {
    switch(action.type){
        case 'HOME':
            return 'Home'
        default:
            return state
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default navHeader;
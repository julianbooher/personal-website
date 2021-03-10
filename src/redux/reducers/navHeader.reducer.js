const navHeader = (state = '', action) => {
    switch(action.type){
        case 'HOME':
            return 'Home'
        case 'PROJECTS':
            return 'Projects'
        case 'RESUME':
            return 'Resume'
        default:
            return state
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default navHeader;
const projects = (state = [
    {
        name: 'Results Foundation Grant Application Portal',
        description: 'Web Portal that allows charities to apply for funding from the Results Foundation. Administrative features give the director the ability to field and score applications.',
        github: 'github.com/julianbooher',
        heroku: 'heroku.com',
        image: '../../../images/applications_table.png'

    },
    {
        name: 'jQuery Calculator',
        description: 'test description',
        github: 'github.com/julianbooher',
        heroku: 'heroku.com',
        image: '../../../images/calculator.png'


    },
]) => {
        return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default projects;
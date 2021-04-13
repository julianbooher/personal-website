const projects = (state = [
    {
        name: 'Results Foundation Grant Application Portal',
        description: 'Web Portal that allows charities to apply for funding from the Results Foundation. Administrative features give the director the ability to field and score applications.',
        github: 'github.com/julianbooher',
        heroku: 'heroku.com',
        image: '../../../images/applications_table.png'

    },
    {
        name: 'Rate Beer!',
        description: `Web app that allows users to rate their favorite beers, or if their favorite beer or brewery doesn't exist in the database, they can submit it for admin approval.`,
        github: 'https://github.com/julianbooher/cs50-final-project',
        youtube: 'https://www.youtube.com/watch?v=EG-pEev0Fvk',
        image: '../../../images/beer-rating.png'

    },
    {
        name: 'jQuery Calculator',
        description: 'Calculator with basic arithmetic functions.',
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
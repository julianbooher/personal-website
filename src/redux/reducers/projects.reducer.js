const projects = (state = [
    {
        name: 'Results Foundation Grant Application Portal',
        description: 'Web Portal that allows charities to apply for funding from the Results Foundation. Administrative features give the director the ability to field and score applications.',
        github: 'https://github.com/julianbooher/project-finale',
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
        name: 'Match Thread',
        description: 'Multi user web application that allows the user to comment on the outcomes of soccer matches. Contains scores, fixture lists, player lists and player statistics.',
        github: 'https://github.com/julianbooher/prime-solo-project',
        heroku: 'https://shielded-garden-95577.herokuapp.com/#/home',
        image: '../../../images/match-thread.png'
    },
    {
        name: 'jQuery Calculator',
        description: 'Calculator with basic arithmetic functions. My first foray into building a server using express ',
        github: 'https://github.com/julianbooher/jquery-server-side-calculator',
        heroku: 'heroku.com',
        image: '../../../images/calculator.png'
    },
    {
        name: 'jQuery Calculator',
        description: 'Calculator with basic arithmetic functions. My first foray into building a server using express ',
        github: 'https://github.com/julianbooher/jquery-server-side-calculator',
        heroku: 'https://gentle-atoll-31200.herokuapp.com/',
        image: '../../../images/calculator.png'
    },
    {
        name: 'jQuery Todo List',
        description: 'Todo list created with a javaScript/jQuery front end and an express back end with postgreSQL as the database. First application using postgreSQL.',
        github: 'https://github.com/julianbooher/jquery-server-side-calculator',
        heroku: 'https://radiant-fjord-87008.herokuapp.com/',
        image: '../../../images/to-do-app.png'
    },
]) => {
        return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default projects;
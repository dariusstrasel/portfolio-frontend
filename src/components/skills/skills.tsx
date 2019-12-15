import React, {Fragment, PureComponent} from 'react';

const Skills: React.FC = () => {
    return (
        <React.Fragment>
            <div className="row flex">
                <i className="entypo-code"></i>
                <h3 className="highlight"> Front-End Development:</h3>
            </div>
            <div className="row flex">
                <img className="block child skill-image" src="/images/html.svg" alt="html"></img>
                <img className="block child skill-image" src="/images/css.svg" alt="css"></img>
                <img className="block child skill-image" src="/images/js.svg" alt="javascript"></img>
                <img className="block child skill-image" src="/images/sass.svg" alt="sass"></img>
                <img className="block child skill-image" src="/images/angular.svg" alt="angularJS"></img>
                <img className="block child skill-image" src="/images/ts.svg" alt="typescript"></img>
                <img className="block child skill-image" src="/images/bootstrap.svg" alt="bootstrap"></img>
                <img className="block child skill-image" src="/images/gulp.svg" alt="gulp.js"></img>
                <img className="block child skill-image" src="/images/design.svg" alt="responsive design"></img>
            </div>
            <div className="row flex">
                <i className="entypo-code"></i>
                <h3 className="highlight"> Back-End Development:</h3>
            </div>
            <div className="row flex">
                <img className="block child skill-image" src="/images/python.svg" alt="python"></img>
                <img className="block child skill-image" src="/images/node.svg" alt="node.js"></img>
                <img className="block child skill-image" src="/images/django.svg" alt="django"></img>
                <img className="block child skill-image" src="/images/flask.svg" alt="flask"></img>
                <img className="block child skill-image" src="/images/express.svg" alt="express.js"></img>
                <img className="block child skill-image" src="/images/rest.svg" alt="restful apis"></img>
            </div>
            <div className="row flex">
                <i className="entypo-code"></i>
                <h3 className="highlight"> DevOps/Database:</h3>
            </div>
            <div className="row flex">
                <img className="block child skill-image" src="/images/aws.svg" alt="amazon web services"></img>
                <img className="block child skill-image" src="/images/travis.svg" alt="travis ci"></img>
                <img className="block child skill-image" src="/images/docker.svg" alt="docker"></img>
                <img className="block child skill-image" src="/images/vagrant.svg" alt="vagrant"></img>
                <img className="block child skill-image" src="/images/postgres.svg" alt="postgres sql"></img>
                <img className="block child skill-image" src="/images/mongodb.svg" alt="mongodb"></img>
            </div>
        </React.Fragment>
    );
  };

export default Skills;
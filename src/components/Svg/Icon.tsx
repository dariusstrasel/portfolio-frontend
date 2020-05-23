import { ReactComponent as Angular } from "./assets/angular.svg";
import { ReactComponent as Aws } from "./assets/aws.svg";
import { ReactComponent as Bootstrap } from "./assets/bootstrap.svg";
import { ReactComponent as Css } from "./assets/css.svg";
import { ReactComponent as Design } from "./assets/design.svg";
import { ReactComponent as Django } from "./assets/django.svg";
import { ReactComponent as Docker } from "./assets/docker.svg";
import { ReactComponent as Express } from "./assets/express.svg";
import { ReactComponent as Flask } from "./assets/flask.svg";
import { ReactComponent as Gulp } from "./assets/gulp.svg";
import { ReactComponent as Html } from "./assets/html.svg";
import { ReactComponent as Javascript } from "./assets/js.svg";
import { ReactComponent as Mongodb } from "./assets/mongodb.svg";
import { ReactComponent as Nodejs } from "./assets/node.svg";
import { ReactComponent as Postgres } from "./assets/postgres.svg";
import { ReactComponent as Python } from "./assets/python.svg";
import { ReactComponent as RestApi } from "./assets/rest.svg";
import { ReactComponent as Sass } from "./assets/sass.svg";
import { ReactComponent as Travis } from "./assets/travis.svg";
import { ReactComponent as Typescript } from "./assets/ts.svg";
import { ReactComponent as Vagrant } from "./assets/vagrant.svg";
import { FunctionComponent, SVGProps } from "react";
import React from "react";
import { IconType } from "./IconType";

interface IconProps {
  icon: IconType;
  props: any;
}
const Icon = ({ icon, props }: IconProps) => {
  if (icon !== undefined) {
    switch (icon) {
      case IconType.angular:
        return <Angular {...props} />;
        break;
      case IconType.aws:
        return <Aws {...props} />;
        break;
      case IconType.bootstrap:
        return <Bootstrap {...props} />;
        break;
      case IconType.css:
        return <Css {...props} />;
        break;
      case IconType.design:
        return <Design {...props} />;
        break;
      case IconType.django:
        return <Django {...props} />;
        break;
      case IconType.docker:
        return <Docker {...props} />;
        break;
      case IconType.express:
        return <Express {...props} />;
        break;
      case IconType.flask:
        return <Flask {...props} />;
        break;
      case IconType.gulp:
        return <Gulp {...props} />;
        break;
      case IconType.html:
        return <Html {...props} />;
        break;
      case IconType.javascript:
        return <Javascript {...props} />;
        break;
      case IconType.mongodb:
        return <Mongodb {...props} />;
        break;
      case IconType.nodejs:
        return <Nodejs {...props} />;
        break;
      case IconType.postgres:
        return <Postgres {...props} />;
        break;
      case IconType.python:
        return <Python {...props} />;
        break;
      case IconType.restApi:
        return <RestApi {...props} />;
        break;
      case IconType.sass:
        return <Sass {...props} />;
        break;
      case IconType.travis:
        return <Travis {...props} />;
        break;
      case IconType.typescript:
        return <Typescript {...props} />;
        break;
      case IconType.vagrant:
        return <Angular {...props} />;
        break;
      default:
        return null;
        break;
    }
  } else {
    return null;
  }
};

export default Icon;

import React from "react";
import Icon from "../Svg/Icon";
import { IconType } from "../Svg/IconType";

interface Skill {
  svgIcon: IconType;
  altText: string;
}

const frontEndSkills: Array<Skill> = [
  { svgIcon: IconType.html, altText: "html" },
  { svgIcon: IconType.css, altText: "css" },
  { svgIcon: IconType.javascript, altText: "javascript" },
  { svgIcon: IconType.angular, altText: "angular" },
  { svgIcon: IconType.typescript, altText: "typescript" },
  { svgIcon: IconType.bootstrap, altText: "bootstrap" },
  { svgIcon: IconType.gulp, altText: "gulp.js" },
  { svgIcon: IconType.design, altText: "responsive design" }
];

const backendSkills: Array<Skill> = [
  { svgIcon: IconType.python, altText: "python" },
  { svgIcon: IconType.nodejs, altText: "node.js" },
  { svgIcon: IconType.django, altText: "django" },
  { svgIcon: IconType.flask, altText: "flask" },
  { svgIcon: IconType.express, altText: "express.js" },
  { svgIcon: IconType.restApi, altText: "restful apis" }
];

const devOpsSkills: Array<Skill> = [
  { svgIcon: IconType.python, altText: "python" },
  { svgIcon: IconType.travis, altText: "travis ci" },
  { svgIcon: IconType.docker, altText: "docker" },
  { svgIcon: IconType.vagrant, altText: "vagrant" },
  { svgIcon: IconType.postgres, altText: "postgres sql" },
  { svgIcon: IconType.mongodb, altText: "mongodb" }
];
const renderSkillImage = function(skill: Skill) {
  return (
    <div className="block child">
      <Icon icon={skill.svgIcon} props={{ width: "100%", height: "100%" }} />
    </div>
  );
};

const renderSkillSection = function(
  skills: Array<Skill>,
  skillHeaderText: string
): JSX.Element {
  return (
    <React.Fragment>
      <div className="row flex">
        <i className="entypo-code"></i>
        <h3 className="highlight"> {skillHeaderText}:</h3>
      </div>
      <div className="row flex">
        {skills.map((skill) => renderSkillImage(skill))}
      </div>
    </React.Fragment>
  );
};

const Skills: React.FC = () => {
  return (
    <React.Fragment>
      {renderSkillSection(frontEndSkills, "Front-End Development")}
      {renderSkillSection(backendSkills, "Back-End Development")}
      {renderSkillSection(devOpsSkills, "DevOps/Database")}
    </React.Fragment>
  );
};

export default Skills;

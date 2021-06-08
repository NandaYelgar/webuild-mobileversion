import React from "react";
import Building from "../Building";
import Blueprint from "../Blueprint";
import Plan from "../Plan";
import ProjectCard from "../ProjectCard";
import Button22 from "../Button22";
import Group139 from "../Group139";
import PackageCard from "../PackageCard";
import Group1112 from "../Group1112";
import Group1122 from "../Group1122";
import Group113 from "../Group113";
import Group114 from "../Group114";
import Button3 from "../Button3";
import Group117 from "../Group117";
import Group129 from "../Group129";
import Button4 from "../Button4";
import Frame145 from "../Frame145";
import Frame140 from "../Frame140";
import Group87 from "../Group87";
import "./LandingPageMobile.css";

function LandingPageMobile(props) {
  const {
    line4,
    line5,
    line6,
    line7,
    line8,
    rectangle72,
    text62,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    rectangle73,
    text8,
    text9,
    rectangle70,
    text10,
    text11,
    apartments,
    buildiings,
    place,
    living,
    text24,
    text25,
    text262,
    whyWebuild,
    ourProjects,
    packages,
    costEstimatorBg,
    rectangle69,
    spanText6,
    spanText7,
    spanText8,
    text31,
    testimonials,
    text27,
    text21,
    ellipse1,
    name,
    bangaloreIndia,
    image3,
    image4,
    image5,
    layer1,
    group85,
    place2,
    overlapGroup2,
    phone,
    overlapGroup3,
    vector2,
    text23,
    text22,
    contactWebuildCom,
    quickLinks,
    buildingProps,
    blueprintProps,
    planProps,
    projectCardProps,
    projectCard2Props,
    projectCard3Props,
    projectCard4Props,
    projectCard5Props,
    projectCard6Props,
    projectCard7Props,
    projectCard8Props,
    projectCard9Props,
    button2Props,
    group139Props,
    packageCardProps,
    group1112Props,
    group1122Props,
    group113Props,
    group114Props,
    button3Props,
    group117Props,
    button4Props,
    frame145Props,
    frame140Props,
    frame1402Props,
    frame1403Props,
    group87Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="landing-page-mobile screen">
        <div className="overlap-group6">
          <div className="overlap-group1">
            <div className="group-89">
              <img className="line-4" src={line4} />
              <img className="line-" src={line5} />
              <img className="line-" src={line6} />
              <img className="line-" src={line7} />
              <img className="line-" src={line8} />
            </div>
            <img className="rectangle-72" src={rectangle72} />
            <Building {...buildingProps} />
            <div className="text-1 valign-text-middle typographyheadlineh5-extrabold-20">{text62}</div>
            <p className="text-2 typographybodysmall-12-regular">
              <span className="span typographybodysmall-12-regular">{spanText}</span>
              <span className="span-1 typographybodysmall-12-regular">{spanText2}</span>
              <span className="span2 typographybodysmall-12-regular">{spanText3}</span>
              <span className="span-1 typographybodysmall-12-regular">{spanText4}</span>
              <span className="span typographybodysmall-12-regular">{spanText5}</span>
            </p>
            <img className="rectangle-73" src={rectangle73} />
            <Blueprint {...blueprintProps} />
            <div className="text-3 valign-text-middle typographyheadlineh4-extrabold-24">{text8}</div>
            <p className="text-4 typographybodycaption-14-semi-bold">{text9}</p>
            <img className="rectangle-70" src={rectangle70} />
            <Plan
              group={planProps.group}
              overlapGroup2={planProps.overlapGroup2}
              vector2={planProps.vector2}
              vector3={planProps.vector3}
            />
            <div className="text-5 valign-text-middle typographyheadlineh4-extrabold-24">{text10}</div>
            <p className="text-6 typographybodycaption-14-semi-bold">{text11}</p>
            <ProjectCard
              rectangle62={projectCardProps.rectangle62}
              text12={projectCardProps.text12}
              surname={projectCardProps.surname}
            />
            <ProjectCard
              rectangle62={projectCard2Props.rectangle62}
              text12={projectCard2Props.text12}
              surname={projectCard2Props.surname}
              className="project-card-6"
            />
            <ProjectCard
              rectangle62={projectCard3Props.rectangle62}
              text12={projectCard3Props.text12}
              surname={projectCard3Props.surname}
              className="project-card"
            />
            <ProjectCard
              rectangle62={projectCard4Props.rectangle62}
              text12={projectCard4Props.text12}
              surname={projectCard4Props.surname}
              className="project-card-8"
            />
            <ProjectCard
              rectangle62={projectCard5Props.rectangle62}
              text12={projectCard5Props.text12}
              surname={projectCard5Props.surname}
              className="project-card-5"
            />
            <ProjectCard
              rectangle62={projectCard6Props.rectangle62}
              text12={projectCard6Props.text12}
              surname={projectCard6Props.surname}
              className="project-card-2"
            />
            <ProjectCard
              rectangle62={projectCard7Props.rectangle62}
              text12={projectCard7Props.text12}
              surname={projectCard7Props.surname}
              className="project-card-7"
            />
            <ProjectCard
              rectangle62={projectCard8Props.rectangle62}
              text12={projectCard8Props.text12}
              surname={projectCard8Props.surname}
              className="project-card-4"
            />
            <ProjectCard
              rectangle62={projectCard9Props.rectangle62}
              text12={projectCard9Props.text12}
              surname={projectCard9Props.surname}
              className="project-card-1"
            />
            <Button22>{button2Props.children}</Button22>
            <Group139>{group139Props.children}</Group139>
            <div className="apartments typographybodycaption-14-semi-bold">{apartments}</div>
            <div className="buildiings typographybodycaption-14-semi-bold">{buildiings}</div>
            <div className="frame-138">
              <div className="place typographybodycaption-14-semi-bold">{place}</div>
              <div className="living typographybodycaption-14-semi-bold">{living}</div>
            </div>
            <div className="rectangle-71"></div>
            <PackageCard
              basic={packageCardProps.basic}
              group69Props={packageCardProps.group69Props}
              buttonProps={packageCardProps.buttonProps}
            />
            <Group1112
              place={group1112Props.place}
              standardProps={group1112Props.standardProps}
              group69Props={group1112Props.group69Props}
              buttonProps={group1112Props.buttonProps}
            />
            <Group1122
              premium={group1122Props.premium}
              premiumProps={group1122Props.premiumProps}
              group69Props={group1122Props.group69Props}
              buttonProps={group1122Props.buttonProps}
            />
            <Group113
              basic={group113Props.basic}
              group={group113Props.group}
              group69Props={group113Props.group69Props}
              buttonProps={group113Props.buttonProps}
            />
            <p className="text-19 typographybodycaption-14-semi-bold">{text24}</p>
            <p className="text-20 typographybodycaption-14-semi-bold">{text25}</p>
            <p className="text-21 typographybody16-regular">{text262}</p>
            <div className="why-webuild valign-text-middle typographyheadlineh4-extrabold-24">{whyWebuild}</div>
            <div className="our-projects valign-text-middle typographyheadlineh4-extrabold-24">{ourProjects}</div>
            <div className="packages valign-text-middle typographyheadlineh4-extrabold-24">{packages}</div>
            <img className="cost-estimator-bg" src={costEstimatorBg} />
            <Group114 costEstimator={group114Props.costEstimator} text28={group114Props.text28} />
            <Button3>{button3Props.children}</Button3>
            <Group117 frame1Props={group117Props.frame1Props} frame12Props={group117Props.frame12Props} />
            <img className="rectangle-69" src={rectangle69} />
            <Group129 />
            <div className="frame-16">
              <p className="text-25 valign-text-middle overpass-semi-bold-white-16px-22">
                <span>
                  <span className="span0 overpass-semi-bold-white-16px2">{spanText6}</span>
                  <span className="span1 overpass-semi-bold-white-32px">{spanText7}</span>
                  <span className="span2-1 overpass-extra-bold-mahogany-40px">{spanText8}</span>
                </span>
              </p>
              <p className="text-26 typographybodycaption-14-semi-bold">{text31}</p>
              <Button4>{button4Props.children}</Button4>
            </div>
          </div>
          <div className="mobile-header">
            <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
          </div>
        </div>
        <div className="testimonials valign-text-middle typographyheadlineh4-extrabold-24">{testimonials}</div>
        <p className="text-22 typographybody16-regular">{text27}</p>
        <div className="group-27">
          <div className="overlap-group5">
            <p className="text-16 typographybodysmall-12-regular">{text21}</p>
            <div className="group-120">
              <img className="ellipse-1" src={ellipse1} />
              <div className="group-140">
                <div className="name valign-text-middle typographyheadlineh5-extrabold-20">{name}</div>
                <div className="bangalore-india valign-text-middle typographybodysmall-12-regular">
                  {bangaloreIndia}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Group129 className="group-141" />
        <div className="overlap-group">
          <div className="rectangle-74"></div>
          <img className="image-3" src={image3} />
          <img className="image-4" src={image4} />
          <img className="image-5" src={image5} />
          <div className="rectangle-67"></div>
          <div className="group-86">
            <div className="white">
              <div className="layer-1" style={{ backgroundImage: `url(${layer1})` }}></div>
            </div>
            <img className="group-85" src={group85} />
          </div>
          <div className="group-32">
            <div className="place-1 valign-text-middle typographyheadlineh5-extrabold-20">{place2}</div>
            <div className="flex-row">
              <div className="flex-col-1">
                <div className="map-pin-1">
                  <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                    <img
                      className="vector-1"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-158@2x.png"
                    />
                  </div>
                </div>
                <div className="phone" style={{ backgroundImage: `url(${phone})` }}></div>
                <div className="mail">
                  <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                    <img className="vector" src={vector2} />
                  </div>
                </div>
              </div>
              <div className="flex-col">
                <p className="text-18 typographybodycaption-14-semi-bold">{text23}</p>
                <div className="flex-col-item valign-text-middle typographybodycaption-14-semi-bold">{text22}</div>
                <div className="flex-col-item valign-text-middle typographybodycaption-14-semi-bold">
                  {contactWebuildCom}
                </div>
              </div>
            </div>
          </div>
          <div className="frame-5">
            
            <div className="quick-links valign-text-middle typographyheadlineh5-extrabold-20">{quickLinks}</div>
            <div className="frame-4">
              <Frame140 aboutUs={frame140Props.aboutUs} projects={frame140Props.projects} />
              <Frame140 aboutUs={frame1402Props.aboutUs} projects={frame1402Props.projects} className="frame-14" />
              <Frame140 aboutUs={frame1403Props.aboutUs} projects={frame1403Props.projects} className="frame-14" />
            </div>
          </div>
          <Group87
            f1={group87Props.f1}
            instagram={group87Props.instagram}
            vector2={group87Props.vector2}
            vector3={group87Props.vector3}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPageMobile;

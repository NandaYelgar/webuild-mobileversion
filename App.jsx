import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageMobile from "./components/LandingPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page-mobile)">
          <LandingPageMobile {...landingPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const buildingData = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-107@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-109@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-110@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-111@2x.png",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-112@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-114@2x.png",
    group2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-116@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-118@2x.png",
    group3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-113@2x.png",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-115@2x.png",
    group4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-117@2x.png",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-119@2x.png",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-120@2x.png",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-123@2x.png",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-126@2x.png",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-129@2x.png",
    group5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-121@2x.png",
    group6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-124@2x.png",
    group7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-127@2x.png",
    group8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-130@2x.png",
    group9: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-122@2x.png",
    group10: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-125@2x.png",
    group11: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-128@2x.png",
    group12: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-131@2x.png",
};

const blueprintData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-133@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-197@2x.png",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-135@2x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-136@2x.png",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-137@2x.png",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-138@2x.png",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-139@2x.png",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-140@2x.png",
};

const planData = {
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-141@2x.png",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-142@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-143@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-144@2x.png",
};

const projectCardData = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-20@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard2Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-21@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard3Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-22@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard4Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-23@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard5Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-24@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard6Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-25@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard7Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-26@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard8Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-27@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const projectCard9Data = {
    rectangle62: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-62-28@2x.png",
    text12: "Project Name",
    surname: "Small description about the project",
};

const button22Data = {
    children: "VIEW MORE",
};

const group139Data = {
    children: "ALL",
};

const group69Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const buttonData = {
    children: "VIEW DETAILS",
};

const packageCardData = {
    basic: "Basic",
    group69Props: group69Data,
    buttonProps: buttonData,
};

const standardData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-147@2x.png",
};

const group692Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button2Data = {
    children: "VIEW DETAILS",
};

const group1112Data = {
    place: "Standard",
    standardProps: standardData,
    group69Props: group692Data,
    buttonProps: button2Data,
};

const premiumData = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-149@2x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-81@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-83@2x.png",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-85@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-84@2x.png",
};

const group693Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button3Data = {
    children: "VIEW DETAILS",
};

const group1122Data = {
    premium: "Premium",
    premiumProps: premiumData,
    group69Props: group693Data,
    buttonProps: button3Data,
};

const group694Data = {
    number: "1600",
    text4: "Rs/Sft",
};

const button4Data = {
    children: "VIEW DETAILS",
};

const group113Data = {
    basic: "Luxury",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-218@2x.png",
    group69Props: group694Data,
    buttonProps: button4Data,
};

const group114Data = {
    costEstimator: "Cost Estimator",
    text28: "Our very own software infused with years of experience. Use it to find a probable cost estimation to help you make a better choice",
};

const button32Data = {
    children: "ESTIMATE NOW",
};

const frame1Data = {
    children: "City",
};

const frame12Data = {
    children: "Area of Construction (Sq.ft)",
};

const group117Data = {
    frame1Props: frame1Data,
    frame12Props: frame12Data,
};

const button42Data = {
    children: "GET A QUOTE",
};

const group86Data = {
    layer1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-98@2x.png",
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/group-85-3@2x.png",
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-167@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-167@2x.png",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
};

const group87Data = {
    f1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/f-1-1@2x.png",
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-395@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-164@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-165@2x.png",
};

const landingPageMobileData = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4-1@1x.png",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4-1@1x.png",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4-1@1x.png",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4-1@1x.png",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/line-4-1@1x.png",
    rectangle72: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-72-1@2x.png",
    text62: "The Webuildd Difference",
    spanText: "What makes us stand miles apart from other firms? We call it “Webuildd Difference”: from the very first time you meet us, to the interaction with our team, the hassle-free engagement and finally the day we hand you the keys to your new home/building, the only standard we accept for ourselves (and our customers) is “Consistent Excellence”. We are never satisfied with our laurels, and our service to you goes far beyond simply putting one brick on top of another. We not only ensure that get quality, but also blend it with creativity, engineering, management, quality and multiple other disciplines to deliver the perfect output for your residential or commercial needs. We have even created our very own",
    spanText2: <> <br /></>,
    spanText3: "cost estimator",
    spanText4: " ",
    spanText5: "that helps you calculate your probable capital outgo for your upcoming building. We really like to make things easy for our clients",
    rectangle73: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-73-1@2x.png",
    text8: "Why Choose Us? Minimum Hassles. Maximum Value",
    text9: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
    rectangle70: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-70-1@2x.png",
    text10: "Our Customer Value Propositions",
    text11: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
    apartments: "APARTMENTS",
    buildiings: "BUILDIINGS",
    place: "INTERIOR",
    living: "LIVING",
    text24: <>Because we bring to the table XX years of comprehensive experience, XX happy customers blended with <br />trust, reliability and transparency</>,
    text25: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
    text262: "We offer an entire array of construction options. Choose from basic to luxury according to your requirements",
    whyWebuild: "Why Webuild?",
    ourProjects: "Our Projects",
    packages: "Packages",
    costEstimatorBg: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/cost-estimator-bg-1@3x.png",
    rectangle69: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/rectangle-69-1@2x.png",
    spanText6: <>Gain the Power of “Unified C2C” <br />Unburden yourself while</>,
    spanText7: <> <br /></>,
    spanText8: "we build your future.",
    text31: <>At Webuilld we offer you a completely<br />“Unified Conception to Construction” value proposition.  No more dealing with a dozen sub-contractors or labour hassles when constructing your home or commercial building</>,
    testimonials: "Testimonials",
    text27: "Listen to what our customers say about us. They are the beating heart of our business",
    text21: "The whole team was very very supportive and I am really very happy. I am an extremely happy customer, Thank you Webuild !",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/ellipse-1-4@2x.png",
    name: "Robert Fox",
    bangaloreIndia: "Bangalore, India",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-3-1@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-4-1@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/image-5-1@2x.png",
    layer1: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-156@2x.png",
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/group-85-4@2x.png",
    place2: "Contact",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-390@2x.png",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-222@2x.png",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-223@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-161@2x.png",
    text23: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text22: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    buildingProps: buildingData,
    blueprintProps: blueprintData,
    planProps: planData,
    projectCardProps: projectCardData,
    projectCard2Props: projectCard2Data,
    projectCard3Props: projectCard3Data,
    projectCard4Props: projectCard4Data,
    projectCard5Props: projectCard5Data,
    projectCard6Props: projectCard6Data,
    projectCard7Props: projectCard7Data,
    projectCard8Props: projectCard8Data,
    projectCard9Props: projectCard9Data,
    button2Props: button22Data,
    group139Props: group139Data,
    packageCardProps: packageCardData,
    group1112Props: group1112Data,
    group1122Props: group1122Data,
    group113Props: group113Data,
    group114Props: group114Data,
    button3Props: button32Data,
    group117Props: group117Data,
    button4Props: button42Data,
    frame145Props: frame145Data,
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
    group87Props: group87Data,
};


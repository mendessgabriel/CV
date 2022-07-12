import Certification from "./Certification";
import Experience from "./Experience";
import Graduation from "./Graduation";
import KeyValuePair from "./KeyValuePair";
import BasicInfo from "../Utils/BasicInfo.json";
import Certifications from "../Utils/Cetifications.json";
import Experiences from "../Utils/Experiences.json";
import Graduations from "../Utils/Graduations.json";
import Idioms from "../Utils/Idioms.json";
import Urls from "../Utils/Urls.json";
import Skills from "../Utils/Skills.json";

class Curriculum {
    public name: string = "";
    public age: number = 0;
    public email: string = "";
    public phone: string = "";
    public currentJob: string = "";
    public city: string = "";
    public urls: KeyValuePair[] = [];
    public experiences: Experience[] = [];
    public graduations: Graduation[] = [];
    public idioms: KeyValuePair[] = [];
    public certifications: Certification[] = [];
    public hardSkills: KeyValuePair[] = [];

    constructor() {
        this.setUpBasicInfo();
        this.setUpIdioms();
        this.setUpGraduation();
        this.setUpExperience();
        this.setUpCertifications();
        this.setUpUrls();
        this.setUpSkills();
    }

    setUpBasicInfo = () => {
        this.name = BasicInfo.basic.name;
        this.age = new Date().getFullYear() - new Date(BasicInfo.basic.age).getFullYear();
        this.email = BasicInfo.basic.email;
        this.currentJob = BasicInfo.basic.currentJob;
        this.phone = BasicInfo.basic.phone;
        this.city = BasicInfo.basic.city;
    }

    setUpIdioms = () => {
        Idioms.idioms.forEach((idiom) => {
            this.idioms.push(idiom);
        });
    }

    setUpGraduation = () => {
        Graduations.graduations.forEach((grad) => {
            this.graduations.push(grad);
        });
    }

    setUpExperience = () => {
        Experiences.experiences.forEach((expe) => {
            this.experiences.push(expe);
        });
    }

    setUpCertifications = () => {
        Certifications.certifications.forEach((cert) => {
            this.certifications.push(cert);
        });
    }

    setUpUrls = () => {
        Urls.urls.forEach((url) => {
            this.urls.push(url);
        });
    }

    setUpSkills = () => {
        Skills.skills.forEach((skill) => {
            this.hardSkills.push(skill);
        });
    }
}

export default Curriculum;
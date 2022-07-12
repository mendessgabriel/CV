import Curriculum from "../Classes/Curriculum";

export class CacheService {
    static curriculumIsInCache = (): boolean => {
        if (localStorage.getItem("curriculum")) return true;
        return false;
    }

    static cacheCurriculum = (curriculum: Curriculum) => {
        if (!this.curriculumIsInCache()) localStorage.setItem("curriculum", JSON.stringify(curriculum));
    }

    static cleanCurriculumInCache = () => {
        if (this.curriculumIsInCache()) localStorage.removeItem("curriculum");
    }

    static getCurriculumInCache = (curriculum: Curriculum): Curriculum => {
        if (!this.curriculumIsInCache()) this.cacheCurriculum(curriculum);
        let newCurriculum: Curriculum;
        let cached: any = localStorage.getItem("curriculum") ? localStorage.getItem("curriculum") : "";
        newCurriculum = JSON.parse(cached);
        return newCurriculum;
    }
}
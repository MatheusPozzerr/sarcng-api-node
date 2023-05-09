import { SubjectModel } from "../models/subject.model";
import { SubjectRepository } from "src/application/di/subject/subject.token";

export const subjectProviders = [
    {
        provide: SubjectRepository,
        useValue: SubjectModel,
    },
];
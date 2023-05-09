/* eslint-disable prettier/prettier */
import { SubjectDto } from "src/core/service/dto/subject.dto";

export interface GetSubjectUseCase {
    getSubjectById(idSubject: number): Promise<SubjectDto>;
}
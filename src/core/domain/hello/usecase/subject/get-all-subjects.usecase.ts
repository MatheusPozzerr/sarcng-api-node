/* eslint-disable prettier/prettier */
import { SubjectModelWhere } from "src/application/rest-api/subject.controller";
import { SubjectDto } from "src/core/service/dto/subject.dto";

export interface GetAllSubjectsUseCase {
    getAllSubjects(query: SubjectModelWhere): Promise<SubjectDto[]>;
}

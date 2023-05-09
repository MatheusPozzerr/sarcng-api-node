/* eslint-disable prettier/prettier */
import { SubjectDto } from "src/core/service/dto/subject.dto";
import { Subject } from "src/core/domain/hello/entity/subject";

export interface PutSubjectUseCase {
    updateSubject(payload: Subject, idSubject: number): Promise<SubjectDto>;
}
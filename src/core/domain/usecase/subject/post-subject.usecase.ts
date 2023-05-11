/* eslint-disable prettier/prettier */
import { SubjectDto } from "src/core/service/subject/dto/subject.dto";
import { Subject } from "../../entity/subject";

export interface PostSubjectUseCase {
  createSubject(payload: Subject): Promise<SubjectDto>;
}

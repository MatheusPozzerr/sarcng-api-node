/* eslint-disable prettier/prettier */
import { SubjectDto } from "src/core/service/dto/subject.dto";
import { Subject } from "src/core/domain/hello/entity/subject";

export interface PostSubjectUseCase {
  createSubject(payload: Subject): Promise<SubjectDto>;
}

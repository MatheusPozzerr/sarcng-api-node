/* eslint-disable prettier/prettier */
import { SubjectModelWhere } from "src/application/rest-api/subject.controller";
import { Subject } from "../entity/subject";

export interface SubjectRepositoryPort {
  getSubjects(query: SubjectModelWhere): Promise<Subject[]>;
  getSubject(id: number): Promise<Subject>;
  updateSubject(payload: Subject, idSubject: number): Promise<Subject>;
  postSubject(payload: Subject): Promise<Subject>;
  deleteSubject(id: number): Promise<Subject>;
}

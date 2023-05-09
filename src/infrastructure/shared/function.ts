import { Model } from "sequelize";

type ModelAttrInterface<T> = T extends Model<infer Y, any> ? Y : unknown;

export function modelToJson<T extends Model>(model: T): ModelAttrInterface<T>;
export function modelToJson<T extends Model>(model: undefined): null;
export function modelToJson<T extends Model>(models: undefined): null;
export function modelToJson<T extends Model>(model: T|null): ModelAttrInterface<T>|null;
export function modelToJson<T extends Model>(models: T[]|null): ModelAttrInterface<T>[]|null;
export function modelToJson<T extends Model>(model?: T|T[]|null): ModelAttrInterface<T>|ModelAttrInterface<T>[]|null {
  if (!model) return null;
  if (Array.isArray(model)) {
    return model.map(x=>x.toJSON());
  } else {
    return model.toJSON();
  }
}

/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from "sequelize-typescript";

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from "../../core/constants";
const databaseConfig = require("./database.config");
import { UserModel } from "src/infrastructure/db/user/user.model";

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      let counter = 0;
      const idIntervalo = setInterval(async () =>{
        try{
          const sequelize = new Sequelize(config);
          sequelize.addModels([UserModel]);
          await sequelize.sync();
          clearInterval(idIntervalo);
          return sequelize;
        }
        catch(e){
          counter++;
          if(counter <= 11){
            clearInterval(idIntervalo);
          }
        }
      }, 1000);
    },
  },
];

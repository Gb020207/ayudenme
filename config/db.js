import sequelize from "./database.js";

 const initDB = async () => {
    try{
       await sequelize.authenticate()

     }
     catch (error){
    console.log("Error al consultar la base de datos");
 }
}
 export default initDB;
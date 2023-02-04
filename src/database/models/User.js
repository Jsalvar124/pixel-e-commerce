module.exports = (sequelize,dataTypes) => {
    let alias= 'User';
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        },
        fullName:{type:dataTypes.STRING},
        userName:{type:dataTypes.STRING},
        email:{type:dataTypes.STRING},
        dateOfBirth:{type:dataTypes.DATE},
        address:{type:dataTypes.STRING},
        password:{type:dataTypes.STRING},
        avatar:{type:dataTypes.STRING},
        categoriaId:{type:dataTypes.INTEGER}
    };
    let config = {
        tableName:'users',
        timestamps:false,
        underscore:true
    };
    const User = sequelize.define(alias,cols,config);
    //asociaciones
    return User; 
}
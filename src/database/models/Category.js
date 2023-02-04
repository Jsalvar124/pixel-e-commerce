module.exports = (sequelize,dataTypes) => {
    let alias= 'Category';
    let cols = {
/*         id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        }, */
        nombre:{type:dataTypes.STRING},
    };
    let config = {
        tableName:'categorias',
        timestamps:false,
        underscore:true
    };
    const Category = sequelize.define(alias,cols,config);
    //asociaciones

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoriaId"
        })
    }
    return Category; 
}
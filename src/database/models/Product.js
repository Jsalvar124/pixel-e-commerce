module.exports = (sequelize,dataTypes) => {
    let alias= 'Product';
    let cols = {
        titulo:{type:dataTypes.STRING},
        descripcionCorta:{type:dataTypes.STRING},
        longDesc:{type:dataTypes.STRING},
        categoriaId:{type:dataTypes.INTEGER},
        precio:{type:dataTypes.DECIMAL},
        descuento:{type:dataTypes.INTEGER},
        img:{type:dataTypes.STRING}
    };
    let config = {
        tableName:'products',
        timestamps:false,
        underscore:true
    };
    const Product = sequelize.define(alias,cols,config);
    //asociaciones
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoriaId"
        })
    }
    return Product; 
}
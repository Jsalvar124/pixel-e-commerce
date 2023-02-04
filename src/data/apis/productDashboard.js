const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;


const productDashboard = {
    sqlSearch: 'select categorias.nombre, count(*) as "total" from products inner join categorias on categoriaId=categorias.id group by categorias.nombre',
    productList: async (req, res) => {

        try {
            var productos = await db.Product.findAll({ include: { all: true } });
            // const categorias = await db.Category.findAll({ include: { all: true } });
            // let newProducts = productos.map(element => ({...element, detail:`product/api/detail/${element.id}`}));

            // SQL search to count by category

            const categorias = await db.sequelize.query(productDashboard.sqlSearch, { type: sequelize.QueryTypes.SELECT })
            console.log(categorias)

            for (let index = 0; index < productos.length; index++) {
                productos[index].setDataValue(
                    "detail",
                    `http://localhost:3000/product/api/detail/${productos[index].id}`
                )
            }

            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        count: productos.length,
                        countByCategory: categorias,
                        url: 'http://localhost:3000/product/api'
                    },
                    data: {
                        products: productos
                    }

                }
            )
        } catch (error) {
            console.log(error)
        }
    },

    productDetail: async (req, res) => {
        const { id } = req.params;
        var producto = await db.Product.findByPk(id, { include: { all: true } });
        producto.setDataValue(
            "imgUrl",
            `/img/${producto.img}`
        )
        res.status(200).json(
            {
                meta: {
                    status: 200,
                    url: `http://localhost:3000/product/api/detail/${producto.id}`
                },
                data: producto
            }
        )
    }
}

module.exports = productDashboard
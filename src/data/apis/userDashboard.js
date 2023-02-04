const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

const userDashboard = {
    userList: async (req, res) => {
        try {
            const users = await db.User.findAll();
            // res.send(productos)
            /* let user = {
                id: req.body.id,
                fullName: req.body.fullName,
                userName: req.body.userName,
                email:req.body.email,
                dateOfBirth:req.body.dateOfBirth,
                address: req.body.address,
                avatar:req.body.avatar
            }
 */

            for (let index = 0; index < users.length; index++) {
                users[index].setDataValue(
                    "password",
                    "Esta informacion es confidencial"
                )
                users[index].setDataValue(
                    "categoriaId",
                    "Esta informacion es confidencial"
                )
                users[index].setDataValue(
                    "detail",
                    `http://localhost:3000/user/api/detail/${users[index].id}`
                )
            }
            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        count: users.length,
                        url: 'http://localhost:3000/user/api'
                    },
                    data: {
                        users: users
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    },
    userDetail: async (req, res) => {
        try {
            let { id } = req.params
            const user = await db.User.findByPk(id);
            user.setDataValue(
                "password",
                "Esta informacion es confidencial"
            )
            user.setDataValue(
                "categoriaId",
                "Esta informacion es confidencial"
            )
            user.setDataValue(
                "imgUrl",
                `/img/avatar/${user.avatar}`
            )
            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        url: `http://localhost:3000/user/api/detail/${user.id}`
                    },
                    data: user
                }
            )
        } catch (error) {

        }
    }
}

module.exports = userDashboard
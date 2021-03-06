const path = require('path');
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./util/database');
const routes = require('./routes/routes');
const User = require('./models/user');
const Expense = require('./models/expense');
const Order = require('./models/order');
const ForgotPassword = require('./models/forgot-password');

const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     User.findByPk(1)
//     .then(user => {
//         req.user = user;
//         console.log(user);
//         next();
//     })
//     .catch(err => console.log(err));
// });

app.use(routes);

app.use((req, res) => {
    console.log('urlll', req.url);
    res.sendFile(path.join(__dirname, `public/${req.url}`));
});

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(ForgotPassword);
ForgotPassword.belongsTo(User);

sequelize
    .sync({
        // force: true
    })
    .then(() => {
        app.listen(3000);
    })
    .catch(err => console.log(err))
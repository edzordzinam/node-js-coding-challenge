'use strict';

module.exports = function (app) {
    app.route('/api/profile')
        .get((req, res) => {
            res.json({
                title: 'Express Login'
            });
        });

    app.route('/api/login')
        .post((req, res) => {
            res.send(200);
        })

    app.route('/api/register')
        .post((req, res) => {
            res.send(200)
        })

    return app;
};

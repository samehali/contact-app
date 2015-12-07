var Contact = require('./models/contact');

module.exports = function (app) {



    app.get('/api/contact', function (req, res) {

        Contact.find(function (err, contactlist) {
            if (err) {
                res.send(err);

            } else {
                res.json(contactlist)
            }

        })
    });
    app.get('/api/contact/:id', function (req, res) {

        Contact.findOne({ _id: req.params.id }, function (err, contactlist) {
            if (err) {
                res.send(err);

            } else {
                res.json(contactlist)
            }

        })
    });


    // create todo and send back all todos after creation
    app.post('/api/contact', function (req, res) {
        Contact.create({
            name: req.body.name,
            number: req.body.number,
            email: req.body.email
        }, function (err, contact) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(contact)
            }

        });
    })


    app.delete('/api/contact/:id', function (req, res) {
        Contact.remove({ _id: req.params.id }, function (err, contact) {
            if (err) {
                res.send(err);

            } else {
                res.json(contact);
            }
        });

    });
    app.put('/api/contact/:id', function (req, res) {
        Contact.findById(req.params.id, function (err, contact) {
            if (err) {
                res.send(err);

            } else {
                contact.name=req.body.name,
                contact.number=req.body.number,
                contact.email=req.body.email
                contact.save(function (err) {
                    if (err) {
                        res.send(err);

                    }
                    else {
                        res.json(contact);
                    }

                })
            }
        });

    });

    app.get('*', function (req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
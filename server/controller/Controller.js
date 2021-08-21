const { Guest, Visit } = require("../models");
const { Op } = require("sequelize");

class Controller {
    static getAllGuests(req, res) {
        Guest.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to get guests data',
                    error: err
                })
            })
    }

    static getCurrentGuests(req,res) {
        Guest.findAll({
            include: {
                model: Visit,
                where: {
                    checkOut: {
                        [Op.eq]: null
                    }
                }
            }
        })
        .then(result => {
            res.status(200).json(result)
        })
    }

    static getOneGuest(req,res) {
        Guest.findByPk(req.params.id, {
            include: Visit
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
        
    }

    static createGuest(req,res) {

        let params = {
            name: req.body.name,
            idCard: req.body.idCard,
            dateOfBirth: req.body.dateOfBirth
        }

        Guest.create(params)
        .then(result => {
            console.log(result);
            res.status(201).json(result)
        })
        .catch(err => {
            console.log(err);
            res.status(401).json(err)
        })
    }

    static checkIn(req, res) {

        Guest.findByPk(req.body.idCard)
        .then(result => {
            console.log('found guest', result);
            let params = {
                idCard: req.body.idCard,
                checkIn: new Date(),
                purpose: req.body.purpose
            }
            Visit.findOne({
                where: {
                    idCard: req.body.idCard,
                    checkOut: {
                        [Op.eq]: null
                    }
                }
            })
            .then(result => {
                if (result === null) {
                    Visit.create(params)
                        .then(result => {
                            console.log(result);
                            res.status(200).json({
                                message: 'Successfully checked in guest.',
                                data: result
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(400).json(err)
                        })
                } else {
                    res.status(400).json({
                        message: 'Guest is still checked in'
                    })
                }
            })
            
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                message: 'Guest not found, please register guest first.',
                error: err
            })
        })

        
    }

    static checkOut(req,res) {

        Visit.findOne({
            where: {
                idCard: req.body.idCard,
                checkOut: {
                    [Op.eq]: null
                }
            },
           
        })
            .then(result => {
                Visit.update({checkOut: new Date()}, {
                    where: {
                        id: result.id
                    }
                })
                .then(result => {
                    console.log(result);
                    res.status(200).json({ message: 'Successfully checked out guest' })
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err)
                })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
}

module.exports = Controller
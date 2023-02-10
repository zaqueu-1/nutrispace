const { Patient: PatientModel } = require('../models/Patient')

const patientController = {

    create: async(req, res) => {
        try {
            const patient = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                weight: req.body.weight,
                height: req.body.height,
                drive: req.body.drive,
                tel: req.body.tel,
                email: req.body.email,
                plan: req.body.plan,
                start: req.body.start,
                end: req.body.end,
                feedback: req.body.feedback,
                update: req.body.update,
                active: req.body.active,
            };

            const response = await PatientModel.create(patient);

            res.status(201).json({ response, msg: 'Paciente cadastrado!' });

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const patients = await PatientModel.find();

            res.json(patients);

        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const patient = await PatientModel.findById(id);

            if(!patient) {
                res.status(404).json({ msg: 'Paciente não encontrado.' });
                return;
            }

            res.json(patient);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const patient = await PatientModel.findByIdAndDelete(id);

            if(!patient) {
                res.status(404).json({ msg: 'Paciente não encontrado.' });
                return;
            }

            res.status(200).json({ patient, msg: 'Paciente excluído.' });

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const patient = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                weight: req.body.weight,
                height: req.body.height,
                drive: req.body.drive,
                tel: req.body.tel,
                email: req.body.email,
                plan: req.body.plan,
                start: req.body.start,
                end: req.body.end,
                feedback: req.body.feedback,
                update: req.body.update,
                active: req.body.active,
            };

            const updatedPatient = await PatientModel.findByIdAndUpdate(id, patient)

            if(!updatedPatient) {
                res.status(404).json({ msg: 'Paciente não encontrado.' });
                return;
            }

            res.status(200).json({ patient, msg: 'Paciente atualizado com sucesso!'})

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = patientController;
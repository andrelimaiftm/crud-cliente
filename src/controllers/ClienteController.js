const db = require('../database/connector');

module.exports = {
    async index(req, res) {
        try {
            const results = await db('cliente');

            return res.status(200).json({ message: 'success', results });
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao obter a lista.' });
        }
    },


    async create(req, res) {
        const nome = req.body.nome;
        const email = req.body.email;

        try {
            await db('cliente').insert({
                nome, email
            });

            return res.status(201).json({ message: 'success' });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'error' });
        }
    },


    async update(req, res) {
        const id = req.params.id;
        const nome = req.body.nome;
        const email = req.body.email;

        try {
            await db('cliente')
                .where('id', id)    
                .update({
                    nome, email
                });            

            return res.status(200).json({ message: 'success' });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'error' });
        }
    },


    async delete(req, res) {
        const id = req.params.id;

        try {
            await db('cliente')
                .where('id', id)    
                .del();

            return res.status(200).json({ message: 'success' });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'error' });
        }
    },


    async buscaId(req, res) {
        const id = req.params.id;
        console.log("id: "+id);

        try {
            const results = await db('cliente')
                .where('id', id)
                .first();

            return res.status(200).json({ message: 'success', results });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'error' });
        }
    },


}
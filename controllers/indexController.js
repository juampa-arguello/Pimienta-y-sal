
let platos = [
    {
        id: 1,
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos',
        price: 'U$S 65.50',
        img: 'Carpaccio-de-salmon.jpg'
    },
    {
        id: 2,
        name: 'Risotto de berenjena',
        description: 'Risotto de berenjena y queso de cabra',
        price: 'U$S 47.00',
        img: 'Risotto-berenjena-queso-cabra'
    },
    {
        id: 3,
        name: 'Mousse de arroz',
        description: 'Mousse de arroz con leche y aroma de azahar',
        price: 'U$S 27.50',
        img: 'Mousse-de-arroz-con-leche.jpg'
    },
    {
        id: 4,
        name: 'Espárragos blancos',
        description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        price: 'U$S 37.50',
        img: 'esparragos.png'
    },
]

module.exports = {
    index: (req, res) => {
        res.render('index', { platos });
    },
    detail: (req, res) => {
        let plato = platos.find(plato => {
            if (plato.id == +req.params.id) {
                return plato
            }
        })

        res.render('detalleMenu', { plato });
    },
}
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productos = require('../data/productsDataBase.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		const visitedProduct = productos.filter((product) => product.category === "visited");

		res.render('index', {productosVisitados: visitedProduct})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;

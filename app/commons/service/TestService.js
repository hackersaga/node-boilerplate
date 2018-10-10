
let TestProvider = require('../dataprovider/TestProvider');

let TestService = {

	create: async function(name, mobile){
		if(name && mobile){
			let output =  await TestProvider.create(name, mobile);
			return output.insertId;
		}
		return null;
	},

	getById: async function(id){
		let results =  await TestProvider.getById(id);
		console.log("results", results);
		if(results && results.length>0){
			return results[0];
		}
		return null;
	}


};



module.exports = TestService;
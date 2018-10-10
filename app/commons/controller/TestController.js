
let TestService = require(__dirname+'../../service/TestService');
let { success, error } = require("../../../utils/ResponseWrapperUtils");

let TestController = {

	createHuman: async (req, res) => {
		try{
			if(req.body && req.body.mobile && req.body.name){
				let output =  await TestService.create(req.body.name, req.body.mobile);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while fetching human: ", err);
			return error(res, err);
		}
	},
	
	getHuman: async (req, res) => {
		try{
			if(req.query.id){
				let output = await TestService.getById(req.query.id);
				return success(res, output);
			}else{
				return error(res, null, 400, "Bad Request");
			}
		}catch(err){
			console.error("Error occurred while fetching human: ", err);
			return error(res, err);
		}
	}

}

module.exports = TestController;

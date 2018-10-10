let StringUtils = {
	isEmail : (email) => {
		var regex = /\S+@\S+\.\S+/;
		return regex.test(email);
	},

	isValidMobile : (mobile) => {
		var regex = /[7-9]\d{9}/
		return (!isNaN(mobile) && regex.test(mobile));
	},

	getFirstNumFromString: (str) =>{
		let nums = str.match(/\d+/g).map(Number);
		if(nums && nums.length>0){
			return nums[0];
		}
		return null;
	},

	getTextFromHtml: (str) => {
		return str.replace(/<\/?[^>]+(>|$)/g, "");
	}
}

module.exports = StringUtils;
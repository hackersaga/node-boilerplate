let ObjectUtils = {

	isNull : function(mVar){
		if(!mVar){
			if( mVar!==0 && mVar!==false && mVar!==""){
				return true;
			}
		}
		return false;
	},

	notNull : function(mVar){
		return !(this.isNull(mVar));
	}
	
}

module.exports = ObjectUtils;
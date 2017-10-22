
/***
 * Checks to see if the string passed in is either
 * null or empty
 */
function isEmptyString(strValue) {
	if(strValue == null || strValue == "" || strValue.length == 0)
		return true;
	else
		return false;
}


/**
 * check date JavaScript function (US format - mm/dd/yyyy)
 * if date is valid then function returns true, otherwise returns false
 */
function isDate(strDate){
	var objDate;  // date object initialized from the txtDate string
	var mSeconds; // milliseconds from txtDate
	
	// date length should be 10 characters - no more, no less
	if (strDate.length != 10) return false;
	
	// extract day, month and year from the strDate string
	// expected format is mm/dd/yyyy
	// subtraction will cast variables to integer implicitly
	var day   = strDate.substring(3,5)  - 0;
	var month = strDate.substring(0,2)  - 1; // because months in JS start with 0
	var year  = strDate.substring(6,10) - 0;
	
	// third and sixth character should be /
	if (strDate.substring(2,3) != '/') return false;
	if (strDate.substring(5,6) != '/') return false;
	
	// test year range
	if (year < 999 || year > 3000) return false;
	
	// convert strDate to the milliseconds
	mSeconds = (new Date(year, month, day)).getTime();
	
	// set the date object from milliseconds
	objDate = new Date();
	objDate.setTime(mSeconds);
	
	// if there exists difference then date isn't valid
	if (objDate.getFullYear() != year)  return false;
	if (objDate.getMonth()    != month) return false;
	if (objDate.getDate()     != day)   return false;
	
	// otherwise return true
	return true;
}

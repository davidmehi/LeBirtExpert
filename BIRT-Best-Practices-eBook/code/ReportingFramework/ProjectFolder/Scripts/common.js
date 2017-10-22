
/*****************************************************************
**  This JS file is part of the Classic Models example          **
**  provided with the eBook:                                    **
**  Le BIRT Expert's Guide to BIRT Best Practices               **
**                                                              **
**  Visit http://www.lebirtexpert.com for more information      **
**                                                              **
*****************************************************************/

// http://www.w3schools.com/jsref/jsref_obj_date.asp

/**************************************************
 * Name:		getCurrentTimeFormatted
 * Description:	Gets the current time 
 * Parameters:	
 * Returns:		Current time (hh:mm:ss.ms)
 **************************************************/
function getCurrentTimeFormatted() {
	return getTimeFromDate(new Date());
}

/**************************************************
 * Name:		getCurrentTimeFromDate
 * Description:	formats time from a Date Object
 * Parameters:	JS Date Object
 * Returns:		Current time (hh:mm:ss.ms)
 **************************************************/
function getTimeFromDate(dtObject) {
	
	if(dtObject == null) {return;}
	var hours = dtObject.getHours();
	var minutes = dtObject.getMinutes();
	var seconds = dtObject.getSeconds();
	var mSeconds = dtObject.getMilliseconds();

	// build string and return
	return prefixWithZero(hours) + ":" 
				+ prefixWithZero(minutes) + ":" 
	  			+ prefixWithZero(seconds) + "." 
	  			+ prefixWithZero(mSeconds);
}

/**************************************************
 * Name:		prefixWithZero
 * Description:	if value has length of 1, prefix value with zero 
 * Parameters:	number value
 * Returns:		value with prefix 0 if needed
 **************************************************/
function prefixWithZero(nValue) {
	
	nValue += ""; // convert to string	
	if (nValue.length == 1) {nValue = "0" + nValue;}
	return nValue;
}

/**************************************************
 * Name:		setStartTime
 * Description:	set current Date as start time as
 * 				global parameter
 * Parameters:	
 * Returns:		
 **************************************************/
function setStartTime() {
	reportContext.setGlobalVariable("dtStartTimer", new Date());
}

/**************************************************
 * Name:		getStartTime
 * Description:	gets start time
 * Parameters:	
 * Returns:		
 **************************************************/
function getStartTime() {
	return reportContext.getGlobalVariable("dtStartTimer");
}

/**************************************************
 * Name:		setEndTime
 * Description:	set current Date as end time as
 * 				global parameter
 * Parameters:	
 * Returns:		
 **************************************************/
function setEndTime() {
	reportContext.setGlobalVariable("dtEndTimer", new Date());
}

/**************************************************
 * Name:		getEndTime
 * Description:	gets end time
 * Parameters:	
 * Returns:		
 **************************************************/
function getEndTime() {
	return reportContext.getGlobalVariable("dtEndTimer");
}

/**************************************************
 * Name:		getTimerResults
 * Description:	calculates difference between start
 * 				and end time.
 * 				- Set Start Time with "setStartTime()"
 * 				- Set End Time with "setEndTime()"
 * Parameters:	
 * Returns:		difference 
 **************************************************/
function getTimerResults() {
	
	var dtStartTime = getStartTime();
	var dtEndTime = getEndTime();
	
	// if start or end values are null, then return
	if(dtStartTime == null && dtEndTime == null) {return;}
	
	var minute = 1000*60;
	var second = 1000;
	var mSecond = 1;
	var minuteDiff = Math.floor((dtEndTime.getTime()-dtStartTime.getTime())/(minute));
	var secondDiff = Math.floor((dtEndTime.getTime()-dtStartTime.getTime())/(second));
	var mSecondDiff = (dtEndTime.getTime()-dtStartTime.getTime())/(mSecond);
	
	return prefixWithZero(minuteDiff) + ":" 
			+ prefixWithZero(secondDiff) + "." 
			+ prefixWithZero(mSecondDiff);	
}


/**************************************************
 * Name:		isEmptyString
 * Description:	Checks to see if the string passed in 
 * 				is either null or empty
 * Parameters:	string value
 * Returns:		true/false 
 **************************************************/
function isEmptyString(strValue) {
	if(strValue == null || strValue == "" || strValue == "null" || strValue.length == 0)
		return true;
	else
		return false;
}



/**************************************************
 * Name:		isDate
 * Description:	check date JavaScript function (US format - mm/dd/yyyy)
 * 				if date is valid then function returns true, otherwise returns false
 * Parameters:	date string value
 * Returns:		true/false 
 **************************************************/
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


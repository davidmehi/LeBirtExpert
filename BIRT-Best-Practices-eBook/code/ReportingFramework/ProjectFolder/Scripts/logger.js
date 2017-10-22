/*****************************************************************
**  This JS file is part of the Classic Models example          **
**  provided with the eBook:                                    **
**  Le BIRT Expert's Guide to BIRT Best Practices               **
**                                                              **
**  Visit http://www.lebirtexpert.com for more information      **
**                                                              **
*****************************************************************/

importPackage(Packages.java.util.logging);
importPackage(Packages.javax.swing);

// Call function to initialize logging
initializeLogger();

/**************************************************
 * Name:		initializeLogger
 * Description:	Initializes logger variables
 * 				NOTE: This method can be customized
 * 					  to use a Logger passed in 
 * 					  through the reportContext or
 * 					  another type of custom
 * 					  Java Class
 * Parameters:	string value
 * Returns:		true/false 
 **************************************************/
function initializeLogger() {
	// Log File Location
	logFilePath = "C:\\eclipse-galileo-birt\\log\\birt-reports.log";
	// Logger Name
	loggerName = "ClassicModelsExample";
	// Enable/Disable Logging
	blnLogging = true;
	// log file size limit (5mb)
	logFileSizeLimit = 5000000;
	// number of log files
	numOfLogFiles = 1;
	
	// Enable/Disable Debug Window
	blnDisplayDebugWindow = true;
	// 
	
	if(blnLogging) {
		// Create a file handler that uses 5 logfiles, 
		// FileHandler fh = new FileHandler(pattern, limit, numLogFiles); 
		
		//fileHandler = new FileHandler(logFilePath, true);
		fileHandler = new FileHandler(logFilePath, logFileSizeLimit, numOfLogFiles, true);
		
		// NOTE: This variable could use a Logger object 
		//		 passed in through the Report Context.
		//		 Or, it could refer to another custom
		//		 Java Object
		reportLogger = Logger.getLogger(loggerName);
		reportLogger.addHandler(fileHandler);
	}
}

/**************************************************
 * Name:		logMessageInfo
 * Description:	logs info messages
 * Parameters:	string message
 * Returns:		
 **************************************************/
function logMessageInfo(strMessage) {
	if(blnLogging)
		reportLogger.info("**INFO: " + strMessage);
}

/**************************************************
 * Name:		logMessageWarning
 * Description:	logs warning messages
 * Parameters:	string message
 * Returns:		
 **************************************************/
function logMessageWarning(strMessage) {
	if(blnLogging)
		reportLogger.warning("**WARNING: " + strMessage);
}

/**************************************************
 * Name:		logMessageSevere
 * Description:	logs severe messages
 * Parameters:	string message
 * Returns:		
 **************************************************/
function logMessageSevere(strMessage) {
	if(blnLogging)
		reportLogger.severe("**SEVERE: " + strMessage);
}


/*****************************************************
 * Name: 		logToDebugWindow
 * Description: Quick and dirty way of displaying a debug 
 * 				messages to a Window in eclipse using Swing.
 * 				Uses global variable so all function calls
 * 				print to same window
 * Parameters:  strMessage - message to display
 * Returns:  	void
 *****************************************************/
function logToDebugWindow(strMessage) {
	
	// can turn on/off using this variable
	if(!blnDisplayDebugWindow) { return; }
	
	// current JTextArea - global parameter
	var currJTextArea = reportContext.getGlobalVariable("jfDebugWindow");
	
	// if null, then create and store as global variable
	if(currJTextArea == null) {
		
		// Create JFrame
		var jFrame = new JFrame("Debug Window"); 
		
		// Create JTextArea - append message and new-line
		var jTextArea = new JTextArea(20, 100);
		jTextArea.append(strMessage);
		jTextArea.append("\n");					
		
		//Create a JPanel
		var jPanel = new JPanel();
		// add text area to scroll pane
		jPanel.add(jTextArea);
		
		//Create a vert and horiz scroll bar using JScrollPane 
		var jScrollPane = new JScrollPane(jPanel, JScrollPane.VERTICAL_SCROLLBAR_ALWAYS, JScrollPane.HORIZONTAL_SCROLLBAR_ALWAYS);
		jScrollPane.getHorizontalScrollBar().setUnitIncrement(5);
		jScrollPane.getVerticalScrollBar().setUnitIncrement(5);
		
		//Add JScrollPane into JFrame
		jFrame.add(jScrollPane);
		jFrame.setSize(400, 400); 
		jFrame.show();
		
		// set JTextArea as a Global Parameter for future reference
		reportContext.setGlobalVariable("jfDebugWindow", jTextArea);
	} else {
		// Print to Global Reference of the JTextArea
		currJTextArea.append(strMessage);
		currJTextArea.append("\n");
	}
}


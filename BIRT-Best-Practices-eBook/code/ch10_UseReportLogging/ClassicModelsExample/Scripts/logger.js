
importPackage(Packages.java.util.logging);
importPackage(Packages.javax.swing);

logFilePath = "C:\\eclipse-galileo-birt\\birt.log";
loggerName = "ClassicModelsExample";
blnLogging = true;

var fileHandler = new FileHandler(logFilePath, true);
var baseLogger = Logger.getLogger(loggerName);
baseLogger.addHandler(fileHandler);

function logMessageInfo(strMessage) {
	baseLogger.info("**INFO: " + strMessage);
}

function logMessageWarning(strMessage) {
	baseLogger.warning("**WARNING: " + strMessage);
}

function logMessageSevere(strMessage) {
	baseLogger.severe("**SEVERE: " + strMessage);
}

function logDebugSevere(strMessage) {
	baseLogger.log(Level.SEVERE, strMessage);
}

function logDebugWarning(strMessage) {
	baseLogger.log(Level.WARNING, strMessage);
}

function logDebugInfo(strMessage) {
	baseLogger.log(Level.INFO, strMessage);
}

function logDebugConfig(strMessage) {
	baseLogger.log(Level.CONFIG, strMessage);
}

function logDebugFine(strMessage) {
	baseLogger.log(Level.FINE, strMessage);
}

function logDebugFiner(strMessage) {
	baseLogger.log(Level.FINER, strMessage);
}

function logDebugFinest(strMessage) {
	baseLogger.log(Level.FINEST, strMessage);
}

function logDebugOff(strMessage) {
	baseLogger.log(Level.OFF, strMessage);
}

function logDebugAll(strMessage) {
	baseLogger.log(Level.ALL, strMessage);
}


function logToDebugWindow(strMessage) {
	
	JFrame jframe = new JFrame("Debug Window");

    jframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    jframe.getContentPane().add(new JLabel("bonbon"));

    jframe.setSize(100,100);
    jframe.setVisible(true);
}

// JFrame

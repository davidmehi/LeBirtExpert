/**
 * 
 */
package com.leBirtExpert.birtBestPractices.dataSourceProps;

/**
 * This class is a stub class.  It provides a placeholder for
 * implementation.  The BIRT Report will call this class
 * via JavaScript to retrieve Data Source properties from
 * an external property file
 * 
 * @author David Mehi (Le BIRT Expert)
 */
public class DataSourceProperties {

	private String dbURL = "";
	private String dbUserId = "";
	private String dbPassword = "";
	
	/**
	 * Open, read, parse property file
	 * @param filePath
	 * @return result (success/fail)
	 */
	public String readPropertyValues(String filePath) {
		
		// TODO: OPEN PROPERTY FILE
		// TODO: PARSE VALUES
		// TODO: STORE IN LOCAL VARIABLES
		
		// hardcoded values for example
		this.dbURL = "jdbc:mysql://localhost:3306/ClassicModels";
		this.dbUserId = "root";
		this.dbPassword = "passw0rd"; // SHOULD BE ENCYPTED VALUE 
		
		return "SUCCESS";
	}

	/**
	 * @return the dbPassword
	 */
	public String getDbPassword() {
		
		// DECRYPT PASSWORD BEFORE RETURNING
		return dbPassword;
	}
	/**
	 * @return the dbDriverURL
	 */
	public String getDbURL() {
		return dbURL;
	}
	/**
	 * @return the dbUserId
	 */
	public String getDbUserId() {
		return dbUserId;
	}
	
}

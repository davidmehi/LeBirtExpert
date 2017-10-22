/**
 * 
 */
package com.leBirtExpert.birtBestPractices.scriptedDS;

/**
 * Object representing the Customer BIRT Data Set
 * @author David Mehi (Le BIRT Expert)
 */
public class CustomerBIRTDataSet {

	private int customerNumber;
	private int numberOfYears;
	private int visitsPerMonth;
	
	/**
	 * Parses a string array of data, converts to int and 
	 * sets local variables
	 * @param columnDataArray
	 */
	public CustomerBIRTDataSet(String[] columnDataArray) {
		
		this.setCustomerNumber(Integer.parseInt(columnDataArray[0].trim()));
		this.setNumberOfYears(Integer.parseInt(columnDataArray[1].trim()));
		this.setVisitsPerMonth(Integer.parseInt(columnDataArray[2].trim()));		
	}
	/**
	 * @return the customerNumber
	 */
	public int getCustomerNumber() {
		return customerNumber;
	}
	/**
	 * @param customerNumber the customerNumber to set
	 */
	public void setCustomerNumber(int customerNumber) {
		this.customerNumber = customerNumber;
	}
	/**
	 * @return the numberOfYears
	 */
	public int getNumberOfYears() {
		return numberOfYears;
	}
	/**
	 * @param numberOfYears the numberOfYears to set
	 */
	public void setNumberOfYears(int numberOfYears) {
		this.numberOfYears = numberOfYears;
	}
	/**
	 * @return the visitsPerMonth
	 */
	public int getVisitsPerMonth() {
		return visitsPerMonth;
	}
	/**
	 * @param visitsPerMonth the visitsPerMonth to set
	 */
	public void setVisitsPerMonth(int visitsPerMonth) {
		this.visitsPerMonth = visitsPerMonth;
	}
	
	/**
	 * returns string rep of object
	 */
	public String toString() {
		StringBuffer sb = new StringBuffer();
		sb.append("customerNumber: " + customerNumber + ", ")
			.append("numberOfYears: " + numberOfYears + ", ")
			.append("visitsPerMonth: " + visitsPerMonth);
		return sb.toString();
	}
	
	// Rest of getters/setters here
}

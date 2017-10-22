/*
 * ReadCSVForBIRTDataSet.java
 */
package com.leBirtExpert.birtBestPractices.scriptedDS;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 * This class is used to read and parse a CSV
 * file into an ArrayList of CustomerBIRTDataSet
 * @author David Mehi (Le BIRT Expert)
 */
public class ReadCSVForBIRTDataSet {
	
	// Java File Reader used to open CSV File
	private FileReader fileReader;
	// Used to read input of CSV File
	private BufferedReader bufferedReader;

	/**
	 * Opens connection to CSV File
	 * @param dbFile
	 * @return result message returned to BORT
	 */
	public String openFileConnection(String dbFile) {
		
		// Result Message that is returned
		String resultMsg = "";
		
		try {
			// file reader
			fileReader = new FileReader(dbFile);

			// buffered reader
			bufferedReader = new BufferedReader(fileReader);
	
			resultMsg = "SUCCESS";
		} catch (FileNotFoundException fnfe) {
			// log this exception
			resultMsg = "ERROR: " + fnfe.toString();
		}
		return resultMsg;
	}
	
	/**
	 * Closes File connection
	 */
	public void closeFileConnection() {
		if(fileReader != null) {
			try {
				fileReader.close();
			} catch(IOException ioe) {
				// log exception
			}
			fileReader = null;
		}
		if(bufferedReader != null) {
			try {
				bufferedReader.close();
			} catch(IOException ioe) {
				// log exception
			}
			bufferedReader = null;
		}
	}
	
	/**
	 * Reads and discards first two lines of file
	 * @return
	 */
	public String skipFirstTwoLines() {
		
		String resultMsg = "";
		String dataLine = "";
		
		try {
			// Since we know the first two lines of the CSV file
			// contain field and type information, we can skip these
			dataLine = bufferedReader.readLine(); // skip line 1
			dataLine = bufferedReader.readLine(); // skip line 2
		
			resultMsg = "SUCCESS";
		} catch(IOException ioe) {
			// log message
			resultMsg = "ERROR: " + ioe.toString();
		}
		return resultMsg;
	}
	
	/**
	 * Reads the next line of the file, parses,
	 * returns CustomerBIRTDataSet object
	 * @return
	 */
	public CustomerBIRTDataSet getNextDataSetRow() {
		
		String dataLine;
		CustomerBIRTDataSet dataSetRow = null;
		
		try {
			dataLine = bufferedReader.readLine();
			if (( dataLine) != null){
				// even though the data is numbers, we'll split them into
				// a string array for now
				String columnDataArray[] = dataLine.split(",");
				dataSetRow = new CustomerBIRTDataSet(columnDataArray);
			} 
		} catch(IOException ioe) {
			// log message
		}
		return dataSetRow;
	}
	
}

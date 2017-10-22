/**
 * 
 */
package com.lebirtexpert.classicmodels.birt.eh;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.eclipse.birt.report.engine.api.script.IDataSetRow;
import org.eclipse.birt.report.engine.api.script.IReportContext;
import org.eclipse.birt.report.engine.api.script.IUpdatableDataSetRow;
import org.eclipse.birt.report.engine.api.script.instance.IDataSetInstance;

import com.lebirtexpert.classicmodels.data.CustomerBIRTDataSet;
import com.lebirtexpert.classicmodels.data.ReadCSVForBIRTDataSet;
import com.lebirtexpert.framework.birt.eh.ScriptedDataSetEH;

/**
 * Customer CSV Data Set Event Handler
 * @author Le BIRT Expert
 */
public class CustomerCSVDataSetEH extends ScriptedDataSetEH {

	private Logger logger = Logger.getLogger("CustomerCSVDataSetEH");
	private ReadCSVForBIRTDataSet readCSVForBIRTDataSet;
	private int recordCount = 0;
	
	/**
	 * Constructor
	 */
	public CustomerCSVDataSetEH() {
	}
	
	/**
	 * before Open
	 * @param dataSet
	 * @param reportContext
	 */
	public void open(IDataSetInstance dataSet) {

		try {
			// location of csv file - local variable
			String dbFile = "/LeBirtExpert/BIRT-Best-Practices/flatFiles/customerFlatData.csv";
	
			// declares Java object
			// Remember to include a reference to Java project 
			//   Right click on "CreateUseCommonDataItems", Properties, Project References
			readCSVForBIRTDataSet = new ReadCSVForBIRTDataSet();
	
			String resultMsg = readCSVForBIRTDataSet.openFileConnection(dbFile);
			logger.log(Level.INFO, resultMsg);
			
			recordCount = 0;

			// skip first two lines
			readCSVForBIRTDataSet.skipFirstTwoLines();
		
		} catch(Exception ex) {
			logger.log(Level.FINE, ex.toString());
		}
	}
	
	/**
	 * after close
	 * @param reportContext
	 */
	public void close(IDataSetInstance dataSet) {

		try {
			// close file handlers
			readCSVForBIRTDataSet.closeFileConnection();

			// set variable to null
			readCSVForBIRTDataSet = null;
		
		} catch(Exception ex) {
			logger.log(Level.FINE, ex.toString());
		}

	}

	
	/**
	 * fetch
	 * @param dataSet
	 * @param row
	 */
	public boolean fetch(IDataSetInstance dataSet, IUpdatableDataSetRow row) {
		
		try {
			// get the next row
			CustomerBIRTDataSet customerDataSetRow = readCSVForBIRTDataSet.getNextDataSetRow();
	
			if( customerDataSetRow != null ){
	
				// 3 ways to populate the row
				row.setColumnValue("CustomerNumber", customerDataSetRow.getCustomerNumber());
				row.setColumnValue("NumberOfYears", customerDataSetRow.getNumberOfYears());
				// note: column count begins with 1
				row.setColumnValue(3, customerDataSetRow.getVisitsPerMonth());
				// increments current row count
				recordCount++; 
				return true;
			}
			
		} catch(Exception ex) {
			logger.log(Level.FINE, ex.toString());
		}
		return false;
	}
	
}

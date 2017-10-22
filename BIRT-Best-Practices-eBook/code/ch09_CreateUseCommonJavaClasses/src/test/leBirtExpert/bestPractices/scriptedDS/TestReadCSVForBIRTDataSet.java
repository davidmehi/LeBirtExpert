package test.leBirtExpert.bestPractices.scriptedDS;

import junit.framework.TestCase;

import com.leBirtExpert.birtBestPractices.scriptedDS.CustomerBIRTDataSet;
import com.leBirtExpert.birtBestPractices.scriptedDS.ReadCSVForBIRTDataSet;

public class TestReadCSVForBIRTDataSet extends TestCase {

	public void testComplete() {
		
		// file
		String dbFile = "c:\\LeBirtExpert\\BIRT-Best-Practices\\flatFiles\\customerFlatData.csv";
		
		// open file
		ReadCSVForBIRTDataSet readDataSet = new ReadCSVForBIRTDataSet();
		readDataSet.openFileConnection(dbFile);
		
		// skip first two lines
		readDataSet.skipFirstTwoLines();
		
		// iterate over results
		CustomerBIRTDataSet dataSetRow = null;
		int rowCount = 0;
		while( (dataSetRow = readDataSet.getNextDataSetRow()) != null) {
			//print out values found
			System.out.println(dataSetRow.toString());
			rowCount++;
		}
		
		// close file
		readDataSet.closeFileConnection();
		
		assertTrue(rowCount > 0);
		
	}


}

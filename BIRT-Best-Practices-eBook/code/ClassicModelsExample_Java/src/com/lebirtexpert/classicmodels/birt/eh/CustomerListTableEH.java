/**
 * 
 */
package com.lebirtexpert.classicmodels.birt.eh;

import java.util.logging.Level;
import java.util.logging.Logger;

import org.eclipse.birt.report.engine.api.script.IReportContext;
import org.eclipse.birt.report.engine.api.script.instance.ITableInstance;
import org.eclipse.birt.report.model.api.CellHandle;
import org.eclipse.birt.report.model.api.DataItemHandle;
import org.eclipse.birt.report.model.api.LabelHandle;
import org.eclipse.birt.report.model.api.ReportDesignHandle;
import org.eclipse.birt.report.model.api.RowHandle;
import org.eclipse.birt.report.model.api.TableHandle;

import com.lebirtexpert.framework.birt.eh.TableEH;

/**
 * @author Le BIRT Expert
 */
public class CustomerListTableEH extends TableEH {

	Logger logger = Logger.getLogger("CustomerListTableEH");
	/**
	 * Constructor
	 */
	public CustomerListTableEH() {
	}
	
	/**
	 * onCreate event handler
	 * @param table Table Instance
	 * @param reportContext Report Context
	 */
	public void onCreate(ITableInstance table, IReportContext reportContext) {
		
		try {
			ReportDesignHandle designHandle = reportContext.getDesignHandle();
			TableHandle tableHandle = (TableHandle) designHandle.findElement("CustomerListTable");  // name defined in report design
			tableHandle.insertColumn(5, 1);
			
			// create new label
			LabelHandle labelHandle = designHandle.getElementFactory().newLabel("lblCreditLimit");
			labelHandle.setText("Credit Limit");
			labelHandle.setStyleName("lblTableHeader10Bold");
			
			// create new data item
			DataItemHandle dataItemHandle = designHandle.getElementFactory().newDataItem("datCreditLimit");
			dataItemHandle.setResultSetColumn("creditLimit");
			dataItemHandle.setStyleName("dataItem10");
			
			// get Header Table Row
			RowHandle headerRowHandle = (RowHandle)tableHandle.getHeader().get(0);
			CellHandle headerCellHandle = (CellHandle)headerRowHandle.getCells().get(4);
			// add label to table header row
			headerCellHandle.getContent().add(headerRowHandle);
			
			// get Detail Table Row
			RowHandle detailRowHandle = (RowHandle)tableHandle.getDetail().get(0);
			CellHandle detailCellHandle = (CellHandle)detailRowHandle.getCells().get(4);
			// add data item to detail cell
			detailCellHandle.getContent().add(dataItemHandle);
					
		
		} catch (Exception ex) {
			logger.log(Level.FINE, ex.toString());
		}
		
	}

}

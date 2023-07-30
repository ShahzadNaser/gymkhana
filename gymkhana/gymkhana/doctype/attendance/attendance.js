// Copyright (c) 2023, Urooj Naser and contributors
// For license information, please see license.txt
cur_frm.add_fetch('employee', 'company', 'company');
cur_frm.add_fetch('employee', 'employee_name', 'employee_name');
cur_frm.cscript.onload = function(doc, cdt, cdn) {
	if(doc.__islocal) cur_frm.set_value("attendance_date", frappe.datetime.get_today());
}

frappe.ui.form.on('Attendance', {
	// refresh: function(frm) {

	// }
});

// Copyright (c) 2023, Urooj Naser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales Invoice', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on('Sales Invoice Item', {
	qty:function (frm, cdt, cdn) {
		console.log("===============================")
		var row = locals[cdt][cdn];
		frappe.model.set_value(cdt, cdn, "amount", row.qty*row.rate);
	},
	rate:function (frm, cdt, cdn) {
		var row = locals[cdt][cdn];
		console.log("===============================")
		frappe.model.set_value(cdt, cdn, "amount", row.qty*row.rate);
	}

});

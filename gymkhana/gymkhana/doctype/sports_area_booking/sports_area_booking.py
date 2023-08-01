# Copyright (c) 2023, Urooj Naser and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class SportsAreaBooking(Document):
	def before_save(self):
		self.net_total = 0
		# self.total_qty = 0
		for item in self.get("items"):
			item.amount = round(item.rate * item.qty,2)
			# self.total_qty += item.qty or 0
			self.net_total += item.amount or 0


import datetime
from .utilities import time_choices

ACCOUNT_TYPES_CATEGORY_CHOICES = [
        (100, 'Do Not Choose Me'),
        (0, 'Asset'),
        (1, 'Liability'),
        (2, 'Equity'),
        (3, 'Revenue'),
        (4, 'Operating Expense')

    ]

ACCOUNT_TYPES_CLASSIFICATION_CHOICES = [
        ('NONE', ''),
        (100, 'Do Not Choose Me'),
        (1, 'Current'),
        (2, 'Long-Term')
    ]
    
    



ASSET_DEPRECIATION_METHOD_CHOICES = [
        (100, 'Do Not Choose Me'),
        (0, 'Straight Line'),
        (1, 'Sum of years digits'),
        (2, 'Double Declining balance')
    ]

ASSET_TYPE_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        ('LAND', 'Land'),
        ('BUILDINGS', 'Buildings'),
        ('VEHICLES', 'Vehicles'),
        ('LEASEHOLD-IMPROVEMENTS', 'LeaseHold Improvements'),
        ('FURNITURE-AND-FIXTURES', 'Furniture and Fixtures'),
        ('EQUIPMENT', 'Equipment')
    ]

ACCOUNTING_PERIODS_CHOICES = [
    (100, 'Do Not Choose Me'),
    (0, "Annually"),
    (1, "Monthly"),
    (2, "Weekly")
]


JOURNAL_ENTRY_TYPES_CHOICES = [
        (100, 'Do Not Choose Me'),
        (0, 'Regular'),
        (1, 'Adjusting'),
        (2, 'Closing'),
        (3, 'Reversing')

    ]


EMPLOYEES_GENDER_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        ('male','Male'),
        ('female','Female')
    ]

NATURE_OF_EMPLOYMENT_CHOICES = [
        ('A', 'Arduous'),
        ('N', 'Normal')
    ]

EMPLOYEE_CONTRACT_TERMINATION_REASONS = [
        ('R', 'Retirement'),
        ('C', 'Casual Employee'),
        ('D', 'Death'),
        ('O', 'Other')
    ]

EMPLOYEE_CATEGORY_CHOICES = [
        ('Temporary', 'Temporary Employee'),
        ('Subcontractor', 'Subcontractor'),
        ('Permanent Employee', 'Permanent Employee')
    ]


EMPLOYEE_LEAVE_CATEGORIES = [
        (1, 'Annual Leave'),
        (2, 'Sick Leave'),
        (3, 'Study Leave'),
        (4, 'Maternity Leave'),
        (5, 'Parental Leave'),
        (6, 'Bereavement Leave')
    ]

EMPLOYEE_LEAVE_STATUS_CHOICES = [
        (0, 'Pending'),
        (1, 'Authorized'),
        (2, 'Declined')
    ]

EMPLOYEE_LUNCH_CHOICES = [
        (datetime.timedelta(minutes=15), '15 min.'),
        (datetime.timedelta(minutes=30), '30 min.'),
        (datetime.timedelta(minutes=45), '45 min.'),
        (datetime.timedelta(hours=1), '1 hr.')

    ]

EMPLOYEE_PAY_FREQUENCIES = [
        (0, 'Weekly'),
        (1, 'Bi-Monthly'),
        (2, 'Monthly')
    ]


EMPLOYEE_DEDUCTION_METHODS = [
        (0, 'Custom'), 
        (1, 'Fixed')
    ]


EMPLOYEE_PAYROLL_DATE_CHOICES = [(i, i) for i in range(1, 29)]

EMPLOYEE_PAYSLIP_STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('verified', 'Verified'),
        ('paid', 'Paid'),
    ]

EMPLOYEE_TIMESHEET_MONTH_CHOICES = [
        (1, 'January'),
        (2,'February'),
        (3, 'March'),
        (4, 'April'),
        (5, 'May'),
        (6, 'June'),
        (7, 'July'),
        (8, 'August'),
        (9, 'September'),
        (10, 'October'),
        (11, 'November'),
        (12, 'December')
    ]


EMPLOYEE_YEAR_CHOICES = [
        (i, i) for i in range(2000, 2051)
    ]



INVENTORY_TYPES_CHOICES = [
        (0, 'Product'),
        (1, 'Equipment'),
        (2, 'Consumables'),
        (3, 'Raw Material'),
    ]


PRODUCT_COMPONENT_PRICING_CHOICES = [
        (0, 'Manual'),
        (1, 'Margin'),
        (2, 'Markup')
    ]




EQUIPMENT_COMPONENT_CONDITION_CHOICES = [
        ('EXCELLENT', 'Excellent'),
        ('GOOD', 'Good'),
        ('POOR', 'Poor'),
        ('BROKEN', 'Not Functioning')
    ]

EMPLOYEE_PAYROLL_TAX_CHOICES =[
                    (0, 'Employees'), 
                    (1, 'Employer'), 
                    (2, 'Both')
                ]


INVENTORY_ORDER_STATUS_CHOICES = [
        ('received-partially', 'Partially Received'),
        ('received', 'Received in Total'),
        ('draft', 'Internal Draft'),
        ('order', 'Order')
    ]

INVOICE_SALE_STATUS_CHOICES = [
        ('quotation', 'Quotation'),
        ('proforma', 'Proforma Invoice'),
        ('invoice', 'Invoice'),
        ('paid', 'Paid In Full'),
        ('paid-partially', 'Paid Partially'),
    ]

INVOCE_LINE_CHOICES = [
        (1, 'product'),
        (2, 'service'),
    ]

CUSTOMER_PAYMENT_METHODS_CHOICES = [
            ("cash", "Cash" ),
            ("transfer", "Transfer"),
            ("debit card", "Debit Card"),
            ("mobile", "Mobile-Transfer")
        ]

PROCCES_RATE_UNIT_TIME_CHOICES = [
            (0, 'per second'),
            (1, 'per minute'),
            (2, 'per hour'),
        ]


MANUFACTURING_PRODUCT_TYPES = [
        (0, 'Product'),
        (1, 'By-Product'),
        (2, 'Co-Product'),
        (3, 'Waste')
    ]

BILL_OF_MATERIALS_LINE_CHOICES = [
        (0, 'Raw Material'),
        (1, 'Process Product'),
    ]

MANUFACTURING_PROCESS_CHOICES = [
    (100, 'Dont Choose Me'),
    (0, 'Line'),
    (1, 'Batch')

]


PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES = [
        (10, 'ITEM-IN-STOCK'),
        (15, 'ITEM-INCOMING'),
        (20, 'ITEM-IN-PROGRESS'),
        (25, 'ITEM-COMPLETE'),
        (50, 'ITEM-ATTENTION'),
        (55, 'ITEM-DAMAGED'),
        (60, 'ITEM-DESTROYED'),

    ]


EVENT_REMINDER_CHOICES = [
        (datetime.timedelta(seconds=0), 'At event start'),
        (datetime.timedelta(minutes=15), '15 min before'),
        (datetime.timedelta(hours=1), '1 hour before'),
        (datetime.timedelta(hours=3), '3 hour before'),
        (datetime.timedelta(hours=6), '6 hours before'),
        (datetime.timedelta(days=1), '1 Day before'),
        (datetime.timedelta(days=3), '3 Days before'),
        (datetime.timedelta(days=7), '1 week before'),
        (datetime.timedelta(days=14), '2 weeks before'),
        (datetime.timedelta(days=30), '1 month before')
    ]

EVENT_TIME_CHOICES = time_choices('01:00:00','23:30:00','00:30:00')

MANUFACTURING_SHIFT_TIME_CHOICES = time_choices('01:00:00','23:30:00','00:30:00')


EVENT_ICON_CHOICES = [
        ('file-chart-line', 'Report'),
        ('truck', 'Delivery'),
        ('users', 'Meeting'),
        ('stopwatch', 'Deadline'),
        ('book', 'Training'),
        ('calendar', 'Event')
    ]

EVENT_REPEAT_CHOICES = [
        (0, 'Never'),
        (1, 'Daily'),
        (2, 'Weekly'),
        (3, 'Monthly'),
        (4, 'Annually'),

    ]

EVENT_PARTICIPANT_TYPES_CHOICES = [
        (0, 'Employee'),
        (1, 'Customer'),
        (2, 'Vendor')
    ]

EVENT_PRIORITY_CHOICES = [
        ('normal', 'Normal'),
        ('high', 'High'),
        ('low', 'Low')
    ]
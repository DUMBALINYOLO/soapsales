

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


INVENTORY_TYPES_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        (0, 'Product'),
        (1, 'Equipment'),
        (2, 'Consumables'),
        (3, 'Raw Material'),
    ]


PRODUCT_COMPONENT_PRICING_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        (0, 'Manual'),
        (1, 'Margin'),
        (2, 'Markup')
    ]




EQUIPMENT_COMPONENT_CONDITION_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        ('EXCELLENT', 'Excellent'),
        ('GOOD', 'Good'),
        ('POOR', 'Poor'),
        ('BROKEN', 'Not Functioning')
    ]


INVENTORY_ORDER_STATUS_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        ('received-partially', 'Partially Received'),
        ('received', 'Received in Total'),
        ('draft', 'Internal Draft'),
        ('order', 'Order')
    ]

INVOICE_SALE_STATUS_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        ('quotation', 'Quotation'),
        ('proforma', 'Proforma Invoice'),
        ('invoice', 'Invoice'),
        ('paid', 'Paid In Full'),
        ('paid-partially', 'Paid Partially'),
    ]

INVOCE_LINE_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        (1, 'product'),
        (2, 'service'),
    ]

CUSTOMER_PAYMENT_METHODS_CHOICES = [
            ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
            ("cash", "Cash" ),
            ("transfer", "Transfer"),
            ("debit card", "Debit Card"),
            ("mobile", "Mobile-Transfer")
        ]

PROCCES_RATE_UNIT_TIME_CHOICES = [
            ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
            (0, 'per second'),
            (1, 'per minute'),
            (2, 'per hour'),
        ]


MANUFACTURING_PRODUCT_TYPES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        (0, 'Product'),
        (1, 'By-Product'),
        (2, 'Co-Product'),
        (3, 'Waste')
    ]

BILL_OF_MATERIALS_LINE_CHOICES = [
        ('DONT-CHOOSE-ME', 'Do Not Choose Me'),
        (0, 'Raw Material'),
        (1, 'Process Product'),
    ]

PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES = [
        (0, 'DO-NOT-CHOOSE-THIS-ONE'),
        (10, 'ITEM-IN-STOCK'),
        (15, 'ITEM-INCOMING'),
        (20, 'ITEM-IN-PROGRESS'),
        (25, 'ITEM-COMPLETE'),
        (50, 'ITEM-ATTENTION'),
        (55, 'ITEM-DAMAGED'),
        (60, 'ITEM-DESTROYED'),

    ]






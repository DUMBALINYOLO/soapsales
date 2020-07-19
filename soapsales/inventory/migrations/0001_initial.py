# Generated by Django 3.0.7 on 2020-07-19 15:04

from django.db import migrations, models
import django.db.models.deletion
import simple_history.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='DebitNote',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('comments', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='DebitNoteLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='EquipmentComponent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('condition', models.CharField(choices=[('DONT-CHOOSE-ME', 'Do Not Choose Me'), ('EXCELLENT', 'Excellent'), ('GOOD', 'Good'), ('POOR', 'Poor'), ('BROKEN', 'Not Functioning')], default='excellent', max_length=16)),
                ('name', models.CharField(max_length=230)),
            ],
        ),
        migrations.CreateModel(
            name='HistoricalInventoryCheck',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('date', models.DateField()),
                ('comments', models.TextField()),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
            ],
            options={
                'verbose_name': 'historical inventory check',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalOrderPayment',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('date', models.DateField()),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('comments', models.TextField()),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
            ],
            options={
                'verbose_name': 'historical order payment',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalStockAdjustment',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('adjustment', models.FloatField()),
                ('note', models.TextField()),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
            ],
            options={
                'verbose_name': 'historical stock adjustment',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalStockReceipt',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('receive_date', models.DateField()),
                ('note', models.TextField(blank=True, default='')),
                ('fully_received', models.BooleanField(default=False)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
            ],
            options={
                'verbose_name': 'historical stock receipt',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalStockReceiptLine',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('quantity', models.FloatField(default=0.0)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
            ],
            options={
                'verbose_name': 'historical stock receipt line',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='InventoryCheck',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('comments', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='InventoryController',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('can_authorize_equipment_requisitions', models.BooleanField(default=False)),
                ('can_authorize_consumables_requisitions', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='InventoryItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('type', models.PositiveSmallIntegerField(choices=[('DONT-CHOOSE-ME', 'Do Not Choose Me'), (0, 'Product'), (1, 'Equipment'), (2, 'Consumables'), (3, 'Raw Material')])),
                ('length', models.FloatField(default=0.0)),
                ('width', models.FloatField(default=0.0)),
                ('height', models.FloatField(default=0.0)),
                ('image', models.FileField(blank=True, null=True, upload_to='')),
                ('description', models.TextField(blank=True, default='')),
                ('unit_purchase_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('minimum_order_level', models.IntegerField(default=0)),
                ('maximum_stock_level', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='InventoryScrappingRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('comments', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='InventoryScrappingRecordLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
                ('note', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expected_receipt_date', models.DateField()),
                ('date', models.DateField()),
                ('due', models.DateField(blank=True, null=True)),
                ('supplier_invoice_number', models.CharField(blank=True, default='', max_length=32)),
                ('bill_to', models.CharField(blank=True, default='', max_length=128)),
                ('tracking_number', models.CharField(blank=True, default='', max_length=64)),
                ('notes', models.TextField(blank=True)),
                ('status', models.CharField(choices=[('DONT-CHOOSE-ME', 'Do Not Choose Me'), ('received-partially', 'Partially Received'), ('received', 'Received in Total'), ('draft', 'Internal Draft'), ('order', 'Order')], max_length=24)),
                ('received_to_date', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
                ('order_price', models.DecimalField(decimal_places=2, max_digits=16)),
                ('received', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='OrderPayment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('comments', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ProductComponent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pricing_method', models.IntegerField(choices=[('DONT-CHOOSE-ME', 'Do Not Choose Me'), (0, 'Manual'), (1, 'Margin'), (2, 'Markup')], default=0)),
                ('direct_price', models.DecimalField(decimal_places=2, max_digits=16)),
                ('margin', models.DecimalField(decimal_places=2, default=0, max_digits=16)),
                ('markup', models.DecimalField(decimal_places=2, default=0, max_digits=16)),
                ('sku', models.CharField(blank=True, max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='StockAdjustment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adjustment', models.FloatField()),
                ('note', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='StockReceipt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('receive_date', models.DateField()),
                ('note', models.TextField(blank=True, default='')),
                ('fully_received', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='StockReceiptLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='StorageMedia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('length', models.FloatField(default=0.0)),
                ('width', models.FloatField(default=0.0)),
                ('height', models.FloatField(default=0.0)),
                ('capacity', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=230)),
                ('is_organization', models.BooleanField(default=False)),
                ('is_individual', models.BooleanField(default=False)),
                ('business_address', models.TextField(blank=True)),
                ('website', models.CharField(blank=True, max_length=255)),
                ('bp_number', models.CharField(blank=True, max_length=64)),
                ('email', models.CharField(blank=True, max_length=128)),
                ('phone', models.CharField(blank=True, max_length=32)),
                ('contact_person', models.CharField(blank=True, max_length=230)),
            ],
        ),
        migrations.CreateModel(
            name='TransferOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('expected_completion_date', models.DateField()),
                ('actual_completion_date', models.DateField(null=True)),
                ('order_issuing_notes', models.TextField(blank=True)),
                ('receive_notes', models.TextField(blank=True)),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='TransferOrderLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
                ('moved_quantity', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='UnitOfMeasure',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('description', models.TextField(default='')),
                ('eval_string', models.CharField(default='', max_length=255)),
                ('is_derived', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='WareHouse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('address', models.TextField()),
                ('description', models.TextField(blank=True)),
                ('length', models.FloatField(default=0.0)),
                ('width', models.FloatField(default=0.0)),
                ('height', models.FloatField(default=0.0)),
                ('last_inventory_check_date', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WareHouseItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_inventory_item', models.BooleanField(default=False)),
                ('is_manufactured_item', models.BooleanField(default=False)),
                ('quantity', models.FloatField()),
                ('verified', models.BooleanField(default=False)),
                ('item', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.InventoryItem')),
                ('location', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.StorageMedia')),
            ],
        ),
    ]

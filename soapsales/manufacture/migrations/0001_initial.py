# Generated by Django 3.0.7 on 2020-07-28 14:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import simple_history.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('invoicing', '0001_initial'),
        ('inventory', '0001_initial'),
        ('employees', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BillOfMaterials',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ManufacturingTeam',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Process',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('type', models.PositiveSmallIntegerField(choices=[(100, 'Dont Choose Me'), (0, 'Line'), (1, 'Batch')], default=0)),
                ('duration', models.DurationField(blank=True, null=True)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('bill_of_materials', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.BillOfMaterials')),
                ('parent_process', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Process')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessedProductsStockReceipt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('receive_date', models.DateField()),
                ('note', models.TextField(blank=True, default='')),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('received_by', models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.InventoryController')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessedProductsStockTake',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('comments', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('adjusted_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.InventoryController')),
                ('warehouse', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.WareHouse')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessMachine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('date_commissioned', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProcessMachineGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProcessProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('type', models.PositiveSmallIntegerField(choices=[(0, 'Product'), (1, 'By-Product'), (2, 'Co-Product'), (3, 'Waste')])),
                ('created_on', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='created on')),
                ('finished_goods', models.BooleanField(default=False)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('status', models.PositiveIntegerField(choices=[(10, 'ITEM-IN-STOCK'), (15, 'ITEM-INCOMING'), (20, 'ITEM-IN-PROGRESS'), (25, 'ITEM-COMPLETE'), (50, 'ITEM-ATTENTION'), (55, 'ITEM-DAMAGED'), (60, 'ITEM-DESTROYED')], default=0)),
                ('minimum_order_level', models.IntegerField(blank=True, default=0, null=True)),
                ('maximum_stock_level', models.IntegerField(blank=True, default=0, null=True)),
                ('location', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.WareHouse')),
            ],
        ),
        migrations.CreateModel(
            name='Shift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('employees', models.ManyToManyField(to='employees.Employee')),
                ('machine', models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessMachine')),
                ('supervisor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='manufacturingsupervisor', to='employees.Employee')),
                ('team', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ManufacturingTeam')),
            ],
        ),
        migrations.CreateModel(
            name='ShiftSchedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WasteGenerationReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
                ('comments', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessProduct')),
                ('recorded_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.Employee')),
                ('unit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure')),
            ],
        ),
        migrations.CreateModel(
            name='ShiftScheduleLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('monday', models.BooleanField(default=True)),
                ('tuesday', models.BooleanField(default=True)),
                ('wednesday', models.BooleanField(default=True)),
                ('thursday', models.BooleanField(default=True)),
                ('friday', models.BooleanField(default=True)),
                ('saturday', models.BooleanField(default=False)),
                ('sunday', models.BooleanField(default=False)),
                ('schedule', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lines', to='manufacture.ShiftSchedule')),
                ('shift', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Shift')),
            ],
        ),
        migrations.CreateModel(
            name='SalesGroupUnitPricing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=230)),
                ('group_pricing_unit_sales_price', models.DecimalField(decimal_places=2, default=0, max_digits=16)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='unitpricing', to='manufacture.ProcessProduct')),
            ],
        ),
        migrations.CreateModel(
            name='ProductionOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('due', models.DateField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('is_confirmed_order', models.BooleanField(default=False)),
                ('finished', models.BooleanField(default=False)),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.Customer')),
                ('process', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Process')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessRate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unit_time', models.PositiveSmallIntegerField(choices=[(0, 'per second'), (1, 'per minute'), (2, 'per hour')])),
                ('quantity', models.FloatField(default=0.0)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('unit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure')),
            ],
        ),
        migrations.AddField(
            model_name='processproduct',
            name='order',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='products', to='manufacture.ProductionOrder'),
        ),
        migrations.AddField(
            model_name='processproduct',
            name='process',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='endproducts', to='manufacture.Process'),
        ),
        migrations.AddField(
            model_name='processproduct',
            name='unit',
            field=models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure'),
        ),
        migrations.AddField(
            model_name='processmachine',
            name='machine_group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='machines', to='manufacture.ProcessMachineGroup'),
        ),
        migrations.CreateModel(
            name='ProcessedProductStockAdjustment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adjustment', models.FloatField()),
                ('note', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('inventory_check', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='adjustments', to='manufacture.ProcessedProductsStockTake')),
                ('warehouse_item', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.WareHouseItem')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessedProductsStockReceiptLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField(default=0.0)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('line', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessProduct')),
                ('receipt', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lines', to='manufacture.ProcessedProductsStockReceipt')),
            ],
        ),
        migrations.AddField(
            model_name='process',
            name='process_equipment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessMachineGroup'),
        ),
        migrations.AddField(
            model_name='process',
            name='rate',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessRate'),
        ),
        migrations.CreateModel(
            name='ManufucturingPersonel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_manager', models.BooleanField(default=False)),
                ('can_authorize_equipment_requisitions', models.BooleanField(default=False)),
                ('can_authorize_consumables_requisitions', models.BooleanField(default=False)),
                ('employee', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.Employee')),
            ],
        ),
        migrations.AddField(
            model_name='manufacturingteam',
            name='manager',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='service_team_manager', to='manufacture.ManufucturingPersonel'),
        ),
        migrations.AddField(
            model_name='manufacturingteam',
            name='members',
            field=models.ManyToManyField(related_name='service_team_members', to='manufacture.ManufucturingPersonel'),
        ),
        migrations.CreateModel(
            name='HistoricalProcessProduct',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('type', models.PositiveSmallIntegerField(choices=[(0, 'Product'), (1, 'By-Product'), (2, 'Co-Product'), (3, 'Waste')])),
                ('created_on', models.DateTimeField(blank=True, db_index=True, editable=False, verbose_name='created on')),
                ('finished_goods', models.BooleanField(default=False)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('status', models.PositiveIntegerField(choices=[(10, 'ITEM-IN-STOCK'), (15, 'ITEM-INCOMING'), (20, 'ITEM-IN-PROGRESS'), (25, 'ITEM-COMPLETE'), (50, 'ITEM-ATTENTION'), (55, 'ITEM-DAMAGED'), (60, 'ITEM-DESTROYED')], default=0)),
                ('minimum_order_level', models.IntegerField(blank=True, default=0, null=True)),
                ('maximum_stock_level', models.IntegerField(blank=True, default=0, null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('location', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='inventory.WareHouse')),
                ('order', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='manufacture.ProductionOrder')),
                ('process', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='manufacture.Process')),
                ('unit', models.ForeignKey(blank=True, db_constraint=False, default=1, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='inventory.UnitOfMeasure')),
            ],
            options={
                'verbose_name': 'historical process product',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalProcessedProductStockAdjustment',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('adjustment', models.FloatField()),
                ('note', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('inventory_check', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='manufacture.ProcessedProductsStockTake')),
                ('warehouse_item', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='inventory.WareHouseItem')),
            ],
            options={
                'verbose_name': 'historical processed product stock adjustment',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalProcessedProductsStockTake',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('date', models.DateField()),
                ('comments', models.TextField()),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('adjusted_by', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='inventory.InventoryController')),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('warehouse', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='inventory.WareHouse')),
            ],
            options={
                'verbose_name': 'historical processed products stock take',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalProcessedProductsStockReceiptLine',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('quantity', models.FloatField(default=0.0)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('line', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='manufacture.ProcessProduct')),
                ('receipt', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='manufacture.ProcessedProductsStockReceipt')),
            ],
            options={
                'verbose_name': 'historical processed products stock receipt line',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalProcessedProductsStockReceipt',
            fields=[
                ('id', models.IntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('receive_date', models.DateField()),
                ('note', models.TextField(blank=True, default='')),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('received_by', models.ForeignKey(blank=True, db_constraint=False, default=1, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='inventory.InventoryController')),
            ],
            options={
                'verbose_name': 'historical processed products stock receipt',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='BillOfMaterialsLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.PositiveSmallIntegerField(choices=[(0, 'Raw Material'), (1, 'Process Product')])),
                ('quantity', models.FloatField()),
                ('bill', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lines', to='manufacture.BillOfMaterials')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='billings', to='manufacture.ProcessProduct')),
                ('raw_material', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='rawmaterialbillings', to='inventory.InventoryItem')),
                ('unit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure')),
            ],
        ),
    ]

# Generated by Django 3.0.7 on 2020-06-28 11:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory', '0001_initial'),
        ('employees', '0001_initial'),
        ('invoicing', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BillOfMaterials',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Process',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('type', models.PositiveSmallIntegerField(choices=[(0, 'Line'), (1, 'Batch')])),
                ('duration', models.DurationField(blank=True, null=True)),
                ('bill_of_materials', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.BillOfMaterials')),
                ('parent_process', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Process')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessMachineGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ProcessProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('type', models.PositiveSmallIntegerField(choices=[(0, 'Product'), (1, 'By-Product'), (2, 'Co-Product'), (3, 'Waste')])),
                ('finished_goods', models.BooleanField(default=False)),
                ('inventory_product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.InventoryItem')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('created_on', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='created on')),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='WasteGenerationReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
                ('comments', models.TextField()),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessProduct')),
                ('recorded_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.Employee')),
                ('unit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure')),
            ],
        ),
        migrations.CreateModel(
            name='ProductVariation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variations', to='manufacture.Product')),
            ],
        ),
        migrations.CreateModel(
            name='ProductionOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('due', models.DateField()),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.Customer')),
                ('process', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Process')),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.InventoryItem')),
            ],
        ),
        migrations.CreateModel(
            name='ProcessRate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unit_time', models.PositiveSmallIntegerField(choices=[(0, 'per second'), (1, 'per minute'), (2, 'per hour')])),
                ('quantity', models.FloatField(default=0.0)),
                ('unit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure')),
            ],
        ),
        migrations.AddField(
            model_name='processproduct',
            name='product_list',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Product'),
        ),
        migrations.AddField(
            model_name='processproduct',
            name='unit',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure'),
        ),
        migrations.CreateModel(
            name='ProcessMachine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('date_commissioned', models.DateField()),
                ('machine_group', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='manufacture.ProcessMachineGroup')),
            ],
        ),
        migrations.AddField(
            model_name='process',
            name='process_equipment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessMachineGroup'),
        ),
        migrations.AddField(
            model_name='process',
            name='product_list',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.Product'),
        ),
        migrations.AddField(
            model_name='process',
            name='rate',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessRate'),
        ),
        migrations.CreateModel(
            name='BillOfMaterialsLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.PositiveSmallIntegerField(choices=[(0, 'Raw Material'), (1, 'Process Product')])),
                ('quantity', models.FloatField()),
                ('bill', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.BillOfMaterials')),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessProduct')),
                ('raw_material', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.InventoryItem')),
                ('unit', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.UnitOfMeasure')),
            ],
        ),
    ]

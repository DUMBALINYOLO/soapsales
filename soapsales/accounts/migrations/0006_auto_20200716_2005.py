# Generated by Django 3.0.7 on 2020-07-16 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200708_1949'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accountingsettings',
            name='default_accounting_period',
            field=models.PositiveSmallIntegerField(choices=[(100, 'Do Not Choose Me'), (0, 'Annually'), (1, 'Monthly'), (2, 'Weekly')], default=1),
        ),
        migrations.AlterField(
            model_name='accounttype',
            name='category',
            field=models.IntegerField(choices=[(100, 'Do Not Choose Me'), (0, 'Asset'), (1, 'Liability'), (2, 'Equity'), (3, 'Revenue'), (4, 'Operating Expense')]),
        ),
        migrations.AlterField(
            model_name='accounttype',
            name='classification',
            field=models.IntegerField(choices=[('NONE', ''), (100, 'Do Not Choose Me'), (1, 'Current'), (2, 'Long-Term')]),
        ),
        migrations.AlterField(
            model_name='accounttype',
            name='order',
            field=models.IntegerField(unique=True, verbose_name='order Value (1 represents highest order)'),
        ),
        migrations.AlterField(
            model_name='asset',
            name='category',
            field=models.CharField(choices=[('DONT-CHOOSE-ME', 'Do Not Choose Me'), ('LAND', 'Land'), ('BUILDINGS', 'Buildings'), ('VEHICLES', 'Vehicles'), ('LEASEHOLD-IMPROVEMENTS', 'LeaseHold Improvements'), ('FURNITURE-AND-FIXTURES', 'Furniture and Fixtures'), ('EQUIPMENT', 'Equipment')], max_length=128),
        ),
        migrations.AlterField(
            model_name='asset',
            name='depreciation_method',
            field=models.IntegerField(choices=[(100, 'Do Not Choose Me'), (0, 'Straight Line'), (1, 'Sum of years digits'), (2, 'Double Declining balance')], default=0),
        ),
        migrations.AlterField(
            model_name='journalentry',
            name='entry_type',
            field=models.SmallIntegerField(blank=True, choices=[(100, 'Do Not Choose Me'), (0, 'Regular'), (1, 'Adjusting'), (2, 'Closing'), (3, 'Reversing')], default=0, null=True),
        ),
    ]

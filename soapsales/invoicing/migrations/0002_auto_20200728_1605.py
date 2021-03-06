# Generated by Django 3.0.7 on 2020-07-28 14:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employees', '0001_initial'),
        ('inventory', '0002_auto_20200728_1605'),
        ('manufacture', '0001_initial'),
        ('invoicing', '0001_initial'),
        ('accounts', '0003_auto_20200728_1605'),
    ]

    operations = [
        migrations.AddField(
            model_name='salesproduct',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='manufacture.ProcessProduct'),
        ),
        migrations.AddField(
            model_name='salesconfig',
            name='sales_tax',
            field=models.ForeignKey(blank='True', null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Tax'),
        ),
        migrations.AddField(
            model_name='payment',
            name='entry',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.JournalEntry'),
        ),
        migrations.AddField(
            model_name='payment',
            name='invoice',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.Invoice'),
        ),
        migrations.AddField(
            model_name='payment',
            name='receipt',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='payments', to='invoicing.CustomerReceipt'),
        ),
        migrations.AddField(
            model_name='payment',
            name='sales_rep',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.SalesRepresentative'),
        ),
        migrations.AddField(
            model_name='invoiceline',
            name='invoice',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lines', to='invoicing.Invoice'),
        ),
        migrations.AddField(
            model_name='invoiceline',
            name='product',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.SalesProduct'),
        ),
        migrations.AddField(
            model_name='invoiceline',
            name='tax',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Tax'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='customer',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.Customer'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='entry',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.JournalEntry'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='invoice_validated_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.Employee'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='salesperson',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.SalesRepresentative'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='ship_from',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.WareHouse'),
        ),
        migrations.AddField(
            model_name='customerreceipt',
            name='customer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='receipts', to='invoicing.Customer'),
        ),
        migrations.AddField(
            model_name='customerreceipt',
            name='sales_rep',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='soldreceipts', to='invoicing.SalesRepresentative'),
        ),
        migrations.AddField(
            model_name='customer',
            name='account',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Account'),
        ),
        migrations.AddField(
            model_name='creditnoteline',
            name='line',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.InvoiceLine'),
        ),
        migrations.AddField(
            model_name='creditnoteline',
            name='note',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='lines', to='invoicing.CreditNote'),
        ),
        migrations.AddField(
            model_name='creditnote',
            name='entry',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.JournalEntry'),
        ),
        migrations.AddField(
            model_name='creditnote',
            name='invoice',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='invoicing.Invoice'),
        ),
    ]

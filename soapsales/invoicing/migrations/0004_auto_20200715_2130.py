# Generated by Django 3.0.7 on 2020-07-15 19:30

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('invoicing', '0003_auto_20200709_1613'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payment',
            name='amount',
        ),
        migrations.AddField(
            model_name='payment',
            name='amount_tendered',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=16),
        ),
        migrations.AddField(
            model_name='payment',
            name='amount_to_pay',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=16),
        ),
        migrations.CreateModel(
            name='CustomerReceipt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('receipt_number', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('comment', models.CharField(blank=True, default='', max_length=511, null=True)),
                ('payment_method', models.CharField(max_length=500)),
                ('has_finished', models.BooleanField(db_index=True, default=False)),
                ('has_error', models.BooleanField(db_index=True, default=False)),
                ('amount_paid', models.DecimalField(decimal_places=2, max_digits=16)),
                ('amount_tendered', models.DecimalField(decimal_places=2, max_digits=16)),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='receipts', to='invoicing.Customer')),
                ('sales_rep', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='soldreceipts', to='invoicing.SalesRepresentative')),
            ],
        ),
        migrations.AddField(
            model_name='payment',
            name='receipt',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='payments', to='invoicing.CustomerReceipt'),
        ),
    ]

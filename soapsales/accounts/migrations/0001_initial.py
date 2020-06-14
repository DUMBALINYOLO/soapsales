# Generated by Django 3.0.7 on 2020-06-14 06:28

import accounts.models.journalize
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, unique=True)),
                ('description', models.CharField(blank=True, max_length=200)),
                ('order', models.PositiveIntegerField(verbose_name='order Relative to Account Type (0 represents highest order)')),
                ('initial_balance', models.DecimalField(decimal_places=2, default=0, max_digits=20)),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='date Created')),
                ('is_active', models.BooleanField(default=False, verbose_name='active?')),
                ('is_contra', models.BooleanField(default=False, verbose_name='contra?')),
            ],
            options={
                'ordering': ['account_type__order', 'order'],
            },
        ),
        migrations.CreateModel(
            name='AccountingSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_of_financial_year', models.DateField()),
                ('default_accounting_period', models.PositiveSmallIntegerField(choices=[(0, 'Annually'), (1, 'Monthly'), (2, 'Weekly')], default=1)),
                ('equipment_capitalization_limit', models.DecimalField(decimal_places=2, default=0.0, max_digits=12)),
                ('is_configured', models.BooleanField(default=False)),
                ('service_hash', models.CharField(blank=True, default='', max_length=255)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AccountType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.SmallIntegerField(choices=[(0, 'Asset'), (1, 'Liability'), (2, 'Equity'), (3, 'Revenue'), (4, 'Operating Expense')])),
                ('classification', models.SmallIntegerField(choices=[(0, ''), (1, 'Current'), (2, 'Long-Term')])),
                ('name', models.CharField(max_length=100, unique=True)),
                ('order', models.PositiveIntegerField(unique=True, verbose_name='order Value (1 represents highest order)')),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='date Created')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('description', models.TextField(blank=True)),
                ('category', models.IntegerField(choices=[(0, 'Land'), (1, 'Buildings'), (2, 'Vehicles'), (3, 'LeaseHold Improvements'), (4, 'Furniture and Fixtures'), (5, 'Equipment')])),
                ('initial_value', models.DecimalField(decimal_places=2, max_digits=16)),
                ('depreciation_period', models.IntegerField()),
                ('init_date', models.DateField()),
                ('depreciation_method', models.IntegerField(choices=[(0, 'Straight Line'), (1, 'Sum of years digits'), (2, 'Double Declining balance')], default=0)),
                ('salvage_value', models.DecimalField(decimal_places=2, max_digits=16)),
            ],
        ),
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('reference', models.CharField(blank=True, max_length=255)),
                ('due', models.DateField()),
                ('memo', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('symbol', models.CharField(max_length=8)),
            ],
            options={
                'verbose_name': 'Currencie',
                'verbose_name_plural': 'Currencies',
            },
        ),
        migrations.CreateModel(
            name='JournalEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entry_type', models.SmallIntegerField(blank=True, choices=[(1, 'Regular'), (2, 'Adjusting'), (3, 'Closing'), (4, 'Reversing')], default='Regular')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date', models.DateField()),
                ('is_approved', models.NullBooleanField()),
                ('memo', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('creator', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='creator', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-date', '-date_created'],
            },
        ),
        migrations.CreateModel(
            name='Tax',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('name', models.CharField(max_length=64)),
                ('rate', models.FloatField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.DecimalField(decimal_places=2, max_digits=20)),
                ('is_debit', models.BooleanField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('affected_account', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='transactions', to='accounts.Account')),
                ('journal_entry', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='transactions', to='accounts.JournalEntry')),
            ],
            options={
                'ordering': ['journal_entry__date', 'date'],
            },
        ),
        migrations.CreateModel(
            name='Receipt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=accounts.models.journalize.get_upload_path, verbose_name='Receipt File')),
                ('original_filename', models.CharField(max_length=256)),
                ('journal_entry', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receipts', to='accounts.JournalEntry')),
            ],
        ),
        migrations.CreateModel(
            name='Bookkeeper',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('can_create_journals', models.BooleanField(blank=True, default=False)),
                ('can_create_orders_and_invoices', models.BooleanField(blank=True, default=False)),
                ('can_record_expenses', models.BooleanField(blank=True, default=False)),
                ('can_record_assets', models.BooleanField(blank=True, default=False)),
                ('employee', models.OneToOneField(default=1, limit_choices_to=models.Q(user__isnull=False), null=True, on_delete=django.db.models.deletion.SET_NULL, to='employees.Employee')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BillPayment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('memo', models.TextField(blank=True)),
                ('account', models.ForeignKey(limit_choices_to=models.Q(type='asset'), null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Account')),
                ('bill', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Bill')),
                ('entry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.JournalEntry')),
            ],
        ),
        migrations.CreateModel(
            name='BillLine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=16)),
                ('bill', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Bill')),
                ('debit_account', models.ForeignKey(limit_choices_to=models.Q(type='asset'), null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.Account')),
            ],
        ),
        migrations.AddField(
            model_name='bill',
            name='entry',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.JournalEntry'),
        ),
    ]

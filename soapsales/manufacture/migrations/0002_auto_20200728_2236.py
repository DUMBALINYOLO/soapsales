# Generated by Django 3.0.7 on 2020-07-28 20:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manufacture', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historicalprocessproduct',
            name='order',
        ),
        migrations.RemoveField(
            model_name='historicalprocessproduct',
            name='process',
        ),
        migrations.RemoveField(
            model_name='processproduct',
            name='order',
        ),
        migrations.RemoveField(
            model_name='processproduct',
            name='process',
        ),
        migrations.AddField(
            model_name='process',
            name='products',
            field=models.ManyToManyField(related_name='processes', to='manufacture.ProcessProduct'),
        ),
        migrations.AlterField(
            model_name='shiftscheduleline',
            name='end_time',
            field=models.TimeField(choices=[(datetime.time(6, 0), '06:00'), (datetime.time(6, 30), '06:30'), (datetime.time(7, 0), '07:00'), (datetime.time(7, 30), '07:30'), (datetime.time(8, 0), '08:00'), (datetime.time(8, 30), '08:30'), (datetime.time(9, 0), '09:00'), (datetime.time(9, 30), '09:30'), (datetime.time(10, 0), '10:00'), (datetime.time(10, 30), '10:30'), (datetime.time(11, 0), '11:00'), (datetime.time(11, 30), '11:30'), (datetime.time(12, 0), '12:00'), (datetime.time(12, 30), '12:30'), (datetime.time(13, 0), '13:00'), (datetime.time(13, 30), '13:30'), (datetime.time(14, 0), '14:00'), (datetime.time(14, 30), '14:30'), (datetime.time(15, 0), '15:00'), (datetime.time(15, 30), '15:30'), (datetime.time(16, 0), '16:00'), (datetime.time(16, 30), '16:30'), (datetime.time(17, 0), '17:00'), (datetime.time(17, 30), '17:30'), (datetime.time(18, 0), '18:00'), (datetime.time(18, 30), '18:30'), (datetime.time(19, 0), '19:00'), (datetime.time(19, 30), '19:30'), (datetime.time(20, 0), '20:00'), (datetime.time(20, 30), '20:30'), (datetime.time(21, 0), '21:00'), (datetime.time(21, 30), '21:30'), (datetime.time(22, 0), '22:00'), (datetime.time(22, 30), '22:30')]),
        ),
        migrations.AlterField(
            model_name='shiftscheduleline',
            name='start_time',
            field=models.TimeField(choices=[(datetime.time(6, 0), '06:00'), (datetime.time(6, 30), '06:30'), (datetime.time(7, 0), '07:00'), (datetime.time(7, 30), '07:30'), (datetime.time(8, 0), '08:00'), (datetime.time(8, 30), '08:30'), (datetime.time(9, 0), '09:00'), (datetime.time(9, 30), '09:30'), (datetime.time(10, 0), '10:00'), (datetime.time(10, 30), '10:30'), (datetime.time(11, 0), '11:00'), (datetime.time(11, 30), '11:30'), (datetime.time(12, 0), '12:00'), (datetime.time(12, 30), '12:30'), (datetime.time(13, 0), '13:00'), (datetime.time(13, 30), '13:30'), (datetime.time(14, 0), '14:00'), (datetime.time(14, 30), '14:30'), (datetime.time(15, 0), '15:00'), (datetime.time(15, 30), '15:30'), (datetime.time(16, 0), '16:00'), (datetime.time(16, 30), '16:30'), (datetime.time(17, 0), '17:00'), (datetime.time(17, 30), '17:30'), (datetime.time(18, 0), '18:00'), (datetime.time(18, 30), '18:30'), (datetime.time(19, 0), '19:00'), (datetime.time(19, 30), '19:30'), (datetime.time(20, 0), '20:00'), (datetime.time(20, 30), '20:30'), (datetime.time(21, 0), '21:00'), (datetime.time(21, 30), '21:30'), (datetime.time(22, 0), '22:00'), (datetime.time(22, 30), '22:30')]),
        ),
    ]

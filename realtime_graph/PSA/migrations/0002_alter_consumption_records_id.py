# Generated by Django 3.2.6 on 2021-10-10 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PSA', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='consumption_records',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]

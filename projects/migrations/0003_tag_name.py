# Generated by Django 3.2.3 on 2021-07-02 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20210702_1344'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='name',
            field=models.CharField(default='null', max_length=200),
        ),
    ]

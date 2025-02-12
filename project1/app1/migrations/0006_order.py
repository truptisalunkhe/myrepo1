# Generated by Django 5.0.2 on 2024-02-28 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_feedback'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=254)),
                ('ccno', models.IntegerField()),
                ('expirydate', models.DateField()),
                ('cvv', models.IntegerField()),
                ('message', models.CharField(max_length=25)),
            ],
        ),
    ]

# Generated by Django 5.0.2 on 2024-02-27 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0003_login'),
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=10)),
            ],
        ),
    ]

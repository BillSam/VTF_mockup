from django.db import models


class Leader(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=20)


class Event(models.Model):
    name = models.CharField(max_length=20)
    date_time = models.DateTimeField()


class Blog(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField()

from django.db import models

class consumption_records(models.Model):
    id = models.IntegerField(primary_key=True)
    building = models.IntegerField()
    level = models.IntegerField()
    consumption = models.IntegerField()
    staff_count = models.IntegerField()
    resource_running = models.IntegerField()
    hours_usage = models.IntegerField()
    resource_idling = models.IntegerField()

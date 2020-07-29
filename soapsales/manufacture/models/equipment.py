from __future__ import unicode_literals
from django.db import models
from django.utils import timezone

class ProcessMachineGroup(models.Model):
    name = models.CharField(max_length=255)
    description = models. TextField()
    reference_number = models.CharField(max_length=255, null=True, default=None)


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'PO{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(ProcessMachineGroup, self).save(*args, **kwargs)


    def __str__(self):
        return self.name

    @property
    def machines(self):
        return self.machines.all()

class ProcessMachine(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    date_commissioned = models.DateTimeField(auto_now_add=True)
    machine_group = models.ForeignKey(
            'manufacture.ProcessMachineGroup',
            on_delete=models.SET_NULL,
            related_name = 'machines',
            null=True

        )

    def __str__(self):
        return self.name
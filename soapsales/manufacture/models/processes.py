from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from basedata.const import MANUFACTURING_PROCESS_CHOICES, PROCCES_RATE_UNIT_TIME_CHOICES


class Process(models.Model):
 #property
    parent_process = models.ForeignKey('manufacture.Process',
        on_delete=models.SET_NULL, null=True, blank=True)
    process_equipment = models.ForeignKey('manufacture.ProcessMachineGroup',
        on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length = 255)
    description = models.TextField(blank=True)
    bill_of_materials = models.ForeignKey('manufacture.BillOfMaterials',
        on_delete=models.SET_NULL, null=True, blank=True)
    type = models.PositiveSmallIntegerField(choices = MANUFACTURING_PROCESS_CHOICES, default=0 )#line or batch
    duration = models.DurationField(blank=True, null=True) #batch
    rate = models.ForeignKey(
        'manufacture.ProcessRate', on_delete=models.SET_NULL, null=True, blank=True)
    reference_number = models.CharField(max_length=255, null=True, default=None)
    products = models.ManyToManyField('manufacture.ProcessProduct', related_name='processes')


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'PRS-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(Process, self).save(*args, **kwargs)


    
  
    @property
    def is_subprocess(self):
        return self.parent_process != None

    @property
    def child_processes(self):
        return Process.objects.filter(parent_process=self)

    def __str__(self):
        return f'{self.name} {self.reference_number}'



class ProcessRate(models.Model):
    
    unit = models.ForeignKey('inventory.UnitOfMeasure', on_delete=models.SET_NULL, null=True)
    unit_time = models.PositiveSmallIntegerField(
        choices=PROCCES_RATE_UNIT_TIME_CHOICES
    )
    quantity = models.FloatField(default=0.0)
    reference_number = models.CharField(max_length=255, null=True, default=None)


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'PCRS-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(ProcessRate, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.reference_number} {self.unit_time}'
        






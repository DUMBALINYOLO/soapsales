from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from basedata.const import (
        PROCCES_RATE_UNIT_TIME_CHOICES,
        MANUFACTURING_PRODUCT_TYPES,
        BILL_OF_MATERIALS_LINE_CHOICES,
        MANUFACTURING_PROCESS_CHOICES,
    )

'''
A manufacturing process has involves the transformation of
raw materials into finished products using some process
the input is the raw materials, time, machinery and human labour
the output is finished goods.
waste is a byproduct of a process.
the quality of the output needs to be measured
during manufacturing material location at any given moment in time must be known

when a production order is generated. the required machine(s) are reserved
time is allocated for the job and a team/shift is assigned to it.
the raw materials are reserved for the process.
The expected waste is calculated and raw materials are assigned accordingly

at each stage of the multistage process,
output in the form of work in progress is recorded
the amount of waste generated is also recorded.
the time taken to complete the stage is also recorded.

at the end of the process the sum of all these records are
added to the grand total for that process

the system must allow interruptions in the process to be accounted
for and root cause analysis to be performed

time is managed as part of shifts that organize the employees working on them
and the production schedule that is followed by the machine.

when a production order is generated the
process products are evaluated and a suggested process is generated. that process is
then used to update the production schedule. once a process is scheduled, its status page is updated.


he makes foam rubbers
8 hour production
has machines
multistage process (3)
    - preparation  cleaning machines heating chemicals
    - mixing recipie for foam rubber
    - forming
    - cooling and drying
    - cutting
multiproduct process
waste generated
co product and by product


board making
multistage process
    - starch preparation (batch process)
    - single facing
    - double facing
    - cutting and slotting
    - work in progress
    - printing
    - folding and gluing
    - strapping
'''

class ProductionOrder(models.Model):
    date = models.DateField()
    due = models.DateField()
    customer = models.ForeignKey('invoicing.Customer', on_delete=models.SET_NULL,
        blank=True, null=True)
    product = models.ForeignKey('', on_delete=models.SET_NULL, null=True)
    process = models.ForeignKey('manufacture.Process', on_delete=models.SET_NULL, null=True)
    reference_number = models.CharField(max_length=255, null=True, default=None)
    is_confirmed_order = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)



    def __str__(self):
        return f'{self.reference_number} Customer: {self.customer}  Due: {self.due}'


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'PO{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(ProductionOrder, self).save(*args, **kwargs)



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
    product_list = models.ForeignKey('ProcessProduct',
        on_delete=models.SET_NULL, null=True, blank=True)




  
    @property
    def is_subprocess(self):
        return self.parent_process != None

    @property
    def child_processes(self):
        return Process.objects.filter(parent_process=self)

    def __str__(self):
        return self.name


class ProcessRate(models.Model):
    
    unit = models.ForeignKey('inventory.UnitOfMeasure', on_delete=models.SET_NULL, null=True)
    unit_time = models.PositiveSmallIntegerField(
        choices=PROCCES_RATE_UNIT_TIME_CHOICES
    )
    quantity = models.FloatField(default=0.0)

    def __str__(self):
        return str(self.unit) + '/' + self.unit_time_string



class ProcessProduct(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField()
    type = models.PositiveSmallIntegerField(choices=MANUFACTURING_PRODUCT_TYPES)# main product, byproduct, waste,  wip
    unit = models.ForeignKey('inventory.UnitOfMeasure', on_delete=models.SET_NULL, null=True)
    created_on = models.DateTimeField(auto_now_add=True, editable=False, db_index=True, verbose_name=('created on'))
    finished_goods= models.BooleanField(default=False)
    product = models.ForeignKey(
                    'stock.ProcessedProduct',
                    blank=True, 
                    null=True, 
                    on_delete=models.SET_NULL
                )


    def __str__(self):
        return self.name

    

class WasteGenerationReport(models.Model):
    product = models.ForeignKey('manufacture.ProcessProduct', on_delete=models.SET_NULL, null=True)
    unit = models.ForeignKey('inventory.UnitOfMeasure', on_delete=models.SET_NULL, null=True)
    quantity = models.FloatField()
    comments = models.TextField()
    recorded_by = models.ForeignKey('employees.Employee', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return str(self.product)

class BillOfMaterials(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

    @property
    def bill_lines(self):
        return self.lines.all()

class BillOfMaterialsLine(models.Model):
    bill = models.ForeignKey('manufacture.BillOfMaterials', related_name='lines', on_delete=models.SET_NULL, null=True)
    type = models.PositiveSmallIntegerField(choices=BILL_OF_MATERIALS_LINE_CHOICES) # integer
    raw_material = models.ForeignKey('inventory.InventoryItem', on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey('manufacture.ProcessProduct', on_delete=models.SET_NULL, null=True, blank=True)
    quantity = models.FloatField()
    unit =  models.ForeignKey('inventory.UnitOfMeasure', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        if self.raw_material is not None:
            return str(self.raw_material)
        else:
            return str(self.product.name)



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

        )

    def __str__(self):
        return self.name

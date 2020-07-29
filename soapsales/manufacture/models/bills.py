from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from basedata.const import BILL_OF_MATERIALS_LINE_CHOICES
  

class BillOfMaterials(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    reference_number = models.CharField(max_length=255, null=True, default=None)

    def __str__(self):
        return f'{self.name} {self.reference_number}'


    def save(self, *args, **kwargs):
        if not self.reference_number:
           prefix = 'BOM-{}'.format(timezone.now().strftime('%y%m%d'))
           prev_instances = self.__class__.objects.filter(reference_number__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().reference_number[-4:]
              self.reference_number = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.reference_number = prefix+'{0:04d}'.format(1)
        super(BillOfMaterials, self).save(*args, **kwargs)



    @property
    def bill_lines(self):
        return self.lines.all()

class BillOfMaterialsLine(models.Model):
    bill = models.ForeignKey(
	    			'manufacture.BillOfMaterials', 
	    			related_name='lines', 
	    			on_delete=models.SET_NULL, 
	    			null=True
	    		)
    type = models.PositiveSmallIntegerField(choices=BILL_OF_MATERIALS_LINE_CHOICES) # integer
    raw_material = models.ForeignKey(
		    			'inventory.InventoryItem', 
		    			on_delete=models.SET_NULL, 
		    			null=True, 
		    			blank=True,
		    			related_name='rawmaterialbillings'
		    		)
    product = models.ForeignKey(
    					'manufacture.ProcessProduct', 
    					on_delete=models.SET_NULL, 
    					null=True, 
    					blank=True,
    					related_name='billings'
    				)
    quantity = models.FloatField()
    unit =  models.ForeignKey(
    			'inventory.UnitOfMeasure', 
    			on_delete=models.SET_NULL, 
    			null=True
    		)

    def __str__(self):
        if self.raw_material is not None:
            return str(self.raw_material)
        else:
            return str(self.product.name)

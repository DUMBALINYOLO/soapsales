from django.db import models
from django.db import connection
from django.utils.translation import ugettext_lazy as _
from django.contrib.contenttypes.models import ContentType
from rest_framework.exceptions import ValidationError
from  .const import *
from django.contrib.auth.models import Group


class TimeStampedModel(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class SoftDeletionModel(models.Model):
    class Meta:
        abstract = True

    active = models.BooleanField(default=True)


    def delete(self):
        self.active = False
        self.save()

    def hard_delete(self):
        super().delete()


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj






class Note(models.Model):
    timestamp = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=120)
    note = models.TextField()

    def __str__(self):
        return "{}({}): {}".format(self.timestamp.strftime("%d %b %y, %H:%M "), self.author, self.note)


class Organization(SoftDeletionModel, SingletonModel):
    index_weight = 1
    code = models.CharField(_("organ code"),max_length=120,blank=True,null=True)
    name = models.CharField(_("organ name"),max_length=120)
    short = models.CharField(_("short name"),max_length=120,blank=True,null=True)
    status = models.BooleanField(_("in use"),default=True)
    tax_num = models.CharField(_("tax num"),max_length=120,blank=True,null=True)
    tax_address = models.CharField(_("tax address"),max_length=120,blank=True,null=True)
    tax_account = models.CharField(_("tax account"),max_length=120,blank=True,null=True)
    represent = models.CharField(_("representative "),max_length=120,blank=True,null=True)
    address = models.CharField(_("address"),max_length=120,blank=True,null=True)
    zipcode = models.CharField(_("zipcode"),max_length=120,blank=True,null=True)
    fax = models.CharField(_("fax"),max_length=120,blank=True,null=True)
    contacts = models.CharField(_("contacts"),max_length=120,blank=True,null=True)
    phone = models.CharField(_("phone"),max_length=120,blank=True,null=True)
    website = models.CharField(_("website"),max_length=120,blank=True,null=True)
    email = models.CharField(_("email"),max_length=120,blank=True,null=True)
    lic_code = models.CharField(_("license code"),max_length=120,blank=True,null=True)
    cer_code = models.CharField(_("certificate code"),max_length=120,blank=True,null=True)
    license = models.FileField(_("business license"),blank=True,null=True,upload_to='organ')
    logo = models.FileField(_("business license"),blank=True,null=True,upload_to='organ')
    certificate = models.FileField(_("organization code certificate"),blank=True,null=True,upload_to='organ')
    weight = models.IntegerField(_("weight"),default=9)

   
    def __str__(self):
        return self.name








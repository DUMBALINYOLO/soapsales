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


class IpAwareModel(TimeStampedModel, SoftDeletionModel):
    ip = models.CharField(max_length=39,
                          null=True,
                          default=None)

    class Meta:
        abstract = True


class Note(models.Model):
    timestamp = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=120)
    note = models.TextField()

    def __str__(self):
        return "{}({}): {}".format(self.timestamp.strftime("%d %b %y, %H:%M "), self.author, self.note)

class Organization(SoftDeletionModel):
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
    certificate = models.FileField(_("organization code certificate"),blank=True,null=True,upload_to='organ')
    weight = models.IntegerField(_("weight"),default=9)

    class Meta:
        abstract = True
        verbose_name = _('organization')
        verbose_name_plural = _('organization')



class OrgUnit(Organization):
    UNIT_LEVEL = (
        (0,_('HEADOFFICE')),
        (1,_('BRANCH')),
    )
    index_weight = 2
    parent = models.ForeignKey('self',verbose_name=_("parent"), on_delete=models.PROTECT, null=True,blank=True)
    unit_type = models.IntegerField(_("type"),choices=UNIT_LEVEL,default=2)
    virtual = models.BooleanField(_("is virtual"),default=False)
    fax = models.CharField(_("fax"),max_length=120,blank=True,null=True)
    weight = models.IntegerField(_("weight"),default=99)

    class Meta:
        verbose_name = _('org unit')
        verbose_name_plural = _('org unit')

    def __str__(self):
        return self.name



class VeOrganization(SoftDeletionModel):
    phone_fields = ['phone']
    email_fields = ['email']

    legal_name = models.CharField(max_length=255)
    business_address = models.TextField(blank=True)
    website = models.CharField(max_length=255, blank=True)
    bp_number = models.CharField(max_length=64, blank=True)
    email=models.CharField(max_length=128, blank=True)
    phone = models.CharField(max_length=32, blank=True)
    logo = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.legal_name

    # @property
    # def members(self):
    #     return self.individual_set.all()
    #
    # def add_member(self, individual):
    #     individual.organization = self
    #     individual.save()



class Individual(SoftDeletionModel):
    # represents vendors of the business with entry specific details.
    # the vendor can also have an account with the business for credit
    # purposes
    # A vendor may be a stand alone individual or part of a business organization.
    # '''
    phone_fields = ['phone', 'phone_two']
    email_fields = ['email']
    first_name = models.CharField(max_length =32, default='person_name')
    last_name = models.CharField(max_length =32, default='person_lastname')
    address = models.TextField(max_length =128, blank=True, default="")
    email = models.CharField(max_length =32, blank=True, default="")
    phone = models.CharField(max_length =16, blank=True, default="")
    phone_two = models.CharField(max_length = 16,blank=True , default="")
    other_details = models.TextField(blank=True, default="")
    photo = models.ImageField(null=True, blank=True)


    def __str__(self):
        return self.full_name

    # def get_absolute_url(self):
    #     return reverse("base:individual-detail", kwargs={"pk": self.pk})

    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)


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

class GlobalConfig(SingletonModel):
    DOCUMENT_THEME_CHOICES = [
        (1, 'Simple'),
        (2, 'Blue'),
        (3, 'Steel'),
        (4, 'Verdant'),
        (5, 'Warm')
    ]

    BACKUP_FREQUENCY_CHOICES = [
        ('D', 'Daily'),
        ('M', 'Monthly'),
        ('W', 'Weekly')
        ]

    LOGO_CHOICES = [
        (0, '3:2 (Medium rectangle)'),
        (1, '1:1 (Square)'),
        (2, '4:3 (Narrower Rectangle)'),
        (3, ':16:9 (Wide Rectangle)'),
    ]
    document_theme = models.IntegerField(
        choices= DOCUMENT_THEME_CHOICES,
        default=1)
    currency = models.ForeignKey(
        'accounts.Currency',
        blank=True,
        on_delete=models.SET_NULL,
        null=True)
    organization = models.ForeignKey(
        'basedata.OrgUnit',
        on_delete=models.SET_NULL,
        null=True)
    payment_details = models.TextField(
        blank=True,
        default="")
    application_version = models.CharField(
        max_length=16,
        blank=True,
        default="0.0.1")
    hardware_id = models.CharField(
        max_length=255,
        blank=True,
        default="")
    last_license_check = models.DateField(null=True)
    last_automated_service_run = models.DateTimeField(null=True, blank=True)
    use_backups = models.BooleanField(
        blank=True,
        default=False)
    backup_frequency = models.CharField(
        max_length=32,
        choices=BACKUP_FREQUENCY_CHOICES,
        default="D")
    verification_task_id = models.CharField(
        default="",
        blank=True,
        max_length=255)
    is_configured = models.BooleanField(
        default=True
    )
    logo_aspect_ratio = models.PositiveSmallIntegerField(
        default=0,
        choices=LOGO_CHOICES)


    def generate_hardware_id(self):
        result = subprocess.run('wmic csproduct get uuid',
            stdout=subprocess.PIPE, shell=True)
        _id = result.stdout.decode('utf-8')
        _id = _id[_id.find('\n') + 1:]
        id = _id[:_id.find(' ')]

        return id

    @property
    def task_mapping(self):
        mapping = {
            'D': Task.DAILY,
            'W': Task.WEEKLY,
            'M': Task.EVERY_4_WEEKS,
            '': Task.DAILY
        }
        return mapping[self.backup_frequency]

    def save(self, *args, **kwargs):

        super().save(*args, **kwargs)

        #setup hardware id
        if self.hardware_id == "":
            self.hardware_id = self.generate_hardware_id()
            super().save(*args, **kwargs)


        #serialize and store in json file so settings.py can access
        json_config = os.path.join(settings.BASE_DIR, 'global_config.json')
        with open(json_config, 'w+') as fil:
            fields = copy.deepcopy(self.__dict__)
            del fields['hardware_id']
            del fields['last_license_check']
            del fields['last_automated_service_run']
            del fields['_state']
            json.dump(fields, fil)


    @property
    def logo_width(self):
        '''All logos share a heigh of 100 px, width is calculated as a ratio
        relative to this value.'''
        mapping = {
            0: 1.5,
            1: 1,
            2: 1.33,
            3: 1.78
        }

        return mapping[self.logo_aspect_ratio] * 100

    @classmethod
    def logo_url(cls):
        conf = cls.objects.first()
        if conf and conf.logo:
            return conf.logo.url
        return ""

    @property
    def business_address(self):
        return self.organization.business_address if self.organization else None

    @property
    def business_name(self):
        return self.organization.legal_name if self.organization else None

    @property
    def contact_details(self):
        return f"Phone: {self.organization.phone}"
        f"Email: {self.organization.email}" if self.organization else ""

    @property
    def logo(self):
        return self.organization.logo if self.organization else None



class InvenTreeTree(models.Model):
    """
        Provides an abstracted self-referencing tree model for data categories.
        - Each Category has one parent Category, which can be blank (for a top-level Category).
        - Each Category can have zero-or-more child Categor(y/ies)
    """

    class Meta:
        abstract = True
        unique_together = ('name', 'parent')

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=250, blank=True)
    parent = models.ForeignKey('self',
                               on_delete=models.CASCADE,
                               blank=True,
                               null=True,
                               related_name='children')

    def getUniqueParents(self, unique=None):
        """ Return a flat set of all parent items that exist above this node.
        If any parents are repeated (which would be very bad!), the process is halted
        """

        if unique is None:
            unique = set()
        else:
            unique.add(self.id)

        if self.parent and self.parent.id not in unique:
            self.parent.getUniqueParents(unique)

        return unique

    def getUniqueChildren(self, unique=None):
        """ Return a flat set of all child items that exist under this node.
        If any child items are repeated, the repetitions are omitted.
        """

        if unique is None:
            unique = set()

        if self.id in unique:
            return unique

        unique.add(self.id)

        # Some magic to get around the limitations of abstract models
        contents = ContentType.objects.get_for_model(type(self))
        children = contents.get_all_objects_for_this_type(parent=self.id)

        for child in children:
            child.getUniqueChildren(unique)

        return unique

    @property
    def children(self):
        contents = ContentType.objects.get_for_model(type(self))
        children = contents.get_all_objects_for_this_type(parent=self.id)

        return children

    def getAcceptableParents(self):
        """ Returns a list of acceptable parent items within this model
        Acceptable parents are ones which are not underneath this item.
        Setting the parent of an item to its own child results in recursion.
        """
        contents = ContentType.objects.get_for_model(type(self))

        available = contents.get_all_objects_for_this_type()

        # List of child IDs
        childs = self.getUniqueChildren()

        acceptable = [None]

        for a in available:
            if a.id not in childs:
                acceptable.append(a)

        return acceptable

    @property
    def parentpath(self):
        """ Return the parent path of this category

        Todo:
            This function is recursive and expensive.
            It should be reworked such that only a single db call is required
        """

        if self.parent:
            return self.parent.parentpath + [self.parent]
        else:
            return []

    @property
    def path(self):
        if self.parent:
            return "/".join([p.name for p in self.parentpath]) + "/" + self.name
        else:
            return self.name

    def __setattr__(self, attrname, val):
        """ Custom Attribute Setting function

        Parent:
        Setting the parent of an item to its own child results in an infinite loop.
        The parent of an item cannot be set to:
            a) Its own ID
            b) The ID of any child items that exist underneath it

        Name:
        Tree node names are limited to a reduced character set
        """

        if attrname == 'parent_id':
            # If current ID is None, continue
            # - This object is just being created
            if self.id is None:
                pass
            # Parent cannot be set to same ID (this would cause looping)
            elif val == self.id:
                raise ValidationError("Category cannot set itself as parent")
            # Null parent is OK
            elif val is None:
                pass
            # Ensure that the new parent is not already a child
            else:
                kids = self.getUniqueChildren()
                if val in kids:
                    raise ValidationError("Category cannot set a child as parent")

        # Prohibit certain characters from tree node names
        elif attrname == 'name':
            val = val.translate({ord(c): None for c in "!@#$%^&*'\"\\/[]{}<>,|+=~`"})

        super(InvenTreeTree, self).__setattr__(attrname, val)

    def __str__(self):
        """ String representation of a category is the full path to that category

        Todo:
            This is recursive - Make it not so.
        """

        return self.path


def FilterChildren(queryset, parent):
    """ Filter a queryset, limit to only objects that are a child of the given parent
    Filter is passed in the URL string, e.g. '/?parent=123'
    To accommodate for items without a parent, top-level items can be specified as:
    none / false / null / top / 0
    """

    if not parent:
        return queryset
    elif str(parent).lower() in ['none', 'false', 'null', 'top', '0']:
        return queryset.filter(parent=None)
    else:
        try:
            parent_id = int(parent)
            if parent_id == 0:
                return queryset.filter(parent=None)
            else:
                return queryset.filter(parent=parent_id)
        except:
            return queryset

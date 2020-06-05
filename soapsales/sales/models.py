from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=345)
    #TODO  add other fields

    def __str__(self):
        return self.name

    @property
    def orders(self):
        return self.order_set.all()



class SalesGroup(models.Model):
    name = models.CharField(max_length=230)
    group_pricing = models.FloatField()
    discount_price = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.name

class SalesItem(models.Model):
    customer = models.ForeignKey('sales.Customer', on_delete=models.PROTECT)
    ordered = models.BooleanField(default=False)
    sales_group = models.ForeignKey('SalesGroup', on_delete=models.PROTECT)
    product = models.ForeignKey('manufacture.Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.product.name}"

    def get_total_product_price(self):
        return self.quantity * self.sales_group.group_pricing

    def get_total_discount_product_price(self):
        return self.quantity * self.sales_group.discount_price

    def get_amount_saved(self):
        return self.get_total_product_price() - self.get_total_discount_product_price()

    def get_final_price(self):
        if self.sales_group.discount_price:
            return self.get_total_discount_product_price()
        return self.get_total_product_price()


class Order(models.Model):
    customer = models.ForeignKey('sales.Customer', on_delete=models.PROTECT)
    ref_code = models.CharField(max_length=20, blank=True, null=True)
    products = models.ManyToManyField(SalesItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    being_delivered = models.BooleanField(default=False)


    def __str__(self):
        return self.customer.name

    def get_total(self):
        total = 0
        for order_item in self.products.all():
            total += order_item.get_final_price()
        return total

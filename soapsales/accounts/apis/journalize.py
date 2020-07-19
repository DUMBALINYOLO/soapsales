from __future__ import unicode_literals
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from rest_framework import permissions
from rest_framework.response import Response

from accounts.models import (
                        JournalEntry,
                        MANAGEMENT_JOURNAL_ENTRY_TYPES,
                        Transaction
                    )
from accounts.permissions import LAJournalEntryReadPermission
from accounts.serializers import (
                    CreateJournalEntrySerializer,
                    UpdateJournalEntrySerializer,
                    TransactionReadOnlySerilizer,
                    JournalEntryDetailSerializer,
                    JournalEntryListSerializer,
                )

class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionReadOnlySerilizer
    queryset = Transaction.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]



class JournalEntryViewSet(viewsets.ModelViewSet):
    queryset = JournalEntry.objects.all()
    filter_backends = (SearchFilter, DjangoFilterBackend,)
    search_fields = ('date', 'description', 'creator__username',)
    filter_fields = {
        'date': ['range'],
        'description': ['icontains'],
        'creator__username': ['icontains'],
        'is_approved': ['exact']
    }
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]

   
   

    def options(self, request, *args, **kwargs):
        meta = self.metadata_class()
        data = meta.determine_metadata(request, self)
        if not request.user.groups.filter(name='Manager').exists():
            data['actions']['POST']['entry_type']['choices'] = [item for item in data['actions']['POST']['entry_type']['choices'] if item['value'] not in MANAGEMENT_JOURNAL_ENTRY_TYPES]

        return Response(data)

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)

    def get_serializer_class(self):
        if self.action == 'POST':
            return CreateJournalEntrySerializer
        elif self.action in ['PUT', 'PATCH']:
            return UpdateJournalEntrySerializer
        elif self.action == "RETRIEVE":
            return JournalEntryDetailSerializer
        return JournalEntryListSerializer

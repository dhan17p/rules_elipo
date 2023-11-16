using CatalogService as service from '../../srv/cat-service';

annotate service.Books with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'stock',
            Value : stock,
        },
    ]
);
annotate service.Books with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'table',
            ID : 'table',
            Target : 'rel/@UI.LineItem#table',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'table2',
            ID : 'table2',
            Target : 'rel2/@UI.LineItem#table2',
        },
    ]
);
annotate service.child with @(
    UI.LineItem #table : [
        {
            $Type : 'UI.DataField',
            Value : chh_ID,
            Label : 'chh_ID',
        },{
            $Type : 'UI.DataField',
            Value : name,
            Label : 'name',
        },{
            $Type : 'UI.DataField',
            Value : UUID,
            Label : 'UUID',
        },]
);
annotate service.user with @(
    UI.LineItem #table2 : [
        {
            $Type : 'UI.DataField',
            Value : id,
            Label : 'id',
        },{
            $Type : 'UI.DataField',
            Value : name,
            Label : 'name',
        },]
);

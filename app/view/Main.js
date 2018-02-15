Ext.define('PdfClient.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'PdfClient.view.MainController',
        'PdfClient.view.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'fit',

    items: [
        {
            margin: 20,
            shadow: true,
            xtype: 'container',
            layout:'fit',
            items: [
                {
                    xtype: 'container',
                    margin: 10,
                    reference: 'pdfcntr'
                    
                }
            ],
            //style:'background:red;'
        }
    ]
});

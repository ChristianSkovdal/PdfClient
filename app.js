Ext.application({
    name: 'PdfClient',

    extend: 'Ext.app.Application',

    launch: function () {

    },

    requires: [
        'PdfClient.view.Main'
    ],

    mainView: 'PdfClient.view.Main'
});

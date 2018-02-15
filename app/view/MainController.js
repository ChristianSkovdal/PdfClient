Ext.define('PdfClient.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'PdfUtil'

    ],

    init() {

        let me = this;


        let showPdf = (imageData) => {

            debugger;

            var docDefinition = {
                content: [
                    {
                        image: 'b1.jpg',
                        width: 200
                    },
                    {
                        image: 'b2.jpg',
                        width: 200
                    },
                    {
                        image: 'b52.jpg',
                        width: 200
                    },
                ],
                images: imageData
            };

            let pdf = pdfMake.createPdf(docDefinition);

            pdf.getDataUrl((dataUrl) => {
                let cntr = me.lookup('pdfcntr').el.getFirstChild().el;
                const iframe = document.createElement('iframe');
                iframe.src = dataUrl;
                iframe.style = style = 'position: relative; height: 100%; width: 100%;';
                iframe.scrolling = 'no';
                iframe.frameborder = 0;
                cntr.appendChild(iframe);
            });

        };


        PdfUtil.loadImages(['b1.jpg', 'b2.jpg', 'b52.jpg'])
            .then(imageData => {
                showPdf(imageData);
            })
            .catch(err => Ext.Msg.alert(err))

        //PdfUtil.loadImages(['b1', 'b2', 'b52'], null);

        // var docDefinition = {
        //     content: [
        //         'Images can be also provided in dataURL format...',
        //         {
        //             image: base64String,
        //             width: 200
        //         },
        //     ]
        // };

        // let pdf = pdfMake.createPdf(docDefinition);

        // pdf.getDataUrl((dataUrl) => {
        //     let cntr = me.lookup('pdfcntr').el.getFirstChild().el;
        //     const iframe = document.createElement('iframe');
        //     iframe.src = dataUrl;
        //     iframe.style = style = 'position: relative; height: 100%; width: 100%;';
        //     iframe.scrolling = 'no';
        //     iframe.frameborder = 0;
        //     cntr.appendChild(iframe);
        // });

        // function toDataURL(url, callback) {
        //     var xhr = new XMLHttpRequest();
        //     xhr.onload = function () {
        //         var reader = new FileReader();
        //         reader.onloadend = function () {
        //             callback(reader.result);
        //         }
        //         reader.readAsDataURL(xhr.response);
        //     };
        //     xhr.open('GET', url);
        //     xhr.responseType = 'blob';
        //     xhr.send();
        // }
        // toDataURL('b2.jpg', function (dataUrl) {

        //     var docDefinition = {
        //         content: [
        //             'Images can be also provided in dataURL format...',
        //             {
        //                 image: dataUrl,
        //                 width: 200
        //             },
        //         ]
        //     };

        //     let pdf = pdfMake.createPdf(docDefinition);

        //     pdf.getDataUrl((dataUrl) => {
        //         let cntr = me.lookup('pdfcntr').el.getFirstChild().el;
        //         const iframe = document.createElement('iframe');
        //         iframe.src = dataUrl;
        //         iframe.style = style = 'position: relative; height: 100%; width: 100%;';
        //         iframe.scrolling = 'no';
        //         iframe.frameborder = 0;
        //         cntr.appendChild(iframe);
        //     });

        // })




    }
});

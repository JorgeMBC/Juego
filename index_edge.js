/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.min.js",
            js+"lightbox/jquery.lightbox.min.js",
            js+"jquery-ui-1.10.3.custom.min.js",
            js+"jquery.ui.touch-punch.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Fondo',
                            type: 'image',
                            rect: ['-2673px', '-3942px', '6560px', '9142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Fondo.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'Flechas1',
                            type: 'image',
                            rect: ['-2792px', '-2707px', '6804px', '6557px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Flechas1.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'Flechas2',
                            type: 'image',
                            rect: ['-2595px', '-1103px', '6406px', '3392px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Flechas2.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'Flechas3',
                            type: 'image',
                            rect: ['-690px', '-419px', '2635px', '2371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Flechas3.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'Flechas4',
                            type: 'image',
                            rect: ['-2597px', '644px', '6406px', '770px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Flechas4.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'MRSar',
                            symbolName: 'MRSar',
                            type: 'rect',
                            rect: ['503', '187px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'MNVar',
                            symbolName: 'MNVar',
                            type: 'rect',
                            rect: ['306', '264px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'GCDSCRSar',
                            symbolName: 'GCDSCRSar',
                            type: 'rect',
                            rect: ['308', '609px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'ESar',
                            symbolName: 'ESar',
                            type: 'rect',
                            rect: ['687', '609px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'GDPar',
                            symbolName: 'GDPar',
                            type: 'rect',
                            rect: ['671', '-11px', '210', '88', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Car',
                            symbolName: 'Car',
                            type: 'rect',
                            rect: ['331', '714px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'EOar',
                            symbolName: 'EOar',
                            type: 'rect',
                            rect: ['369', '839px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'ROar',
                            symbolName: 'ROar',
                            type: 'rect',
                            rect: ['632', '839px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'GDCCar',
                            symbolName: 'GDCCar',
                            type: 'rect',
                            rect: ['336', '983px', '170', '81', 'auto', 'auto']
                        },
                        {
                            id: 'STar',
                            symbolName: 'STar',
                            type: 'rect',
                            rect: ['521', '983px', '170', '81', 'auto', 'auto']
                        },
                        {
                            id: 'SDGDCar',
                            symbolName: 'SDGDCar',
                            type: 'rect',
                            rect: ['708', '983px', '170', '81', 'auto', 'auto']
                        },
                        {
                            id: 'Sar',
                            symbolName: 'Sar',
                            type: 'rect',
                            rect: ['295', '392px', '185', '88', 'auto', 'auto']
                        },
                        {
                            id: 'Dar',
                            symbolName: 'Dar',
                            type: 'rect',
                            rect: ['711', '394px', '189', '85', 'auto', 'auto']
                        },
                        {
                            id: 'CDTar',
                            symbolName: 'CDTar',
                            type: 'rect',
                            rect: ['691', '264px', '210', '88', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0', '361', '950', '279', 'auto', 'auto'],
                            fill: ["rgba(35,85,124,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['52px', '391px', '825px', '90', 'auto', 'auto'],
                            borderRadius: ["20px 20px", "20px 20px", "20px 20px", "20px 20px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [10,"rgb(149, 193, 31)","solid"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['87', '418', '773px', '69', 'auto', 'auto'],
                            text: "Arrastre con el mouse los items de la izquierda dentro del organigrama en el lugar correspondiente",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['574px', '78px', '101px', '2px', 'auto', 'auto'],
                            fill: ["rgba(255,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['574px', '181px', '101px', '2px', 'auto', 'auto'],
                            fill: ["rgba(255,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'MRS',
                            symbolName: 'mrs',
                            type: 'rect',
                            rect: ['35px', '15', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'MNV',
                            symbolName: 'MNV',
                            type: 'rect',
                            rect: ['35px', '131px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'CDT',
                            symbolName: 'CDT',
                            type: 'rect',
                            rect: ['35px', '244px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'D',
                            symbolName: 'D',
                            type: 'rect',
                            rect: ['40px', '195px', '189', '86', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'S',
                            symbolName: 'S',
                            type: 'rect',
                            rect: ['40px', '58px', '189', '89', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'GCDSCRS',
                            symbolName: 'GCDSCRS',
                            type: 'rect',
                            rect: ['30px', '272px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'ES',
                            symbolName: 'ES',
                            type: 'rect',
                            rect: ['30px', '4px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'C',
                            symbolName: 'C',
                            type: 'rect',
                            rect: ['30px', '183px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'GDP',
                            symbolName: 'GDP',
                            type: 'rect',
                            rect: ['30px', '94px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'EO',
                            symbolName: 'EO',
                            type: 'rect',
                            rect: ['30px', '51px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'RO',
                            symbolName: 'RO',
                            type: 'rect',
                            rect: ['30px', '210px', '210', '88', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'GDCC',
                            symbolName: 'GDCC',
                            type: 'rect',
                            rect: ['40px', '33px', '170', '82', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'ST',
                            symbolName: 'ST',
                            type: 'rect',
                            rect: ['40px', '140px', '170', '82', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'SDGDC',
                            symbolName: 'SDGDC',
                            type: 'rect',
                            rect: ['40px', '246px', '170', '81', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Pasted',
                            type: 'image',
                            rect: ['-2028px', '-3524px', '4751px', '6400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'Ellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['126px', '310px', '140px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['408px', '307px', '140px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['155px', '385px', '140px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['395px', '385px', '140px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['183px', '470px', '140px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['367px', '468px', '140px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy6',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['147px', '569px', '123px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy7',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['284px', '569px', '123px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy8',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['421px', '569px', '123px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'check',
                            symbolName: 'check',
                            display: 'block',
                            type: 'rect',
                            rect: ['392px', '220px', '128', '103', 'auto', 'auto']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['407px', '516px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Indicadores<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "bold", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'btnpes',
                            symbolName: 'btnpes',
                            display: 'none',
                            type: 'rect',
                            rect: ['68', '61px', '201', '37', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer'
                        },
                        {
                            id: 'perscl',
                            symbolName: 'perscl',
                            display: 'none',
                            type: 'rect',
                            rect: ['675px', '564px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Text2Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['603px', '336px', '294px', '183px', 'auto', 'auto'],
                            text: "Al pasar el mouse por encima de algunas figuras del mapa, se activará la mano .__ en donde podrá dar clic y encontrar mayor información.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'handCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['536px', '262px', '320px', '347px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hand2.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'Text2Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['603px', '336px', '294px', '183px', 'auto', 'auto'],
                            text: "Al pasar el mouse por encima de algunas figuras del mapa, se activará la mano .__ en donde podrá dar clic y encontrar mayor información.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['603px', '336px', '294px', '183px', 'auto', 'auto'],
                            text: "Al pasar el mouse por encima de algunas figuras del mapa, se activará la mano .__ en donde podrá dar clic y encontrar mayor información.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'hand',
                            display: 'none',
                            type: 'image',
                            rect: ['536px', '262px', '320px', '347px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hand.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'handCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['536px', '262px', '320px', '347px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"hand3.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '950', '640', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(201,253,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    data: [
                        [
                            "eid607",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${S}",
                            '1',
                            '0'
                        ],
                        [
                            "eid655",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Sar}",
                            '392px',
                            '220px'
                        ],
                        [
                            "eid693",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Sar}",
                            '220px',
                            '-62px'
                        ],
                        [
                            "eid712",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Sar}",
                            '-62px',
                            '-193px'
                        ],
                        [
                            "eid731",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Sar}",
                            '-193px',
                            '-333px'
                        ],
                        [
                            "eid750",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Sar}",
                            '-333px',
                            '-694px'
                        ],
                        [
                            "eid897",
                            "left",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${Text3}",
                            '407px',
                            '708px'
                        ],
                        [
                            "eid611",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${C}",
                            '1',
                            '0'
                        ],
                        [
                            "eid799",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid788",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid797",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${Ellipse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid605",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${MRS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid622",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Rectangle}",
                            '361px',
                            '640px'
                        ],
                        [
                            "eid609",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${GCDSCRS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid804",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid785",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid794",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid800",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid789",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid798",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid663",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Car}",
                            '714px',
                            '542px'
                        ],
                        [
                            "eid701",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Car}",
                            '542px',
                            '260px'
                        ],
                        [
                            "eid720",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Car}",
                            '260px',
                            '129px'
                        ],
                        [
                            "eid739",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Car}",
                            '129px',
                            '-11px'
                        ],
                        [
                            "eid758",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Car}",
                            '-11px',
                            '-372px'
                        ],
                        [
                            "eid805",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid783",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid792",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${MNVar}",
                            '264px',
                            '92px'
                        ],
                        [
                            "eid694",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${MNVar}",
                            '92px',
                            '-190px'
                        ],
                        [
                            "eid713",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${MNVar}",
                            '-190px',
                            '-321px'
                        ],
                        [
                            "eid732",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${MNVar}",
                            '-321px',
                            '-461px'
                        ],
                        [
                            "eid751",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${MNVar}",
                            '-461px',
                            '-822px'
                        ],
                        [
                            "eid603",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${CDT}",
                            '1',
                            '0'
                        ],
                        [
                            "eid891",
                            "left",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${btnpes}",
                            '68px',
                            '675px'
                        ],
                        [
                            "eid893",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid895",
                            "display",
                            5000,
                            0,
                            "easeOutElastic",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid619",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${GDCC}",
                            '1',
                            '0'
                        ],
                        [
                            "eid602",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${MNV}",
                            '1',
                            '0'
                        ],
                        [
                            "eid892",
                            "top",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${btnpes}",
                            '564px',
                            '61px'
                        ],
                        [
                            "eid661",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${SDGDCar}",
                            '983px',
                            '811px'
                        ],
                        [
                            "eid699",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${SDGDCar}",
                            '811px',
                            '529px'
                        ],
                        [
                            "eid718",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${SDGDCar}",
                            '529px',
                            '398px'
                        ],
                        [
                            "eid737",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${SDGDCar}",
                            '398px',
                            '258px'
                        ],
                        [
                            "eid756",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${SDGDCar}",
                            '258px',
                            '-103px'
                        ],
                        [
                            "eid801",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid787",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid796",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid3",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${handCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid659",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${ESar}",
                            '609px',
                            '437px'
                        ],
                        [
                            "eid697",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ESar}",
                            '437px',
                            '155px'
                        ],
                        [
                            "eid716",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${ESar}",
                            '155px',
                            '24px'
                        ],
                        [
                            "eid735",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${ESar}",
                            '24px',
                            '-116px'
                        ],
                        [
                            "eid754",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${ESar}",
                            '-116px',
                            '-477px'
                        ],
                        [
                            "eid648",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Flechas4}",
                            '644px',
                            '472px'
                        ],
                        [
                            "eid686",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Flechas4}",
                            '472px',
                            '190px'
                        ],
                        [
                            "eid705",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Flechas4}",
                            '190px',
                            '59px'
                        ],
                        [
                            "eid724",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Flechas4}",
                            '59px',
                            '-81px'
                        ],
                        [
                            "eid743",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Flechas4}",
                            '-81px',
                            '-442px'
                        ],
                        [
                            "eid806",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid782",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid791",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid666",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${GCDSCRSar}",
                            '609px',
                            '437px'
                        ],
                        [
                            "eid704",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${GCDSCRSar}",
                            '437px',
                            '155px'
                        ],
                        [
                            "eid723",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${GCDSCRSar}",
                            '155px',
                            '24px'
                        ],
                        [
                            "eid742",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${GCDSCRSar}",
                            '24px',
                            '-116px'
                        ],
                        [
                            "eid761",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${GCDSCRSar}",
                            '-116px',
                            '-477px'
                        ],
                        [
                            "eid650",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Fondo}",
                            '-3942px',
                            '-4114px'
                        ],
                        [
                            "eid688",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Fondo}",
                            '-4114px',
                            '-4396px'
                        ],
                        [
                            "eid707",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Fondo}",
                            '-4396px',
                            '-4527px'
                        ],
                        [
                            "eid726",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Fondo}",
                            '-4527px',
                            '-4667px'
                        ],
                        [
                            "eid745",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Fondo}",
                            '-4667px',
                            '-5028px'
                        ],
                        [
                            "eid658",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${ROar}",
                            '839px',
                            '667px'
                        ],
                        [
                            "eid696",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${ROar}",
                            '667px',
                            '385px'
                        ],
                        [
                            "eid715",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${ROar}",
                            '385px',
                            '254px'
                        ],
                        [
                            "eid734",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${ROar}",
                            '254px',
                            '114px'
                        ],
                        [
                            "eid753",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${ROar}",
                            '114px',
                            '-247px'
                        ],
                        [
                            "eid913",
                            "top",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${perscl}",
                            '564px',
                            '162px'
                        ],
                        [
                            "eid660",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${EOar}",
                            '839px',
                            '667px'
                        ],
                        [
                            "eid698",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${EOar}",
                            '667px',
                            '385px'
                        ],
                        [
                            "eid717",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${EOar}",
                            '385px',
                            '254px'
                        ],
                        [
                            "eid736",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${EOar}",
                            '254px',
                            '114px'
                        ],
                        [
                            "eid755",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${EOar}",
                            '114px',
                            '-247px'
                        ],
                        [
                            "eid780",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${GDPar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid898",
                            "top",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${Text3}",
                            '516px',
                            '18px'
                        ],
                        [
                            "eid807",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid781",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid790",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid771",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${GDPar}",
                            '718px',
                            '542px'
                        ],
                        [
                            "eid772",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${GDPar}",
                            '542px',
                            '260px'
                        ],
                        [
                            "eid774",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${GDPar}",
                            '260px',
                            '129px'
                        ],
                        [
                            "eid776",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${GDPar}",
                            '129px',
                            '-11px'
                        ],
                        [
                            "eid778",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${GDPar}",
                            '-11px',
                            '-367px'
                        ],
                        [
                            "eid615",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${EO}",
                            '1',
                            '0'
                        ],
                        [
                            "eid649",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Dar}",
                            '394px',
                            '222px'
                        ],
                        [
                            "eid687",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Dar}",
                            '222px',
                            '-60px'
                        ],
                        [
                            "eid706",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Dar}",
                            '-60px',
                            '-191px'
                        ],
                        [
                            "eid725",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Dar}",
                            '-191px',
                            '-331px'
                        ],
                        [
                            "eid744",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Dar}",
                            '-331px',
                            '-692px'
                        ],
                        [
                            "eid762",
                            "top",
                            5000,
                            1000,
                            "easeOutElastic",
                            "${Pasted}",
                            '-3524px',
                            '-2880px'
                        ],
                        [
                            "eid884",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btnpes}",
                            'none',
                            'none'
                        ],
                        [
                            "eid885",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${btnpes}",
                            'none',
                            'block'
                        ],
                        [
                            "eid610",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${GDP}",
                            '1',
                            '0'
                        ],
                        [
                            "eid901",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Flechas2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid902",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${Flechas2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid654",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${GDCCar}",
                            '983px',
                            '811px'
                        ],
                        [
                            "eid692",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${GDCCar}",
                            '811px',
                            '529px'
                        ],
                        [
                            "eid711",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${GDCCar}",
                            '529px',
                            '398px'
                        ],
                        [
                            "eid730",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${GDCCar}",
                            '398px',
                            '258px'
                        ],
                        [
                            "eid749",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${GDCCar}",
                            '258px',
                            '-103px'
                        ],
                        [
                            "eid907",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Flechas1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${Text2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid657",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Flechas3}",
                            '-419px',
                            '-591px'
                        ],
                        [
                            "eid695",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Flechas3}",
                            '-591px',
                            '-873px'
                        ],
                        [
                            "eid714",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Flechas3}",
                            '-873px',
                            '-1004px'
                        ],
                        [
                            "eid733",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Flechas3}",
                            '-1004px',
                            '-1144px'
                        ],
                        [
                            "eid752",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Flechas3}",
                            '-1144px',
                            '-1505px'
                        ],
                        [
                            "eid628",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${RoundRect}",
                            '391px',
                            '670px'
                        ],
                        [
                            "eid617",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${ST}",
                            '1',
                            '0'
                        ],
                        [
                            "eid894",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${Rectangle2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid896",
                            "display",
                            5000,
                            0,
                            "easeOutElastic",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid802",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid786",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid795",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${STar}",
                            '983px',
                            '811px'
                        ],
                        [
                            "eid689",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${STar}",
                            '811px',
                            '529px'
                        ],
                        [
                            "eid708",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${STar}",
                            '529px',
                            '398px'
                        ],
                        [
                            "eid727",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${STar}",
                            '398px',
                            '258px'
                        ],
                        [
                            "eid746",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${STar}",
                            '258px',
                            '-103px'
                        ],
                        [
                            "eid606",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${D}",
                            '1',
                            '0'
                        ],
                        [
                            "eid899",
                            "color",
                            4000,
                            1000,
                            "easeOutElastic",
                            "${Text3}",
                            'rgba(255,255,255,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid662",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Flechas1}",
                            '-2707px',
                            '-2879px'
                        ],
                        [
                            "eid700",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Flechas1}",
                            '-2879px',
                            '-3161px'
                        ],
                        [
                            "eid719",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Flechas1}",
                            '-3161px',
                            '-3292px'
                        ],
                        [
                            "eid738",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Flechas1}",
                            '-3292px',
                            '-3432px'
                        ],
                        [
                            "eid757",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Flechas1}",
                            '-3432px',
                            '-3793px'
                        ],
                        [
                            "eid4",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${check}",
                            'block',
                            'none'
                        ],
                        [
                            "eid621",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Text}",
                            '418px',
                            '697px'
                        ],
                        [
                            "eid906",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${Flechas4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid665",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${MRSar}",
                            '187px',
                            '15px'
                        ],
                        [
                            "eid703",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${MRSar}",
                            '15px',
                            '-267px'
                        ],
                        [
                            "eid722",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${MRSar}",
                            '-267px',
                            '-398px'
                        ],
                        [
                            "eid741",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${MRSar}",
                            '-398px',
                            '-538px'
                        ],
                        [
                            "eid760",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${MRSar}",
                            '-538px',
                            '-899px'
                        ],
                        [
                            "eid613",
                            "opacity",
                            3000,
                            1000,
                            "linear",
                            "${RO}",
                            '1',
                            '0'
                        ],
                        [
                            "eid608",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${ES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid914",
                            "display",
                            2000,
                            0,
                            "easeOutElastic",
                            "${perscl}",
                            'none',
                            'block'
                        ],
                        [
                            "eid653",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${CDTar}",
                            '264px',
                            '92px'
                        ],
                        [
                            "eid691",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${CDTar}",
                            '92px',
                            '-190px'
                        ],
                        [
                            "eid710",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${CDTar}",
                            '-190px',
                            '-321px'
                        ],
                        [
                            "eid729",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${CDTar}",
                            '-321px',
                            '-461px'
                        ],
                        [
                            "eid748",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${CDTar}",
                            '-461px',
                            '-822px'
                        ],
                        [
                            "eid803",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid784",
                            "display",
                            5750,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid793",
                            "display",
                            6000,
                            0,
                            "easeOutElastic",
                            "${EllipseCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid904",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${Flechas3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid620",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${SDGDC}",
                            '1',
                            '0'
                        ],
                        [
                            "eid664",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Flechas2}",
                            '-1103px',
                            '-1275px'
                        ],
                        [
                            "eid702",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${Flechas2}",
                            '-1275px',
                            '-1557px'
                        ],
                        [
                            "eid721",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${Flechas2}",
                            '-1557px',
                            '-1688px'
                        ],
                        [
                            "eid740",
                            "top",
                            3000,
                            1000,
                            "linear",
                            "${Flechas2}",
                            '-1688px',
                            '-1828px'
                        ],
                        [
                            "eid759",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${Flechas2}",
                            '-1828px',
                            '-2189px'
                        ]
                    ]
                }
            },
            "mrs": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Maximizarrentabilidadsocial2',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Maximizarrentabilidadsocial.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "MNV": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Margennetoventas',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Margennetoventas.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "CDT": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Capitaldetrabajo',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Capitaldetrabajo.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "S": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-850px', '-402px', '1890px', '894px', 'auto', 'auto'],
                            id: 'Satisfaccion',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Satisfaccion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '189px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "D": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-851px', '-386px', '1890px', '857px', 'auto', 'auto'],
                            id: 'Dinamizacion',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Dinamizacion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '189px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "GCDSCRS": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Gestionculturadelservicioconresponsabilidadsocial',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Gestionculturadelservicioconresponsabilidadsocial.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ES": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Empoderamientosocial',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Empoderamientosocial.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "C": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Crecimiento',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Crecimiento.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "GDP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Gestiondeproyectos',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Gestiondeproyectos.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "EO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Eficienciaoperativa',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Eficienciaoperativa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "RO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-945px', '-396px', '2100px', '880px', 'auto', 'auto'],
                            id: 'Recaudooportuno',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Recaudooportuno.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "GDCC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-765px', '-370px', '1700px', '822px', 'auto', 'auto'],
                            id: 'Gestiondelascompetenciasclaves',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Gestiondelascompetenciasclaves.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ST": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-765px', '-370px', '1700px', '822px', 'auto', 'auto'],
                            id: 'soportetecnologico',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/soportetecnologico.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "SDGDC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-765px', '-365px', '1700px', '813px', 'auto', 'auto'],
                            id: 'Sistemadegestioncertificado2',
                            transform: [[], [], [], ['0.1', '0.1']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Sistemadegestioncertificado2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "MRSar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            rect: ['-942px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'Maximizarrentabilidadsocial',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Maximizarrentabilidadsocial.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid809",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Maximizarrentabilidadsocial}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CDTar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-943px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            id: 'Capitaldetrabajo',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Capitaldetrabajo.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid825",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Capitaldetrabajo}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Sar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '185px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-829px', '-396px', '1845px', '880px', 'auto', 'auto'],
                            id: 'Satisfaccion2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Satisfaccion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '185px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid838",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Satisfaccion2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "MNVar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-942px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            id: 'Margennetoventas',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Margennetoventas.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid823",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Margennetoventas}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Dar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '189px', '85px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-848px', '-388px', '1885px', '860px', 'auto', 'auto'],
                            id: 'Dinamizacion2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Dinamizacion.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '189px', '85px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid844",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Dinamizacion2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "GCDSCRSar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-942px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            id: 'Gestionculturadelservicioconresponsabilidadsocial2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Gestionculturadelservicioconresponsabilidadsocial.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid850",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Gestionculturadelservicioconresponsabilidadsocial2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "ESar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-943px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            id: 'Empoderamientosocial',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Empoderamientosocial.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid852",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Empoderamientosocial}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Car": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-969px', '-396px', '2150px', '880px', 'auto', 'auto'],
                            id: 'Crecimiento',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Crecimiento.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid854",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Crecimiento}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "EOar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-942px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            id: 'Eficienciaoperativa',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Eficienciaoperativa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid858",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Eficienciaoperativa}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "ROar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-942px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            id: 'Recaudooportuno',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Recaudooportuno.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid860",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Recaudooportuno}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "GDCCar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '170px', '81px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-762px', '-365px', '1695px', '810px', 'auto', 'auto'],
                            id: 'Gestiondelascompetenciasclaves2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Gestiondelascompetenciasclaves.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid870",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Gestiondelascompetenciasclaves2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "STar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '170px', '81px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-764px', '-365px', '1700px', '810px', 'auto', 'auto'],
                            id: 'soportetecnologico2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/soportetecnologico.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid881",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${soportetecnologico2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "SDGDCar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '170px', '81px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            rect: ['-765px', '-364px', '1700px', '810px', 'auto', 'auto'],
                            id: 'Sistemadegestioncertificado2',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Sistemadegestioncertificado2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '170px', '81px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid883",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Sistemadegestioncertificado2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "GDPar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '210px', '88px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(189,189,189,1.00)']
                        },
                        {
                            rect: ['-942px', '-396px', '2095px', '880px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.1', '0.1']],
                            id: 'Gestiondeproyectos',
                            opacity: 0,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Gestiondeproyectos.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '210px', '88px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid856",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Gestiondeproyectos}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "btnpes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '201px', '37px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(149,193,31,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text2',
                            text: 'Perspectiva Financiera',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(40,90,163,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '201px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "perscl": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '201px', '37px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(149,193,31,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text2Copy3',
                            text: 'Perspectiva del Cliente',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(40,90,163,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '201px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "check": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.1', '0.1', 1], ['50%', '50%']],
                            rect: [-98, -77, 320, 258, 'auto', 'auto'],
                            id: 'checkicon2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/checkicon.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 128, 103]
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid612",
                            "top",
                            0,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '-77px',
                            '-465px'
                        ],
                        [
                            "eid623",
                            "top",
                            750,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '-465px',
                            '-77px'
                        ],
                        [
                            "eid618",
                            "width",
                            0,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '320px',
                            '1280px'
                        ],
                        [
                            "eid627",
                            "width",
                            750,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '1280px',
                            '320px'
                        ],
                        [
                            "eid616",
                            "left",
                            0,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '-98px',
                            '-576px'
                        ],
                        [
                            "eid626",
                            "left",
                            750,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '-576px',
                            '-98px'
                        ],
                        [
                            "eid614",
                            "height",
                            0,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '258px',
                            '1032px'
                        ],
                        [
                            "eid624",
                            "height",
                            750,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '1032px',
                            '258px'
                        ],
                        [
                            "eid604",
                            "opacity",
                            0,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid625",
                            "opacity",
                            750,
                            500,
                            "easeOutElastic",
                            "${checkicon2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-8491404");

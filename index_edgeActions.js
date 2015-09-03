/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchstart", function(sym, e) {
         for (i=0;i<item.length;i++){	
         	sym.$(item[i]).addClass('C'+i);
         	sym.$('.C'+i).draggable({
         	revert: 'invalid'		
         });
         	sym.$(baskets[i]).droppable({
         		accept:'.C'+i,   // use class for accept
         		drop: handleDropEvent
         	});
         
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
         	load: "js/lightbox/themes/minimalist/jquery.lightbox.css",
         		complete: function() {
         		}});
         // Ocultar un elemento 
         sym.$("S").hide();
         sym.$("D").hide();
         sym.$("GCDSCRS").hide();
         sym.$("ES").hide();
         sym.$("C").hide();
         sym.$("GDP").hide();
         sym.$("EO").hide();
         sym.$("RO").hide();
         sym.$("GDCC").hide();
         sym.$("ST").hide();
         sym.$("SDGDC").hide();
         
         
         // make an array of the draggable symbol names
         var item = ['MRS','MNV','CDT','S','D','GCDSCRS','ES','C','GDP','EO','RO','GDCC','ST','SDGDC'];
         // make an array of the droppable element names
         var baskets = ['MRSar','MNVar','CDTar','Sar','Dar','GCDSCRSar','ESar','Car','GDPar','EOar','ROar','GDCCar','STar','SDGDCar'];
         // have only the first element be draggable
         
         // set up the droppable to accept each draggables
         for (i=0;i<item.length;i++){	
         	sym.$(item[i]).addClass('C'+i);
         	sym.$('.C'+i).draggable({
         	revert: 'invalid'		
         });
         	sym.$(baskets[i]).droppable({
         		accept:'.C'+i,   // use class for accept
         		drop: handleDropEvent
         	});
         
         }
         
         var k=0;
         
         function handleDropEvent(event, ui){		
             ui.draggable.draggable( 'disable' );
             $(this).droppable( 'disable' );
             // place draggable where needed. could be left, top
            // ui.draggable.position( { of: $(this), my: 'left', at: 'top' } );
             ui.draggable.position( { of: $(this), my: 'center', at: 'middle' } );
             ui.draggable.draggable( 'option', 'revert', false );
             sym.getSymbol("check").play();
             k++;
             if (k==3){
         		for (i=0; i<item.length;i++){
         		sym.getSymbol(item[i]).play();
         		sym.getSymbol("MRSar").play();
         		sym.getSymbol("MNVar").play();
         		sym.getSymbol("CDTar").play();
         				// Mostrar un elemento 
         		sym.$("S").show();
         				// Mostrar un elemento 
         		sym.$("D").show();
         		}
         sym.play();
         
             }
                if (k==5){
         		for (i=0; i<item.length;i++){
         		sym.getSymbol(item[i]).play();
         		sym.getSymbol("Sar").play();
         		sym.getSymbol("Dar").play();
         				// Mostrar un elemento 
         		sym.$("GCDSCRS").show();
         				// Mostrar un elemento 
         		sym.$("ES").show();
         		sym.$("C").show();
         		sym.$("GDP").show();
         		}
         		sym.play();
             }
                    if (k==9){
         		for (i=0; i<item.length;i++){
         		sym.getSymbol(item[i]).play();
         		sym.getSymbol("GCDSCRSar").play();
         		sym.getSymbol("ESar").play();
         		sym.getSymbol("Car").play();
         		sym.getSymbol("GDPar").play();
         				// Mostrar un elemento 
         		sym.$("EO").show();
         				// Mostrar un elemento 
         		sym.$("RO").show();
         		}
         		sym.play();
             }
                if (k==11){
         		for (i=0; i<item.length;i++){
         		sym.getSymbol(item[i]).play();
         		sym.getSymbol("EOar").play();
         		sym.getSymbol("ROar").play();
         				// Mostrar un elemento 
         		sym.$("GDCC").show();
         		sym.$("ST").show();
         		sym.$("SDGDC").show();
         		}
         		sym.play();
             }
                    if (k==14){
         		for (i=0; i<item.length;i++){
         		sym.getSymbol(item[i]).play();
         		sym.getSymbol("GDCCar").play();
         		sym.getSymbol("STar").play();
         		sym.getSymbol("SDGDCar").play();
         		}
         		sym.play();
             }
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-10.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-11.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy5}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-07.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy2}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-09.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy3}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-12.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy4}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-08.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy6}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-04.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy7}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-05.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${EllipseCopy8}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-06.png");return false;};

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btnpes}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-02.png");return false;};

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${perscl}", "click", function(sym, e) {
         {$.lightbox("images/inFundacion-03.png");return false;};

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mrs'
   (function(symbolName) {   
   
   })("mrs");
   //Edge symbol end:'mrs'

   //=========================================================
   
   //Edge symbol: 'MNV'
   (function(symbolName) {   
   
   })("MNV");
   //Edge symbol end:'MNV'

   //=========================================================
   
   //Edge symbol: 'CDT'
   (function(symbolName) {   
   
   })("CDT");
   //Edge symbol end:'CDT'

   //=========================================================
   
   //Edge symbol: 'S'
   (function(symbolName) {   
   
   })("S");
   //Edge symbol end:'S'

   //=========================================================
   
   //Edge symbol: 'D'
   (function(symbolName) {   
   
   })("D");
   //Edge symbol end:'D'

   //=========================================================
   
   //Edge symbol: 'GCDSCRS'
   (function(symbolName) {   
   
   })("GCDSCRS");
   //Edge symbol end:'GCDSCRS'

   //=========================================================
   
   //Edge symbol: 'ES'
   (function(symbolName) {   
   
   })("ES");
   //Edge symbol end:'ES'

   //=========================================================
   
   //Edge symbol: 'C'
   (function(symbolName) {   
   
   })("C");
   //Edge symbol end:'C'

   //=========================================================
   
   //Edge symbol: 'GDP'
   (function(symbolName) {   
   
   })("GDP");
   //Edge symbol end:'GDP'

   //=========================================================
   
   //Edge symbol: 'EO'
   (function(symbolName) {   
   
   })("EO");
   //Edge symbol end:'EO'

   //=========================================================
   
   //Edge symbol: 'RO'
   (function(symbolName) {   
   
   })("RO");
   //Edge symbol end:'RO'

   //=========================================================
   
   //Edge symbol: 'GDCC'
   (function(symbolName) {   
   
   })("GDCC");
   //Edge symbol end:'GDCC'

   //=========================================================
   
   //Edge symbol: 'ST'
   (function(symbolName) {   
   
   })("ST");
   //Edge symbol end:'ST'

   //=========================================================
   
   //Edge symbol: 'SDGDC'
   (function(symbolName) {   
   
   })("SDGDC");
   //Edge symbol end:'SDGDC'

   //=========================================================
   
   //Edge symbol: 'MRSar'
   (function(symbolName) {   
   
   })("MRSar");
   //Edge symbol end:'MRSar'

   //=========================================================
   
   //Edge symbol: 'MNVar'
   (function(symbolName) {   
   
   })("CDTar");
   //Edge symbol end:'CDTar'

   //=========================================================
   
   //Edge symbol: 'Sar'
   (function(symbolName) {   
   
   })("Sar");
   //Edge symbol end:'Sar'

   //=========================================================
   
   //Edge symbol: 'MNVar'
   (function(symbolName) {   
   
   })("MNVar");
   //Edge symbol end:'MNVar'

   //=========================================================
   
   //Edge symbol: 'Dar'
   (function(symbolName) {   
   
   })("Dar");
   //Edge symbol end:'Dar'

   //=========================================================
   
   //Edge symbol: 'GCDSCRSar'
   (function(symbolName) {   
   
   })("GCDSCRSar");
   //Edge symbol end:'GCDSCRSar'

   //=========================================================
   
   //Edge symbol: 'ESar'
   (function(symbolName) {   
   
   })("ESar");
   //Edge symbol end:'ESar'

   //=========================================================
   
   //Edge symbol: 'Car'
   (function(symbolName) {   
   
   })("Car");
   //Edge symbol end:'Car'

   //=========================================================
   
   //Edge symbol: 'EOaR'
   (function(symbolName) {   
   
   })("EOar");
   //Edge symbol end:'EOar'

   //=========================================================
   
   //Edge symbol: 'ROar'
   (function(symbolName) {   
   
   })("ROar");
   //Edge symbol end:'ROar'

   //=========================================================
   
   //Edge symbol: 'GDCCar'
   (function(symbolName) {   
   
   })("GDCCar");
   //Edge symbol end:'GDCCar'

   //=========================================================
   
   //Edge symbol: 'STar'
   (function(symbolName) {   
   
   })("STar");
   //Edge symbol end:'STar'

   //=========================================================
   
   //Edge symbol: 'SDGDCar'
   (function(symbolName) {   
   
   })("SDGDCar");
   //Edge symbol end:'SDGDCar'

   //=========================================================
   
   //Edge symbol: 'GDPar'
   (function(symbolName) {   
   
   })("GDPar");
   //Edge symbol end:'GDPar'

   //=========================================================
   
   //Edge symbol: 'btnpes'
   (function(symbolName) {   
   
   })("btnpes");
   //Edge symbol end:'btnpes'

   //=========================================================
   
   //Edge symbol: 'perscl'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Text2Copy3}", "click", function(sym, e) {
         var config = {
             width: 950,
             height: 456,
             type: "animate",
             source: "mapas/indicadorfun8/indicadorfun8.html"
         };        
         
         // Open the overlay
         EC.Spotlight.open( config );
         

      });
      //Edge binding end

   })("perscl");
   //Edge symbol end:'perscl'

   //=========================================================
   
   //Edge symbol: 'check'
   (function(symbolName) {   
   
   })("check");
   //Edge symbol end:'check'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-8491404");
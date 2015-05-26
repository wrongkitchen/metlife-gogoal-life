/**
*   Main Configuration
*/

'use strict';
require.config({ baseUrl: '/scripts' });
// Initialize the application.
require(['class/SectionBase', 'class/SectionManager', 'class/CommonObject', 'class/InstagramBar'], 
    function(SB, SM, CO, IB){

	var _co = CO;
    window.metlife = _co;

    _co.sectionManager = new SM({
        sections: { 
            landing        	: new SB({ el: $('#landing') }),
            form   			: new SB({ el: $('#form') }),
            thankyou   		: new SB({ el: $('#thankyou') })
        },
        activeSectionName: 'landing'
    });

    _co.instagram = new IB();

});

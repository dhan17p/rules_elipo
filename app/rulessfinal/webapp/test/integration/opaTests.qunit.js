sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'rulessfinal/test/integration/FirstJourney',
		'rulessfinal/test/integration/pages/mainList',
		'rulessfinal/test/integration/pages/mainObjectPage'
    ],
    function(JourneyRunner, opaJourney, mainList, mainObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('rulessfinal') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemainList: mainList,
					onThemainObjectPage: mainObjectPage
                }
            },
            opaJourney.run
        );
    }
);
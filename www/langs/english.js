//english text
//The object keys are the names of the html element they correspond to. This is just to help show how  they line up.
//Changing these will not change the element but it will break things
var constants = {
	defaultPanel: {
		li1: "Settings",
		li2: "About",
		li3: "How It Works",
		a: "Close",
	},
	defaultHeader: {
		h1: "Smell MyCity",
		a: "More",
	},
	defaultFooter: {
		li1: "Report",
		li2: "Map",
	}
}

var english = {
	home: {
		firstModal: {
			a1: "Close",
			h1: "Submitting Smell Reports",
			li1: "Rate the odor on a scale of 1-5",
			li2: "Describe the smell, source of odor and any symptoms (recommended",
			li3: "Write a personal note to the health department (optional)",
			li4: "Endorse your reports - see Settings (recommended)",
			a2: "OK",
		},
		perditionModal: {//??
			a1:"Close",
			h1:"Smell Event Predictions",
			p:"We are currently testing a smell prediction model that can alert Pittsburgh residents about a potential smell event in the area. The predictions' accuracy should improve as we receive more smell reports to verify our algorithm. We hope these notifications are useful to you!",
			a2:"OK",
		},
		panel: constants.defaultPanel,
		header: constants.defaultHeader,
		rating: {
			h3: "How does your air smell right now in <span class='your-city'>your city</span>?",
			input1: " 1 Just fine!",
			input2: " 2 Barely noticeable",
			input3: " 3 Definitely noticeable",
			input4: " 4 It's getting pretty bad",
			input5: " 5 About as bad as it gets!",
		},
		describe: {
			label: "Describe the smell or source of odor",
			placeholder: "e.g. industrial, woodsmoke, rotten-eggs",
		},
		symptoms: {
			label: "Any symptoms linked to the odor?",
			placeholder: "e.g. headache, sore throat, eye irritation",
		},
		note: {
			label: "Add a personal note to the health department",
			placeholder: "e.g. if you submit more than one report in the same day",
		},
		custom: {
			label1: "Report Current Time/Location",
			label2: "Uncheck this box to manually select a time and location for the smell report.",
			label3: "Report Location",
			button: "Current Location (default)",
			label4: "Report Time",
			option: "Now",
		},
		disclaimer: "NOTE: Please only enter information that you are comfortable with sharing anonymously on the public Smell MyCity map.",
		button: "Send Smell Report",
		footer: constants.defaultFooter
	},
	map: {
		modal: {
			a1: "Close",
			h1: "Using The Map",
			li1: "This map shows smell reports from all across the US, including the city your currently in",
			li2: "We offset smell report locations to protect your privacy",
			li3: "Scroll through the timeline to view reports from any day",
			li4: "Dates highlighted with a darker color indicate avg. rating of smell reports",
			li5: "Click on a smell report (triangle) or monitoring station (circle) to view more details",
			a2: "OK",
		},
		newCity: {
			h3: "Welcome to <span class='your-city'>your city</span>",
			p: "current AQI is: <span class='aqi'>unknown</span>",
		},
		panel: constants.defaultPanel,
		header: constants.defaultHeader,
		p_iframe: "Your browser does not support iframes.",
		footer: constants.defaultFooter,
	},
	settings: {
		panel: constants.defaultPanel,
		header: {
			h1: "Settings",
			a: constants.defaultHeader.a,
		},
		contact: {
			h3: "Contact Information",
      label: "These fields are optional - personal information is only shared with relevant local regulatory agencies that are connected with the Smell MyCity app. Signing your name on smell reports to the local health department or relevant regulatory agency provides more authenticity to the report, and enables that agency to follow up with you if necessary.",
			placeholder1: "name (recommended)",
			placeholder2: "email (recommended)",
			placeholder3: "mailing address",
			placeholder4: "phone number",
		},
		notification: {
			h3: "Notifications",
			label1: "Activate smell and air quality notifications that are important to you",
			label2: "Smell Event Alerts",
			label3: "(notifications about a potential smell event in the next 4-8 hours)",
			label4: "Air Quality Index Changes",
			label5: "(notifications about pgh air quality conditions)",//???
		},
		lang: {
			h3: "Language",
			label: "Select your prefered language",
			l0: Constants.LANGUAGES[0],
			l1: Constants.LANGUAGES[1],
		},
		footer: constants.defaultFooter,
	},
	startup: {
		header: constants.defaultHeader,
		h3: "Welcome to Smell MyCity!",
		p1: "Thank you for installing the Smell MyCity App!",
    p2: "Smell MyCity is powered by the CMU CREATE Lab and Seventh Generation. It is designed to track pollution odors across our cities. If you detect a foul odor while you're outside, please report it through this app.",
    p3: "We are also taking steps to make Smell MyCity reports available to local regulatory agencies.",
		footer: "Continue",
		lang: {
			h3: "Language",
			label: "Select your prefered language",
			l0: Constants.LANGUAGES[0],
			l1: Constants.LANGUAGES[1],
		},
	},
	about: {
		panel: constants.defaultPanel,
		header: {
			h1: "About",
			a: constants.defaultHeader.a,
		},
		h2: "About Smell MyCity",
    p1: "Air quality is usually invisible to us; however, air pollution can have very real, long term impacts on our health and quality of life. Foul odors outside are typically symptoms of a serious pollution problem in our region. We, our children, our friends and families all breathe in this air. If our air smells toxic, then we are likely inhaling toxins.",
    p2: "The Smell MyCity app was designed to crowdsource smell reports so we can track how pollutants travel through our air across our cities. All odor complaints submitted through the app are visible on our map, and smell report data are publicly available through our website. The map view displays smell reports submitted in the area on a given date. This allows residents to track where odors are frequently concentrated, and link those smell events to poor air quality in, or upwind from, those areas. In addition, we are working toward building partnerships with communities across the country to ensure local smell report data are made available to local regulatory agencies, so they can better monitor and act on these complaints.",
    center: "-- Smell -- Submit -- Share --",
    p3: "Smell MyCity was developed by the CMU CREATE Lab, as an extension of their Smell Pittsburgh (Smell PGH) app, which was deployed in 2016 and privileges citizens' concerns about local air pollution issues. Smell PGH has activated local residents, and provided the local health department with a higher resolution of pollution data to help track down potential sources. Given the successful implementation of this smell reporting app in Pittsburgh, the CREATE Lab developed the Smell MyCity app to bring this technology to residents across the U.S. Smell MyCity will be first piloted in Louisville, KY and Portland, OR, in collaboration with local advocacy and community groups. However, the app is available for anyone to use, anywhere in the U.S. The goal of these targeted pilots is to help shape the Smell MyCity app into a more useful tool for communities across the country.",
    p4: "Smell MyCity is supported by Seventh Generation, which is committed to <a href='https://www.seventhgeneration.com/action/climate-justice-equity' target='_blank'>Climate Justice & Equity</a> for the next seven generations. Their efforts on the <a href='https://www.sierraclub.org/ready-for-100' target='_blank'>Ready for 100 Campaign</a> are inspiring cities across the country to switch to 100% renewable energy, to help reduce negative health effects caused by burning fossil fuels. Powered by Seventh Generation's vision and leadership, the Smell MyCity app will be made available to residents across the country, so that we all have an opportunity to join a larger, nation-wide community of citizens actively documenting the human impacts of air pollution.",
    h3_1: "About the CREATE Lab",
    p5: "The Community Robotics, Education and Technology Empowerment Lab (CREATE Lab) at Carnegie Mellon University, explores socially meaningful innovation and deployment of robotic technologies. CREATE is both a technology innovator and a community partner; this unique combination enables the creation of community-based technologies that help empower citizens to realize their vision for a better quality of life.",
    link1: {
      p: "Learn more about the CREATE Lab",
      url: "https://cmucreatelab.org",
    },
    h3_2: "About Seventh Generation",
    p6: "For the past 30 years, Seventh Generation has been standing up for what they believe, and using their voice to advocate for the rights of people and the planet. They believe that a company's values are as important as the products it makes. Seventh Generation knows that plant-based products can provide the efficacy you are looking for, and that products designed from renewable plant-based ingredients are a more sustainable option than ingredients made from petroleum. Above all, they believe that we have a responsibility to this generation and the next seven, and invite us all on their journey to nurture the health of the next seven generations.",
    link2: {
      p: "Learn more about Seventh Generation",
      url: "https://www.seventhgeneration.com",
    },
    h3_3: "About Our Local Partners",
    p7: "Our Louisville pilot is made possible with support from The Envirome Institute at the University of Louisville, and in partnership with:",
    li1: "The West Jefferson County Community Task Force",
    li2: "REACT (Rubbertown Emergency ACTion)",
    p8: "In addition, all smell reports originating from Louisville will be sent to the Louisville Metro Air Pollution Control District (APCD).",
    p9: "Our Portland pilot is made possible with support from the Canary Fund, and in partnership with:",
    li3: "Portland Clean Air",
    li4: "Neighbors for Clean Air",
    li5: "Hayden Island Neighborhood Network",
    li6: "Oregon Environmental Council",
    li7: "Ecotrust",
    version: "version: ###",
		footer: constants.defaultFooter,
	},
	howitworks: {
		panel: constants.defaultPanel,
		header: {
			h1: "How It Works",
			a: constants.defaultHeader.a,
		},
		h2: "How It Works",
    p1: "We take every precaution to protect any personally identifiable data. All information shown on the public map visualization for Smell MyCity is anonymous and location data is skewed to protect your privacy. Personal contact information you enter in the settings tab is only made available to the local health department or relevant regulatory agency. Our backend database only contains anonymous User ID's created by your app service (Apple or Google Play).",
		p2: "The basic function of the Smell MyCity app is as follows:",
		li1: "When you experience a pollution odor outdoors, you launch the app and pick a rating for the smell you experience (from 1 through 5)",
		li2: "Adding a description of the smell (e.g. \"Industrial\", \"Woodsmoke\", etc.) is highly encouraged, since this can help the county isolate the source",
		li3: "You also have the option to (but are not required to):",
		li4: "List any symptoms attributable to the experience",
		li5: "Send a personal note/question to the local regulatory agency",
		li6: "NOTE: Please only enter information that you are comfortable with sharing anonymously on the public Smell MyCity map",
    li7: "Once you hit 'Send Smell Report', your report will show up on the public Smell MyCity map along with any other smell reports from that day",
    li8: "A triangle icon that's the color of your smell rating represents your report",
    li9: "Your location is obscured on the map by slightly shifting the coordinates to protect your privacy",
    li10: "Tapping your smell report icon will show the details of your report, including the: date, time, rating, description (if provided) and symptoms (if provided)",
    li11: "No personally identifiable information is shown on the map",
    li12: "If you are in a location where the local health department or regulatory agency is connected with the app, they will receive information about your report in an email format that includes:",
    li13: "The location of the smell (based on the GPS location of your phone)",
    li14: "Date and Time of smell",
    li15: "Rating and description (if provided) of smell",
    li16: "Any symptoms associated with report (if provided)",
		footer: constants.defaultFooter,
	}
}

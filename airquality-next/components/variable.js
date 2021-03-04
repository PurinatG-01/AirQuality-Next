

export const THEME = {
    primary: "#fefefe",
    secondary: "#333333",
    fontFam: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxShadow: `-webkit-box-shadow: 0px 10px 21px -1px rgba(51,51,51,0.3);
    -moz-box-shadow: 0px 10px 21px -1px rgba(51,51,51,0.3);
    box-shadow: 0px 10px 21px -1px rgba(51,51,51,0.3);`,
    dividerColor: "rgba(0, 0, 0, 0.12)",
    red: "#BB4D4D",
    yellow: "#FF8800",
    green: "#D0E883",
}


export const THEME2 = {

    primary: "#6FCF97",
    secondary: "#3B8686",
    highlight: "#A8DBA8",
    shade1: "#80E4AA",
    base: "#0B486B",
    black: "#3F3F3F",
    white: "#FEFEFE",
    transColor: "rgba(111,207,151,0.2)",
    red: "#BB4D4D",
    yellow: "#F0C34E",
    fontFam: "'Roboto', sans-serif",
    boxShadow: `-webkit-box-shadow: 0px 10px 21px -1px rgba(51,51,51,0.3);
    -moz-box-shadow: 0px 10px 21px -1px rgba(51,51,51,0.3);
    box-shadow: 0px 10px 21px -1px rgba(51,51,51,0.3);`,
    boxShadowVal: `0px 10px 21px -1px rgba(51,51,51,0.3)`,
    dividerColor: "#e1e1e1",
    breakpointM: "1024",
    breakpointL: "1440",
    factors:{
        co: "#3F3F3F",
        temp: "#2E516A",
        humidity: "#A7F5C8",
        pressure: "#534062",
        voc: "#F0C34E",
        pm: "#888888",
    }

}

export const INFO = {
    factors: [{
        // CO : Finished v1
        title: "CO",
        description: "Carbon monoxide is one type of gas that is emitted by all forms of combustion. Generally, carbon monoxide is odorless, colorless, and tasteless. CO is released when most of the fuels or carbon materials are burned. CO comes from both indoor and outdoor sources that people or places that are not properly maintained or ventilated",
        body: ["Common sources of CO : Motor vehicles, Wood stoves and fireplaces, Outdoor burning, Industrial combustion", 
        "Inhaling CO gas into their body can lead to headaches, dizziness, and nausea. In cases where CO levels are high, it can cause humans to lose consciousness or even die. Moreover, prolonged exposure to moderate and high CO gas leads to an increased risk of heart disease, and people who survive severe CO poisoning may suffer from long-term health problems ",  
    "Suggestion : Install and use an exhaust fan that ventilates outside the gas stove, Avoid using fuel heaters that are not in use.",
    "How to Prevent CO Poisoning at Home : \n Appliances that burn home fuel (Central heating, water heaters, etc.) should be checked once a year by a specialist.\n People inside the building should avoid using appliances, such as charcoal grills or electric generators, that are not designed for indoor use. Especially electrical appliances that are prohibited in the building. However, this one can’t be emphasized enough, but it is never worth the risk.\nAvoid starting the car before opening the garage door. This is especially the home has the garage is attached to other parts of the house. This is because the car's engines emit large amounts of carbon monoxide in the cold (Even if it decreases after warming up)."
]
    }, {
        // Temperature : Finished v1
        title: "Temperature",
        description: "Temperature is the manifestation of thermal energy. It is a physical quantity that expresses hot and cold. Mostly, temperature is measured with a thermometer which is calibrated in various temperature scales. The most common unit use is centigrade as a SI unit (denoted as °C), the Fahrenheit scale (denoted as °F), and the Kelvin scale (denoted as K).",
        body: ["For the appropriate rang room temperature is generally accepted to be between 20 to 24 Celsius. The lowest temperature is absolute zero. Temperature is important in all fields of natural science, physics, chemistry, astronomy, medicine, and others.", 
        "If air temperature increases, air can hold more water molecules because of relative humidity decrease. When temperature drops, relative humidity increases. ", 
        "Therefore, temperature and humidity affect people on their comfort levels. When high humidity and temperature means more water in the air. Then it can carry odor molecules according to the bacteria. ",]
    }, {
        title: "Humidity",
        description: "Humidity is a measure of the amount of water vapor in the air. If in the air has a lot of water vapor that means the humidity is high. The higher the humidity , the lower the temperature. It is the natural part of our atmosphere.",
        body: ["Humidity is important because it relation to temperature. Therefore, both of them affect to comfort of human body, especially as we spend 90% of our time indoors",]
    }, {
        title: "Pressure",
        description: "co is one of the most important factor for air quality in home co is one of the most important factor for air quality in home co is one of the most important factor for air quality in home co is one of the most important factor for air quality in home co is one of the most important factor for air quality in home co is one of the most important factor for air quality in home",
        body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
    }, {
        title: "VOC",
        description: "",
        body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
    }, {
        // PM : Finished v1
        title: "PM",
        description: "PM stands for particulate matter or particle pollution. For the PM 2.5 is the particles smaller than 2.5 microns, or approximately one 25th the diameter of a human hair. Particulate matter is a mixture of solid particles and liquid droplets that are found in the air. It can’t see in the air but can only be detected by using an electron microscope. PM 10 is a dust with a diameter up to 10 microns. There are many different sources, different sizes and shapes. This may depend on the chemical compound and the nature of the reaction",
        body: ["PM 2.5 is the main cause of reduced visibility in the city. It can cause several health problems. Include respiratory system such as stinging, stuffy nose, cough, recurrent allergies. In addition dermal system and Long-term exposure can cause inflammation of the cells in the body. Increased risk of heart failure and is can cause lung cancer.",
         "PM 10 is a particle that is small enough to get into the throat and lungs. effect of inhalation of small dust particles into the respiratory system consists of premature deaths, cancer, developmental effects, hospitalization, and asthma attacks and bronchitis. ",
          "Suggestion : Use an air purifier to make your house air free from PM 2.5. Always keep your house clean, Reducing the use of private cars is equal to reducing the increase of dust in the air, Planting trees to reduce toxicity Choose a plant with rough and hairy leaves because that type of leaves are highly effective in dust trapping, Check the car condition regularly and turn off the engine when parking the car every time. To reduce the smoke from the exhaust pipe that causes pm 2.5. If you want to build a building, renovate or repair your home, you should select the dust reduction product, Do not burn garbage or stop burning incense because the smoke from burning produces toxic dust. ",]
    }
],
    hardware: [{
        title: "Micro Controller",
        description: "co is one of the most important factor for air quality in home",
        body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
    }, {
        title: "Sensors",
        description: "co is one of the most important factor for air quality in home",
        body: ["this is paragraph 1", "this is paragraph 2", "this is paragraph 3",]
    },
], 
}
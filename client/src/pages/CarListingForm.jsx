import { useState, useEffect } from 'react';
import Select from 'react-select';
import BookingHeader from '../components/BookingHeader';
import '../styles/CarListingForm.css';
import { useNavigate } from 'react-router-dom';

const CarListingForm = () => {
  // Car models
  const carmodel = [
    { model: 'Audi A3' },
    { model: 'Audi A4' },
    { model: 'Audi Q5' },
    { model: 'BMW 320i' },
    { model: 'BMW 530i' },
    { model: 'BMW X5' },
    { model: 'Chevrolet Malibu' },
    { model: 'Chevrolet Tahoe' },
    { model: 'Chrysler Pacifica' },
    { model: 'Ford Mustang' },
    { model: 'Ford F-150' },
    { model: 'Ford Explorer' },
    { model: 'Honda Accord' },
    { model: 'Honda Civic' },
    { model: 'Honda CR-V' },
    { model: 'Hyundai Elantra' },
    { model: 'Hyundai Tucson' },
    { model: 'Jaguar F-Type' },
    { model: 'Jaguar XF' },
    { model: 'Jeep Cherokee' },
    { model: 'Jeep Grand Cherokee' },
    { model: 'Kia Optima' },
    { model: 'Kia Sorento' },
    { model: 'Lexus RX 350' },
    { model: 'Lexus ES 350' },
    { model: 'Mazda CX-5' },
    { model: 'Mazda 3' },
    { model: 'Mercedes-Benz C-Class' },
    { model: 'Mercedes-Benz E-Class' },
    { model: 'Mercedes-Benz GLC' },
    { model: 'Nissan Altima' },
    { model: 'Nissan Rogue' },
    { model: 'Nissan Sentra' },
    { model: 'Porsche 911' },
    { model: 'Porsche Cayenne' },
    { model: 'Subaru Outback' },
    { model: 'Subaru Forester' },
    { model: 'Tesla Model 3' },
    { model: 'Tesla Model S' },
    { model: 'Toyota Camry' },
    { model: 'Toyota Corolla' },
    { model: 'Toyota Highlander' },
    { model: 'Volkswagen Golf' },
    { model: 'Volkswagen Passat' },
    { model: 'Volkswagen Tiguan' },
    { model: 'Volvo XC90' },
    { model: 'Volvo S60' }
  ];

  // Car Year
  const caryear = [
    { year: '2024' },
    { year: '2023' },
    { year: '2022' },
    { year: '2021' },
    { year: '2020' },
    { year: '2019' },
    { year: '2018' },
    { year: '2017' },
    { year: '2016' },
    { year: '2015' },
    { year: '2014' },
    { year: '2013' },
    { year: '2012' },
    { year: '2011' },
    { year: '2010' },
    { year: '2009' },
    { year: '2008' },
    { year: '2007' },
    { year: '2006' },
    { year: '2005' },
    { year: '2004' },
    { year: '2003' },
    { year: '2002' },
    { year: '2001' },
    { year: '2000' }
  ];

  // Car Type
  const cartype = [
    { type: 'Sedan' },
    { type: 'SUV' },
    { type: 'Hatchback' },
    { type: 'Coupe' },
    { type: 'Convertible' },
    { type: 'Wagon' },
    { type: 'Pickup Truck' },
    { type: 'Van' },
    { type: 'Crossover' },
    { type: 'Sports Car' },
    { type: 'Luxury Car' },
    { type: 'Electric Car' },
    { type: 'Hybrid Car' },
    { type: 'Minivan' },
    { type: 'Roadster' },
    { type: 'Muscle Car' },
    { type: '4x4' },
    { type: 'Off-road Vehicle' }
  ];

  // Car Availability days
  const availDays = [
    { day: '1' }, // Monday
    { day: '2' }, // Tuesday
    { day: '3' }, // Wednesday
    { day: '4' }, // Thursday
    { day: '5' }, // Friday
    { day: '6' }, // Saturday
    { day: '7' }  // Sunday
  ];

  // Car Availability Hours
  const availHours = [
    { hour: '1' },
    { hour: '2' },
    { hour: '3' },
    { hour: '4' },
    { hour: '5' },
    { hour: '6' },
    { hour: '7' },
    { hour: '8' },
    { hour: '9' },
    { hour: '10' },
    { hour: '11' },
    { hour: '12' },
    { hour: '13' },
    { hour: '14' },
    { hour: '15' },
    { hour: '16' },
    { hour: '17' },
    { hour: '18' },
    { hour: '19' },
    { hour: '20' },
    { hour: '21' },
    { hour: '22' },
    { hour: '23' },
    { hour: '24' }
  ];

  // Car seats
  const carSeats = [
    { seats: '2' },
    { seats: '3' },
    { seats: '4' },
    { seats: '5' },
    { seats: '6' },
    { seats: '7' }
  ];

  // Fuel type
  const fuelType = [
    { type: 'Petrol' },
    { type: 'Diesel' },
    { type: 'Electric' },
    { type: 'Hybrid' },
    { type: 'CNG' },
    { type: 'LPG' },
    { type: 'E85' }
  ];

  // Transmission Type
  const transmissionType = [
    { type: 'Manual' },
    { type: 'Automatic' },
    { type: 'CVT' },
    { type: 'Dual-clutch' },
    { type: 'Semi-automatic' }
  ];

  // More Features
  const moreFeatures = [
    { value: 'Air Conditioning', label: 'Air Conditioning' },
    { value: 'Apple CarPlay', label: 'Apple CarPlay' },
    { value: 'Android Auto', label: 'Android Auto' },
    { value: 'Bluetooth', label: 'Bluetooth' },
    { value: 'Navigation System', label: 'Navigation System' },
    { value: 'Leather Seats', label: 'Leather Seats' },
    { value: 'Sunroof', label: 'Sunroof' },
    { value: 'Heated Seats', label: 'Heated Seats' },
    { value: 'Parking Sensors', label: 'Parking Sensors' },
    { value: 'Rearview Camera', label: 'Rearview Camera' },
    { value: 'Blind Spot Monitoring', label: 'Blind Spot Monitoring' },
    { value: 'Cruise Control', label: 'Cruise Control' },
    { value: 'Lane Departure Warning', label: 'Lane Departure Warning' },
    { value: 'Heated Steering Wheel', label: 'Heated Steering Wheel' },
    { value: 'Keyless Entry', label: 'Keyless Entry' },
    { value: 'Remote Start', label: 'Remote Start' },
    { value: 'Push Button Start', label: 'Push Button Start' },
    { value: 'All-Wheel Drive', label: 'All-Wheel Drive' },
    { value: 'Bluetooth Audio', label: 'Bluetooth Audio' },
    { value: 'USB Ports', label: 'USB Ports' },
    { value: 'Wireless Charging', label: 'Wireless Charging' },
    { value: 'Tire Pressure Monitoring', label: 'Tire Pressure Monitoring' },
    { value: 'Power Windows', label: 'Power Windows' },
    { value: 'Power Mirrors', label: 'Power Mirrors' },
    { value: 'Fog Lights', label: 'Fog Lights' },
  ];

      //country
      const country = [
        { name: "Afghanistan" },
        { name: "Albania" },
        { name: "Algeria" },
        { name: "Andorra" },
        { name: "Angola" },
        { name: "Antigua and Barbuda" },
        { name: "Argentina" },
        { name: "Armenia" },
        { name: "Australia" },
        { name: "Austria" },
        { name: "Azerbaijan" },
        { name: "Bahamas" },
        { name: "Bahrain" },
        { name: "Bangladesh" },
        { name: "Barbados" },
        { name: "Belarus" },
        { name: "Belgium" },
        { name: "Belize" },
        { name: "Benin" },
        { name: "Bhutan" },
        { name: "Bolivia" },
        { name: "Bosnia and Herzegovina" },
        { name: "Botswana" },
        { name: "Brazil" },
        { name: "Brunei" },
        { name: "Bulgaria" },
        { name: "Burkina Faso" },
        { name: "Burundi" },
        { name: "Cambodia" },
        { name: "Cameroon" },
        { name: "Canada" },
        { name: "Cape Verde" },
        { name: "Central African Republic" },
        { name: "Chad" },
        { name: "Chile" },
        { name: "China" },
        { name: "Colombia" },
        { name: "Comoros" },
        { name: "Congo (Brazzaville)" },
        { name: "Congo (Kinshasa)" },
        { name: "Costa Rica" },
        { name: "Croatia" },
        { name: "Cuba" },
        { name: "Cyprus" },
        { name: "Czech Republic" },
        { name: "Denmark" },
        { name: "Djibouti" },
        { name: "Dominica" },
        { name: "Dominican Republic" },
        { name: "Ecuador" },
        { name: "Egypt" },
        { name: "El Salvador" },
        { name: "Equatorial Guinea" },
        { name: "Eritrea" },
        { name: "Estonia" },
        { name: "Eswatini" },
        { name: "Ethiopia" },
        { name: "Fiji" },
        { name: "Finland" },
        { name: "France" },
        { name: "Gabon" },
        { name: "Gambia" },
        { name: "Georgia" },
        { name: "Germany" },
        { name: "Ghana" },
        { name: "Greece" },
        { name: "Grenada" },
        { name: "Guatemala" },
        { name: "Guinea" },
        { name: "Guinea-Bissau" },
        { name: "Guyana" },
        { name: "Haiti" },
        { name: "Honduras" },
        { name: "Hungary" },
        { name: "Iceland" },
        { name: "India" },
        { name: "Indonesia" },
        { name: "Iran" },
        { name: "Iraq" },
        { name: "Ireland" },
        { name: "Israel" },
        { name: "Italy" },
        { name: "Jamaica" },
        { name: "Japan" },
        { name: "Jordan" },
        { name: "Kazakhstan" },
        { name: "Kenya" },
        { name: "Kiribati" },
        { name: "Korea (North)" },
        { name: "Korea (South)" },
        { name: "Kuwait" },
        { name: "Kyrgyzstan" },
        { name: "Laos" },
        { name: "Latvia" },
        { name: "Lebanon" },
        { name: "Lesotho" },
        { name: "Liberia" },
        { name: "Libya" },
        { name: "Liechtenstein" },
        { name: "Lithuania" },
        { name: "Luxembourg" },
        { name: "Madagascar" },
        { name: "Malawi" },
        { name: "Malaysia" },
        { name: "Maldives" },
        { name: "Mali" },
        { name: "Malta" },
        { name: "Marshall Islands" },
        { name: "Mauritania" },
        { name: "Mauritius" },
        { name: "Mexico" },
        { name: "Micronesia" },
        { name: "Moldova" },
        { name: "Monaco" },
        { name: "Mongolia" },
        { name: "Montenegro" },
        { name: "Morocco" },
        { name: "Mozambique" },
        { name: "Myanmar" },
        { name: "Namibia" },
        { name: "Nauru" },
        { name: "Nepal" },
        { name: "Netherlands" },
        { name: "New Zealand" },
        { name: "Nicaragua" },
        { name: "Niger" },
        { name: "Nigeria" },
        { name: "North Macedonia" },
        { name: "Norway" },
        { name: "Oman" },
        { name: "Pakistan" },
        { name: "Palau" },
        { name: "Palestine" },
        { name: "Panama" },
        { name: "Papua New Guinea" },
        { name: "Paraguay" },
        { name: "Peru" },
        { name: "Philippines" },
        { name: "Poland" },
        { name: "Portugal" },
        { name: "Qatar" },
        { name: "Romania" },
        { name: "Russia" },
        { name: "Rwanda" },
        { name: "Saint Kitts and Nevis" },
        { name: "Saint Lucia" },
        { name: "Saint Vincent and the Grenadines" },
        { name: "Samoa" },
        { name: "San Marino" },
        { name: "Sao Tome and Principe" },
        { name: "Saudi Arabia" },
        { name: "Senegal" },
        { name: "Serbia" },
        { name: "Seychelles" },
        { name: "Sierra Leone" },
        { name: "Singapore" },
        { name: "Slovakia" },
        { name: "Slovenia" },
        { name: "Solomon Islands" },
        { name: "Somalia" },
        { name: "South Africa" },
        { name: "Spain" },
        { name: "Sri Lanka" },
        { name: "Sudan" },
        { name: "Suriname" },
        { name: "Sweden" },
        { name: "Switzerland" },
        { name: "Syria" },
        { name: "Taiwan" },
        { name: "Tajikistan" },
        { name: "Tanzania" },
        { name: "Thailand" },
        { name: "Timor-Leste" },
        { name: "Togo" },
        { name: "Tonga" },
        { name: "Trinidad and Tobago" },
        { name: "Tunisia" },
        { name: "Turkey" },
        { name: "Turkmenistan" },
        { name: "Tuvalu" },
        { name: "Uganda" },
        { name: "Ukraine" },
        { name: "United Arab Emirates" },
        { name: "United Kingdom" },
        { name: "United States" },
        { name: "Uruguay" },
        { name: "Uzbekistan" },
        { name: "Vanuatu" },
        { name: "Vatican City" },
        { name: "Venezuela" },
        { name: "Vietnam" },
        { name: "Yemen" },
        { name: "Zambia" },
        { name: "Zimbabwe" }
    ];

 //city
 const citiesByCountry = {
  "Afghanistan": ["Kabul", "Herat", "Mazar-i-Sharif", "Kandahar"],
  "Albania": ["Tirana", "Durrës", "Vlorë", "Shkodër"],
  "Algeria": ["Algiers", "Oran", "Constantine", "Annaba"],
  "Andorra": ["Andorra la Vella"],
  "Angola": ["Luanda", "Lobito", "Huambo", "Lubango"],
  "Antigua and Barbuda": ["Saint John's", "Jolly Harbour", "Freetown", "Liberta"],
  "Argentina": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
  "Armenia": ["Yerevan", "Gyumri", "Vanadzor", "Hrazdan"],
  "Australia": ["Canberra", "Sydney", "Melbourne", "Brisbane"],
  "Austria": ["Vienna", "Graz", "Linz", "Salzburg"],
  "Azerbaijan": ["Baku", "Ganja", "Sumqayit", "Mingachevir"],
  "Bahamas": ["Nassau", "Freeport", "West End", "Lucaya"],
  "Bahrain": ["Manama", "Muharraq", "Sitra", "Arad"],
  "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
  "Barbados": ["Bridgetown", "Holetown", "Speightstown", "Oistins"],
  "Belarus": ["Minsk", "Gomel", "Mogilev", "Vitebsk"],
  "Belgium": ["Brussels", "Antwerp", "Ghent", "Charleroi"],
  "Belize": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk"],
  "Benin": ["Porto-Novo", "Cotonou", "Parakou", "Abomey-Calavi"],
  "Bhutan": ["Thimphu", "Phuentsholing", "Punakha", "Paro"],
  "Bolivia": ["Sucre", "La Paz", "Santa Cruz de la Sierra", "Cochabamba"],
  "Bosnia and Herzegovina": ["Sarajevo", "Tuzla", "Banja Luka", "Zenica"],
  "Botswana": ["Gaborone", "Francistown", "Maun", "Serowe"],
  "Brazil": ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador"],
  "Brunei": ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong"],
  "Bulgaria": ["Sofia", "Plovdiv", "Varna", "Burgas"],
  "Burkina Faso": ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Kaya"],
  "Burundi": ["Bujumbura", "Gitega", "Ngozi", "Rutana"],
  "Cabo Verde": ["Praia", "Mindelo", "Santa Maria", "Sal Rei"],
  "Cambodia": ["Phnom Penh", "Siem Reap", "Sihanoukville", "Battambang"],
  "Cameroon": ["Yaoundé", "Douala", "Garoua", "Bafoussam"],
  "Canada": ["Ottawa", "Toronto", "Vancouver", "Montreal"],
  "Central African Republic": ["Bangui", "Bimbo", "Berberati", "Bossangoa"],
  "Chad": ["N'Djamena", "Moundou", "Kélo", "Doba"],
  "Chile": ["Santiago", "Valparaíso", "Concepción", "Antofagasta"],
  "China": ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
  "Colombia": ["Bogotá", "Medellín", "Cali", "Barranquilla"],
  "Comoros": ["Moroni", "Fomboni", "Mitsamiouli", "Domoni"],
  "Congo, Democratic Republic of the": ["Kinshasa", "Lubumbashi", "Goma", "Bukavu"],
  "Congo, Republic of the": ["Brazzaville", "Pointe-Noire", "Dolisie", "Owando"],
  "Costa Rica": ["San José", "Alajuela", "Cartago", "Liberia"],
  "Croatia": ["Zagreb", "Split", "Rijeka", "Osijek"],
  "Cuba": ["Havana", "Santiago de Cuba", "Guantánamo", "Camagüey"],
  "Cyprus": ["Nicosia", "Limassol", "Famagusta", "Larnaca"],
  "Czech Republic": ["Prague", "Brno", "Ostrava", "Plzeň"],
  "Denmark": ["Copenhagen", "Aarhus", "Aalborg", "Odense"],
  "Djibouti": ["Djibouti", "Ali Sabieh", "Dikhil", "Tadjoura"],
  "Dominica": ["Roseau", "Portsmouth", "Vieille Case", "Marigot"],
  "Dominican Republic": ["Santo Domingo", "Santiago de los Caballeros", "San Pedro de Macorís", "La Romana"],
  "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Loja"],
  "Egypt": ["Cairo", "Alexandria", "Giza", "Luxor"],
  "El Salvador": ["San Salvador", "Santa Ana", "San Miguel", "Soyapango"],
  "Equatorial Guinea": ["Malabo", "Bata", "Ebebiyín", "Aconibe"],
  "Eritrea": ["Asmara", "Massawa", "Keren", "Mendefera"],
  "Estonia": ["Tallinn", "Tartu", "Narva", "Pärnu"],
  "Eswatini": ["Mbabane", "Manzini", "Lobamba", "Nhlangano"],
  "Ethiopia": ["Addis Ababa", "Dire Dawa", "Bahir Dar", "Nazret"],
  "Fiji": ["Suva", "Lautoka", "Nadi", "Labasa"],
  "Finland": ["Helsinki", "Espoo", "Tampere", "Oulu"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse"],
  "Gabon": ["Libreville", "Port-Gentil", "Oyem", "Franceville"],
  "Gambia": ["Banjul", "Serrekunda", "Brikama", "Serekunda"],
  "Georgia": ["Tbilisi", "Batumi", "Kutaisi", "Zugdidi"],
  "Germany": ["Berlin", "Munich", "Frankfurt", "Hamburg"],
  "Ghana": ["Accra", "Kumasi", "Sekondi-Takoradi", "Tamale"],
  "Greece": ["Athens", "Thessaloniki", "Patras", "Heraklion"],
  "Grenada": ["Saint George's", "Grenville", "Sauteurs", "Victoria"],
  "Guatemala": ["Guatemala City", "Antigua Guatemala", "Mixco", "Villa Nueva"],
  "Guinea": ["Conakry", "Kindia", "Nzérékoré", "Kankan"],
  "Guinea-Bissau": ["Bissau", "Bafatá", "Gabu", "Quebo"],
  "Guyana": ["Georgetown", "New Amsterdam", "Linden", "Bartica"],
  "Haiti": ["Port-au-Prince", "Cap-Haïtien", "Jacmel", "Les Cayes"],
  "Honduras": ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba"],
  "Hungary": ["Budapest", "Debrecen", "Miskolc", "Szeged"],
  "Iceland": ["Reykjavik", "Kopavogur", "Hafnarfjordur", "Akureyri"],
  "India": ["New Delhi", "Mumbai", "Bangalore", "Hyderabad"],
  "Indonesia": ["Jakarta", "Surabaya", "Bandung", "Medan"],
  "Iran": ["Tehran", "Mashhad", "Isfahan", "Shiraz"],
  "Iraq": ["Baghdad", "Basra", "Mosul", "Erbil"],
  "Ireland": ["Dublin", "Cork", "Limerick", "Galway"],
  "Israel": ["Jerusalem", "Tel Aviv-Yafo", "Haifa", "Be'er Sheva"],
  "Italy": ["Rome", "Milan", "Naples", "Turin"],
  "Jamaica": ["Kingston", "Montego Bay", "Portmore", "Spanish Town"],
  "Japan": ["Tokyo", "Osaka", "Yokohama", "Nagoya"],
  "Jordan": ["Amman", "Irbid", "Zarqa", "Aqaba"],
  "Kazakhstan": ["Nur-Sultan", "Almaty", "Shymkent", "Aktobe"],
  "Kenya": ["Nairobi", "Mombasa", "Nakuru", "Eldoret"],
  "Kiribati": ["Tarawa", "Bairiki", "Bikenibeu", "Taburao"],
  "Kosovo": ["Pristina", "Mitrovica", "Gjakova", "Ferizaj"],
  "Kuwait": ["Kuwait City", "Hawally", "Al Jahra", "Mubarak Al Kabeer"],
  "Kyrgyzstan": ["Bishkek", "Osh", "Jalal-Abad", "Karabalta"],
  "Laos": ["Vientiane", "Luang Prabang", "Savannakhet", "Pakse"],
  "Latvia": ["Riga", "Daugavpils", "Jelgava", "Jurmala"],
  "Lebanon": ["Beirut", "Tripoli", "Sidon", "Tyre"],
  "Lesotho": ["Maseru", "Mafeteng", "Quthing", "Mokhotlong"],
  "Liberia": ["Monrovia", "Kakata", "Harper", "Gbarnga"],
  "Libya": ["Tripoli", "Benghazi", "Misrata", "Sebha"],
  "Liechtenstein": ["Vaduz", "Schaan", "Balzers", "Triesen"],
  "Lithuania": ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai"],
  "Luxembourg": ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Ettelbruck"],
  "Madagascar": ["Antananarivo", "Toamasina", "Fianarantsoa", "Mahajanga"],
  "Malawi": ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"],
  "Malaysia": ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh"],
  "Maldives": ["Malé", "Addu City", "Fuvahmulah", "Kulhudhuffushi"],
  "Mali": ["Bamako", "Sikasso", "Segou", "Mopti"],
  "Malta": ["Valletta", "Birkirkara", "Sliema", "Mosta"],
  "Marshall Islands": ["Majuro", "Ebeye", "Laura", "Kwajalein"],
  "Mauritania": ["Nouakchott", "Nouadhibou", "Zouerate", "Atar"],
  "Mauritius": ["Port Louis", "Beau Bassin-Rose Hill", "Curepipe", "Triolet"],
  "Mexico": ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
  "Micronesia, Federated States of": ["Palikir", "Weno", "Kolonia", "Nukuro"],
  "Moldova": ["Chisinau", "Tiraspol", "Bălți", "Rîbnița"],
  "Monaco": ["Monaco"],
  "Mongolia": ["Ulaanbaatar", "Erdenet", "Darkhan", "Mandal"],
  "Montenegro": ["Podgorica", "Nikšić", "Pljevlja", "Herceg Novi"],
  "Morocco": ["Rabat", "Casablanca", "Fes", "Marrakech"],
  "Mozambique": ["Maputo", "Beira", "Nampula", "Pemba"],
  "Myanmar": ["Naypyidaw", "Yangon", "Mandalay", "Mawlamyine"],
  "Namibia": ["Windhoek", "Swakopmund", "Walvis Bay", "Oshakati"],
  "Nauru": ["Yaren"],
  "Nepal": ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
  "Netherlands": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
  "New Zealand": ["Wellington", "Auckland", "Christchurch", "Hamilton"],
  "Nicaragua": ["Managua", "León", "Masaya", "Bluefields"],
  "Niger": ["Niamey", "Zinder", "Maradi", "Agadez"],
  "Nigeria": ["Abuja", "Lagos", "Kano", "Ibadan"],
  "North Korea": ["Pyongyang", "Nampo", "Sinuiju", "Kaesong"],
  "North Macedonia": ["Skopje", "Bitola", "Kumanovo", "Prilep"],
  "Norway": ["Oslo", "Bergen", "Stavanger", "Trondheim"],
  "Oman": ["Muscat", "Sohar", "Salalah", "Nizwa"],
  "Pakistan": ["Islamabad", "Karachi", "Lahore", "Faisalabad"],
  "Palau": ["Ngerulmud", "Koror", "Aimeliik", "Ngaraard"],
  "Panama": ["Panama City", "San Miguelito", "David", "Colón"],
  "Papua New Guinea": ["Port Moresby", "Lae", "Mount Hagen", "Madang"],
  "Paraguay": ["Asunción", "Ciudad del Este", "Encarnación", "Luque"],
  "Peru": ["Lima", "Arequipa", "Cusco", "Trujillo"],
  "Philippines": ["Manila", "Quezon City", "Davao City", "Cebu City"],
  "Poland": ["Warsaw", "Kraków", "Wrocław", "Łódź"],
  "Portugal": ["Lisbon", "Porto", "Amadora", "Braga"],
  "Qatar": ["Doha", "Al Wakrah", "Al Rayyan", "Umm Salal"],
  "Romania": ["Bucharest", "Cluj-Napoca", "Iași", "Timisoara"],
  "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
  "Rwanda": ["Kigali", "Butare", "Gitarama", "Byumba"],
  "Saint Kitts and Nevis": ["Basseterre", "Old Road", "Dieppe Bay Town", "Cayon"],
  "Saint Lucia": ["Castries", "Vieux Fort", "Soufrière", "Gros Islet"],
  "Saint Vincent and the Grenadines": ["Kingstown", "Bequia", "Union Island", "Murray"],
  "Samoa": ["Apia", "Salelologa", "Vaitele", "Faleolo"],
  "San Marino": ["San Marino"],
  "Sao Tome and Principe": ["São Tomé", "Neves", "Pagué", "Trindade"],
  "Saudi Arabia": ["Riyadh", "Jeddah", "Dammam", "Mecca"],
  "Senegal": ["Dakar", "Saint-Louis", "Thiès", "Ziguinchor"],
  "Serbia": ["Belgrade", "Novi Sad", "Niš", "Subotica"],
  "Seychelles": ["Victoria", "Anse Royale", "Baie Lazare", "Port Glaud"],
  "Sierra Leone": ["Freetown", "Bo", "Kenema", "Koidu Town"],
  "Singapore": ["Singapore"],
  "Slovakia": ["Bratislava", "Košice", "Nitra", "Prešov"],
  "Slovenia": ["Ljubljana", "Maribor", "Celje", "Kranj"],
  "Solomon Islands": ["Honiara", "Gizo", "Auki", "Taro"],
  "Somalia": ["Mogadishu", "Hargeysa", "Burao", "Berbera"],
  "South Africa": ["Pretoria", "Johannesburg", "Cape Town", "Durban"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu"],
  "South Sudan": ["Juba", "Malakal", "Wau", "Yei"],
  "Spain": ["Madrid", "Barcelona", "Valencia", "Seville"],
  "Sri Lanka": ["Colombo", "Kandy", "Galle", "Jaffna"],
  "Sudan": ["Khartoum", "Port Sudan", "Nyala", "Kassala"],
  "Suriname": ["Paramaribo", "Lelydorp", "Nickerie", "Albina"],
  "Sweden": ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
  "Switzerland": ["Bern", "Zurich", "Geneva", "Basel"],
  "Syria": ["Damascus", "Aleppo", "Homs", "Latakia"],
  "Tajikistan": ["Dushanbe", "Khujand", "Kurgan-Tyube", "Kulob"],
  "Tanzania": ["Dodoma", "Dar es Salaam", "Mwanza", "Zanzibar"],
  "Thailand": ["Bangkok", "Chiang Mai", "Pattaya", "Phuket"],
  "Timor-Leste": ["Dili", "Baucau", "Oecusse", "Vera Cruz"],
  "Togo": ["Lomé", "Kara", "Atakpamé", "Sokodé"],
  "Tonga": ["Nukuʻalofa", "Vavāʻu", "Haʻapai", "ʻEua"],
  "Trinidad and Tobago": ["Port of Spain", "Chaguanas", "San Fernando", "Arima"],
  "Tunisia": ["Tunis", "Sfax", "Sousse", "Kairouan"],
  "Turkey": ["Ankara", "Istanbul", "Izmir", "Bursa"],
  "Turkmenistan": ["Ashgabat", "Dashoguz", "Turkmenabat", "Mary"],
  "Tuvalu": ["Funafuti"],
  "Uganda": ["Kampala", "Gulu", "Jinja", "Mbale","Mbarara"],
  "Ukraine": ["Kyiv", "Kharkiv", "Odessa", "Lviv"],
  "United Arab Emirates": ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"],
  "United Kingdom": ["London", "Birmingham", "Manchester", "Glasgow"],
  "United States": ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
  "Uruguay": ["Montevideo", "Salto", "Paysandú", "Maldonado"],
  "Uzbekistan": ["Tashkent", "Namangan", "Andijan", "Samarkand"],
  "Vanuatu": ["Port Vila", "Luganville", "Isangel", "Saratamata"],
  "Vatican City": ["Vatican City"],
  "Venezuela": ["Caracas", "Maracaibo", "Valencia", "Maracay"],
  "Vietnam": ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hải Phòng"],
  "Yemen": ["Sana'a", "Aden", "Taiz", "Mukalla"],
  "Zambia": ["Lusaka", "Kitwe", "Ndola", "Livingstone"],
  "Zimbabwe": ["Harare", "Bulawayo", "Chitungwiza", "Mutare"]
};

const navigate = useNavigate();
const [selectedCountry, setSelectedCountry] = useState("");
const [selectedCity, setSelectedCity] = useState("");
const [loading, setLoading] = useState(false);
const [selectedFeatures, setSelectedFeatures] = useState([]);
const [step, setStep] = useState(1);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const [formData, setFormData] = useState({
  model: '',
  year: '',
  type: '',
  color: '#000000',
  licensePlate: '',
  country: '',
  city: '',
  availabilityDays: '',
  availabilityHours: '',
  seats: '',
  fuelType: '',
  transmission: '',
  features: [],
  dailyRate: '',
  weeklyRate: '',
  monthlyRate: '',
  securityDeposit: '',
  extraMileageFee: '',
  lateReturnFee: '',
  cleaningFee: '',
  carPhotos: {
    frontView: null,
    rearView: null,
    leftSideView: null,
    rightSideView: null,
    frontInterior: null,
    backInterior: null,
  },
  carDescription: '',
  renterConditions: '',
  goals: '',
  additionalInfo: '',
});

const handleCountryChange = (e) => {
  const selectedValue = e.target.value;
  setSelectedCountry(selectedValue);
  setSelectedCity(""); 

  setFormData((prevState) => ({
    ...prevState,
    country: selectedValue,
    city: "",
  }));
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};


const handleFileChange = (e, field) => {
  const file = e.target.files[0];
  setFormData((prevState) => ({
    ...prevState,
    carPhotos: {
      ...prevState.carPhotos,
      [field]: file,
    },
  }));
};

const handleSelectChange = (selectedOptions) => {
  setSelectedFeatures(selectedOptions || []);
  setFormData((prevState) => ({
    ...prevState,
    features: selectedOptions ? selectedOptions.map((option) => option.value) : [],
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  if (step < 4) {
    setStep(step + 1);
    setLoading(false);
  } else {
    try {

      const formDataToStore = {
        ...formData,
        country: selectedCountry || formData.country,
        city: selectedCity || formData.city,
        features: selectedFeatures.map((feature) => feature.value),
      };

      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('model', formDataToStore.model);
      formDataToSend.append('year', formDataToStore.year);
      formDataToSend.append('type', formDataToStore.type);
      formDataToSend.append('color', formDataToStore.color);
      formDataToSend.append('licensePlate', formDataToStore.licensePlate);
      formDataToSend.append('country', formDataToStore.country);
      formDataToSend.append('city', formDataToStore.city);
      formDataToSend.append('availabilityDays', formDataToStore.availabilityDays);
      formDataToSend.append('availabilityHours', formDataToStore.availabilityHours);
      formDataToSend.append('seats', formDataToStore.seats);
      formDataToSend.append('fuelType', formDataToStore.fuelType);
      formDataToSend.append('transmission', formDataToStore.transmission);
      formDataToSend.append('features', formDataToStore.features.join(','));
      formDataToSend.append('dailyRate', formDataToStore.dailyRate);
      formDataToSend.append('weeklyRate', formDataToStore.weeklyRate);
      formDataToSend.append('monthlyRate', formDataToStore.monthlyRate);
      formDataToSend.append('securityDeposit', formDataToStore.securityDeposit);
      formDataToSend.append('extraMileageFee', formDataToStore.extraMileageFee);
      formDataToSend.append('lateReturnFee', formDataToStore.lateReturnFee);
      formDataToSend.append('cleaningFee', formDataToStore.cleaningFee);
      formDataToSend.append('carDescription', formDataToStore.carDescription);
      formDataToSend.append('renterConditions', formDataToStore.renterConditions);
      formDataToSend.append('goals', formDataToStore.goals);
      formDataToSend.append('additionalInfo', formDataToStore.additionalInfo);

      // Append car photos to FormData
      for (const key in formDataToStore.carPhotos) {
        if (formDataToStore.carPhotos[key]) {
          formDataToSend.append(key, formDataToStore.carPhotos[key]);
        }
      }

      // Send form data to MongoDB API
      const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/add-car`, {
        method: 'POST',
        body: formDataToSend,
      });
console.log("resp",response)
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      const result = await response.json();
      console.log('Car added successfully:', result.car);

      alert('Car has been added successfully!');
      setTimeout(() => {
        navigate('/');
      }, 200);
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  }
};


const handleBack = () => {
  setStep(step - 1);
};
const renderCarInfo = () => (
  <>
    <h2 className="sub-title">Car Information</h2>
    <p className="description">Provide information about your car to help us match it with renters</p>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="model">Model</label>
        <select id="model" name="model" className="select-inputs" value={formData.model} onChange={handleInputChange} required>
          <option value="" disabled>Select Model</option> 
          {carmodel.map((item, index) => (
            <option key={index} value={item.model}>
              {item.model}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="year">Year</label>
        <select id="year" name="year" className="select-inputs" value={formData.year} onChange={handleInputChange} required>
          <option value="" disabled>Select Year</option> {/* Placeholder */}
          {caryear.map((item, index) => (
            <option key={index} value={item.year}>
              {item.year}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="type">Type</label>
        <select 
          id="type" 
          name="type" 
          className="select-inputs" 
          value={formData.type} 
          onChange={handleInputChange} 
          required>
          <option value="" disabled>Select Type</option> {/* Placeholder */}
          {cartype.map((item, index) => (
            <option key={index} value={item.type}>
              {item.type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input type="color" id="color" name="color" value={formData.color} onChange={handleInputChange} required />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="licensePlate">License Plate Number</label>
        <input
          type="text"
          id="licensePlate"
          name="licensePlate"
          className="plate-input"
          value={formData.licensePlate}
          onChange={handleInputChange}
          required
        />
      </div>
    
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select 
          id="country" 
          name="Country"
          className="select-inputs"
          onChange={(e) => {
            setSelectedCountry(e.target.value); 
            handleCountryChange(e);     
          }}
          required
          value={formData.country}
        >
          <option value="" disabled>Select Country</option> {/* Placeholder */}
          {country.map((items, index) => (
            <option key={index} value={items.name}>
              {items.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <select 
          id="city" 
          name="city"
          className="select-inputs"
          required
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setFormData((prevState) => ({
              ...prevState,
              city: e.target.value, // Update formData with selected city
            }));
          }}
          disabled={!selectedCountry}
        >
          <option value="" disabled>Select City</option> {/* Placeholder */}
          {selectedCountry && citiesByCountry[selectedCountry].map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="availabilityDays">Days</label>
        <select
          id="availabilityDays"
          name="availabilityDays"
          className="select-inputs"
          value={formData.availabilityDays}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Days</option> {/* Placeholder */}
          {availDays.map((item, index) => (
            <option key={index} value={item.day}>
              {item.day}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="availabilityHours">Hours</label>
        <select
          id="availabilityHours"
          name="availabilityHours"
          className="select-inputs"
          value={formData.availabilityHours}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Hours</option> {/* Placeholder */}
          {availHours.map((item, index) => (
            <option key={index} value={item.hour}>
              {item.hour}
            </option>
          ))}
        </select>
      </div>
    </div>

    <h3 className="features-heading">Additional Details</h3>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="seats">Seats</label>
        <select id="seats" name="seats" className="select-inputs" value={formData.seats} onChange={handleInputChange} required>
          <option value="" disabled>Select Seats</option> {/* Placeholder */}
          {carSeats.map((item, index) => (
            <option key={index} value={item.seats}>
              {item.seats}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="fuelType">Fuel Type</label>
        <select
          id="fuelType"
          name="fuelType"
          className="select-inputs"
          value={formData.fuelType}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Fuel Type</option> {/* Placeholder */}
          {fuelType.map((item, index) => (
            <option key={index} value={item.type}>
              {item.type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="transmission">Transmission</label>
        <select
          id="transmission"
          name="transmission"
          className="select-inputs"
          value={formData.transmission}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Transmission</option> {/* Placeholder */}
          {transmissionType.map((item, index) => (
            <option key={index} value={item.type}>
              {item.type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="features">More Features</label>
        <Select
          className="select-inputs"
          id="moreFeatures"
          options={moreFeatures}
          isMulti
          value={selectedFeatures}
          onChange={handleSelectChange}
          closeMenuOnSelect={false}
          placeholder="Select Features"
        />
      </div>
    </div>
  </>
);

const renderPricingInfo = () => (
  <>
    <h2 className="sub-title">Pricing Information</h2>
    <p className="description">Set your car’s rental price and additional charges.</p>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="dailyRate">Daily Rate ($)</label>
        <input
          type="number"
          id="dailyRate"
          name="dailyRate"
          className="plate-input"
          value={formData.dailyRate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="weeklyRate">Weekly Rate ($)</label>
        <input
          type="number"
          id="weeklyRate"
          name="weeklyRate"
          className="plate-input"
          value={formData.weeklyRate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthlyRate">Monthly Rate ($)</label>
        <input
          type="number"
          id="monthlyRate"
          name="monthlyRate"
          className="plate-input"
          value={formData.monthlyRate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="securityDeposit">Security Deposit ($)</label>
        <input
          type="number"
          id="securityDeposit"
          name="securityDeposit"
          className="plate-input"
          value={formData.securityDeposit}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="extraMileageFee">Extra Mileage Fee ($/mile)</label>
        <input
          type="number"
          id="extraMileageFee"
          name="extraMileageFee"
          className="plate-input"
          value={formData.extraMileageFee}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lateReturnFee">Late Return Fee ($/hour)</label>
        <input
          type="number"
          id="lateReturnFee"
          name="lateReturnFee"
          className="plate-input"
          value={formData.lateReturnFee}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cleaningFee">Cleaning Fee ($)</label>
        <input
          type="number"
          id="cleaningFee"
          name="cleaningFee"
          className="plate-input"
          value={formData.cleaningFee}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  </>
);

  const renderCarPhotos = () => (
    <>
      <h2 className="sub-title">Upload Car Photos</h2>
      <div className="photo-buttons">
        {['Front View', 'Rear View', 'Left Side View', 'Right Side View', 'Front Interior', 'Back Interior'].map((view) => (
          <button
            key={view}
            type="button"
            className="photo-upload-btn"
            onClick={() => document.getElementById(view.replace(/\s+/g, '')).click()}
          >
            {view}
            <input
              type="file"
              id={view.replace(/\s+/g, '')}
              accept="image/*"
              onChange={(e) => handleFileChange(e, view.replace(/\s+/g, '').charAt(0).toLowerCase() + view.replace(/\s+/g, '').slice(1))}
              style={{ display: 'none' }}
            />
          </button>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="carDescription">Car Description</label>
        <textarea
          id="carDescription"
          name="carDescription"
          value={formData.carDescription}
          onChange={handleInputChange}
          rows={4}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="renterConditions">Renter Conditions</label>
        <textarea
          id="renterConditions"
          name="renterConditions"
          value={formData.renterConditions}
          onChange={handleInputChange}
          rows={4}
          required
        />
      </div>
    </>
  );

  const renderGoals = () => (
    <>
      <h2 className="sub-title">Your Goals</h2>
      <p className="description">Share your motivations for joining FLiiTS</p>

      <div className="form-group">
        <label htmlFor="goals">What are your Long/Short term goals?</label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleInputChange}
          rows={4}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="additionalInfo">Additional information?</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          rows={4}
        />
      </div>
    </>
  );

  return (
    <div className="carForm">
      <BookingHeader />
      <br />
      <div className="list-your-car-container">
        <h1 className="main-title">
          List Your Car On FL<span className="highlight">ii</span>Ts
        </h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
          {step === 1 && renderCarInfo()}
          {step === 2 && renderPricingInfo()}
          {step === 3 && renderCarPhotos()}
          {step === 4 && renderGoals()}

          <div className="form-buttons">
            {step > 1 && (
              <button type="button" className="back-btn" onClick={handleBack}>
                Back
              </button>
            )}
            <button type="submit" className="next-btn" disabled={loading}>
              {loading ? 'Submitting...' : step === 4 ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CarListingForm;
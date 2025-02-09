import AOS from "aos";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapPin, Navigation, Clock } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const Map = () => {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      warehouseTitle: "Visit Us At",
      warehouseName: "Innovix IT Solutions",
      location: "Dubai",
      country: "United Arab Emirates",
      googleMapsLink: "View on Google Maps",
      addressDetails: "Dubai, United Arab Emirates",
      coordinates: "Coordinates: 28°48'53.2\"N 79°01'39.3\"E",
      openingHours: "Opening Hours: Mon-Sat 9AM-6PM",
      getDirections: "Get Directions",
      visitUs: "Plan Your Visit",
    },
    Arabic: {
      warehouseTitle: "مستودعنا",
      warehouseName: "إنوفيكس لحلول تكنولوجيا المعلومات",
      location: "دبي",
      country: "الإمارات العربية المتحدة",
      googleMapsLink: "عرض على خرائط جوجل",
      addressDetails: "دبي، الإمارات العربية المتحدة",
      coordinates: "الإحداثيات: 28°48'53.2\" شمالاً 79°01'39.3\" شرقاً",
      openingHours: "ساعات العمل: من الاثنين إلى السبت 9 صباحاً - 6 مساءً",
      getDirections: "احصل على الاتجاهات",
      visitUs: "خطط زيارتك",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const t = translations[selectedLanguage];
  const position = [25.1185903, 55.3751669];

  return (
    <div className="w-full py-8 px-6 bg-gradient-to-b from-[#2EC4D2] via-blue-500 to-transparent">
      <div className="mx-auto max-w-7xl ">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-white/20 text-white mb-4 hover:bg-white/30 transition-colors duration-300">
            {t.visitUs}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.warehouseTitle}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {selectedLanguage === "English"
              ? "Experience our art collection in person at our office and showroom"
              : "تجربة مجموعتنا الفنية شخصياً في مكتبنا ومعرضنا"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-2 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-[500px] rounded-xl overflow-hidden hover:opacity-95 transition-opacity duration-300">
                <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={false}
                  className="w-full h-full"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup className="text-black">
                      <div className="text-center p-2">
                        <h3 className="font-semibold text-lg">
                          {t.warehouseName}
                        </h3>
                        <p className="text-sm">{t.location}</p>
                        <p className="text-sm">{t.country}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-full bg-[#2EC4D2]/20 flex items-center justify-center text-[#2EC4D2] group-hover:bg-[#2EC4D2]/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[#2EC4D2] transition-colors duration-300">
                    {t.addressDetails}
                  </h3>
                  <p className="text-white/80 text-sm">{t.coordinates}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-full bg-[#2EC4D2]/20 flex items-center justify-center text-[#2EC4D2] group-hover:bg-[#2EC4D2]/30 transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-[#2EC4D2] transition-colors duration-300">
                    {t.openingHours}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedLanguage === "English"
                      ? "Available all working days"
                      : "متاح في جميع أيام العمل"}
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/U3qGCmLxsnWELpBD7"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full bg-gradient-to-r from-[#2EC4D2] to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                  <Navigation className="w-4 h-4" />
                  {t.getDirections}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

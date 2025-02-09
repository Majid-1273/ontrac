import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowUpRight, Share2 } from 'lucide-react';

const SocialConnect = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@innovix99",
      followers: "50K+",
      description: "Explore cutting-edge design projects & creative innovations",
      icon: Instagram, // Ensure Instagram icon is imported
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
    },
    {
      platform: "Facebook",
      handle: "Innovix Official",
      followers: "35K+",
      description: "Stay updated on our latest projects & company news",
      icon: Facebook, // Ensure Facebook icon is imported
      color: "hover:bg-blue-600"
    },
    {
      platform: "Twitter",
      handle: "@innovix99",
      followers: "25K+",
      description: "Join the conversation on design trends & tech insights",
      icon: Twitter, // Ensure Twitter icon is imported
      color: "hover:bg-sky-500"
    },
    {
      platform: "YouTube",
      handle: "Innovix Art",
      followers: "20K+",
      description: "Watch tutorials, product showcases & design inspiration",
      icon: Youtube, // Ensure Youtube icon is imported
      color: "hover:bg-red-600"
    }
  ];
  

  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-orange-500 mb-4">
            Connect With Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest art trends, exclusive content, and community events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-8 transition-all duration-300 ${social.color}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#141414] flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{social.platform}</h3>
                        <p className="text-white/60">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-white">{social.followers}</span>
                      <span className="text-white/60">Followers</span>
                    </div>
                    <p className="text-white/80">{social.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1a1a1a] text-white/80 hover:text-white transition-colors">
            <span className="text-sm">Want to collaborate?</span>
            <span className="h-4 w-[1px] bg-white/20"></span>
            <span className="text-sm font-medium text-orange-500">Contact our social team</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;
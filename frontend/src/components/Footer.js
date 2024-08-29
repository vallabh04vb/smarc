import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1d3459] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-lg font-bold mb-4">About KIMS</h2>
          <p className="mb-4">
            <a href="https://kims.in" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">kims.in</a>
          </p>
          <iframe
            src="https://maps.app.goo.gl/xKBdtMABEnMCk74a7"
            width="100%"
            height="200"
            className="rounded"
            title="Event Location"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-4">Legal Info</h2>
          <ul className="list-none space-y-2">
            <li><a href="/terms" className="text-white hover:underline">Terms and Conditions</a></li>
            <li><a href="/privacypolicy" className="text-white hover:underline">Privacy Policy</a></li>
            <li><a href="/cancellations" className="text-white hover:underline">Cancellation Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Feel free to get in touch in case of any help or query:</p>
          <p className="mb-4">Email: <a href="mailto:zavians.smarc2024@gmail.com" className="text-white hover:underline">zavians.smarc2024@gmail.com</a></p>
          <ul className="list-none space-y-2">
            <li>K Dheeresh: 9490707111</li>
            <li>M Sri Nidhi: 7416960665</li>
            <li>M Sai Sreya: 8803458888</li>
            <li>K Chandan: 7995529942</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <ul className="list-none space-y-2">
            <li>
              <a href="https://www.instagram.com/smarc_2k24/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@ZAVIANS_2k21" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                YouTube
              </a>
            </li>
          </ul>
          <p className="mt-4">Website: <a href="https://smarc2k24.online" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">smarc2k24.online</a></p>
        </div>
        
      </div>

      <div className="mt-10 text-center">
        Designed by Campus Jam &copy; All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

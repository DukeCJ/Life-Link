// src/components/WhyChooseUs.js
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <img src="/icon1.png" alt="Fast Response" className="mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">Fast Response</h3>
          </div>
          <div>
            <img src="/icon2.png" alt="24/7 Support" className="mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">24/7 Support</h3>
          </div>
          <div>
            <img src="/icon3.png" alt="Qualified Professionals" className="mx-auto" />
            <h3 className="mt-4 text-lg font-semibold">Qualified Professionals</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

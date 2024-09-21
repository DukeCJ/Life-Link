import React from 'react';

const MedicalServices = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Our Other Medical Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Repeat for each service */}
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold text-lg">Consultation</h3>
            <p>24/7 doctor consultations and remote assistance</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold text-lg">Telemedicine</h3>
            <p>Instant medical advice through virtual consultations</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold text-lg">Pharmacy Delivery</h3>
            <p>Fast, reliable delivery of medication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;

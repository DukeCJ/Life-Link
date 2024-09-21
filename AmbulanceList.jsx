
import AmbulanceCard from "../AmbulanceCard/AmbulanceCard";

const AmbulanceList = ({ ambulances }) => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Ambulances</h2>
      <hr className="h-1 my-3 bg-red-400"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ambulances.map((ambulance) => (
          <AmbulanceCard key={ambulance.id} ambulance={ambulance} />
        ))}
      </div>
      <hr className="h-1 my-3 bg-red-400"/>
    </section>
  );
};

export default AmbulanceList;

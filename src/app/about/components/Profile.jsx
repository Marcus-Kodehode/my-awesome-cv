// src/app/about/components/Profile.jsx
export default function Profile() {
  return (
    <div className="w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg lg:w-64 lg:h-64">
      <img
        src="/me.jpg"         // bytt ut med ditt bilde i /public
        alt="Portrett av Marcus"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
